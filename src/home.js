import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import './App.css';
import { Form, 
     FormGroup, 
     Label, 
     Input , 
     Collapse,
     CardBody, 
     Card,
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

export default class home extends Component {
    constructor(props) {
        super(props);
        this.toggle1 = this.toggle1.bind(this);
        this.toggle2 = this.toggle2.bind(this);
        this.toggle3 = this.toggle3.bind(this);
        this.logout = this.logout.bind(this);
        this.state = { collapse1: false , collapse2: false , isOpen: false,isLoggedIn: false,
          userID: '',
          name: '',
          email: '',
          picture: '' };
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
      es(){
          alert("Complete: Please wait for Espresso...")
      }
      moc(){
        alert("Complete: Please wait for Moccha...")
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
      <br></br>
                    <h1>-------------------------------</h1>
                    
                    <img src ='http://www.thelogomix.com/files/imagecache/v3-logo-detail/coffee-code.png' alt="logo"/> 
                    
                    <h1>------------------------------</h1>
                      <h3 className="textmenu">MENU</h3><br></br>
                    <div className="pic">
                      <img src ='https://www.picz.in.th/images/2018/09/27/hWQu9S.jpg' alt="espresso" onClick={this.toggle1} width="450"/>
                      {this.state.isLoggedIn 
                       ?
                      <Collapse isOpen={this.state.collapse1}>
                      <br></br>
                        <Card>
                          <CardBody>
                            <Form>
                              <FormGroup>
                              <Label className="text">amount</Label>
                                <Input type="select" name="amount" id="amount" >
                                  <option>1 cup</option>
                                  <option>2 cup</option>
                                  <option>3 cup</option>
                                  <option>4 cup</option>
                                  <option>5 cup</option>
                                </Input>
                              </FormGroup>
                            </Form>
                            <button onClick={this.es} className="button">Buy</button>
                          </CardBody>
                        </Card>
                      </Collapse>
                      :
                      <Collapse isOpen={this.state.collapse1}>
                      <br></br>
                        <Card>
                          <CardBody>
                            <Form>
                              <FormGroup>
                              <Label className="text">Please Login</Label>
                              </FormGroup>
                            </Form>
                          </CardBody>
                        </Card>
                      </Collapse>
                    }
                      
                    </div>
                    
                    <div className="pic">
                      <img src ='https://www.picz.in.th/images/2018/09/27/hWQ6bn.jpg' alt="moccha" onClick={this.toggle2} width="450"/>
                      {this.state.isLoggedIn 
                       ?
                      <Collapse isOpen={this.state.collapse2}>
                      <br></br>
                        <Card>
                          <CardBody>
                            <Form>
                              <FormGroup>
                              <Label className="text">amount</Label>
                                <Input type="select" name="amount" id="amount" >
                                  <option>1 cup</option>
                                  <option>2 cup</option>
                                  <option>3 cup</option>
                                  <option>4 cup</option>
                                  <option>5 cup</option>
                                </Input>
                              </FormGroup>
                            </Form>
                            <button onClick={this.moc} className="button">Buy</button>
                          </CardBody>
                        </Card>
                      </Collapse>
                      :
                      <Collapse isOpen={this.state.collapse2}>
                      <br></br>
                        <Card>
                          <CardBody>
                            <Form>
                              <FormGroup>
                              <Label className="text">Please Login</Label>
                              </FormGroup>
                            </Form>
                          </CardBody>
                        </Card>
                      </Collapse>
                    }
                    </div>
                    <div className="pic">
                    <img src ='https://www.picz.in.th/images/2018/09/27/hWURqW.jpg' alt="moccha" onClick={this.toggle2} width="450"/>
                    
                    </div>
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


