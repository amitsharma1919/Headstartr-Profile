import React from 'react';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import Profile from './Profile.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Lorem Ipsum",
      email: "loremipsum@lorem.com",
      address: "lorem",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam quam nulla porttitor massa. Id ornare arcu odio ut. Amet risus nullam eget felis eget. Duis at consectetur lorem donec massa sapien faucibus et molestie. Scelerisque viverra mauris in aliquam sem fringilla. Duis convallis convallis tellus id.",
      contact: "-insert phone number-",
      education: [
          {
              name: "St paul's academy",
              board: "CBSE",
              tenure: "2015 to 2019", 
          },
          {
              name: "Birla Academy",
              board: "CBSE",
              tenure: "2015 to 2019", 
          },
          {
              name: "DPS Hauj Khas",
              board: "CBSE",
              tenure: "2015 to 2019", 
          }
      ], 
      experience: [
          {
              name: "An Organisation Name",
              position: "Position previously worked one",
              tenure: "2015 to 2020",
          },
          {
              name: "An Organisation Name two",
              position: "Position previously worked one",
              tenure: "2015 to 2020",
          },
      ],
      skills: [
          {
              name: "Skill name 1",
              expertise_level: "average",
          },
          {
              name: "Skill name 2",
              expertise_level: "average",
          },
          {
              name: "Skill name 3",
              expertise_level: "average",
          },
          {
              name: "Skill name 4",
              expertise_level: "average",
          },
          {
              name: "Skill name 5",
              expertise_level: "average",
          },
      ],
  };
  }

  render() {
    return(
      <div className="wrapper">
        <Header />
        <Sidebar />
        <Profile profile = {this.state}/>
      </div>
    );
  }
}
export default App;
