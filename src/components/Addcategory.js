import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import {API_ROOT} from '../Services/Api-Config';
import axios from 'axios';
import { toast } from 'react-toastify';

export default class Addcategory extends React.Component{
   constructor(props){
      super(props);
      this.category=React.createRef();
      this.handleSubmit=this.handleSubmit.bind(this);
   }
   handleSubmit(event)
   {
      event.preventDefault();
       console.log(this.category.current.value);
      //  const localStorage.getItem('token'));
       //console.log(API_ROOT);
       const customHeaders = {
         'content-type':'application/json',
         headers:{
            Authorization: 'Bearer '+localStorage.getItem('token')
         }
      };
         axios.post(`${API_ROOT}addcategory`,{category:this.category.current.value},customHeaders).then(response=>{
         if(!response.data.error)
         {  
            // console.log(response);
            alert('Successfully Save Category');
            
         }
         else{
            // console.log(response);
           alert('Unable to save');
         }
      }).catch(error => {
         //console.log(error);
         alert('error');
      });
   }

render(){
    return(
        <div className="Dashboard">
<div className="wrapper">
 <Header />
<Sidebar />
<div class="content-wrapper">
         <div class="content-header">
            <div class="container-fluid">
               <div class="row mb-2">
                  <div class="col-sm-6">
                     <h1 class="m-0 text-dark">Category</h1>
                  </div>
                  <div class="col-sm-6">
                     <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><Link to="/add-category">Home</Link></li>
                        <li class="breadcrumb-item active">Category</li>
                     </ol>
                  </div>
               </div>
            </div>
         </div>
         <section class="content">
            <div class="container-fluid">
               <div class="row">
                  <div class="col-md-12">
                     <div class="card card-primary card-precheck">
                        <div class="card-header">
                           <h3 class="card-title">Form</h3>
                           <div class="card-tools">
                              <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse"> <i class="fas fa-minus"></i></button>
                           </div>
                        </div>
                        <div class="card-body">
                           <form onSubmit={this.handleSubmit}>
                           <div class="form-group">
                              <label for="inputName">Category Name</label>
                              <input type="text" id="inputName" class="form-control" ref={this.category}/>
                           </div>
                           <div class="form-group">
                              <label for="inputName">Active/Deactive</label>
                              <select class="form-control">
                                 <option>Select option</option>
                                 <option>Active</option>
                                 <option>Deactive</option>
                              </select>
                           </div>
                           <div class="form-group">
                              <input type="submit" value="Submit" class="btn btn-success float-right" />
                           </div>
                           </form>
                        </div>
                        
                     </div>
                     
                  </div>
               </div>

            </div>
         </section>
      </div>
{/* <Footer /> */}
<aside className="control-sidebar control-sidebar-dark"> 
</aside>
</div>
</div>
    )
}
}