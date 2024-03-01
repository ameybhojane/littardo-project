import React from 'react'
import { NavbarBrand, Navbar, NavItem } from 'reactstrap'

function NavigationBar() {
    return (
        <div>
            <Navbar
                className="my-2"
                color="dark"
                dark
            >
                <NavbarBrand href="/">
                    <img
                        alt="logo"
                        src="https://media.licdn.com/dms/image/D560BAQE1cL0LNxyQkQ/company-logo_200_200/0/1707308262159/littardo_logo?e=1717632000&v=beta&t=_SC3o7SwOnFGH0kbJMH04SNXjTcGdq1Ndd4LCAHDnbQ"
                        style={{
                            height: 40,
                            width: 40
                        }}
                    />
                </NavbarBrand>
                <NavItem>dicmszd</NavItem>
                <NavItem>dicmszd</NavItem>
                <NavItem>dicmszd</NavItem>
                <NavItem>dicmszd</NavItem>
                <NavItem>dicmszd</NavItem>
            </Navbar>

        </div>
    )
}

export default NavigationBar