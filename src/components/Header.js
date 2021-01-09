import React from 'react'
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router'
// import {FaRegUserCircle} from "react-icons/fa";
import { IoIosMenu} from 'react-icons/io';
import $ from "jquery";
import {removeUserSession} from "../Utils/Common";


class Header extends React.Component{
	constructor(props) {
		super(props);
	 }
	componentDidMount = () => {
		$(".header-bar").click(function(){
			$(".dropdown-menu-right").toggleClass("logged");
		  });
	}
	
	handleLogout = (e) =>  {
		removeUserSession();
		localStorage.removeItem("token");
		this.props.history.push('/');
	  }
	

		render(){
			return(
				<nav class="main-header navbar navbar-expand navbar-white navbar-light">
				 <ul class="navbar-nav">
					<li class="nav-item">
					   <Link  id="menubar" class="nav-link" data-widget="pushmenu"  role="button">
					   < IoIosMenu />
					   </Link>
					</li>
				 </ul>
				 <ul class="navbar-nav ml-auto">
					 <li class="nav-item dropdown"> <Link class="nav-link header-bar" data-toggle="dropdown"> <strong>Welcome Admin </strong> </Link>
						<div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
						  <div class="dropdown-divider"></div>
						  <Link to="/change-password" class="dropdown-item">Change Password</Link>
						  <div class="dropdown-divider"></div>
						  <a  onClick={e=>this.handleLogout(e)} class="dropdown-item" >Logout</a> </div>
					  </li>
				 </ul>
			  </nav>
		
					)
		}
	
}
export default withRouter(Header);