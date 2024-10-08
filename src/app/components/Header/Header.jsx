"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import headerLogo from "../../../../public/svg/headerLogo.svg";
import "./Header.scss";
import HeaderBottom from "./HeaderBottom/HeaderBottom";

const Header = () => {
  const [open, setOPen] = useState(false);
  const sasa = () => {
    setOPen((prev) => !prev);
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header_blog">
          <div className="header_top">
            <div className="header_top_left">
              <Link href={""}>
                <Image src={headerLogo} alt={"headerLogo"} />
              </Link>

              <div>
                <Link href={"/"}>Для юр-лицо</Link>
                <Link href={"/"}>Для физ-лицо</Link>
              </div>
            </div>

            <div className="header_top_right">
              <ul>
                <li>
                  <Link href={"/"}>для слабовидящих</Link>
                </li>
                <li>
                  <Link href={"/langs"}>Курс валюта</Link>
                </li>
                <li>
                  <Link href={"/"}>Банкоматы</Link>
                </li>
              </ul>
              <div onClick={() => sasa(true)}>
                <p>русский</p>
              </div>
            </div>
          </div>
          <HeaderBottom />
        </div>
      </div>
      {open && <div>salom</div>}
    </header>
  );
};

export default Header;
