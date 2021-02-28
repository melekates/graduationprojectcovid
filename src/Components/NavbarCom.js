import React, { useEffect, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import axios from "axios"
import { Link } from 'react-router-dom';

export default function NavbarCom(props) {
  const [headerLinks, setHeaders]=useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  useEffect(() => {

    const fetchData=async()=>{
      const response=await axios.get("data.json")
      setHeaders(response.data.headerLinks)
    }
   fetchData();
  });
  return (
    <div>
      <Navbar className="navbar navbar-light" light expand="md">
        <NavbarBrand href="/">
        <img src="covidIcon.png" width="30" height="30" className="d-inline-block align-top" alt=""/>
          Covid-19
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {headerLinks.map(header=>(
              <NavItem key={header}>
              <NavLink><Link to={header} className="NavLink">{header}</Link></NavLink>
            </NavItem> 
            ))
            }
            </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
  }

