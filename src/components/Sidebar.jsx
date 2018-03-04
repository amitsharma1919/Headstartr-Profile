import React from 'react';

class Sidebar extends React.Component{
  render(){
    return(
      <div className="sidebar">
        <ul>
     		<li><a href="#"><span>Home</span></a>
              <ul>
           			<li><a href="#">Add</a></li>
           			<li><a href="#">Edit</a></li>
           			<li><a href="#">Delete</a></li>
     		      </ul>
     	   </li>
     		<li><a href="#">Blog</a>
     		  <ul>
       			<li><a href="#">1</a></li>
       			<li><a href="#">2</a></li>
       			<li><a href="#">3</a></li>
     		  </ul>
     	</li>
     		<li><a href="#">Service</a>
          <ul>
     		    <li><a href="#">a</a></li>
       			<li><a href="#">b</a></li>
       			<li><a href="#">c</a></li>
     		  </ul>
     	</li>
     		<li><a href="#">Porfolio</a>
          <ul>
       			<li><a href="#">d</a></li>
       			<li><a href="#">e</a></li>
       			<li><a href="#">f</a></li>
     		</ul>
     	</li>
     		<li><a href="#">Contact</a>
          <ul>
       			<li><a href="#">Add</a></li>
       			<li><a href="#">Edit</a></li>
       			<li><a href="#">Delete</a></li>
     		   </ul>
     		</li>
 	    </ul>
      </div>
    );
  }
}
export default Sidebar;
