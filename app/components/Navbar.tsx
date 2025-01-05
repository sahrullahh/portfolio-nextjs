"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Navbars } from "../@types/portos";
import { Icon } from "@iconify/react";

const Navbar: React.FC<Navbars> = ({ data, frontLogo, backLogo, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const outSideMenu = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current?.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", outSideMenu);

    // Membersihkan event listener saat komponen di-unmount
    return () => {
      document.removeEventListener("mousedown", outSideMenu);
    };
  }, []);

  return (
    <div className="font-outfit navbar sticky top-0 z-50 w-full bg-gradient-to-b from-[#121212] via-[#121212]/50 to-transparent">
      <nav className="lg:p-8 p-5">
        <div className="md:container mx-auto flex justify-between items-center">
          <div>
            <div className="flex gap-5 items-center">
              <div className="head-logos">
                {/*  flip-image-animations is custom css class see in globals.css */}
                <div className="flip">
                  <div className="front">
                    {frontLogo && (
                      <img
                        className="w-10"
                        src={frontLogo}
                        alt="front logo"
                      />
                    )}
                  </div>
                  <div className="back">
                    {backLogo && (
                      <img
                        className="w-10"
                        src={backLogo}
                        alt="back logo"
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="head-title">
                <strong className="text-lg lg:block hidden">{title}</strong>
              </div>
            </div>
          </div>
          <div
            ref={menuRef}
            className={`lg:bg-transparent bg-neutral-800 lg:p-0 p-4 ${
              isOpen ? "block" : "lg:block hidden"
            } lg:relative absolute lg:right-0 right-7 lg:top-0 top-16 rounded-lg`}
          >
            <ul className="navbar-menu flex lg:flex-row flex-col lg:items-center items-start text-left  gap-3 text-lg">
              {data &&
                data.map((item) => (
                  <li key={item.name}>
                    <Link
                      className="navbar-item w-full"
                      href={item.link}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <button
            className="text-2xl lg:hidden block p-2 rounded-md bg-neutral-800"
            onClick={toggleMenu}
          >
            <Icon icon="mdi:menu" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
