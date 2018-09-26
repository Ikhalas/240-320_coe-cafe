import React, { Component } from 'react';
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
     DropdownItem  } from 'reactstrap';

export default class home extends Component {
    constructor(props) {
        super(props);
        this.toggle1 = this.toggle1.bind(this);
        this.toggle2 = this.toggle2.bind(this);
        this.toggle3 = this.toggle3.bind(this);
        this.state = { collapse1: false , collapse2: false , isOpen: false };
      }
    
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

    render() {
        return (
            <div className="padding">
                <div className="page">
                    <div className="nav">
                      <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">Coe_Cafe</NavbarBrand>
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
                               <NavLink href="member">Bongkarn</NavLink>
                             </NavItem>
                           </DropdownItem>
                          </DropdownMenu>
                         </UncontrolledDropdown>
                        </Nav>
                        </Collapse>
                      </Navbar>
                    </div>
                    <h1>-------------------------------</h1>
                    <br></br>
                    <img src ='https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/3176472/580/390/m1/fpnw/wm0/1-.png?1504000065&s=e9ced1ccd1d91c45aa61478a69a98d18' alt="logo"/> 
                    <br></br>
                    <h1>------------------------------</h1>
                      <h3 className="textmenu">MENU</h3><br></br>
                    <div className="pic">
                      <img src ='http://circlecdental.com/wp-content/uploads/2012/06/epresso-slider.png' alt="espresso" onClick={this.toggle1} width="350"/>
                      <Collapse isOpen={this.state.collapse1}>
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
                    </div>
                    <div className="pic">
                      <img src ='https://thumbs-prod.si-cdn.com/iHOmIJlzBQ1ppKmzTAT4txuNzGU=/800x600/filters:no_upscale():focal(461x237:462x238)/https://public-media.smithsonianmag.com/filer/b5/94/b5942caf-8c09-40c2-842e-c52f99f9344f/mocha.jpg' alt="moccha" onClick={this.toggle2} width="350"/>
                      <Collapse isOpen={this.state.collapse2}>
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
                    </div>
                    <div className="footer">
                        copyright by psu-student 2018
                    </div>
                </div>
            </div>
        )
    }

}


