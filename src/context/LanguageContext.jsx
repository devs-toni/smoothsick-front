import { useContext, createContext, useState } from "react";
import translations from '../api/translations.json';

const LanguageContext = createContext();
export const useLanguage = () => {
  return useContext(LanguageContext);
}

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('es');
  const [text, setText] = useState(translations["es"]);

  
  const handleLanguage = ({name}) => {

    if (name === "spain") {
      setLang("es")
      setText(translations.es)
    }
    else if (name === "united-kingdom") {
      setLang("en")
      setText(translations.en)
    }
    else if (name === "france") {
      setLang("fr")
      setText(translations.fr)
    }
    else {
      setLang("chn")
      setText(translations.chn)
    }
  }
  

  const data = {
    text,
    lang,
    handleLanguage
  }
  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  )
}