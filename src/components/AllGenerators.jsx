import React, { useEffect, useMemo, useRef, useState } from "react";
import { strings } from "../strings";
import { generatorsByCategory, subsectionThumbIds } from "../data";
import { SearchIcon, THUMB_BY_ID } from "../icons";

const SHOW_VISIBLE_DEFAULT = 6;

function slug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function matchesQuery(item, q) {
  if (!q) return true;
  const needle = q.toLowerCase();
  return (
    item.name.toLowerCase().includes(needle) ||
    item.desc.toLowerCase().includes(needle) ||
    item.categoryLabel.toLowerCase().includes(needle)
  );
}

export default function AllGenerators() {
  const s = strings.en;
  const dir = s.directory;
  const subs = s.subsections;

  // Build a flat lookup so each card carries its category label for searching.
  const flat = useMemo(() => {
    const out = [];
    subs.forEach((sub) => {
      const items = generatorsByCategory[sub.id] || [];
      items.forEach((item) => {
        out.push({
          ...item,
          categoryId: sub.id,
          categoryLabel: sub.title,
          thumbId: subsectionThumbIds[sub.id],
        });
      });
    });
    return out;
  }, [subs]);

  const [query, setQuery] = useState("");
  // expanded[categoryId] = true means "show all" was clicked in that subsection
  const [expanded, setExpanded] = useState({});
  const searchInputRef = useRef(null);

  const trimmed = query.trim();
  const lower = trimmed.toLowerCase();
  const isSearching = lower.length > 0;

  // Per-category match lists
  const matchesByCat = useMemo(() => {
    const map = {};
    subs.forEach((sub) => {
      const items = (generatorsByCategory[sub.id] || []).map((it) => ({
        ...it,
        categoryId: sub.id,
        categoryLabel: sub.title,
        thumbId: subsectionThumbIds[sub.id],
      }));
      map[sub.id] = isSearching
        ? items.filter((it) => matchesQuery(it, lower))
        : items;
    });
    return map;
  }, [subs, lower, isSearching]);

  const totalMatches = useMemo(() => {
    if (!isSearching) return flat.length;
    return Object.values(matchesByCat).reduce((acc, list) => acc + list.length, 0);
  }, [matchesByCat, isSearching, flat.length]);

  const countLabel = isSearching
    ? (totalMatches === 1
        ? dir.countOne.replace("{n}", "1")
        : dir.countMany.replace("{n}", String(totalMatches)))
    : null;

  const onClear = () => {
    setQuery("");
    if (searchInputRef.current) searchInputRef.current.focus();
  };

  return (
    <section id="all-generators" className="section" aria-labelledby="all-generators-h2">
      <div className="container">
        <header className="section-heading">
          <h2 id="all-generators-h2" className="section-heading__h">{dir.heading}</h2>
          <p className="section-heading__sub">{dir.sub}</p>
        </header>

        <div className="search">
          <div className="search__input-row">
            <div className="search__input-wrap">
              <span className="search__icon" aria-hidden="true">
                <SearchIcon />
              </span>
              <input
                ref={searchInputRef}
                type="search"
                className="search__input"
                aria-label={dir.searchLabel}
                placeholder={dir.searchPlaceholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            {countLabel && (
              <span className="search__count" aria-live="polite">{countLabel}</span>
            )}
          </div>

          {isSearching && totalMatches === 0 && (
            <div className="search__empty" role="status">
              <p>{dir.emptyTitle}</p>
              <button type="button" className="btn btn--close" onClick={onClear}>
                {dir.emptyCta}
              </button>
              <p>
                <a href="/s/ai_site_builder">{dir.emptyHint}</a>
              </p>
            </div>
          )}
        </div>

        {subs.map((sub) => {
          const items = matchesByCat[sub.id] || [];
          if (isSearching && items.length === 0) return null;
          const isExpanded = !!expanded[sub.id] || isSearching;
          const Thumb = THUMB_BY_ID[sub.thumbId] || THUMB_BY_ID.site;
          const hasOverflow = items.length > SHOW_VISIBLE_DEFAULT;
          return (
            <section key={sub.id} id={sub.id} className="subsection" aria-label={sub.title}>
              <div className="subsection__head">
                <h3>{sub.title}</h3>
                <span className="subsection__count" aria-hidden="true">
                  {items.length} {items.length === 1 ? "generator" : "generators"}
                </span>
              </div>
              <p className="subsection__sub">{sub.sub}</p>
              <ul
                className={`gen-grid${hasOverflow && !isExpanded ? "" : " is-expanded"}`}
                role="list"
              >
                {items.map((item) => (
                  <li key={`${sub.id}-${item.slug}`}>
                    <article className="card card-link gen-card">
                      <a
                        className="gen-card__link"
                        href={`/generators/${item.slug}`}
                      >
                        <span className="gen-card__thumb" aria-hidden="true">
                          <Thumb />
                        </span>
                        <h4 className="gen-card__name">{item.name}</h4>
                        <p className="gen-card__desc">{item.desc}</p>
                      </a>
                    </article>
                  </li>
                ))}
              </ul>
              {hasOverflow && (
                <div className="show-all">
                  <button
                    type="button"
                    className="btn btn--close btn--sm"
                    aria-expanded={isExpanded}
                    aria-controls={`${sub.id}-show-all`}
                    onClick={() =>
                      setExpanded((m) => ({ ...m, [sub.id]: !m[sub.id] }))
                    }
                  >
                    {isExpanded
                      ? dir.showLess
                      : dir.showAll.replace("{n}", String(items.length))}
                  </button>
                </div>
              )}
            </section>
          );
        })}
      </div>
    </section>
  );
}