import React from "react";
import { strings } from "../../data/strings";

export default function TopBar() {
  const s = strings.en;
  return (
    <header className="topbar" role="banner">
      <div className="container">
        <span className="topbar-logo">{s.logo}</span>
      </div>
    </header>
  );
}
