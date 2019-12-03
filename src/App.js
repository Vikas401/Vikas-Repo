import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action';

import './App.css';

import Header from './componet/header/header.component';
import HomePage from './pages/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

class App extends React.Component{

  unsubscribeFromAuth = null;

     componentDidMount(){
         const { setCurrentUser }= this.props;
       
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if (userAuth){
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapShot => {

              setCurrentUser({
                   id: snapShot.id,
                   ...snapShot.data()
              
                 });
               });
              }
               setCurrentUser(userAuth);
           });
         }
         componentWillUnmount(){
          this.unsubscribeFromAuth();
      }

   render(){
    return (
      <div>
      <Header/>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route exact path='/signin' 
      render={() => 
        this.props.currentUser ?(
           <Redirect to='/'/>
           ) : (
             <SignInAndSignUp/>)}
             />
      
      </Switch>
      </div>
       
     )
}
}
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
