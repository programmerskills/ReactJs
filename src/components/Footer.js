import React from 'react'
import {Link} from 'react-router-dom'
import footerImg from '../assets/img/favicon.ico'

class Footer extends React.Component{
	render(){
		return(
			<footer class="main-footer">
         Copyright &copy; 2020 <Link to="/dashboard">lalasweb.com</Link> | All rights reserved.
         <div class="float-right d-none d-sm-inline-block">
            <div class="aks">
               <a href="#"  target="_blank" title="ReactJs With Laravel">
               <img src={footerImg} alt="ReactJs With Laravel" title="ReactJs With Laravel" /></a> 
            </div>
         </div>
      </footer>
			)
	}
}
export default Footer;