import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import FilteredList from '../components/FilteredList';
import Footer from '../components/Footer';
import fb from '../firebase';
import ArrowDown from '../components/ArrowDown';

export default function Main() {
  const { t } = useTranslation();

  function scrollTo() {
    const yOffset = -30;
    const el = document.getElementById('hilfe-buttons');
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  const [stats, setStats] = useState({
    regionSubscribed: 0,
    offerHelp: 0,
    askForHelp: 0,
  });

  useEffect(() => {
    const getStats = async () => {
      setStats((await fb.store.collection('stats').doc('external').get()).data());
    };
    getStats();
  }, []);

  return (
    <div className="flex items-center flex-col">
      <div className="phone-width">
        <div className="flex text-center font-teaser justify-center w-full my-8 md:my-10 px-4">
          {t('views.main.weAreHumans')}
          <br />
          <br />
          {t('views.main.inTimesOfNeed')}
          <br />
          <br />
          {t('views.main.bePart')}
          <br />
        </div>
        <div className="w-full flex justify-center  mt-4 md:mt-12">
          <div className="bg-primary -mb-8 rounded-full bg-red-500 w-48 text-center text-xs text-white font-bold py-2 font-open-sans">
            {t('views.main.importantNotes.title')}
          </div>
        </div>
        <div className="m-4 md:m-0 md:mt-4 font-open-sans md:mb-4 pl-0 md:pr-4 flex flex-col justify-center md:flex-row bg-rb-grey py-4 md:pt-10">
          <div className="flex flex-1 px-3 justify-between items-center flex-row md:flex-col mt-4 md:mt-0 md:text-center">
            <img className="pr-5 pl-2 md:pl-0 md:pr-0 md:mb-4 w-16 h-10 md:h-16" src={require('../assets/lokal.svg')} alt="" />
            <div className="flex-grow">
              <div className="font-bold">{t('views.main.importantNotes.local.title')}</div>
              <p>{t('views.main.importantNotes.local.text')}</p>
            </div>
          </div>
          <div className="flex flex-1 px-3 justify-between items-center flex-row md:flex-col mt-4 md:mt-0  md:text-center">
            <img className="pr-5 pl-2 md:pl-0 md:pr-0 md:mb-4 w-16 h-10 md:h-16" src={require('../assets/konsistent.svg')} alt="" />
            <div className="flex-grow">
              <div className="font-bold">{t('views.main.importantNotes.consistent.title')}</div>
              <p>{t('views.main.importantNotes.consistent.text')}</p>
            </div>
          </div>
          <div className="flex flex-1 px-3 justify-between items-center flex-row md:flex-col mt-4 md:mt-0 md:text-center">
            <img className="pr-5 pl-2 md:pl-0 md:pr-0 md:mb-4 w-16 h-10 md:h-16" src={require('../assets/distanziert.svg')} alt="" />
            <div className="flex-grow">
              <div className="font-bold">{t('views.main.importantNotes.distanced.title')}</div>
              <p>
                {t('views.main.importantNotes.distanced.textPreBold')}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 md:ml-0 md:mr-0 ml-4 mr-4 mb-8 md:mb-16 py-4 px-3 flex flex-row md:flex-row justify-start items-center bg-rb-grey">
          <img className="w-16 h-10 md:h-16 md:mr-4" src={require('../assets/aushang.svg')} alt="" />
          <p>
            {t('views.main.noInternet.preOptionalBreak')}
            {' '}
            <br className="sm:hidden" />
            {t('views.main.noInternet.preLink')}
            {' '}
            <a href="/assets/aushang.pdf" className="text-primary hover:opacity-50" download="/assets/aushang.pdf">{t('views.main.noInternet.link')}</a>
            {t('views.main.noInternet.postLink')}
          </p>
        </div>

        <ArrowDown onClick={scrollTo} />

        <div className="flex justify-around my-6 px-2 md:px-0 md:my-10 w-full" id="hilfe-buttons">
          <Link
            to="/overview"
            className="flex justify-center items-center rounded text-white py-3 px-2 btn-main bg-secondary md:flex-1 hover:opacity-50"
            onClick={() => fb.analytics.logEvent('button_want_to_help')}
          >
            {t('views.main.buttons.wantToHelp')}
          </Link>
          <div className="m-1 md:m-4" />
          <Link
            to="/signup"
            className="flex justify-center items-center rounded text-white py-3 px-2 btn-main bg-primary md:flex-1 hover:opacity-50"
            onClick={() => fb.analytics.logEvent('button_need_help')}
          >
            {t('views.main.buttons.needHelp')}
          </Link>
        </div>

        <div className="p-4 font-open-sans flex flex-col md:flex-row space-between md:p-0 mb-4 md:mb-8">
          <p className="mb-4 md:leading-7 md:text-justify flex-1">
            <Trans i18nKey="views.main.explanations.wantToHelp">
              text
              {' '}
              <strong>
                text
              </strong>
              text
            </Trans>
          </p>
          <div className="md:m-4" />
          <p className="md:leading-7 md:text-justify flex-1">
            <Trans i18nKey="views.main.explanations.needHelp">
              text
              <strong>text</strong>
              text
              <strong>text</strong>
              text
              <strong>text</strong>
              text
            </Trans>
          </p>
        </div>
      </div>
      <div className="angle-cut-background pt-8 w-full">
        <div className="p-4">
          <div className="flex justify-center items-center flex-col">
            <div className="font-teaser text-center" id="anfragen">
              {t('views.main.recentRequests.title')}
            </div>
            <div className="flex my-6">
              <div className="mx-4 md:mx-8 w-24 text-center">
                <div className="font-bold text-xs font-open-sans">{t('views.main.recentRequests.requests')}</div>
                <div className="font-open-sans text-3xl font-light">{stats.askForHelp || '0'}</div>
              </div>
              <div className="mx-4 md:mx-8 w-24 text-center">
                <div className="font-bold text-xs font-open-sans">{t('views.main.recentRequests.heros')}</div>
                <div className="font-open-sans text-3xl font-light">{stats.regionSubscribed || '0'}</div>
              </div>
              <div className="mx-4 md:mx-8 w-24 text-center">
                <div className="font-bold text-xs font-open-sans">{t('views.main.recentRequests.messages')}</div>
                <div className="font-open-sans text-3xl font-light">{stats.offerHelp || '0'}</div>
              </div>
            </div>
            <div className="font-open-sans leading-6 text-center mb-8 max-w-360">
              {t('views.main.enterYourPostalCode')}
            </div>
          </div>
          <FilteredList pageSize={20} />
        </div>
        <Footer />
      </div>
    </div>
  );
}
