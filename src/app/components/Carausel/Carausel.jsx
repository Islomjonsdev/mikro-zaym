"use client"

import Image from "next/image";
import React, { useRef } from "react";
import leftIcon from "../../../../public/svg/left.svg";
import rightIcon from "../../../../public/svg/right.svg";
import "./Carausel.scss";

const Carausel = () => {
  const carauselData = [
    {
      cardsPersentage: "8,2%",
      cardsTitle: "Наслаждайтесь летом в собственном доме со ставкой от ",
    },
    {
      cardsPersentage: "5,9%",
      cardsTitle: "Кредит наличными по ставке ",
    },
    {
      cardsPersentage: "5,5%",
      cardsTitle:
        " Отличная ставка   — как ни крути Автокредит на новое авто или с пробегом",
    },
    {
      cardsPersentage: "7%",
      cardsTitle:
        " Отличная ставка   — как ни крути Автокредит на новое авто или с пробегом",
    },
    {
      cardsPersentage: "3,5%",
      cardsTitle:
        " Отличная ставка   — как ни крути Автокредит на новое авто или с пробегом",
    },
    {
      cardsPersentage: "8,2%",
      cardsTitle: "Наслаждайтесь летом в собственном доме со ставкой от ",
    },
    {
      cardsPersentage: "5,9%",
      cardsTitle: "Кредит наличными по ставке ",
    },
    {
      cardsPersentage: "5,5%",
      cardsTitle:
        " Отличная ставка   — как ни крути Автокредит на новое авто или с пробегом",
    },
    {
      cardsPersentage: "7%",
      cardsTitle:
        " Отличная ставка   — как ни крути Автокредит на новое авто или с пробегом",
    },
    {
      cardsPersentage: "3,5%",
      cardsTitle:
        " Отличная ставка   — как ни крути Автокредит на новое авто или с пробегом",
    },
  ];

  const carauselListRef = useRef(null);

  const handleScrollLeft = () => {
    if (carauselListRef.current) {
      carauselListRef.current.scrollBy({ left: -305, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (carauselListRef.current) {
      carauselListRef.current.scrollBy({ left: 305, behavior: "smooth" });
    }
  };
  
  return (
    <section className="carausel">
      <div className="container">
        <div className="carausel_blog">
          <ul className="carausel_list" ref={carauselListRef}>
            {carauselData?.map((cards, index) => {
              const { cardsPersentage, cardsTitle } = cards;
              return (
                <li key={index}>
                  <span>{cardsPersentage}</span>
                  <p>{cardsTitle}</p>
                </li>
              );
            })}
          </ul>
          <div className="carausel_btn_blog">
            <button onClick={handleScrollLeft}>
              <Image src={leftIcon} alt={"leftIcon"} />
            </button>
            <button onClick={handleScrollRight}>
              <Image src={rightIcon} alt={"rightIcon"} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carausel;
