import { Link } from 'react-router-dom';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="flex justify-center text-sm text-gray-700 mb-4 mt-8 w-full">
        <Link to="/faq">{t('components.footer.FAQs')}</Link>
        <div className="mx-1">|</div>
        <a href="https://policies.redbull.com/r/Rasenballsport_Leipzig/imprint/de" rel="noopener noreferrer" target="_blank">{t('components.footer.legal')}</a>
        <div className="mx-1">|</div>
        <a href="https://policies.redbull.com/r/Rasenballsport_Leipzig/privacy/de" rel="noopener noreferrer" target="_blank">{t('components.footer.privacy')}</a>
        <div className="mx-1">|</div>
        <Link to="/disclaimer">{t('components.footer.disclaimer')}</Link>
        <div className="mx-1">|</div>
        <a href="https://github.com/eXa-online/quarantine-hero" rel="noopener noreferrer" target="_blank">{t('components.footer.source')}</a>
      </div>
      <span className="text-gray-500 text-xs block w-full text-center">{t('components.footer.forEveryone')}</span>
    </div>
  );
}
