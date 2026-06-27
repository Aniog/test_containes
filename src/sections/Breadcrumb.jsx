import React from "react";
import { strings } from "../strings";

export default function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="strk-breadcrumb">
      <div className="strk-container">
        <ol>
          <li>
            <a href="/">{strings.en.breadcrumbHome}</a>
          </li>
          <li>
            <span aria-current="page">{strings.en.breadcrumbCurrent}</span>
          </li>
        </ol>
      </div>
    </nav>
  );
}