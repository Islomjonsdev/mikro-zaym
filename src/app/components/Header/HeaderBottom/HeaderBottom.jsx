"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import burgerIcon from "../../../../../public/svg/burger.svg";
import Modal from "../../Modal/Modal";
import "./HeaderBottom.scss";

const HeaderBottom = () => {
  const [ openModal, setOpenModal ] = useState(false)
  return (
    <>
      <div className="header_bottom">
        <div className="header_bottom_blog">
          <div className="header_bottom_wrapper">
            <div className="header_bottom_btn">
              <button onClick={() => setOpenModal(true)}>
                <Image src={burgerIcon} alt={"burgerIcon"} />
              </button>
            </div>
            <ul className="header_bottom_left">
              <li>
                <Link href={"/"}>для меня и семьи</Link>
              </li>
              <li>
                <Link href={"/"}>для бизнеса</Link>
              </li>
              <li>
                <Link href={"/"}>о нас</Link>
              </li>
              <li>
                <Link href={"/"}>медия</Link>
              </li>
              <li>
                <Link href={"/"}>кредиты</Link>
              </li>
              <li>
                <Link href={"/"}>вклады</Link>
              </li>
              <li>
                <Link href={"/"}>мобильное приложение</Link>
              </li>
              <li>
                <Link href={"/"}>карты</Link>
              </li>
              <li>
                <Link href={"/"}>переводы</Link>
              </li>
            </ul>
          </div>
          <div className="header_bottom_right">
            <div>
              <button className="fill_anket">Запольнить анкету</button>
              <button className="enter_class">вход в кабинет</button>
            </div>
            <Link href={"/"}>+998 90 123 - 45 - 67</Link>
            <Link className="email" href={"/"}>
              company@name.com
            </Link>
          </div>
        </div>
      </div>
      {openModal && (
        <Modal close={setOpenModal}>
            <div className="header_modal">
                Open Modal
            </div>
        </Modal>
      )}
    </>
  );
};

export default HeaderBottom;
