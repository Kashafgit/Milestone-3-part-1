import { CircleUserRound, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Header() {
    return (
        <>
            <nav className="flex justify-between px-4 py-4">
                <div >
                    <ul >
                        <li className="flex gap-5 text-[13px]">
                            <Link href={"./buytshirts"}>BUY T-SHIRTS</Link>
                            <Link href={"./women"}>WOMEN</Link>
                            <Link href={"./man"}>MAN</Link>
                            <Link href={"./about"}>ABOUT</Link>
                            <Link href={"./contact"}>CONTACT</Link>
                        </li>
                    </ul>

                </div>
                <div>
                   <Link href={"/"}> <h1 className="text-2xl font-extrabold">T-SHIRTS</h1>
                    <hr className="w-32"/>
                   <h2 className="tracking-[1.5em]">store</h2></Link>
                </div>
                <div className="flex gap-5">
                <Search />
                <CircleUserRound />
                <ShoppingCart/>
                </div>
            </nav>

        </>
    )
}