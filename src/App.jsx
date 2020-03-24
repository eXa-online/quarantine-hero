import React, { useEffect, useState } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import CookieConsent from 'react-cookie-consent';
import ScrollUpButton from 'react-scroll-up-button';
import MenuIcon from '@material-ui/icons/Menu';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Main from './views/Main';
import OfferHelp from './views/OfferHelp';
import Dashboard from './views/Dashboard';
import FAQ from './views/FAQ';
import Impressum from './views/Impressum';
import Signup from './views/Signup';
import AskForHelp from './views/AskForHelp';
import Overview from './views/Overview';
import Success from './views/Success';
import fb from './firebase';
import SuccessOffer from './views/SuccessOffer';
import DSGVO from './views/DSGVO';
import Sidebar from './components/Sidebar';
import DesktopMenu from './components/DesktopMenu';
import VerifyEmail from './views/VerifyEmail';
import CompleteOfferHelp from './views/CompleteOfferHelp';
import NotifyMe from './views/NotifyMe';
import ScrollToTop from './components/ScrollToTop';
import ShareButtons from './components/ShareButtons';
import createEventListener from './util/createEventListener';

function App(props) {
  const { t } = useTranslation();

  const {
    user,
    signOut,
  } = props;


  const addListener = () => {
    fb.analytics = fb.app.analytics();
    const handleHashChange = () => {
      const hash = document.location.hash;
      fb.analytics.logEvent('page_view', { page_path: hash.substring(1) });
    };
    handleHashChange();

    return createEventListener(window, 'hashchange', handleHashChange);
  };

  useEffect(() => {
    if (document.cookie.indexOf('cookieConsent') > -1) {
      return addListener();
    }
    return undefined;
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex items-center min-h-screen flex-col bg-rb-transition relative">
      <div className="bg-image-net absolute inset-0 bg-fixed">
        <img className="bg-image-net-img fixed opacity-25" src="https://www.dierotenbullen.com/images/0010/1/1800/1200/805/rbl//2017/2/2/ebbb4092aa9694ec9aabe2ee143b4067.png" />
      </div>
      <Router>
        <div className="hidden md:flex justify-end md:mt-12 w-full phone-width items-center relative">
          {!user
          && <Link className="mr-2 text-white font-main opacity-100 hover:opacity-50" to="/signup/dashboard">{t('App.login')}</Link>}
          <ShareButtons />
        </div>
        <div className="phone-width bg-white shadow-xl min-h-screen md:mt-6 relative">
          <ScrollToTop />
          <DesktopMenu isLoggedIn={user} signOut={signOut} />
          <div className="md:px-16 overflow-hidden">
            <div style={{ zIndex: 101 }} className="visible md:invisible h-16 w-full fixed top-0 bg-white flex flex-row justify-between w-full items-center pr-5 border-b-2">
              <a href="https://www.dierotenbullen.com" target="_blank" className="font-main ml-4" style={{ fontWeight: '600' }}>
                <div className="font-ntf text-primary">DIEROTENBULLEN.COM</div>
              </a>
              <div>
                <MenuIcon style={{ fontSize: '40px' }} className="text-gray-600" onClick={() => setMenuOpen(true)} />
              </div>
            </div>
            <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} isLoggedIn={user} signOut={signOut} />
            <div className="mt-20 md:mt-0">
              <Switch>
                <Route path="/offer-help/:id">
                  <OfferHelp />
                </Route>
                <Route path="/signup/:returnUrl">
                  <Signup />
                </Route>
                <Route path="/signup">
                  <Signup />
                </Route>
                <Route path="/verify-email">
                  <VerifyEmail />
                </Route>
                <Route path="/ask-for-help">
                  <AskForHelp />
                </Route>
                <Route path="/dashboard">
                  <Dashboard />
                </Route>
                <Route path="/faq">
                  <FAQ />
                </Route>
                <Route path="/impressum">
                  <Impressum />
                </Route>
                <Route path="/overview">
                  <Overview />
                </Route>
                <Route path="/success">
                  <Success />
                </Route>
                <Route path="/success-offer">
                  <SuccessOffer />
                </Route>
                <Route path="/dsgvo">
                  <DSGVO />
                </Route>
                <Route path="/notify-me">
                  <NotifyMe />
                </Route>
                <Route path="/complete-offer-help">
                  <CompleteOfferHelp />
                </Route>
                <Route path="/">
                  <Main />
                </Route>
              </Switch>
              <ScrollUpButton
                ContainerClassName="scroll-up-btn"
                TransitionClassName="scroll-up-btn-fade"
              >
                <img alt="arrow-down" className="arrow-down" src={require('./assets/arrows_up.svg')} />
              </ScrollUpButton>
            </div>
          </div>
        </div>
      </Router>
      <CookieConsent
        location="bottom"
        buttonText="Okay"
        cookieName="cookieConsent"
        style={{ background: '#2B373B' }}
        buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
        onAccept={addListener}
        expires={365}
      >
        {t('App.usesCookies')}
      </CookieConsent>
    </div>
  );
}

export default withFirebaseAuth({
  providers: [],
  firebaseAppAuth: fb.auth,
})(App);
