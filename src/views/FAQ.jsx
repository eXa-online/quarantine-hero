import React from 'react';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';

const QA = (props) => (
  <>
    <h2 className="text-xl font-teaser mt-8">{props.question}</h2>
    <p className="font-open-sans">{props.children}</p>
  </>
);

export default function FAQ() {
  const { t } = useTranslation();

  const faqTranslationPartOne = [
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13'
  ];

  const buildFAQs = (arrayOfKeys) => arrayOfKeys.map((translationString) => (
    <QA key={translationString} question={t(`views.faq.questions.${translationString}`)}>
      {t(`views.faq.answers.${translationString}`)}
    </QA>
  ));

  return (
    <div className="mb-10 p-4">
      <h1 className="text-2xl font-main mt-8">{t('views.faq.title')}</h1>

      {buildFAQs(faqTranslationPartOne)}
      {/* This FAQ needs special treatment because of the link in it. */}
      <QA question={t('views.faq.3.question')}>
        {t('views.faq.3.answer.preLink')}
        <a href={"mailto:" + t('views.faq.3.answer.link')} className="text-primary hover:opacity-50">
          {' '}
          {t('views.faq.3.answer.link')}
          {' '}
        </a>
        {t('views.faq.3.answer.postLink')}
      </QA>

      <Footer />
    </div>
  );
}
