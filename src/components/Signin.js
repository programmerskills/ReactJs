import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import {API_ROOT} from '../Services/Api-Config';
import {setUserSession} from '../Utils/Common';
export default class Signin extends React.Component {
	constructor(props)
	{
		super(props);
		this.textemail=React.createRef();
		this.textpassword=React.createRef();
		this.state={email:'',password:'',emailerr:'',passworderr:''}
		this.handleSubmit=this.handleSubmit.bind(this);
	}
	valid()
	{
		let emailerr='';
		let passworderr='';
		if(this.state.email=='')
		{
			emailerr="Email address required";
			this.textemail.current.focus();
			$('#email').addClass('errorclass');
		}
		else
		{
			$('#email').removeClass('errorclass');
		}

		if(this.state.password=='')
		{
			passworderr="Password required";
			this.textpassword.current.focus();
			$('#password').addClass('errorclass');
		}
		else{
			$('#password').removeClass('errorclass');
		}
		if(emailerr!='' || passworderr!='')
		{
			this.setState({emailerr,passworderr});
			return false;
		}
			return true;
		
	}
	handleSubmit(event)
	{
		event.preventDefault();
		if(this.valid()){
			//console.log(this.state.email);
			const customHeaders = {
				headers:{
					Authorization: 'Bearer '+ localStorage.getItem('tokenadmin')
				}
			};
			axios.post(`${API_ROOT}login`,{email: this.state.email, password: this.state.password},customHeaders).then(response => {this.state.loading=false;
			if(!response.data.error){
				//console.log('test');
				setUserSession(response.data.success.token, response.data.success.user);
				localStorage.setItem("token",response.data.success.token);
					this.props.history.push('/dashboard');
			}
			else{
				this.setState({
					passworderr:'Invalid Credentials'
				})
			}
			})
		}
		
	}
    render() {
        
        return (
        	<div className="SignIn">
				<div className="login-page">
					<div className="slider-overlay">
					<div className="login-box">
				  <div className="login-logo"></div>
				  <div className="card">
				    <div className="card-body login-card-body">
      		<p className="login-box-msg">Admin Login </p>
		      <form onSubmit={this.handleSubmit}>
		        <div className="input-group mb-3">
		          <input type="email" className="form-control" placeholder="Email" id="email" ref={this.textemail} onChange={(event)=>{this.setState({email:event.target.value})}}/>
		          <div className="input-group-append">
		            <div className="input-group-text"> <span className="fas fa-envelope"></span> </div>
		          </div>
		        </div>
				<p>{this.state.emailerr}</p>
		        <div className="input-group mb-3">
		          <input type="password" className="form-control" placeholder="Password" ref={this.textpassword} id="password" onChange={(event)=>{this.setState({password:event.target.value})}} />
		          <div className="input-group-append">
		            <div className="input-group-text"> <span className="fas fa-lock"></span> </div>
		          </div>
		        </div>
				<p>{this.state.passworderr}</p>
		        <div className="row">
		          <div className="col-md-8 col-sm-12">
		            <div className="icheck-primary">
		              <input type="checkbox" id="remember" />
		              <label for="remember"> Remember Me </label>
		            </div>
		          </div>
		          <div className="col-md-4 col-sm-12">
		            <button type="submit" className="btn btn-primary btn-block">Sign In</button>
		          </div>

		        </div>
		      </form>
    		</div>
 		</div>
 	</div>
 	</div>
 	</div>
</div>
        	)
    }
}