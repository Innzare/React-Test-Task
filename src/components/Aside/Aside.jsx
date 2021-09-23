import { React, Component } from 'react';
// import { Link } from 'react-router-dom';

import ListItem from './../ListItem';

import './Aside.scss';

export default class Aside extends Component {
   constructor() {
      super();

      this.state = {
         // events: [
         //    {
         //       title: 'Upcoming events'
         //    },
         //    {
         //       title: 'Past events'
         //    },
         //    {
         //       title: 'My invitations'
         //    },
         //    {
         //       title: 'My to-do lists'
         //    },
         // ],
         // info: [
         //    {
         //       title: 'Contacts'
         //    },
         //    {
         //       title: 'Tags'
         //    }
         // ]
      };
   }

   render() {
      const { events, info, listItemClick, asideActive } = this.props;

      return (
         <div className={asideActive ? 'aside active' : 'aside'}>
            <div className="aside__block new-event">
               <button>
                  + new event
               </button>
            </div>
            <div className="aside__block events">
               <ul>
                  {
                     events.map(item => {
                        return (
                           <ListItem
                              key={item.id}
                              active={item.active}
                              value={item.title}
                              listItemClick={() => listItemClick(item.eventTodos, item)}
                           />
                        );
                     })
                  }
               </ul>
            </div>
            <div className="aside__block info">
               <ul>
                  {
                     info.map(item => {
                        return (
                           <ListItem key={item.id}
                              link={item.link}
                              value={item.title}
                           />
                        );
                     })
                  }
               </ul>

            </div>
         </div>
      );
   }
};
