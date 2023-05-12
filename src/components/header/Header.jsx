/* eslint-disable react/jsx-key */
// import React from 'react';

import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from '../../assets/images/Logo.svg';
import rightArrow from '../../assets/images/arrow-right.svg';


const Header = () => {

   const mainMenu = [
       {
           menuName: "Home",
           path: "/",
       },
       {
           subMenuTitle: "Pages",
           subMenu: [
               {
                   subMenuName: "page1",
                   sabMenuPath: "/page1",
               },
               {
                   subMenuName: "page2",
                   sabMenuPath: "/page2",
               },
               {
                   subMenuName: "page3",
                   sabMenuPath: "/page3",
               },
           ],
       },
       {
           menuName: "Blog",
           path: "/blog",
       },
       {
           subMenuTitle: "Product Tour",
           subMenu: [
               {
                   subMenuName: "Product Tour1",
                   sabMenuPath: "/product1",
               },
               {
                   subMenuName: "Product Tour2",
                   sabMenuPath: "/product2",
               },
               {
                   subMenuName: "Product Tour3",
                   sabMenuPath: "/product3",
               },
           ],
       },
       {
           menuName: "Contact",
           path: "/contact",
       },
   ];

   const location = useLocation();

    return (
        <Navbar className="py-0" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} className="img-fluid" alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        {mainMenu?.map((menu, index) => {
                            return (
                                <>
                                    {menu.menuName ? (
                                        <Nav.Link key={index} as={Link} to={menu?.path} className={`fs-17 text-clr-dark4 nav-menu-link ${location.pathname === menu?.path && "active"}`}>
                                            {menu?.menuName}
                                        </Nav.Link>
                                    ) : (
                                        <NavDropdown className="fs-17 text-clr-dark4" title={menu?.subMenuTitle} id="basic-nav-dropdown">
                                            {menu?.subMenu?.map((subItem, index) => {
                                                return (
                                                    <NavDropdown.Item key={index} as={Link} to={subItem?.sabMenuPath} className={`${location.pathname === subItem?.sabMenuPath && "active"}`}>
                                                        {subItem?.subMenuName}
                                                    </NavDropdown.Item>
                                                );
                                            })}
                                        </NavDropdown>
                                    )}
                                </>
                            );
                        })}
                    </Nav>

                    <div className="nav-btn">
                        <a href="#" className="signup-btn bg-clr-secondary d-flex align-items-center text-decoration-none fs-14 fw-bold text-white">
                            Sign Up Free
                            <img src={rightArrow} alt="" />
                        </a>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;