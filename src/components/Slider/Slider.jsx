import { Component } from 'react';
import React from 'react';

import { Link } from 'react-router-dom';

import './Slider.scss';

export default class Slider extends Component {
   constructor() {
      super();

      this.state = {
         items: [
            {
               id: 1,
               title: 1,
               active: false
            },
            {
               id: 2,
               title: 2,
               active: false
            },
            {
               id: 3,
               title: 3,
               active: false
            },
            {
               id: 4,
               title: 4,
               active: false
            },
            {
               id: 5,
               title: 5,
               active: false
            },
            {
               id: 6,
               title: 6,
               active: false
            },
            {
               id: 7,
               title: 7,
               active: false
            },
            {
               id: 8,
               title: 8,
               active: false
            },
            {
               id: 9,
               title: 9,
               active: false
            },
            {
               id: 10,
               title: 10,
               active: false
            },
            {
               id: 11,
               title: 11,
               active: false
            },
            {
               id: 12,
               title: 12,
               active: false
            },
            {
               id: 13,
               title: 13,
               active: false
            },
         ],
         position: 0,
         nextBtnDis: false
      };

      this.sliderTrack = React.createRef();
      this.sliderItem = React.createRef();
      this.prev = React.createRef();
      this.next = React.createRef();
   }

   componentDidMount() {
      this.sliderTrack.current.childNodes.forEach(item => {
         item.style = `min-width: ${this.sliderTrack.current.clientWidth / 3}px`;
      })
   }

   componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.state.position !== prevState.position) {
         this.sliderTrack.current.style = `transform: translate(${this.state.position}px)`;
      }
   }

   onPrevClick = () => {
      this.next.current.disabled = false;
      this.setState(({ position }) => {
         return {
            position: position + (this.sliderItem.current.clientWidth) * 3
         }
      });
   }

   onNextClick = () => {
      if (-(this.sliderTrack.current.childNodes.length - 3) * this.sliderItem.current.clientWidth >= this.state.position) {
         this.next.current.disabled = true;
         return;
      }
      this.setState(({ position }) => {
         return {
            position: position - (this.sliderItem.current.clientWidth) * 3
         }
      });
   }

   onSliderItemClick = (id) => {
      this.setState(({ items }) => {
         const newArr = items.map(item => item.id === id ? { ...item, active: true } : { ...item, active: false });
         return {
            items: newArr
         }
      })
   }

   render() {
      const { items, position } = this.state;

      return (
         <div className="slider-page">
            <div className="slider-wrapper">
               <Link to='/'>
                  <div className="back-btn">
                     <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 11L1 6L6 1" stroke="#C8C8C8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                     Back to events
                  </div>
               </Link>

               <div className="slider">
                  <button className='arrow left' onClick={this.onPrevClick} disabled={position >= 0 ? true : false} ref={this.prev}>
                     <img width={20} src="/img/slider/left-arrow.svg" alt="arrow" />
                  </button>
                  <button
                     className='arrow right'
                     onClick={this.onNextClick}
                     ref={this.next}
                  >
                     <img width={20} src="/img/slider/right-arrow.svg" alt="arrow" />
                  </button>
                  <div className="slider__track" ref={this.sliderTrack}>
                     {
                        items.map(item => {
                           return <div className={item.active ? 'slider__item active' : 'slider__item'} ref={this.sliderItem} onClick={() => this.onSliderItemClick(item.id)} key={item.id}>{item.title}</div>
                        })
                     }
                  </div>
               </div>
            </div>
         </div>
      );
   }
};
