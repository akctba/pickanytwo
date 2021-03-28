import i18next from 'i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import format from "./i18n-format";

i18next
.use(HttpApi)
.use(LanguageDetector)
.use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: navigator.language.substr(0, 2),
    
    debug: true,
    load: 'languageOnly',
    detection: { 
      lookupLocalStorage: 'lng',
      order: ['querystring', 'navigator', 'cookie', 'localStorage', 'sessionStorage']},
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
      format,
    }
  });

//*** call without param to use language detector
i18next.changeLanguage();

export default i18next;
