import Link from "next/link";
import React from "react";
import "./Cards.scss";
import CardsList from "./CardsList/CardsList";

const Cards = () => {
  return (
    <section className="cards">
      <div className="container">
        <div className="cards_container">
          <div className="cards_top">
            <h2>
              «Ориент Финанс» признан лучшим банком Узбекистана за 2020 год
            </h2>
            <div>
              <p>
                Выбирайте удобную АЗС в приложении Яндекс Заправки, Карты или
                Навигатор, оплачивайте топливо на сумму от 1 500 ₽ картой или
                стикером ВТБ — скидка сработает моментально
              </p>
            </div>
            <Link href={"/"}>подробнее</Link>
          </div>

          <CardsList />
        </div>
      </div>
    </section>
  );
};

export default Cards;
