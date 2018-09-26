import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import './App.css';




class home extends Component {
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
      }
    
      responseFacebook = response =>{
        //console.log(response);
    
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
        <div className="welcomeBox">
          <p>welcome</p>
          <img src={this.state.picture}/>
          <p>{this.state.name}</p>
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
                <div className="page">
                    <br></br>
                    <div>{fbContent}</div>
                    <br></br>
                    <img src ='https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/3176472/580/390/m1/fpnw/wm0/1-.png?1504000065&s=e9ced1ccd1d91c45aa61478a69a98d18'/> 
                    <br></br>
                    
                   
                    
                    
                </div>
               
                
     
            
            </div>
        )
    }

}

export default home;
