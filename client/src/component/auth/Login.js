import React,{Component} from 'react'
import{login} from './Userfuntion';
import {Link} from 'react-router-dom';

 class Login extends Component{
     constructor(props){
       super(props);
       this.state={
         email:'',
         password:'',

       };
       //bind
      

       this.onSubmit=this.onSubmit.bind(this);
       this.onChange=this.onChange.bind(this);
     }
     onChange(e){
      
       this.setState({

         [e.target.name]: e.target.value
        
        });
     }

     onSubmit(e){

       e.preventDefault()

       const user={
         email:this.state.email,
         password:this.state.password
       }
     //login method

       login(user).then(res=>{
         
         if(res){
             console.log(res)
             
          // this.props.history.push(`/profile`)
              
         }
       })
     }



     render(){

    return (
       <section className="container">
     
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead"><i className="fas fa-user"></i> Sign into Your Account</p>

      <form className="form" action="dashboard.html " onSubmit={this.onSubmit}>
        <div className="form-group">
          <input
           onChange={this.onChange}
            type="email"
            placeholder="Email Address"
            name="email"
           
            value={this.state.email}
            
            
          />
        </div>
        <div className="form-group">
          <input
           onChange={this.onChange}
            type="password"
            placeholder="Password"
            name="password"
           
            value={this.state.password}
           
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </section>
    );
}
 }
export default Login;

