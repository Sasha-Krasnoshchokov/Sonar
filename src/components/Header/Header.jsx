import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setPopUp } from '../../store/slices/popUpSlice';
import { setUser } from '../../store/slices/userSlice';

import headerNavigationList from '../../data/headerNavigationList';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';

import './Header.scss';

function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isPopUpOpened, setIsPopUpOpened] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { avatar, name: userName } = user;

  const openPopUp = useCallback(() => {
    setIsPopUpOpened(!isPopUpOpened);
  }, [isPopUpOpened]);

  const handleLogOut = useCallback(() => {
    dispatch(setUser({
      avatar: '',
      name: '',
      email: '',
    }));
  }, [openPopUp]);

  const handleSignUp = useCallback(() => {
    dispatch(setPopUp({
      isOpen: true,
      title: 'signUp',
    }));
  }, [openPopUp]);

  const handleLogin = useCallback(() => {
    dispatch(setPopUp({
      isOpen: true,
      title: 'login',
    }));
  }, [openPopUp]);

  const handleMenu = useCallback((event) => {
    event.stopPropagation();
    setIsMenuOpened(!isMenuOpened);
  }, [isMenuOpened]);

  return (
    <header id="header" className="header">

      <button
        id="menu_opener"
        type="button"
        className="header_menu_icon header_menu__opener"
        onClick={handleMenu}
      />

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

      {!userName && (
        <div className="header_buttons">
          <Button text="Sign Up" theme="blue" size="medium" callback={handleSignUp} />
          <Button text="Login" theme="white" size="medium" callback={handleLogin} />
        </div>
      )}

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

              {!userName && (
                <>
                  <li className="header_nav_item header_menu_nav__btn">
                    <Button text="Sign Up" theme="blue" size="small" callback={handleSignUp} />
                  </li>
                  <li className="header_nav_item header_menu_nav__btn">
                    <Button text="Login" theme="white" size="small" callback={handleLogin} />
                  </li>
                </>
              )}

            </ul>
          </div>
        </nav>

      </div>

      {userName ? (
        <button type="button" onClick={handleLogOut}>
          <img src={avatar} alt="Avatar" title={userName} className="header_avatar" />
        </button>
      ) : (
        <div className="header_avatar" />
      )}

    </header>
  );
}

export default Header;
