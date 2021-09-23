import { React, Component } from 'react'
import './Header.scss';

export default class Header extends Component {
   constructor() {
      super();

      this.state = {

      };
   }

   render() {
      const { asideActive, menuClick } = this.props;

      return (
         <header className="header">
            <div className="logo">
               <img width={35} src="/img/header/logo.svg" alt="logo" />
            </div>
            <div className="user">
               <img width={30} src="/img/header/user.svg" alt="user" />
               <img
                  width={30}
                  onClick={menuClick}
                  className={asideActive ? 'active menu' : 'menu'}
                  src="/img/icons/menu.svg"
                  alt="" />
            </div>
         </header>
      );
   }
};
