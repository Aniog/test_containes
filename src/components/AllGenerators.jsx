import React, { useEffect, useRef } from 'react';
import { categories, allGenerators, strings } from '../data/generators';
import { CategoryIcon, SearchIcon } from './Icons';

const s = strings.en;
const INITIAL_VISIBLE = 6;

function GeneratorCard({ generator, categoryId }) {
  return (
    <a
      href={`${s.generatorsPath}/${generator.slug}`}
      className="card generator-card group block"
      data-name={generator.name.toLowerCase()}
      data-description={generator.description.toLowerCase()}
      data-category={categoryId}
    >
      <div className="mb-[10px]">
        <CategoryIcon id={categoryId} />
      </div>
      <p
        className="text-[14px] text-heading-dark font-heading font-bold mb-[4px] leading-snug"
      >
        {generator.name}
      </p>
      <p className="text-body-gray text-[12px] leading-[1.5]">{generator.description}</p>
    </a>
  );
}

function CategorySection({ category, generators }) {
  const hasMore = generators.length > INITIAL_VISIBLE;
  const visibleGenerators = generators.slice(0, INITIAL_VISIBLE);
  const hiddenGenerators = generators.slice(INITIAL_VISIBLE);
  const showAllId = `show-all-${category.id}`;
  const containerId = `container-${category.id}`;

  return (
    <div className="mb-[30px]" data-category-section={category.id}>
      <h3 className="text-[16px] md:text-[18px] text-heading-gray mb-[6px]">
        {category.name}
      </h3>
      <p className="text-body-gray text-[13px] mb-[16px]">
        {category.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
        {visibleGenerators.map((gen) => (
          <GeneratorCard
            key={gen.slug}
            generator={gen}
            categoryId={category.id}
          />
        ))}
      </div>

      {hasMore && (
        <>
          <div
            id={containerId}
            className="show-all-container"
            aria-hidden="true"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[20px]">
              {hiddenGenerators.map((gen) => (
                <GeneratorCard
                  key={gen.slug}
                  generator={gen}
                  categoryId={category.id}
                />
              ))}
            </div>
          </div>
          <div className="mt-[16px] text-center js-show-toggle">
            <button
              type="button"
              id={showAllId}
              className="btn-secondary text-[12px]"
              aria-expanded="false"
              aria-controls={containerId}
              data-show-all-btn={category.id}
            >
              {s.showAllLabel(generators.length)}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default function AllGenerators() {
  const searchRef = useRef(null);
  const resultCountRef = useRef(null);
  const noResultsRef = useRef(null);
  const directoryRef = useRef(null);

  useEffect(() => {
    const dir = directoryRef.current;
    if (!dir) return;

    // Progressive collapse: add .collapsible class so CSS hides extra cards
    dir.querySelectorAll('.show-all-container').forEach((el) => {
      el.classList.add('collapsible');
    });

    // Show toggle buttons (hidden by default CSS for JS-off baseline)
    dir.querySelectorAll('.js-show-toggle').forEach((el) => {
      el.classList.add('js-active');
    });

    // Search filter
    const searchInput = searchRef.current;
    const handleSearch = () => {
      if (!searchInput) return;
      const query = searchInput.value.toLowerCase().trim();
      const sections = dir.querySelectorAll('[data-category-section]');
      let matchCount = 0;

      sections.forEach((section) => {
        const cards = section.querySelectorAll('.card[data-name]');
        let sectionHasMatch = false;

        cards.forEach((card) => {
          const name = card.getAttribute('data-name') || '';
          const desc = card.getAttribute('data-description') || '';
          const cat = card.getAttribute('data-category') || '';
          const matches = !query || name.includes(query) || desc.includes(query) || cat.includes(query);

          if (matches) {
            card.style.removeProperty('display');
            matchCount++;
            sectionHasMatch = true;
          } else {
            card.style.display = 'none';
          }
        });

        if (sectionHasMatch || !query) {
          section.style.removeProperty('display');
        } else {
          section.style.display = 'none';
        }

        // When searching, expand collapsed containers to reveal matches
        const extraContainer = section.querySelector('.show-all-container');
        if (extraContainer) {
          if (query && sectionHasMatch) {
            extraContainer.classList.add('expanded');
            extraContainer.setAttribute('aria-hidden', 'false');
          } else if (!query) {
            extraContainer.classList.remove('expanded');
            extraContainer.setAttribute('aria-hidden', 'true');
            // Reset Show All buttons
            const btn = section.querySelector('[data-show-all-btn]');
            if (btn) {
              btn.setAttribute('aria-expanded', 'false');
              const total = extraContainer.querySelectorAll('.card').length + INITIAL_VISIBLE;
              btn.textContent = s.showAllLabel(total);
            }
          }
        }
      });

      if (resultCountRef.current) {
        resultCountRef.current.textContent = query ? s.resultCount(matchCount) : '';
      }

      if (noResultsRef.current) {
        noResultsRef.current.style.display = query && matchCount === 0 ? '' : 'none';
      }
    };

    if (searchInput) searchInput.addEventListener('input', handleSearch);

    // Show All toggles
    const buttons = dir.querySelectorAll('[data-show-all-btn]');
    const handleClick = (e) => {
      const btn = e.currentTarget;
      const catId = btn.getAttribute('data-show-all-btn');
      const container = dir.querySelector(`#container-${catId}`);
      if (!container) return;

      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        container.classList.remove('expanded');
        container.setAttribute('aria-hidden', 'true');
        btn.setAttribute('aria-expanded', 'false');
        const total = container.querySelectorAll('.card').length + INITIAL_VISIBLE;
        btn.textContent = s.showAllLabel(total);
      } else {
        container.classList.add('expanded');
        container.setAttribute('aria-hidden', 'false');
        btn.setAttribute('aria-expanded', 'true');
        btn.textContent = s.hideAllLabel();
      }
    };

    buttons.forEach((btn) => btn.addEventListener('click', handleClick));

    return () => {
      if (searchInput) searchInput.removeEventListener('input', handleSearch);
      buttons.forEach((btn) => btn.removeEventListener('click', handleClick));
    };
  }, []);

  return (
    <section id="all-generators" className="bg-white section-padding">
      <div className="section-container">
        <div className="text-center mb-[30px]">
          <h2 className="text-[22px] md:text-[28px] text-heading-gray mb-[10px]">
            {s.allGeneratorsHeading}
          </h2>
          <p className="text-body-gray text-[14px]">
            {s.allGeneratorsSubheading}
          </p>
        </div>

        {/* Search input */}
        <div className="flex flex-col items-center mb-[30px]">
          <div className="relative w-full max-w-[480px]">
            <div className="absolute left-[12px] top-1/2 -translate-y-1/2 pointer-events-none">
              <SearchIcon />
            </div>
            <input
              ref={searchRef}
              type="search"
              placeholder={s.searchPlaceholder}
              aria-label="Search generators"
              className="w-full h-[44px] pl-[40px] pr-[16px] border border-card-border rounded-card text-[14px] font-body text-heading-dark placeholder:text-card-border focus:border-brand-purple focus:outline-none transition-colors"
            />
          </div>
          <p
            ref={resultCountRef}
            className="text-body-gray text-[13px] mt-[8px] h-[20px]"
            aria-live="polite"
          ></p>
        </div>

        {/* No results */}
        <div ref={noResultsRef} className="hidden text-center py-[40px]">
          <p className="text-heading-gray text-[16px] font-heading font-bold mb-[10px]">
            {s.noResultsHeading}
          </p>
          <p className="text-body-gray text-[14px] mb-[16px]">
            {s.noResultsCta}
          </p>
          <a href={s.builderPath} className="btn-primary">
            START WITH AI BUILDER
          </a>
        </div>

        {/* Category subsections */}
        <div ref={directoryRef}>
          {categories.map((cat) => (
            <CategorySection
              key={cat.id}
              category={cat}
              generators={allGenerators[cat.id] || []}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
