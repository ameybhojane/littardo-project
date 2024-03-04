// import React from './img/littardo_logo'
import { NavbarBrand, Navbar, NavItem, Nav, Input, InputGroup, Button, NavLink } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logoimg from './img/littardo_logo.jpeg'
import { faCartShopping, faMobile } from '@fortawesome/free-solid-svg-icons'

function NavigationBar() {
    return (
        <div>
            <Navbar
                className="my-2"
                style={{ background: "linear-gradient(180deg, rgba(242, 202, 136, 0.88) -27.7%, rgba(255, 255, 255, 0.88) 119.23%)" }}
            >
                {/* <Nav> */}

                <NavbarBrand href="/">
                    <img
                        alt="logo"
                        // src="https://media.licdn.com/dms/image/D560BAQE1cL0LNxyQkQ/company-logo_200_200/0/1707308262159/littardo_logo?e=1717632000&v=beta&t=_SC3o7SwOnFGH0kbJMH04SNXjTcGdq1Ndd4LCAHDnbQ"
                        src={logoimg}
                        style={{
                            height: 40,
                            width: 40
                        }}
                    />
                </NavbarBrand>
                <NavItem style={{ "list-style-type": "none" }}>
                    <InputGroup>
                        <Input placeholder="Search for a product/item" />
                    </InputGroup>
                </NavItem>
                <NavItem style={{ "list-style-type": "none" }}>

                    <Button style={{
                        background: "linear-gradient(180deg, #F2CA88 0%, #EDB25A 100%)",
                        boxShadow: "0px 12px 20px 0px rgba(233, 155, 57, 0.56)"
                    }}>Login</Button></NavItem>

                <NavItem style={{ "list-style-type": "none" }}>

                    <Button>
                        <FontAwesomeIcon icon={faCartShopping} />
                        {'  '}Cart</Button>
                </NavItem>

                {/* </Nav> */}
            </Navbar>

        </div>
    )
}

export default NavigationBar