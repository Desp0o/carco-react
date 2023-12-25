import { useContext, useEffect, useRef } from "react";
import { ProviderPass } from "../Provider";
import * as navbarStyles from "./navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../../utils/images/logo.png";
import engLang from "../../utils/images/united-kingdom.png";
import rusLang from "../../utils/images/russia.png";

const navbarTxtArray =
  {
    main:{
      geo: 'მთავარი',
      eng: 'Main',
      rus: 'Основная'
    },
    aboutUs:{
      geo:'ჩვენ შესახებ',
      eng: 'About us',
      rus:'o nas'
    }

  }





export default function Navbar() {

  const navCalcRef = useRef<any>(null);
  const navMainRef = useRef<any>(null)
  const navAboutUsRef = useRef<any>(null)
  const navContainerRef = useRef<any>(null)
  const navContactRef = useRef<any>(null)



  const contextValue = useContext(ProviderPass)
    if(!contextValue){
        return null
    }
    const { setEng, setRus, language} = contextValue

  useEffect(()=>{
    console.log(navbarTxtArray);
    
    if(language === 'geo'){
      navCalcRef.current.innerText = 'კალკულაცია';
      navMainRef.current.innerText = 'მთავარი'
      navAboutUsRef.current.innerText = 'ჩვენ შესახებ'
      navContainerRef.current.innerText = 'კონტეინერის შემოწმება'
      navContactRef.current.innerText = 'კონტაქტი'
    }else if(language === 'eng'){
      navCalcRef.current.innerText = 'Calculation';
      navMainRef.current.innerText = 'Main'
      navAboutUsRef.current.innerText = 'About us'
      navContainerRef.current.innerText = 'Check Container'
      navContactRef.current.innerText = 'Contact'
    }else if(language === 'rus'){
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
            <img className={navbarStyles.languageIcon} src={engLang} alt="eng language" onClick={setEng}/>
            <img className={navbarStyles.languageIcon} src={rusLang} alt="rus language" onClick={setRus}/>
          </div>
        </div>
      </div>
    </div>
  );
}
