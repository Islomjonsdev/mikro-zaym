import Image from "next/image";
import React from "react";
import cardImage from "../../../../public/images/cardImg.png";
import "./Bank.scss";
import BankExchange from "./BankExchange/BankExchange";

const Bank = () => {
  const bankLeftData = [
    {
      rating: "200+",
      position: "Ваканции",
    },
    {
      rating: "Топ 10 банк",
      position: "В Узбекистане",
    },
  ];
  return (
    <section className="bank">
      <div className="container">
        <div className="bank_container">
          <div className="bank_left">
            <div className="bakn_left_header">
              <h3>Присоединяйтесь и cтаньте частью нашего банка</h3>
              <p>
                Endilikda, siz shartnoma tuzish uchun hamkoringiz bilan
                yuzma-yuz uchrashishingiz{" "}
              </p>
            </div>
            <div className="bakn_left_body">
              {bankLeftData?.map((item, index) => (
                <div className="bakn_left_body_item" key={index}>
                  <span>{item?.rating}</span>
                  <p>{item?.position}</p>
                </div>
              ))}
            </div>
            <div className="bakn_left_img">
              <Image src={cardImage} alt={cardImage} />
            </div>
          </div>
          <BankExchange />
        </div>
      </div>
    </section>
  );
};

export default Bank;
