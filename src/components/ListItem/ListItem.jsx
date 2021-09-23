import { React, Component } from 'react';

import { Link } from 'react-router-dom';

import './ListItem.scss';

export default class ListItem extends Component {
   constructor() {
      super();

      this.state = {

      };
   }

   render() {
      const { value, link, active, listItemClick } = this.props;

      return link ? (
         <li className={active ? 'active list-item' : 'list-item'} onClick={listItemClick}>
            <Link to={link}>
               {value}
            </Link>
         </li>
      ) : (
         <li className={active ? 'active list-item' : 'list-item'} onClick={listItemClick}>
            {value}
         </li>
      );
   }
};
