import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import './App.css';
import { Button,ButtonToolbar } from 'reactstrap';

class App extends Component {
  state = {
    isLoggedIn: false,
    userID: '',
    name: '',
    email: '',
    picture: ''
  }

  responseFacebook = response =>{
    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
  }
  
  
 




  componentClicked = () => console.log("clicked");


  render() {

    let fbContent;
    if(this.state.isLoggedIn){

      fbContent = (
        <div className="facebookIconHome">
          
          <img src={this.state.picture}/>
          <p>you are logged in</p>
          <p>{this.state.name}</p>
          
          <ButtonToolbar>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button color="danger" bsSize="large" href="home">Go To Cafe </Button>
          </ButtonToolbar>

          
          
          
        </div>
      );
    }
    else{
      fbContent = (<FacebookLogin
        appId="575653222895486"
        autoLoad={true}
        fields="name,email,picture"
        onClick={this.componentClicked}
        callback={this.responseFacebook} />)
    }

    return (
      <div className="padding">
        <div className="box-login">  

            <br></br> 
            <img src ='http://www.thelogomix.com/files/imagecache/v3-logo-detail/coffee-code.png'/> 
            <br></br><br></br>
            
            

            <div>{fbContent}</div>
            
            <br></br><br></br><br></br>
            <div className="buttonGuest">
            <a href="home">guest login</a>
            </div>
           

            

            <br></br>

            
        
            <br></br> 
            <br></br> 
        </div>


      <br></br>
      
      </div>
      

    );
  }
}

export default App;
