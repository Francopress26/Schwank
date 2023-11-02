import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Image} from "@nextui-org/react";
import ball from '../../assets/MdiTennisBallOutline.svg'
import logo from '../../assets/logo1.png'
export default function Nav() {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
      <Image
          alt="nextui logo"
          height={100}
          radius="sm"
          src={logo.src}
          width={100}
        />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
     
     <Link color="foreground" href="#" className="text-lg">
       Inicio
     </Link>
   </NavbarItem>
   
        <NavbarItem>
     
          <Link color="foreground" href="#" className="text-lg">
            Marcas
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link color="foreground" href="#" aria-current="page" className="text-lg">
            Equipo
          </Link>
        </NavbarItem>
        <NavbarItem>
          {/* <Link color="foreground" href="#">
            Integrations
          </Link> */}
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem> */}
        <NavbarItem>
          <Button as={Link} className="bg-green" href="#" variant="flat">
            Contactate
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
