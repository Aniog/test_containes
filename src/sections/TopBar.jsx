import React from "react";
import { strings } from "../strings";
import { LogoMark } from "../icons.jsx";

export default function TopBar() {
  return (
    <header className="strk-topbar" role="banner">
      <div className="strk-container strk-topbar-inner">
        <a href="/" className="strk-logo" aria-label={`${strings.en.logoText} home`}>
          <LogoMark size={22} />
          <span style={{ marginInlineStart: 8 }}>
            <span style={{ color: "var(--color-brand-purple)" }}>strikingly</span>{" "}
            <span style={{ color: "var(--color-heading)" }}>{strings.en.logoSuffix}</span>
          </span>
        </a>
      </div>
    </header>
  );
}