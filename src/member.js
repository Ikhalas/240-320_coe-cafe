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

export default class member extends Component {
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
                    <h3>Developer Team List</h3>
                    <br></br>
                    <h1>-------------------------------</h1>

                    <table className="table">
                        <tr>
                            <td className="columnL"><img src ='https://scontent.fbkk14-1.fna.fbcdn.net/v/t1.0-9/21433267_1184704011663265_2631105572539889692_n.jpg?_nc_cat=105&_nc_eui2=AeGQhHrrKeXjUcdkO8rPByEGoYLgCDiYIctBFgrk5RLttzyE4eAvMERGzDPYbYZ3Yn-ZnmrqbsortUQu5eaAIlk_UMpmS6a07MUZpALJAj5-8g&oh=1bdf00ca8eb47d90e94b743a72325d51&oe=5C207A62'
                             alt="Ikhalas"  width="400"/></td>
                            
                            
                            <td>
                            <div className="columnR"> 
                            <h2>Ikhalas  Mannoon</h2>
                            <p>student ID : 5910110405</p>
                            <a href="https://www.facebook.com/Class.Ikhalas">FACEBOOK</a>
                            </div> 
                            </td>
                        </tr>
                        
                    
                    
                    </table>

                        <br></br>
                

                    <div className="footer">
                        copyright by psu-student 2018
                    </div>
                </div>
            </div>
        )
    }

}


