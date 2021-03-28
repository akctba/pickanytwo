import i18next from 'i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import format from "./i18n-format";
import en from "./locales/en.json";
import es from "./locales/es.json";
import fr from "./locales/fr.json";
import pt from "./locales/pt.json";

const resources = {
  en: {translation: en}, es: {translation: es}, fr: {translation: fr}, pt: {translation: pt}
};

console.log("resources", resources);

i18next
.use(HttpApi)
.use(LanguageDetector)
.use(initReactI18next)
  .init({
    resources,
    fallbackLng: ['en', 'es', 'fr', 'pt'],
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