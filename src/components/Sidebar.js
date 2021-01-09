import React ,{useEffect}from 'react'
import {Link} from 'react-router-dom'
import { IoIosMenu} from 'react-icons/io';
import { IoIosSpeedometer} from 'react-icons/io';
import {FiCircle} from 'react-icons/fi';
import {MdKeyboardArrowDown} from "react-icons/md";
import {AiOutlineAppstore} from "react-icons/ai";
import $ from "jquery";
import LogoImg from '../assets/img/logo192.png';
function Sidebar(){

             useEffect(() => {
               $(".activa").click(function(){
               $(this).toggleClass("inactiva")
            })
                     
            $(".side-panel").click(function(){
               $(".drop-in").toggleClass("side-bar-panel");
               $(".side-icon").toggleClass("sid-icon");
               
               
            })
            $(".side-panel1").click(function(){
               $(".drop-in1").toggleClass("side-bar-panel1");
               $(".side-icon1").toggleClass("sid-icon");

               
            })
            $("#menubar").click(function(){
               $(".main-sidebar").toggleClass("navigation-bar");
               $(".sidebar").toggleClass("mini")
               $(".main-sidebar").toggleClass("navigation-bar3");
               $(".content-wrapper").toggleClass("navigation-bar2");
               $(".main-header").toggleClass("navigation-bar2");
               $(".main-header").toggleClass("navigation-bar1");
               $(".main-footer").toggleClass("main-footer-box")
            })

            
        },[]);
			 
		return(

			<aside class="main-sidebar sidebar-dark-primary elevation-4">
         <Link to="/dashboard" class="brand-link">
         <img src={LogoImg} class="brand-image" /> 
         </Link>  
         <div class="clear"></div>
         <div class="sidebar">
            <nav class="mt-2">
               <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                  <li class="nav-item has-treeview ">
                     <Link to="/dashboard" class="nav-link activa inactiva">
                     <IoIosSpeedometer className="dash-meter" />
                     <p>Dashboard </p>
                     </Link> 
                  </li>
                  <li class="nav-item has-treeview " id="drop-out">
                      <Link   class="nav-link side-panel activa" id="sub-code1">
                     <AiOutlineAppstore/>
                     <p id="arrow-sign"> Category<span className="side-icon"><MdKeyboardArrowDown /></span></p>
                     </Link>
                     <ul class="nav nav-treeview drop-in" >
                        <li class="nav-item">
                           <Link to="/add-category" class="nav-link activa sub-heading" >
                           <FiCircle  id=" circle"/>
                           <p>Add Category</p>
                           </Link> 
                        </li>
                        <li class="nav-item">
                           <Link to="/view-category" class="nav-link activa sub-heading" >
                           <FiCircle  id=" circle"/>
                           <p>View Category</p>
                           </Link> 
                        </li>
                     </ul>
                  </li>
                  <li class="nav-item has-treeview " id="drop-out">
                     <Link   class="nav-link side-panel1 activa" id="sub-code1">
                     <AiOutlineAppstore/>
                     <p id="arrow-sign"> Product<span className="side-icon1"><MdKeyboardArrowDown /></span></p>
                     </Link>
                     <ul class="nav nav-treeview drop-in1" >
                        <li class="nav-item">
                           <Link to="#" class="nav-link activa sub-heading" >
                           <FiCircle  id=" circle"/>
                           <p>Add Product</p>
                           </Link> 
                        </li>
                        <li class="nav-item">
                           <Link to="#" class="nav-link activa sub-heading" >
                           <FiCircle  id=" circle"/>
                           <p>View Product</p>
                           </Link> 
                        </li>
                     </ul>
                  </li>
                  
               </ul>
            </nav>
         </div>
      </aside>
      

			)
}
export default Sidebar;