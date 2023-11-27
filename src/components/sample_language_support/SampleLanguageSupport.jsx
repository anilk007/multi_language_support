import React from 'react';
import { useTranslation } from 'react-i18next';

function SampleLanguageSupport() {
  const { t } = useTranslation();

  return (
    <div>
      <p>{t('welcomeMessage')}</p>
    </div>
  );
}

export default SampleLanguageSupport;
