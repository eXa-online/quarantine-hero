import { Link } from 'react-router-dom';
import React from 'react';
import Box from '@material-ui/core/Box';
import { useTranslation } from 'react-i18next';

export default function DesktopMenu(props) {
  const { t } = useTranslation();

  const MenuItem = (menuItemProps) => (
    <li className="mr-6 hover:opacity-50">
      <Link to={menuItemProps.to} onClick={menuItemProps.onClick}>{menuItemProps.children}</Link>
    </li>
  );

  const Menu = (menuProps) => (
    <Box className="flex w-1/2" flexDirection="column">
      <ul className="font-exo2 flex justify-around text-xl font-semibold mt-10">
        {menuProps.isLoggedIn
          ? <MenuItem to="/dashboard">{t('components.desktopMenu.yourOverview')}</MenuItem>
          : (
            <>
              <MenuItem to="/ask-for-help">{t('components.desktopMenu.requestHelp')}</MenuItem>
              <MenuItem to="/overview">{t('components.desktopMenu.help')}</MenuItem>
            </>
          )}
        <MenuItem to="/faq">FAQs</MenuItem>
        {menuProps.isLoggedIn
          ? <MenuItem to="#" onClick={menuProps.signOut}>{t('components.desktopMenu.signOut')}</MenuItem>
          : ''}
      </ul>
    </Box>
  );

  return (
    <>
      <div className="hidden md:flex justify-between relative">
        <Link className="-ml-8 block -mt-12 max-logo" to="https://wwww.dierotenbullen.com">
          <img alt="logo" src={require('../assets/logo.svg')} />
        </Link>
        <Menu {...props} />
      </div>
    </>
  );
}
