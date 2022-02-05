import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

import { SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { MenuIcon } from "@heroicons/react/solid";

import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {
  const [imgCountry, setImgCountry] = useState(null);
  const { data: session, status } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  useEffect(() => {
    fetch(
      "https://ipgeolocation.abstractapi.com/v1/?api_key=76977a368c5449e79ec32aa42e69655b"
    )
      .then((res) => res.json())
      .then((response) => {
        setImgCountry(response.flag.png);
      })
      .catch((data, status) => {
        console.log("Request failed:", data);
      });
  }, []);

  return (
    <header>
      {/* Top nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <li className="flex items-center group relative dropdown hover:text-gray-500">
          <MenuIcon className="h-10 ml-5 mr-2 text-gray-200 link" />
          <div className="group-hover:block dropdown-menu top-12 sm:top-10 ml-0 z-50 absolute hidden h-auto ">
            <ul className=" w-48 bg-amazon_blue-light shadow text-white pl-2">
              <li className="link tracking-tighter">All</li>
              <li className="link tracking-tighter">Prime Video</li>
              <li className="link tracking-tighter">Amazon Business</li>
              <li className="link tracking-tighter">Today's Deals</li>
              <li className="link tracking-tighter"> Electronics</li>
              <li className="link tracking-tighter"> Food & Grocery</li>
              <li className="link tracking-tighter"> Prime</li>
              <li className="link tracking-tighter"> Buy Again</li>
              <li className="link tracking-tighter"> Shopper Toolkit</li>
              <li className="link tracking-tighter"> Health & Person</li>
            </ul>
          </div>
        </li>
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            src="https://links.papareact.com/f90"
            alt="Picture"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* Search */}
        <div className="sm:flex hidden items-center h-10 rounded-md flex-grow bg-yellow-400 hover:bg-yellow-500 cursor-pointer">
          <input
            type="text"
            className="h-full p-2 w-6 flex-shrink rounded-l-md px-4 flex-grow outline-none"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/* Right */}
        <div className="text-white mx-6 flex items-center text-xs space-x-6 whitespace-nowrap">
          <div>
            <img height={30} width={30} src={imgCountry} />
          </div>
          <div onClick={!session ? signIn : signOut} className="link">
            <p>{session ? `Hello, ${session.user.name}` : `Sign in `}</p>
            <p className="font-bold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-bold md:text-sm">& Orders</p>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className="relative link flex items-center"
          >
            <span className="absolute top-0 left-8 h-4 w-4 bg-yellow-400 text-center rounded-full text-black">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-bold md:text-sm mt-2">
              {" "}
              Basket
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
