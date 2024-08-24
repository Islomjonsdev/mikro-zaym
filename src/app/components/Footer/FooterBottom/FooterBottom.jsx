import Link from "next/link";
import React from "react";
import { Icons } from "../../../SvgIcons/index";
import "./FooterBottom.scss";

const FooterBottom = () => {
  return (
    <div className="footer_bottom">
      <div className="footer_bottom_left">
        <div className="footer_bottom_left_wrapper">
          <div className="footer_bottom_left_info">
            <Link href={"/"}>
              <Icons.instagramm className="instagram" />
            </Link>
            <Link href={"/"}>
              <Icons.telegram className="telegram" />
            </Link>
            <Link href={"/"}>
              <Icons.facebook className="facebook" />
            </Link>
          </div>

          <p>© 2024 ООО «Банк «Get it».</p>
        </div>
      </div>

      <div className="footer_bottom_right">
          <p>Мобильное приложение:</p>
          <Link href={"/"}>
            <Icons.apple className="apple"/>
          </Link>
          <Link href={"/"}>
            <Icons.android className="android"/>
          </Link>
      </div>
    </div>
  );
};

export default FooterBottom;
