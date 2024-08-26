import Image from "next/image";
import React from "react";
import image1 from "../../../../../public/svg/image1.svg";
import image2 from "../../../../../public/svg/image2.svg";
import houseImage from "../../../../../public/svg/house.svg";
import keyImage from "../../../../../public/svg/key.svg";
import image3 from "../../../../../public/svg/image3.svg";
import moneyImage from "../../../../../public/svg/money.svg";
import "./CardsList.scss";

const CardsList = () => {
  const data = [
    {
      title: "Ипотечные кредиты",
      body: "Обновленный вклад на ваших условиях с возможностью получить надбавку",
      image: houseImage,
    },
    {
      title: "Автокредиты",
      body: "Обновленный вклад на ваших условиях с возможностью получить надбавку",
      image: keyImage,
    },
    {
      title: "Кредитные карты",
      body: "Обновленный вклад на ваших условиях с возможностью получить надбавку",
      image: image3,
    },
    {
      title: "Потребительские кредиты",
      body: "Обновленный вклад на ваших условиях с в",
      image: moneyImage,
    },
  ];
  return (
    <ul className="cards_list">
      <li className="cards_item">
        <div className="cards_list_left">
          <h3>Вклад в наш банк </h3>
          <p>
            Обновленный вклад на ваших условиях с возможностью получить надбавку
          </p>
          <div className="cards_list_left_span">
            <div>
              <span>до 19%</span>
              <p>Ставка</p>
            </div>
            <div>
              <span>От 1.000.000 uzs</span>
              <p>Сумма</p>
            </div>
          </div>
        </div>
        <Image src={image1} alt={"image1"} />
      </li>
      <li className="cards_item">
        <div className="cards_list_left">
          <h3>Дебетовая карта</h3>
          <p>Получайте кешбэк до 25% и +1 категорию за автопополнение карты</p>
          <div className="cards_list_left_span">
            <div>
              <span>до 25%</span>
              <p>Кешбэк</p>
            </div>
          </div>
        </div>
        <Image src={image2} alt={"image2"} />
      </li>
      {data?.map((item, index) => (
        <li className="cards_item_grid" key={index}>
          <h4>{item?.title}</h4>
          <p>{item?.body}</p>
          <div>
            <Image src={item?.image} alt={"image"} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CardsList;
