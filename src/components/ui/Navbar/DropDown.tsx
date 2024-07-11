import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import userlogo from '../../../assets/logo/user.png'
import Image from "next/image";

export function NavDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* <Button className="bg-transparent text-black"></Button> */}
        <Image src={userlogo} width={40} height={40} alt="user logo"/>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>

        <DropdownMenuItem>
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
