import Image from "next/image";
import Link from "next/link";
import React from "react";
import iphoneImage from "../../../../public/images/iphone.png";
import googlePlay from "../../../../public/svg/googlePlay.svg";
import appleStore from "../../../../public/svg/appleStore.svg";
import "./Mobile.scss";

const Mobile = () => {
  return (
    <section className="mobile">
      <div className="container">
        <div className="mobile_container">
          <div className="mobile_left">
            <h3>
              Cкачайте наше приложение и сделайте перевод до{" "}
              <span>5 миллионов </span> без <span>%</span>
            </h3>
            <p>
              Выбирайте удобную АЗС в приложении Яндекс Заправки, Карты или
              Навигатор, оплачивайте топливо на сумму от 1 500 ₽ картой или
              стикером ВТБ — скидка сработает моментально
            </p>
            <div className="play_wrapper">
              <Link href={"/"}>
                <Image src={googlePlay} alt={"googlePlay"} />
              </Link>
              <Link href={"/"}>
                <Image src={appleStore} alt={"appleStore"} />
              </Link>
            </div>
          </div>

          <div className="mobile_right">
            <Image src={iphoneImage} alt={"iphoneImage"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mobile;
