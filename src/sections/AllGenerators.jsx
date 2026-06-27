import React, { useEffect, useRef } from "react";
import { strings } from "../strings";
import { CATEGORIES, GENERATORS } from "../generators-data";
import { CategoryIllustration, MagnifierIcon } from "../icons.jsx";

const COLLAPSE_THRESHOLD = 6;

// Generate a stable per-card id we can use as a data-hook for the search script.
function cardId(slug) {
  return `gen-${slug}`;
}

export default function AllGenerators() {
  const rootRef = useRef(null);

  // Progressive enhancement:
  // - On mount, collapse every subsection grid beyond COLLAPSE_THRESHOLD cards.
  // - Add "Show all N generators" / "Show fewer" toggles.
  // - Wire the search input + result count + empty state.
  // Without JS, every card stays visible and the toggle doesn't render.
  useEffect(() => {
    if (typeof window === "undefined" || !rootRef.current) return;
    const root = rootRef.current;

    // -------- Show-all toggles --------
    const collapsibles = root.querySelectorAll("[data-strk-collapsible]");
    collapsibles.forEach((el) => {
      const total = parseInt(el.dataset.total || "0", 10);
      if (total <= COLLAPSE_THRESHOLD) return;

      // Compute the visible (collapsed) height so the mask fades into white.
      // We measure children positions: show first COLLAPSE_THRESHOLD rows fully.
      const items = Array.from(el.querySelectorAll("[data-strk-card]"));
      const visibleCount = COLLAPSE_THRESHOLD;
      let collapsedHeight = 0;
      for (let i = 0; i < Math.min(visibleCount, items.length); i++) {
        const rect = items[i].getBoundingClientRect();
        collapsedHeight = rect.bottom - el.getBoundingClientRect().top;
      }
      // Add a small breathing room so the last visible row isn't flush with the mask.
      collapsedHeight += 8;
      el.style.setProperty("--collapsible-collapsed-height", `${collapsedHeight}px`);
      el.dataset.collapsed = "true";

      const toggleId = el.dataset.toggleId;
      const toggle = root.querySelector(`[data-strk-toggle-for="${toggleId}"]`);
      if (toggle) {
        toggle.hidden = false;
        toggle.setAttribute("aria-expanded", "false");
        toggle.addEventListener("click", () => {
          const collapsed = el.dataset.collapsed === "true";
          if (collapsed) {
            el.style.maxHeight = `${el.scrollHeight}px`;
            el.dataset.collapsed = "false";
            toggle.setAttribute("aria-expanded", "true");
            toggle.textContent = strings.en.showLess;
          } else {
            el.style.maxHeight = `${collapsedHeight}px`;
            el.dataset.collapsed = "true";
            toggle.setAttribute("aria-expanded", "false");
            toggle.textContent = strings.en.showAllTpl(total);
          }
        });
      }
    });

    // -------- Search filter --------
    const input = root.querySelector("[data-strk-search]");
    const countEl = root.querySelector("[data-strk-search-count]");
    const emptyEl = root.querySelector("[data-strk-search-empty]");
    const clearBtn = root.querySelector("[data-strk-search-clear]");

    function escapeRegExp(s) {
      return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }

    function highlightText(node, query) {
      // Reset to plain text first
      if (node.dataset.strkOriginal == null) {
        node.dataset.strkOriginal = node.textContent;
      }
      if (!query) {
        node.textContent = node.dataset.strkOriginal;
        return;
      }
      const re = new RegExp(`(${escapeRegExp(query)})`, "ig");
      const parts = node.dataset.strkOriginal.split(re);
      node.innerHTML = parts
        .map((part) =>
          re.test(part) ? `<mark class="strk-mark">${part}</mark>` : part
        )
        .join("");
    }

    function applyFilter(query) {
      const q = (query || "").trim().toLowerCase();
      let totalMatches = 0;
      const subsections = root.querySelectorAll("[data-strk-subsection]");
      subsections.forEach((sub) => {
        const cards = Array.from(sub.querySelectorAll("[data-strk-card]"));
        let subMatches = 0;
        cards.forEach((card) => {
          const text = (card.dataset.searchText || "").toLowerCase();
          const match = !q || text.includes(q);
          card.dataset.hidden = match ? "false" : "true";
          if (match) subMatches += 1;
          if (match) totalMatches += 1;
          // Update highlight in the title
          const title = card.querySelector("[data-strk-card-title]");
          if (title) highlightText(title, q);
        });
        sub.dataset.hidden = subMatches > 0 ? "false" : "true";
      });

      if (countEl) {
        countEl.textContent = q
          ? strings.en.searchCountTpl(totalMatches)
          : "";
      }
      if (emptyEl) {
        emptyEl.dataset.visible = totalMatches === 0 && q ? "true" : "false";
      }
    }

    if (input) {
      input.addEventListener("input", (e) => applyFilter(e.target.value));
    }
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        if (input) input.value = "";
        applyFilter("");
        if (input) input.focus();
      });
    }

    // Re-measure collapsed heights when window resizes (only when collapsed)
    let resizeRaf = 0;
    const onResize = () => {
      cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(() => {
        collapsibles.forEach((el) => {
          if (el.dataset.collapsed === "true") {
            const items = Array.from(el.querySelectorAll("[data-strk-card]"));
            const visibleCount = COLLAPSE_THRESHOLD;
            let h = 0;
            for (let i = 0; i < Math.min(visibleCount, items.length); i++) {
              const r = items[i].getBoundingClientRect();
              h = r.bottom - el.getBoundingClientRect().top;
            }
            h += 8;
            el.style.setProperty("--collapsible-collapsed-height", `${h}px`);
            el.style.maxHeight = `${h}px`;
          }
        });
      });
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(resizeRaf);
    };
  }, []);

  return (
    <section id="all-generators" className="strk-section" aria-labelledby="all-heading">
      <div className="strk-container">
        <div className="strk-section-heading">
          <h2 id="all-heading">{strings.en.allEyebrow}</h2>
          <p>{strings.en.allSub}</p>
        </div>

        <div className="strk-search-meta" ref={rootRef}>
          <label className="strk-search" htmlFor="all-generators-search">
            <MagnifierIcon size={18} />
            <input
              id="all-generators-search"
              type="search"
              placeholder={strings.en.searchPlaceholder}
              aria-label={strings.en.searchLabel}
              data-strk-search
            />
          </label>
          <span className="strk-search-count" data-strk-search-count aria-live="polite"></span>
        </div>

        {/* Empty state — only visible when search yields zero matches. */}
        <div className="strk-empty" data-strk-search-empty aria-live="polite">
          <p>{strings.en.searchEmptyTitle}</p>
          <button type="button" className="strk-btn strk-btn--ghost strk-btn--standard" data-strk-search-clear>
            {strings.en.searchEmptyClear}
          </button>
          <a href="/s/ai_site_builder" className="strk-btn strk-btn--primary strk-btn--standard">
            {strings.en.searchEmptyFallback}
          </a>
        </div>

        {CATEGORIES.map((cat) => {
          const list = GENERATORS[cat.id] || [];
          const toggleId = `toggle-${cat.id}`;
          return (
            <article
              key={cat.id}
              id={cat.id}
              className="strk-subsection"
              data-strk-subsection
              data-category={cat.id}
            >
              <div className="strk-subsection-head">
                <h3>{strings.en[cat.labelKey]}</h3>
                <p>{strings.en[cat.descKey]}</p>
              </div>

              <div
                className="strk-collapsible-mask"
                data-strk-collapsible
                data-toggle-id={toggleId}
                data-total={list.length}
              >
                <div className="strk-grid strk-grid--3">
                  {list.map((g) => {
                    const text = `${g.name} ${g.desc} ${strings.en[cat.labelKey]}`.toLowerCase();
                    return (
                      <a
                        key={g.slug}
                        href={`/generators/${g.slug}`}
                        id={cardId(g.slug)}
                        className="strk-card"
                        data-strk-card
                        data-search-text={text}
                        data-category={cat.id}
                        aria-label={g.name}
                      >
                        <div className="strk-card-thumb">
                          <CategoryIllustration iconKey={cat.iconKey} />
                        </div>
                        <h3 className="strk-card-title" data-strk-card-title>
                          {g.name}
                        </h3>
                        <p className="strk-card-desc">{g.desc}</p>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="strk-toggle-row">
                <button
                  type="button"
                  className="strk-toggle"
                  data-strk-toggle-for={toggleId}
                  aria-controls={toggleId}
                  aria-expanded="false"
                  hidden
                >
                  {strings.en.showAllTpl(list.length)}
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}