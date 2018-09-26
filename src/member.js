import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import './App.css';
import { 
     Collapse,
     Navbar,
     NavbarToggler,
     NavbarBrand,
     Nav,
     NavItem,
     NavLink,
     UncontrolledDropdown,
     DropdownToggle,
     DropdownMenu,
     Button,
     DropdownItem  } from 'reactstrap';

export default class member extends Component {
    constructor(props) {
        super(props);
        this.toggle1 = this.toggle1.bind(this);
        this.toggle2 = this.toggle2.bind(this);
        this.toggle3 = this.toggle3.bind(this);
        this.logout = this.logout.bind(this);
        this.state = { collapse1: false , collapse2: false , isOpen: false,
          userID: '',
          name: '',
          email: '',
          picture: ''  };
        
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
    
      toggle1() {
        this.setState({ collapse1: !this.state.collapse1 });
      }
      toggle2() {
        this.setState({ collapse2: !this.state.collapse2 });
      }
      toggle3() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      logout(){
        this.setState({
          isLoggedIn: false
        });
      }
   

    render() {
      let fbContent;
      if(this.state.isLoggedIn){
  
        fbContent = (
          <div className="facebookIcon"> 
            <img src={this.state.picture}/>
            &nbsp;{this.state.name}
            &nbsp; &nbsp; <Button color="danger" onClick={this.logout}>Log Out</Button>

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

              <div className = "paddingHead">
                <div className="pageHead">
                    <div className="nav">
                      <Navbar color="light" light expand="md">
                        <div className="fac">{fbContent}</div>
                        <NavbarBrand href="/home">Coe_Cafe</NavbarBrand>
                        <NavbarToggler onClick={this.toggle3} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                         <Nav className="ml-auto" navbar>
                         <UncontrolledDropdown nav inNavbar>
                          <DropdownToggle nav caret>
                            Contact
                          </DropdownToggle>
                          <DropdownMenu right>
                           <DropdownItem>
                             <NavItem>
                               <NavLink href="https://www.facebook.com/profile.php?id=100001965407468">Sagolwong</NavLink>
                             </NavItem>
                           </DropdownItem>
                           <DropdownItem>
                             <NavItem>
                               <NavLink href="https://www.facebook.com/Class.Ikhalas">Ikhalas</NavLink>
                             </NavItem>
                           </DropdownItem>
                           <DropdownItem>
                             <NavItem>
                               <NavLink href="https://www.facebook.com/pluemzaba123">Bongkarn</NavLink>
                             </NavItem>
                           </DropdownItem>
                           <DropdownItem divider/>
                           <DropdownItem>
                             <NavItem>
                               <NavLink href="member">Credit</NavLink>
                             </NavItem>
                           </DropdownItem>
                          </DropdownMenu>
                         </UncontrolledDropdown>
                        </Nav>
                        </Collapse>
                      </Navbar>
                      </div>
                    </div>
                  </div>



                  <div className="page">
                    <h1>-------------------------------</h1>
                    <br></br>
                    <h3>Developer Team List</h3>
                    <br></br>
                    <h1>-------------------------------</h1>

                    <table className="table">
                        <tr>
                            <td className="columnL"><img src ='https://scontent.fbkk14-1.fna.fbcdn.net/v/t1.0-9/21433267_1184704011663265_2631105572539889692_n.jpg?_nc_cat=105&_nc_eui2=AeGQhHrrKeXjUcdkO8rPByEGoYLgCDiYIctBFgrk5RLttzyE4eAvMERGzDPYbYZ3Yn-ZnmrqbsortUQu5eaAIlk_UMpmS6a07MUZpALJAj5-8g&oh=1bdf00ca8eb47d90e94b743a72325d51&oe=5C207A62'
                             alt="IM"  width="400"/></td>                    
                            <td>
                            <div className="columnR"> 
                            <h2>Ikhalas  Mannoon</h2>
                            <p>student ID : 5910110405</p>
                            <a href="https://www.facebook.com/Class.Ikhalas">FACEBOOK</a>
                            </div> 
                            </td>
                        </tr>

                        <tr>
                            <td className="columnL"><img src ='https://www.picz.in.th/images/2018/09/27/hWgCVv.jpg'
                             alt="SN"  width="400"/></td>
                             <td>
                            <div className="columnR"> 
                            <h2>Sagolwong  Nakarunrat</h2>
                            <p>student ID : 5910110678</p>
                            <a href="https://www.facebook.com/profile.php?id=100001965407468">FACEBOOK</a>
                            </div> 
                            </td>
                        </tr>

                        <tr>
                            <td className="columnL"><img src ='https://www.picz.in.th/images/2018/09/27/hWg2Ek.jpg'
                             alt="BJ"  width="400"/></td>
                             <td>
                            <div className="columnR"> 
                            <h2>Bongkarn  Jongmee</h2>
                            <p>student ID : 5910110177</p>
                            <a href="https://www.facebook.com/pluemzaba123">FACEBOOK</a>
                            </div> 
                            </td>
                        </tr>
                    </table>
                        <br></br>
                        </div>  
                
                
                <div className="paddingFoot">
                  <div className="footer">
                          copyright by psu-student 2018
                  </div>
                </div>

            </div>
        )
    }

}
