import Link from "next/link";
import React from "react";
import "./Footer.scss";
import FooterBottom from "./FooterBottom/FooterBottom";

const Footer = () => {
  const footerTopData = [
    {
      number: "0570",
      email: "Колл-центр",
    },
    {
      number: "+998 90 123 - 45 - 67",
      email: "Телефон доверия:",
    },
    {
      number: "company@name.com",
      email: "Эллектрон почта:",
    },
  ];
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_blog">
          <div className="footer_top">
            <div className="footer_top_left">
              {footerTopData?.map((item, index) => {
                return (
                  <div key={index}>
                    <Link href={"/"}>{item?.number}</Link>
                    <p>{item?.email}</p>
                  </div>
                );
              })}
            </div>

            <ul className="footer_top_right">
              <li className="footer_right_item">
                <h3>Частным лицам</h3>
                <ul className="footer_right_list">
                  <li className="footer_right_item">
                    <Link href={"/"}>Партнеры</Link>
                  </li>
                  <li className="footer_right_item">
                    <Link href={"/"}>Карты</Link>
                  </li>
                  <li className="footer_right_item">
                    <Link href={"/"}>Вклады</Link>
                  </li>
                  <li className="footer_right_item">
                    <Link href={"/"}>Международные переводы</Link>
                  </li>
                  <li className="footer_right_item">
                    <Link href={"/"}>Пользовательское соглашение</Link>
                  </li>
                </ul>
              </li>
              <li className="footer_right_item">
                <h3>Бизнесу</h3>

                <ul className="footer_right_list">
                  <li className="footer_right_item">
                    <Link href={"/"}>Расчетное обслуживание</Link>
                  </li>
                  <li className="footer_right_item">
                    <Link href={"/"}>Карты</Link>
                  </li>
                  <li className="footer_right_item">
                    <Link href={"/"}>Кредиты</Link>
                  </li>
                  <li className="footer_right_item">
                    <Link href={"/"}>Депозиты</Link>
                  </li>
                </ul>
              </li>
              <li className="footer_right_item">
                <h3>Услуги</h3>

                <ul className="footer_right_list">
                  <li className="footer_right_item">
                    <Link href={"/"}>Автокредит</Link>
                  </li>
                  <li className="footer_right_item">
                    <Link href={"/"}>Ипотека</Link>
                  </li>
                  <li className="footer_right_item">
                    <Link href={"/"}>Потребительские кредиты</Link>
                  </li>
                  <li className="footer_right_item">
                    <Link href={"/"}>Дебетовая карта</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
