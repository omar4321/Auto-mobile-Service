import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Navber = () => {
  const { users, logOut } = useAuth();
    return (
        <div>
            <Navbar bg="dark" variant="dark" fixed="top"  collapseOnSelect expand="lg" >
            <Container>
                    <Navbar.Brand href="#home">AutoMobiles</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink }  to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink }  to="/home#services" >Services</Nav.Link>
                        <Nav.Link as={HashLink }  to="/home#experts"   >Experts</Nav.Link>
                        {users?.displayName ?
                            <Button  onClick={logOut} variant="danger">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                            Signed in as: <a href="#login">{users?.displayName}</a>
                        </Navbar.Text>
                    
                      
                    </Navbar.Collapse>
                </Container>
</Navbar>
        </div>
    );
};

export default Navber;