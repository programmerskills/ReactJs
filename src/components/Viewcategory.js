import React from 'react';
import {Link} from 'react-router-dom';
import {MdDelete} from "react-icons/md";
import Header from './Header';
import Sidebar from './Sidebar';
import axios from 'axios';
import { API_ROOT } from '../Services/Api-Config';
import $ from 'jquery';
export default class Viewcategory extends React.Component{
  state={
   categorylist: [],
     persons: []
  }
  componentDidMount()
  {
   const customHeaders={
      'content-type':'application/json',
      headers:{
         Authorization: 'Bearer '+localStorage.getItem('token')
      }
   };
   axios.get(`${API_ROOT}allcategory`,customHeaders).then(response=>{
      console.log(response.data.allcategory);
      this.setState({
         categorylist:response.data.allcategory});
   });
   // axios.get(`https://jsonplaceholder.typicode.com/users`)
   //    .then(res => {
   //      const persons = res.data;
   //      console.log(persons);
   //      this.setState({ persons });
   //    })
  }
//   delete category
 deleteform(val)
{
   console.log(val);
  
   const customHeaders={
      'content-type': 'application/json',
      headers:{
         Authorization: 'Bearer '+localStorage.getItem('token')
      }
   };
   axios.get(`${API_ROOT}deletecategory/`+val,customHeaders).then(response=>{
      if(response.data.sucess)
      {
         alert('Deleted category record');
      }
      else
      {
         alert('No delete category');
      }
   })

}
	render(){
      
		return(
            <div className="Dashboard">
            <div className="wrapper">
            <Header />
            <Sidebar />
            <div class="content-header">
            <div class="container-fluid">
               <div class="row mb-2">
                  <div class="col-sm-6">
                     <h1 class="m-0 text-dark">Category</h1>
                  </div>
                  <div class="col-sm-6">
                     <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
                        <li class="breadcrumb-item active">Category</li>
                     </ol>
                  </div>
               </div>
            </div>
         </div>
            <section class="content">
            <div class="container-fluid">
            <div class="content-wrapper">
				<div class="row">
                  <div class="col-md-12">
                     <div class="card card-primary">
                        <div class="card-body table-responsive">
                           <table class="table table-striped table-hover">
                              <thead>
                                 <tr>
                                    <th width="14%">Sr.No.</th>
                                    <th width="64%" >Category Name</th>
                                    <th width="9%">Status</th>
                                    <th width="7%">Edit</th>
                                    <th width="6%">Remove</th>
                                 </tr>
                              </thead>
                              <tbody>
                              {/* { this.state.categorylist.map(person => <li>{person.id}</li>)} */}
                             
                              {
                              this.state.categorylist.map((object,i) => {
                                  return(
                                 <tr>
                                    <td>{i+1}</td>
                                    <td>{object.category}</td>
                                    <td><Link to="#"><strong>Active</strong></Link> </td>
                                    <td><Link to={`/edit-category/${object.id}`} class="red">Edit</Link></td>
                                    <td><Link to="#" onClick={i =>window.confirm("Are you sure you wish to delete this item?") && this.deleteform(object.id)}><strong>Delete</strong></Link> </td>
                                 </tr>
                                  )
                                })
                              }
                              
                              </tbody>
                           </table>
                           <ul class="pagination pagination-sm float-right paging">
                              <li class="page-item"><Link class="page-link" to="/add-category">«</Link></li>
                              <li class="page-item"><Link class="page-link" to="/add-category">1</Link></li>
                              <li class="page-item"><Link class="page-link" to="/add-category">2</Link></li>
                              <li class="page-item"><Link class="page-link" to="/add-category">3</Link></li>
                              <li class="page-item"><Link class="page-link" to="/add-category">»</Link></li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
               </div>
               </div>
               </section>
               </div>
               </div>
               
               
			)
	}
}