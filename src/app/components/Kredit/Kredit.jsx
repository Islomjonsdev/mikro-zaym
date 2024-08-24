"use client";

import React, { useState } from "react";
import EducationLoan from "./EducationLoan/EducationLoan";
import Online from "./Online/Online";
import "./Kredit.scss";

const Kredit = () => {
  const [tab, setTab] = useState("kredit");
  const [amount, setAmount] = useState(18);
  const [duration, setDuration] = useState(18);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleChangeDuration = (e) => {
    setDuration(e.target.value);
  };

  const monthlyPayment = 1100000;
  const interest = 100000;
  return (
    <section className="kredit">
      <div className="container">
        <Online />
        <div className="kredit_blog">
          <div className="kredit_left">
            <ul>
              <li
                className={tab === "default" ? "active" : ""}
                onClick={() => setTab("default")}
              >
                Микроқарз
              </li>
              <li
                className={tab === "maqul" ? "active" : ""}
                onClick={() => setTab("maqul")}
              >
                Маъқул ипотека
              </li>
              <li
                className={tab === "kredit" ? "active" : ""}
                onClick={() => setTab("kredit")}
              >
                Таълим кредит
              </li>
              <li
                className={tab === "avtokredit" ? "active" : ""}
                onClick={() => setTab("avtokredit")}
              >
                Автокредит
              </li>
              <li
                className={tab === "oson" ? "active" : ""}
                onClick={() => setTab("oson")}
              >
                Осон ипотека
              </li>
              <li
                className={tab === "istemol" ? "active" : ""}
                onClick={() => setTab("istemol")}
              >
                Истеъмол ипотека
              </li>
            </ul>

            <div>
              {tab === "default" && <div>Микроқарз</div>}

              {tab === "maqul" && <div>Маъқул ипотека</div>}

              {tab === "kredit" && (
                <EducationLoan
                  handleAmountChange={handleAmountChange}
                  handleChangeDuration={handleChangeDuration}
                  amount={amount}
                  duration={duration}
                />
              )}

              {tab === "avtokredit" && <div>Автокредит</div>}

              {tab === "oson" && <div>Oson ипотека</div>}

              {tab === "istemol" && <div>Истеъмол ипотека</div>}
            </div>
          </div>

          <div className="kredit_right">
            <div>
              <span>Ставка %</span>
              <p>10%</p>
            </div>
            <div>
              <span>Ойига неча пулдан</span>
              <p>{monthlyPayment}</p>
            </div>
            <div>
              <span>Ставка %</span>
              <p>{interest}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kredit;
