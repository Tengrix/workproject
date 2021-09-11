import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';
import {HeaderContainerTypeProps} from "./HeaderContainer";

function Header(props:HeaderContainerTypeProps) {
  return (
    <header className={s.header}>
      <img src="https://www.freelogodesign.org/Content/img/logo-ex-7.png" alt=""/>
        <div className={s.loginBlock}>
            {props.isAuth ?
                <div>{props.login} - <button onClick={props.AuthLogOut}> Log out</button></div>
          : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
  );
}
export default Header;
