import React,{Fragment} from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import Landing from './component/layout/Landing';
import Register from './component/auth/Register';
import Login from './component/auth/Login';
import profile from './component/auth/profile';
import ViewProfile from './component/auth/ViewProfile';
import post from './component/auth/post';
import dashboard from './component/auth/dashboard';
import addeducation from './component/auth/add-education';
import './App.css';

const App=()=> {

   return(
   <Router>

    <Fragment>

     <Navbar/>
    <Route exact path='/' component={Landing} />

    <section className='container'>
      <Switch>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/profile' component={profile}/>
        <Route exact path='/ViewProfile' component={ViewProfile}/>
        <Route exact path='/post' component={post}/>
        <Route exact path='/dashboard' component={dashboard}/>
        <Route exact path='/addeducation' component={addeducation}/>
      </Switch>
    </section>

    </Fragment>

    </Router>
   );
    
  
}

export default App;
