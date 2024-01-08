import React, { useContext, useEffect, useRef, useState } from "react";
import { ProviderPass } from "../Provider";
import * as navbarStyles from "./navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../../utils/images/logo.png";
import engLang from "../../utils/images/united-kingdom.png";
import rusLang from "../../utils/images/russia.png";
import geoLang from "../../utils/images/georgia.png"


export default function Navbar() {

  const navCalcRef = useRef<any>(null);
  const navMainRef = useRef<any>(null)
  const navAboutUsRef = useRef<any>(null)
  const navContainerRef = useRef<any>(null)
  const navContactRef = useRef<any>(null)

  const showFlag: React.CSSProperties = {
    display: 'unset',
  };

  const hideFlag: React.CSSProperties = {
    display: 'none'
  }

  const [language1Style, setLanguage1Style] = useState(showFlag)
  const [language2Style, setLanguage2Style] = useState(showFlag)
  const [language3Style, setLanguage3Style] = useState(hideFlag)


  const contextValue = useContext(ProviderPass)
    if(!contextValue){
        return null
    }
    const { setEng, setRus, setGeo, language} = contextValue

  useEffect(()=>{
    
    if(language === 'geo'){
      setLanguage1Style(showFlag)
      setLanguage2Style(showFlag)
      setLanguage3Style(hideFlag)
      navCalcRef.current.innerText = 'კალკულაცია';
      navMainRef.current.innerText = 'მთავარი'
      navAboutUsRef.current.innerText = 'ჩვენ შესახებ'
      navContainerRef.current.innerText = 'კონტეინერის შემოწმება'
      navContactRef.current.innerText = 'კონტაქტი'
    }else if(language === 'eng'){
      setLanguage1Style(hideFlag)
      setLanguage2Style(showFlag)
      setLanguage3Style(showFlag)
      navCalcRef.current.innerText = 'Calculation';
      navMainRef.current.innerText = 'Main'
      navAboutUsRef.current.innerText = 'About us'
      navContainerRef.current.innerText = 'Check Container'
      navContactRef.current.innerText = 'Contact'
    }else if(language === 'rus'){
      setLanguage1Style(showFlag)
      setLanguage2Style(hideFlag)
      setLanguage3Style(showFlag)
      navCalcRef.current.innerText = 'Калькуляция';
      navMainRef.current.innerText = 'Основная'
      navAboutUsRef.current.innerText = 'О нас'
      navContainerRef.current.innerText = 'Проверка контейнера '
      navContactRef.current.innerText = 'Контакт'
    }

  },[language])
  
  


  return (
    <div className={navbarStyles.navbar}>
      <div className={navbarStyles.navbar_inner}>
        <Link to="/">
          <img className={navbarStyles.carco_logo} src={logo} alt="carco" />
        </Link>

        <div className={navbarStyles.left_side}>
          <div className={navbarStyles.links_container}>
            <Link to="/" className={navbarStyles.navbar_links} ref={navMainRef}>
            მთავარი
            </Link>
            <Link to="/" className={navbarStyles.navbar_links} ref={navAboutUsRef}>
            ჩვენ შესახებ
            </Link>
            <Link to="/" className={navbarStyles.navbar_links} ref={navCalcRef}>
              კალკულაცია
            </Link>
            <Link to="/" className={navbarStyles.navbar_links} ref={navContainerRef}>
              კონტეინერის შემოწმება
            </Link>
            <Link to="/" className={navbarStyles.navbar_links} ref={navContactRef}>
              კონტაქტი
            </Link>
          </div>

          <div className={navbarStyles.language_container}>
            <img className={navbarStyles.languageIcon} style={language1Style} src={engLang} alt="eng language" onClick={setEng}/>
            <img className={navbarStyles.languageIcon} style={language2Style} src={rusLang} alt="rus language" onClick={setRus}/>
            <img className={navbarStyles.languageIcon} style={language3Style} src={geoLang} alt="rus language" onClick={setGeo}/>
          </div>
        </div>
      </div>
    </div>
  );
}
