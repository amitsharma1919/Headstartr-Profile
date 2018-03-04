import React from 'react';


class Profile extends React.Component {

  experienceRender() {
    
  }
  render() {
    return(
      <div>
        <div className="item1">
          <div className='grid-container'>
            <div className="image">
              <img src="http://glia.ca/scm/2013/ge1127_b/wp-content/uploads/2013/10/594partner-profile-pic-An.jpg"></img>
            </div>
            <div className="info">
              <h1>{this.props.profile.name}</h1>
              Email Address : {this.props.profile.email}
              <br /> Address : {this.props.profile.address}
              <br /> Contact : {this.props.profile.contact}
            </div>
            <div className="graph">
                <img src="https://cdn2.iconfinder.com/data/icons/infographics-linear-black/614/5212_-_Inflation_Graph-512.png"></img>
            </div>
          </div>
        </div>
      

        <div className="timeline">

        <div className="item2">
          <div className="Description">
              <h2>Description</h2>
              

              <p>{this.props.profile.description}</p>

              <hr />

              <h2>Skills</h2>
                {this.props.profile.skills.map((e) => {
                  return (<div>
                                <h4>{e.name}</h4>
                                <p>
                                    Expertise Level : {e.expertise_level}
                                </p>
                          </div>);
              })}

          </div>
          
        </div>

        <div className="item3">
          <h2>Experience</h2>
            <div className="Work and Experience">
            <ul>
              {this.props.profile.experience.map((e) => {
                  return (
                              <div className="experience">
                                <div>
                                
                                    <li><h4>{e.name}</h4></li>
                                <p>
                                    Position : {e.position}
                                    <br />
                                    Tenure : {e.tenure}
                                </p>
                                
                                </div>
                              </div>
                          );
              })}
              </ul>
              <hr />
            <h2>Education</h2>
            <ul>
              {this.props.profile.education.map((e) => {
                  return (<div>
                                <li><h4>{e.name}</h4></li>
                                <p>
                                    Board : {e.board}
                                    <br />
                                    Tenure : {e.tenure}
                                </p>
                          </div>);
              })}
              </ul>
          </div>
        </div>

        </div>
      </div>
    );
  }
}
export default Profile;
