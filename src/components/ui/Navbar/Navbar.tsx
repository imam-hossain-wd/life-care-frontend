import Image from "next/image";
import { NavDropdownMenu } from "./DropDown";
import NavMenuItems from "./NavMenuItems";
import lifecare from "../../../assets/logo/life_care.png";
import { Button } from "../button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-around items-center">
      <div className="flex justify-end items-center">
        <Image
          className="mr-20"
          src={lifecare}
          width={80}
          height={80}
          alt="user logo"
        />
        <NavMenuItems />
      </div>
      <Link href="/login">Login</Link>
      <Link href="/signup">Sign up</Link>
      <NavDropdownMenu />
    </div>
  );
};

export default Navbar;
