import { React, Component } from 'react'
import { Route } from 'react-router-dom';

import './App.scss';

import Header from './../Header';
import Aside from './../Aside';
import Content from './../Content';
import Slider from './../Slider';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      contentData: null,
      asideActive: false,
      events: [
        {
          id: 1,
          title: 'Upcoming events',
          active: false,
          eventTodos: [
            {
              id: 1,
              title: 'Upcoming events',
              date: '27/07/2022 02:00 pm - 08:00 pm',
              year: 2022,
              img: 'img.png',
              label: 'Lorem ipsum dolor sit amet consectetur.',
              user: 'Host',
            },
            {
              id: 2,
              title: 'Upcoming events',
              date: '14/08/2021 04:00 pm - 06:00 pm',
              year: 2021,
              img: 'img.png',
              label: 'Lorem ipsum dolor sit amet consectetur.',
              user: 'Co-Host',
            },
            {
              id: 3,
              title: 'Upcoming events',
              date: '11/09/2017 10:00 am - 16:00 pm',
              year: 2017,
              img: 'img.png',
              label: 'Lorem ipsum dolor sit amet consectetur.',
              user: 'Guest',
            },
            {
              id: 4,
              title: 'Upcoming events',
              date: '14/08/2021 04:00 pm - 06:00 pm',
              year: 2021,
              img: 'img.png',
              label: 'Lorem ipsum dolor sit amet consectetur.',
              user: 'Co-Host',
            },
            {
              id: 5,
              title: 'Upcoming events',
              date: '11/09/2018 10:00 am - 16:00 pm',
              year: 2018,
              img: 'img.png',
              label: 'Lorem ipsum dolor sit amet consectetur.',
              user: 'Guest',
            },
          ]
        },
        {
          id: 2,
          title: 'Past events',
          active: false,
          eventTodos: [
            {
              id: 1,
              title: 'Past events',
              date: '27/07/2018 02:00 pm - 08:00 pm',
              year: 2018,
              img: 'img.png',
              label: 'Lorem ipsum dolor sit amet consectetur.',
              user: 'Host',
            },
            {
              id: 2,
              title: 'Past events',
              date: '11/09/2020 10:00 am - 16:00 pm',
              year: 2020,
              img: 'img.png',
              label: 'Lorem ipsum dolor sit amet consectetur.',
              user: 'Host',
            },
            {
              id: 3,
              title: 'Past events',
              date: '27/07/2021 02:00 pm - 08:00 pm',
              year: 2021,
              img: 'img.png',
              label: 'Lorem ipsum dolor sit amet consectetur.',
              user: 'Co-Host',
            },
            {
              id: 4,
              title: 'Past events',
              date: '11/09/2022 10:00 am - 16:00 pm',
              year: 2022,
              img: 'img.png',
              label: 'Lorem ipsum dolor sit amet consectetur.',
              user: 'Guest',
            },
            {
              id: 5,
              title: 'Past events',
              date: '11/09/2022 10:00 am - 16:00 pm',
              year: 2022,
              img: 'img.png',
              label: 'Lorem ipsum dolor sit amet consectetur.',
              user: 'Host',
            },
            {
              id: 6,
              title: 'Past events',
              date: '11/09/2021 10:00 am - 16:00 pm',
              year: 2021,
              img: 'img.png',
              label: 'Lorem ipsum dolor sit amet consectetur.',
              user: 'Co-Host',
            }
          ]
        },
        {
          id: 3,
          title: 'My invitations',
          active: false,
          eventTodos: [
            {
              id: 1,
              title: 'My invitations',
              date: '11/09/2022 10:00 am - 16:00 pm',
              year: 2022,
              img: 'img.png',
              label: 'Lorem ipsum dolor sit amet consectetur.',
              user: 'Host',
            },
            {
              id: 2,
              title: 'My invitations',
              date: '27/07/2021 02:00 pm - 08:00 pm',
              year: 2021,
              img: 'img.png',
              label: 'Lorem ipsum dolor sit amet consectetur.',
              user: 'Host',
            },
            {
              id: 3,
              title: 'My invitations',
              date: '11/09/2022 10:00 am - 16:00 pm',
              year: 2022,
              img: 'img.png',
              label: 'Lorem ipsum dolor sit amet consectetur.',
              user: 'Co-Host',
            },
            {
              id: 4,
              title: 'My invitations',
              date: '27/07/2021 02:00 pm - 08:00 pm',
              year: 2021,
              img: 'img.png',
              label: 'Lorem ipsum dolor sit amet consectetur.',
              user: 'Guest',
            },
            {
              id: 5,
              title: 'My invitations',
              date: '11/09/2022 10:00 am - 16:00 pm',
              year: 2022,
              img: 'img.png',
              label: 'Lorem ipsum dolor sit amet consectetur.',
              user: 'Host',
            }
          ]
        },
        {
          id: 4,
          title: 'My to-do lists',
          active: false,
          eventTodos: [
            {
              id: 1,
              title: 'My to-do lists',
              date: '11/09/2022 10:00 am - 16:00 pm',
              year: 2022,
              img: 'img.png',
              label: 'Lorem ipsum dolor sit amet consectetur.',
              user: 'Host',
            }
          ]
        },
      ],
      info: [
        {
          id: 1,
          title: 'Contacts',
          active: false
        },
        {
          id: 2,
          title: 'Tags',
          active: false
        },
        {
          id: 3,
          title: 'Link to slider',
          active: false,
          link: '/slider'
        }
      ]
    };
  }

  listItemClick = (data, asideListData) => {
    const newArr = this.state.events.map(item => item.id === asideListData.id ? { ...asideListData, active: true } : { ...item, active: false })
    this.setState({
      contentData: data,
      events: newArr
    })
  }

  menuClick = () => {
    this.setState(prev => {
      return { asideActive: !prev.asideActive }
    });
  }

  dateFilterClick = (id) => {
    if (id === 1) {
      this.setState(({ contentData }) => {
        const newArr = contentData.sort((a, b) => a.id - b.id);
        return {
          contentData: newArr,
        }
      })
    } else if (id === 2) {
      this.setState(({ contentData }) => {
        const newArr = contentData.sort((a, b) => a.year - b.year);
        return {
          contentData: newArr,
        }
      })
    } else {
      this.setState(({ contentData }) => {
        const newArr = contentData.sort((a, b) => b.year - a.year);
        return {
          contentData: newArr,
        }
      })
    }
  }

  render() {
    const { events, info, contentData, asideActive } = this.state;

    return (
      <div className="app">
        <Route path='/' exact>
          <Header asideActive={asideActive} menuClick={this.menuClick}></Header>
          <div className="content-wrapper">
            <Aside asideActive={asideActive} listItemClick={this.listItemClick} events={events} info={info}></Aside>
            <Content data={contentData} dateFilterClick={this.dateFilterClick} />
          </div>
        </Route>
        <Route path='/slider' exact>
          <Slider />
        </Route>
      </div>
    );
  }
};
