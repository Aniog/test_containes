import React from "react";

// Slim announcement bar that sits above the navbar on the home page only.
export default function AnnouncementBar() {
  return (
    <div className="bg-cocoa text-ivory-light text-[10px] md:text-[11px] uppercase tracking-[0.25em]">
      <div className="mx-auto max-w-wide px-5 md:px-8 lg:px-12 h-9 md:h-10 flex items-center justify-center text-center">
        <span>
          Complimentary shipping on orders over $75 · <span className="text-gold-soft">Free gift with every order</span>
        </span>
      </div>
    </div>
  );
}
