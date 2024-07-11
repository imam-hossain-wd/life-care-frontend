import Link from "next/link";

const NavMenuItems = () => {
  return <nav>
    <ul className="flex flex-col lg:flex-row gap-5 font-semibold text-[16px]">
        <Link href=""> Home </Link>
        <Link href=""> Doctor</Link>
        <Link href=""> Hospital</Link>
        <Link href=""> Blood Bank</Link>
        <Link href=""> Consultation</Link>
        <Link href=""> Contact </Link>
        <Link href=""> About</Link>
    </ul>
  </nav>;
};

export default NavMenuItems;
