"use client";

import React, { useState } from "react";
import EducationLoan from "./EducationLoan/EducationLoan";
import "./Kredit.scss";

const Kredit = () => {
  const [tab, setTab] = useState("kredit");

  return (
    <section className="kredit">
      <div className="container">
        <div className="kredit_blog">
          <div className="kredit_left">
            <div className="kredit_header">
              <h3>Онлайн заявка кредитов</h3>
            </div>

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

              {tab === "kredit" && <EducationLoan />}

              {tab === "avtokredit" && <div>Автокредит</div>}

              {tab === "oson" && <div>Oson ипотека</div>}

              {tab === "istemol" && <div>Истеъмол ипотека</div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kredit;
