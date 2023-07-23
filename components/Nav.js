"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getProviders, useSession, signIn, signOut } from "next-auth/react"

const Nav = () => {

  // const [userLoggedIn, setUserLoggedIn] = useState(true);
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [dropdown, setDropdown] = useState(false);


  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav className="mb-8 flex justify-between">

      <Link href="/" className="main_logo flex items-center">
        <Image
          src="/assets/images/user.png"
          width={30}
          height={30}
          alt="User Logo"
          className="cursor-pointer"
        />
        <Image
          src="/assets/images/logo.png"
          width={75}
          height={75}
          alt="PromptCraft Logo"
        />
        <span className="logo text-[21px]">Craft</span>
      </Link>

      {/* Desktop */}

      <div className="hidden sm:flex gap-3">
        {session?.user ? (
          <>
            <Link href='/create-prompt'>
              <div className="px-4 py-2 text-white bg-black rounded-2xl hover:bg-white hover:text-black cursor-pointer hover:border-black">Create Post</div>
            </Link>

            <div onClick={() => signOut()} className="px-4 py-2 text-black bg-white rounded-2xl hover:bg-black hover:text-white cursor-pointer hover:border-black">Sign Out</div>

            <Link href="/profile">
              <Image
                src={session?.user.image}
                width={40}
                height={40}
                alt="User Logo"
                className="cursor-pointer"
              />
            </Link>
          </>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <div
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="px-[.5rem] py-[.25rem] text-white bg-black rounded-2xl hover:bg-white hover:text-black cursor-pointer hover:border-black">Sign In</div>
              ))}
          </>
        )
        }
      </div>

      {/* Mobile */}
      <div className="sm:hidden flex">

        {session?.user ? (
          <>

            <Image
              src={session?.user.image}
              width={40}
              height={40}
              alt="User Logo"
              className="cursor-pointer"
              onClick={() => setDropdown(!dropdown)}
            />


            {dropdown && <div className="absolute p-4 w-60 bg-white right-0 top-20 flex flex-col gap-2 justify-end items-end">

              <Link href='/profile'>
                <div onClick={() => setDropdown(false)} className="cursor-pointer">My Profile</div>
              </Link>


              <Link href='/create-prompt'>
                <div onClick={() => setDropdown(false)} className="cursor-pointer">Create Post</div>
              </Link>

              <div
                onClick={() => {
                  setDropdown(false)
                  signOut()
                }}
                className=" px-4 py-2 mt-4 text-white bg-black rounded-2xl hover:bg-white hover:text-black cursor-pointer hover:border-black w-full">Sign Out</div>
            </div>}
          </>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <div
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="px-[.5rem] py-[.25rem] text-white bg-black rounded-2xl hover:bg-white hover:text-black cursor-pointer hover:border-black">Sign In</div>
              ))}
          </>
        )
        }

      </div>





      {/* {session?.user ? (

        <>

          <div className="max-sm:hidden flex items-center gap-3">
            <Link href='/create-prompt'>
              <div className="px-4 py-2 text-white bg-black rounded-2xl hover:bg-white hover:text-black cursor-pointer hover:border-black">Create Post</div>
            </Link>

            <div onClick={() => signOut()} className="px-4 py-2 text-black bg-white rounded-2xl hover:bg-black hover:text-white cursor-pointer hover:border-black">Sign Out</div>

            <Link href="/profile">
              <Image
                src="/assets/images/user.png"
                width={40}
                height={40}
                alt="User Logo"
                className="cursor-pointer"
              />
            </Link>
          </div>

          <div className="sm:hidden relative">
            <Link href="/profile">
              <Image
                src="/assets/images/user.png"
                width={40}
                height={40}
                alt="User Logo"
                className="cursor-pointer"
                onClick={() => setDropdown(!dropdown)}
              />
            </Link>

            {dropdown && <div className="absolute p-4 w-60 bg-white right-0 top-14 flex flex-col gap-2 justify-end items-end">

              <Link href='/profile'>
                <div onClick={() => setDropdown(false)} className="cursor-pointer">My Profile</div>
              </Link>


              <Link href='/create-prompt'>
                <div onClick={() => setDropdown(false)} className="cursor-pointer">Create Post</div>
              </Link>

              <div
                onClick={() => {
                  setDropdown(false)
                  signOut()
                }}
                className=" px-4 py-2 mt-4 text-white bg-black rounded-2xl hover:bg-white hover:text-black cursor-pointer hover:border-black w-full">Sign Out</div>
            </div>}

          </div>

        </>

      ) : (
        <>
          {providers &&
            Object.values(providers).map((provider) => (
              <div
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className="px-4 py-2 text-white bg-black rounded-2xl hover:bg-white hover:text-black cursor-pointer hover:border-black">Sign In</div>
            ))}
        </>
      )

      } */}

    </nav >
  )
}

export default Nav;