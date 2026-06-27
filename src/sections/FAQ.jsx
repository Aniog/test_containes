import React, { useEffect, useRef } from "react";
import { strings } from "../strings";
import { PlusIcon } from "../icons.jsx";

export default function FAQ() {
  const ref = useRef(null);
  const items = strings.en.faqItems;

  useEffect(() => {
    if (!ref.current || typeof window === "undefined") return;
    const root = ref.current;
    const buttons = root.querySelectorAll("[data-strk-faq-button]");
    buttons.forEach((btn) => {
      const panelId = btn.getAttribute("aria-controls");
      const panel = panelId && root.querySelector(`#${panelId}`);
      if (!panel) return;
      // Set initial state from aria-expanded
      const initiallyOpen = btn.getAttribute("aria-expanded") === "true";
      if (initiallyOpen) {
        panel.style.maxHeight = `${panel.scrollHeight}px`;
        panel.dataset.open = "true";
      } else {
        panel.style.maxHeight = "0px";
        panel.dataset.open = "false";
      }
      btn.addEventListener("click", () => {
        const open = btn.getAttribute("aria-expanded") === "true";
        if (open) {
          panel.style.maxHeight = "0px";
          panel.dataset.open = "false";
          btn.setAttribute("aria-expanded", "false");
        } else {
          panel.style.maxHeight = `${panel.scrollHeight}px`;
          panel.dataset.open = "true";
          btn.setAttribute("aria-expanded", "true");
        }
      });
    });
    // Recompute on resize for open panels
    let raf = 0;
    const onResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        buttons.forEach((btn) => {
          const panelId = btn.getAttribute("aria-controls");
          const panel = panelId && root.querySelector(`#${panelId}`);
          if (panel && btn.getAttribute("aria-expanded") === "true") {
            panel.style.maxHeight = `${panel.scrollHeight}px`;
          }
        });
      });
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="strk-section" aria-labelledby="faq-heading">
      <div className="strk-container">
        <div className="strk-section-heading">
          <h2 id="faq-heading">{strings.en.faqEyebrow}</h2>
        </div>
        <div className="strk-faq-list" ref={ref}>
          {items.map((item, idx) => {
            const panelId = `faq-panel-${idx}`;
            const initiallyOpen = idx === 0;
            return (
              <div key={item.q} className="strk-faq-item">
                <button
                  type="button"
                  className="strk-faq-button"
                  id={`faq-button-${idx}`}
                  aria-expanded={initiallyOpen ? "true" : "false"}
                  aria-controls={panelId}
                  data-strk-faq-button
                >
                  <span>{item.q}</span>
                  <span className="strk-faq-icon" aria-hidden="true">
                    <PlusIcon size={12} color="#8159BB" />
                  </span>
                </button>
                <div
                  className="strk-faq-panel"
                  id={panelId}
                  role="region"
                  aria-labelledby={`faq-button-${idx}`}
                >
                  <div className="strk-faq-panel-inner">
                    {item.a.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}