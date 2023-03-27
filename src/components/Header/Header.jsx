import React, { useState, useCallback } from 'react';

import headerNavigationList from '../../data/headerNavigationList';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import PopUp from '../PopUp/PopUp';

import './Header.scss';

function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isPopUpOpened, setIsPopUpOpened] = useState(false);

  const openPopUp = useCallback(() => {
    setIsPopUpOpened(!isPopUpOpened);
  }, [isPopUpOpened]);

  const handleSignUp = useCallback(() => {
    openPopUp();
  }, [openPopUp]);

  const handleLogin = useCallback(() => {
    openPopUp();
  }, [openPopUp]);

  const handleMenu = useCallback((event) => {
    event.stopPropagation();
    setIsMenuOpened(!isMenuOpened);
  }, [isMenuOpened]);

  return (
    <header id="header" className="header">

      <Logo />

      <nav id="nav" className="header_nav">
        <ul className="header_nav_list">
          {headerNavigationList.map((nav) => {
            if (nav === 'faq') {
              return (
                <li key={nav} id={nav} className={`header_nav_item header_nav__${nav}`}>
                  <a href={`#${nav}`} className="header_nav_link">
                    {nav.toUpperCase()}
                  </a>
                </li>
              );
            }
            return (
              <li key={nav} id={nav} className={`header_nav_item header_nav__${nav}`}>
                <a href={`#${nav}`} className="header_nav_link capitalize">
                  {nav}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="header_buttons">
        <Button text="Sign Up" theme="blue" size="medium" callback={handleSignUp} />
        <Button text="Login" theme="white" size="medium" callback={handleLogin} />
      </div>

      <button
        id="menu_opener"
        type="button"
        className="header_menu_icon header_menu__opener"
        onClick={handleMenu}
      />
      <div id="menu" className={`header_menu ${isMenuOpened && 'header_menu__opened'}`}>
        <button
          id="menu_opener"
          type="button"
          className="header_menu_icon header_menu__shutter"
          onClick={handleMenu}
        />

        <nav id="nav" className="header_menu_nav">
          <div role="button" tabIndex={0} onClick={handleMenu} onKeyDown={() => {}}>
            <ul className="header_nav_list">
              {headerNavigationList.map((nav) => {
                if (nav === 'faq') {
                  return (
                    <li key={nav} id={nav} className={`header_nav_item header_nav__${nav}`}>
                      <a href={`#${nav}`} className="header_nav_link">
                        {nav.toUpperCase()}
                      </a>
                    </li>
                  );
                }
                return (
                  <li key={nav} id={nav} className={`header_nav_item header_nav__${nav}`}>
                    <a href={`#${nav}`} className="header_nav_link capitalize">
                      {nav}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>

      </div>

      {isPopUpOpened && (
        <PopUp
          callback={openPopUp}
        >
          Pop UP
        </PopUp>
      )}
    </header>
  );
}

export default Header;
