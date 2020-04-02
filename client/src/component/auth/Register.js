import React,{Fragment,Component} from 'react'
import {register} from './Userfuntion';
import {Link} from 'react-router-dom';


 class Register extends Component {
  constructor(props){
    super(props)
    this.state={
      name:'',
      email:'',
      password:'',

    };
  //bind
    this.onSubmit=this.onSubmit.bind(this)
    this.onChange=this.onChange.bind(this)
  }

  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    
    })
  }

  onSubmit(e){
    e.preventDefault()
    const user={
      name:this.state.name,
      email:this.state.email,
      password:this.state.password
    }


    register(user).then(res=>{
     
        this.props.history.push(`/Login`)  
    })
  }

    render(){
         return (
      
    <Fragment>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>

      <form className="form" onSubmit={this.onSubmit}>
        <div className="form-group">
          <input 
          onChange={this.onChange}
          type="text" 
          placeholder="Name" 
          name="name" 
          value={this.state.name}
           />
        </div>

        <div className="form-group">
          <input 
          onChange={this.onChange}
          type="email"
           placeholder="Email Address"
            name="email" 
            value={this.state.email}
            
           
            />

          <small className="form-text"
            >This site uses Gravatar so if you want a profile image, use a
            Gravatar email</small>
        </div>

        <div className="form-group">
          <input
            onChange={this.onChange}
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={this.state.password}
            
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
      </Fragment>
    
       
    );
}
 }
export default Register;
