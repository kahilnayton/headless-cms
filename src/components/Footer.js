import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

import Amazon from "../Icons/Amazon";
import Koala from "../Icons/Koala";
import Monk from "../Icons/Monk";
import Goose from "../Icons/Goose";
import Roo from "../Icons/Roo";
import Spotify from "../Icons/Spotify";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="page-footer">
      <div className="page-footer__inner">
        <div className="page-footer__top">
          <div className="page-footer__logo">
            <a href="#" className="logo">
              <Goose fill="#FFFFFF" />
            </a>
          </div>
          <ul className="page-footer__nav"></ul>
          <div className="page-footer__bottom">
            <ul className="page-footer__social">
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Amazon className="logo" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Monk className="logo" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Roo className="logo" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Spotify className="logo" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
