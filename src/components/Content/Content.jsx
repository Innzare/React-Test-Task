import { React, Component } from 'react';

import EventItem from './../EventItem';

import './Content.scss';

export default class Content extends Component {
   constructor() {
      super();

      this.state = {
         filterShowBtn: false,
         dateFilter: 2,
         currentFilter: [],
         filters: [
            {
               id: 1,
               filter: 'host',
               title: 'I am a Host',
               active: false
            },
            {
               id: 2,
               filter: 'co-host',
               title: 'I am a Co-Host',
               active: false
            },
            {
               id: 3,
               filter: 'guest',
               title: 'I am a Guest',
               active: false
            },
            {
               id: 4,
               filter: 2021,
               title: '2021',
               active: false
            },
            {
               id: 5,
               filter: 2022,
               title: '2022',
               active: false
            },
         ]
      };
   }

   btnClick = () => {
      this.setState(({ filterShowBtn }) => {
         return {
            filterShowBtn: !filterShowBtn
         }
      })
   }

   filterClick = (id) => {
      const newArr = this.state.filters.map(item => item.id === id ? { ...item, active: !item.active } : { ...item })
      const currentFilter = [];
      newArr.filter(item => item.active).map(item => currentFilter.push(item.filter))
      this.setState({
         filters: newArr,
         currentFilter: currentFilter
      })
   }

   dateFilterClick = () => {
      this.setState(({ dateFilter }) => {
         if (dateFilter === 1) {
            return {
               dateFilter: 2
            }
         }
         if (dateFilter === 2) {
            return {
               dateFilter: 3
            }
         }
         if (dateFilter === 3) {
            return {
               dateFilter: 1
            }
         }
      })
      this.props.dateFilterClick(this.state.dateFilter)
   }

   render() {
      const { data } = this.props;
      const { filterShowBtn, filters, currentFilter, dateFilter } = this.state;

      let dateFilterImg = '';
      if (dateFilter === 1) {
         dateFilterImg = 'to-max';
      } else if (dateFilter === 2) {
         dateFilterImg = 'default';
      } else {
         dateFilterImg = 'to-min';
      }

      return !data ? (
         <div className="empty-content content">
            <p>Content Data</p>
         </div>
      ) : (
         <div className="content">
            <div className="title">
               {data[0].title}
               <button onClick={this.btnClick}>{filterShowBtn ? 'Hide filters' : 'Show filters'}</button>
            </div>
            {
               filterShowBtn &&
               <div className="filters">
                  <div className='side left'>
                     {
                        filters.map(item => {
                           return (
                              <button
                                 className={item.active ? 'active' : null}
                                 onClick={() => this.filterClick(item.id)}
                                 key={item.id}
                              >
                                 {item.title}
                              </button>
                           )
                        })
                     }
                  </div>
                  <div className="side right" onClick={this.dateFilterClick}>
                     Date filter
                     <img src="/img/icons/filter.svg" className={dateFilterImg} alt="" />
                  </div>
               </div>
            }
            <div className="events">
               {
                  data.filter(todo => {
                     if (currentFilter.length > 0) {
                        return currentFilter.includes(todo.user.toLowerCase()) || currentFilter.includes(todo.year);
                     }
                     return true;
                  }).map(item => {
                     return <EventItem data={item} key={item.id} />
                  })
               }
            </div>
         </div >
      );
   }
};
