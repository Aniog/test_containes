import React from "react";
import { strings } from "../strings";

export default function TopBar() {
  const s = strings.en;
  return (
    <header className="topbar">
      <div className="container topbar__inner">
        <a className="topbar__logo" href="/" aria-label={`${s.brand.logo} ${s.brand.logoAi} home`}>
          {s.brand.logo}
          <span className="topbar__logo-ai"> {s.brand.logoAi}</span>
        </a>
      </div>
    </header>
  );
}