import Image from "next/image";
import Link from "next/link";
import teleImage from "../../../../public/images/tele.png";
import "./News.scss";

const News = () => {
  const newsDataJson = [
    {
      newsData: "28.09.2024",
      newsText:
        "«Ориент Финанс» признан лучшим банком Узбекистана за 2020 год на фестивале по выборе самых лучщих бан...",
    },
    {
      newsData: "28.09.2024",
      newsText:
        "«Ориент Финанс» признан лучшим банком Узбекистана за 2020 год на фестивале по выборе самых лучщих бан...",
    },
    {
      newsData: "28.09.2024",
      newsText:
        "«Ориент Финанс» признан лучшим банком Узбекистана за 2020 год на фестивале по выборе самых лучщих бан...",
    },
    {
      newsData: "28.09.2024",
      newsText:
        "«Ориент Финанс» признан лучшим банком Узбекистана за 2020 год на фестивале по выборе самых лучщих бан...",
    },
  ];
  return (
    <section className="news">
      <div className="container">
        <div className="news_container">
          <h3>Новости</h3>

          <div className="news_blog">
            <ul>
              {newsDataJson?.map((card, index) => (
                <li key={index}>
                  <span>{card.newsData}</span>
                  <p>{card.newsText}</p>
                  <Link href={"/"}>подробнее</Link>
                </li>
              ))}
            </ul>
            <div className="news_right">
              <h4>Новостями в нашем телеграм каналане</h4>
              <Image src={teleImage} alt={"teleImage"} />
              <div>
                <button>Перейти</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
