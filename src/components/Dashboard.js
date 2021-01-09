import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
export default class Dashboard extends React.Component{
render(){
    return(
        <div className="Dashboard">
<div className="wrapper">
 <Header />
<Sidebar />
<div className="content-wrapper">
   <div className="content-header">
      <div className="container-fluid">
         <div className="row mb-2">
            <div className="col-sm-12">
               <h1>Welcome To Admin Panel</h1>
            </div>
            <div className="col-sm-6">
               <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                     <Link to="/dashboard">
                     Home</Link>
                     
                  </li>
                  <li className="breadcrumb-item active">Dashboard</li>
               </ol>
            </div>
         </div>
      </div>
   </div>
   <section className="content">
      <div className="container-fluid">
         <div className="row">
         </div>
         <div className="row">
            <section className="col-lg-7 connectedSortable"> </section>
         </div>
      </div>
   </section>
</div>
<Footer />
<aside className="control-sidebar control-sidebar-dark"> 
</aside>
</div>
</div>
    )
}
}