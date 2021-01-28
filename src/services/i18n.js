import i18next from 'i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import format from "./i18n-format";

i18next
  .use(initReactI18next)
  .use(HttpApi)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    debug: false,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
      format,
    }
  });

export default i18next;

export function languageCodeOnly(fullyQualifiedCode) {
  return fullyQualifiedCode.split("-")[0];
}