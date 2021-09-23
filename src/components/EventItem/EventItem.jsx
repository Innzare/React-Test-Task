import { React, Component } from 'react'

import './EventItem.scss';

export default class EventItem extends Component {
   constructor() {
      super();

      this.state = {

      };
   }

   render() {
      const { data } = this.props;

      const rand = Math.floor(100 + Math.random() * (400 + 1 - 100));

      return (
         <div className="event-item">
            <div className="date">{data.date}</div>
            <div className="body">
               <div className="side left">
                  <div className="side-block avatar">
                     <img src={`https://picsum.photos/${rand}/${rand}?random`} alt="avatar" />
                  </div>
                  <div className="side-block event-text">{data.label}</div>
                  <div className="side-block user">{data.user}</div>
               </div>
               <div className="side right">
                  <button>Manage</button>
                  <button className='outline'>Delete</button>
               </div>
            </div>
         </div>
      );
   }
};
