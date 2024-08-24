import Image from "next/image";
import React from "react";
import downIcon from "../../../../../public/svg/down.svg";
import topIcon from "../../../../../public/svg/top.svg";
import "./BankExchange.scss";

const BankExchange = () => {
  const bankExchangeData = [
    {
      symbol: "$",
      buyRate: "12 341.00 uzs",
      sellRate: "12 234.00 uzs",
      buyTrend: downIcon,
      sellTrend: topIcon,
    },
    {
      symbol: "€",
      buyRate: "12 341.00 uzs",
      sellRate: "12 234.00 uzs",
      buyTrend: downIcon,
      sellTrend: downIcon,
    },
    {
      symbol: "₽",
      buyRate: "12 341.00 uzs",
      sellRate: "12 234.00 uzs",
      buyTrend: downIcon,
      sellTrend: downIcon,
    },
    {
      symbol: "₸",
      buyRate: "12 341.00 uzs",
      sellRate: "12 234.00 uzs",
      buyTrend: downIcon,
      sellTrend: downIcon,
    },
  ];
  return (
    <div className="bank_exchange">
      <div className="bank_exchange_header">
        <h3>Курс валют</h3>
      </div>
      <ul>
        {bankExchangeData?.map((currency, index) => {
          return (
            <li key={index}>
              <span className="bank_exchange_symbol">{currency.symbol}</span>
              <div>
                <p>Покупка:</p>
                <span className="bank_exchange_rating">{currency.buyRate}</span>
                <Image src={currency.buyTrend} width={16} height={16} alt={"buyTrend"}/>
              </div>
              <div>
                <p>Продажа:</p>
                <span className="bank_exchange_rating">{currency.buyRate}</span>
                <Image src={currency.sellTrend} width={16} height={16} alt={"buyTrend"}/>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BankExchange;
