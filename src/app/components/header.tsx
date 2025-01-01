import { CircleUserRound, Menu, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
    return (
        <>
            {/* Mobile View */}
            <div className="flex justify-between px-4 py-2 md:hidden">
                <div>
                    <Link href={"/"}>
                        <h1 className="text-xl font-extrabold">T-SHIRTS</h1>
                        <hr className="w-28" />
                        <h2 className="tracking-[1em]">store</h2>
                    </Link>
                </div>

                {/* Menu Icon for Mobile */}
                <Sheet>
                    <SheetTrigger>
                        <Menu className="text-xl" />
                    </SheetTrigger>
                    <SheetContent>
                        <nav className="flex flex-col justify-between px-4 py-4">
                            <ul>
                                <li className="flex flex-col gap-5 text-[13px]">
                                    <Link href={"./buytshirts"}>BUY T-SHIRTS</Link>
                                    <Link href={"./women"}>WOMEN</Link>
                                    <Link href={"./man"}>MAN</Link>
                                    <Link href={"./about"}>ABOUT</Link>
                                    <Link href={"./contact"}>CONTACT</Link>
                                </li>
                            </ul>
                            <div className="flex gap-5 mt-5">
                                <Search />
                                <CircleUserRound />
                                <ShoppingCart />
                            </div>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>

            {/* Desktop View */}
            <nav className="hidden md:flex justify-between px-4 py-4 max-w-7xl mx-auto">
                <div>
                    <ul className="flex gap-5 text-[13px]">
                        <Link href={"./buytshirts"}>BUY T-SHIRTS</Link>
                        <Link href={"./women"}>WOMEN</Link>
                        <Link href={"./man"}>MAN</Link>
                        <Link href={"./about"}>ABOUT</Link>
                        <Link href={"./contact"}>CONTACT</Link>
                    </ul>
                </div>

                {/* Logo for Desktop */}
                <div>
                    <Link href={"/"}>
                        <h1 className="text-2xl font-extrabold">T-SHIRTS</h1>
                        <hr className="w-32" />
                        <h2 className="tracking-[1.5em]">store</h2>
                    </Link>
                </div>

                {/* Icons for Desktop */}
                <div className="flex gap-5">
                    <Search />
                    <CircleUserRound />
                    <ShoppingCart />
                </div>
            </nav>
        </>
    );
}
