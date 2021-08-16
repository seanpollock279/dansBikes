import React from 'react';
import './App.css';

import Welcome from './Components/Welcome/Welcome';
import Header from './Components/Header/Header';


import Sean from './Assets/DisplayPhotos/sean.jpg';
import Dan from './Assets/DisplayPhotos/dan.jpeg';

class App extends React.Component {
  state = {
    users: [
      {
        name: "Sean Pollock",
        description: "I’m a photographer and developer from Toronto. Cycling is a way for myself to get outside and explore the city while keeping my fitness in check.",
        city: "Toronto",
        country: "Canada",
        kms: 150,
        rideTime: "1hr 32mins",
        carbon: 20000,
        profile: Dan,
      },
      {
        name: "Daniel LaCute",
        description: "I’m a photographer and developer from Toronto. Cycling is a way for myself to get outside and explore the city while keeping my fitness in check.",
        city: "Toronto",
        country: "Canada",
        kms: 172,
        rideTime: "2hr 32mins",
        carbon: 30000,
        profile: Sean,
      },
      {
        name: "Abdulla Khatib",
        description: "I’m a photographer and developer from Toronto. Cycling is a way for myself to get outside and explore the city while keeping my fitness in check.",
        city: "Vancouver",
        country: "Canada",
        kms: 99,
        rideTime: "0hr 47mins",
        carbon: 10000,
        profile: Sean,
      },
      {
        name: "Patrick Ryder",
        description: "I’m a photographer and developer from Toronto. Cycling is a way for myself to get outside and explore the city while keeping my fitness in check.",
        city: "Mississauga",
        country: "Canada",
        kms: 121,
        rideTime: "1hr 18mins",
        carbon: 10000,
        profile: Sean,
      },
    ]
  }

  render() {

    return (
      <div style={{width: '375px', height: '812px', border: '0.5px solid black', margin: '0 auto'}}>
          <Header />
          <Welcome />
        
      </div>
    )  
  }
}

export default App;


