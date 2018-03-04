import React from 'react';

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state={
      listVisible:false
    }
  }

  handleClick(){
      this.setState({
        listVisible:!this.state.listVisible
      });
  }
  render(){
    const list=(<div className='dropdown-content'>
      <ul>
        <li><a href='#'>Lorem</a></li>
        <li><a href='#'>Lorem</a></li>
        <li><a href='#'>Lorem</a></li>
        <li><a href='#'>Log Out</a></li>
      </ul>

    </div>);
    return(
      <div className="header">
        <img src="images/hs_logo.png" className="logo"></img>
        <input className="textBox" type="text"></input>
        <p className='lorem'>Lorem</p>
        <p className='lorem'>Lorem</p>
          <img className='icons' src="images\cursor.png"></img>
          <img className='icons' src="images\chat.png"></img>
          <img className='icons' src="images\alarm.png"></img>
          <div className='profile'>
            <img className='profileImg' src="http://glia.ca/scm/2013/ge1127_b/wp-content/uploads/2013/10/594partner-profile-pic-An.jpg"></img>
            <div className='dropdown' onClick={this.handleClick.bind(this)}>
                <img className='dropdownbtn' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Ic_arrow_drop_down_48px.svg/2000px-Ic_arrow_drop_down_48px.svg.png"></img>
                {this.state.listVisible? list : null}
            </div>
        </div>
      </div>
    );
  }
}
export default Header;
