import Image from "next/image";
import warningIcon from "../../../../../public/svg/warn.svg";
import "./EducationLoan.scss";

const EducationLoan = ({handleAmountChange, handleChangeDuration, amount, duration}) => {
  return (
    <div className="education_loan">
      <div className="education_loan_wrapper">
        <div className="education_loan_info">
          <div>
            <span>{amount} млн</span>
            <span>76,4 млн</span>
          </div>
          <input
            type="range"
            min="18"
            max="76.4"
            step="0.1"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
        <div className="education_loan_info">
          <div>
            <span>{duration} месяц</span>
            <span>60 месяц</span>
          </div>
          <input
            type="range"
            value={duration}
            min="18"
            max="60"
            step="1"
            onChange={handleChangeDuration}
          />
        </div>
      </div>
      <div className="education_loan_warn">
        <Image src={warningIcon} alt={"warningIcon"} />
        <p>
          Диққат: Кредитнинг ҳақиқий миқдори ва шартлари калкулятор ҳисоблаш
          натижаларига боғлиқ эмас.
        </p>
      </div>
    </div>
  );
};

export default EducationLoan;
