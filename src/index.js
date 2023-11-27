import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';
import translationFR from './locales/fr/translation.json';



i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      es: {
        translation: translationES,
      },
      fr: {
        translation: translationFR,
      },
    },
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

// Function to change the language
const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
};



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
 
  <React.StrictMode>
    <App changeLanguage={changeLanguage}/>
  </React.StrictMode>
);

