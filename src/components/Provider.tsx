import React, { createContext, ReactNode, useState, Dispatch, SetStateAction, useEffect } from "react";
import { functions } from "../types";

interface ProviderPassValue {
  language: string;
  setGeo: () => void
  setEng: () => void
  setRus: () => void
}


interface ProviderContextProps {
  children: ReactNode;
}

export const ProviderPass = createContext<ProviderPassValue | undefined>(undefined);

export const ProviderContext: React.FC<ProviderContextProps> = ({ children }) => {

  const [language, setLanguage] = useState<string>(JSON.stringify(localStorage.getItem('lang')) || 'geo')

//make language geo
const setGeo: functions = () => {
    setLanguage('geo')
    localStorage.setItem('lang', 'geo')
    
}

//make language eng
const setEng: functions = () => {
    setLanguage('eng')
    localStorage.setItem('lang', 'eng')
}

//make language rus
const setRus: functions = () => {
    setLanguage('rus')
    localStorage.setItem('lang', 'rus')
}


useEffect(()=>{
  if(localStorage.getItem('lang') === 'geo'){
    console.log('geo');
    setLanguage('geo')
  }else if(localStorage.getItem('lang') === 'eng'){
    setLanguage('eng')
    console.log('eng');
  }else if(localStorage.getItem('lang') === 'rus'){
    console.log('rus');
    setLanguage('rus')
  }
},[])

  return (
    <ProviderPass.Provider
      value={{
        language,
        setGeo,
        setEng,
        setRus
      }}
    >
      {children}
    </ProviderPass.Provider>
  );
};
