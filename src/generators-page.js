const strings = {
  en: {
    labels: {
      total: '61 generators total',
      matchSingular: 'generator matches',
      matchPlural: 'generators match',
      showAllPrefix: 'Show all',
      showAllSuffix: 'generators',
      showLess: 'Show fewer generators',
      empty: 'No generators match that search right now.',
      clearSearch: 'Clear search',
    },
  },
}

const initGeneratorsPage = () => {
  if (window.__STRK_GENERATORS_ENHANCED__) {
    return
  }

  const directorySections = Array.from(document.querySelectorAll('[data-directory-section]'))
  const faqButtons = Array.from(document.querySelectorAll('.faq-button'))
  const faqPanels = Array.from(document.querySelectorAll('.faq-panel'))

  if (!directorySections.length && !faqButtons.length) {
    return
  }

  window.__STRK_GENERATORS_ENHANCED__ = true
  document.documentElement.classList.add('js')

  const locale = strings.en
  const countLabel = document.getElementById('generator-count')
  const clearSearchButton = document.getElementById('clear-search')
  const emptyState = document.getElementById('search-empty-state')

  const sections = directorySections.map((section) => ({
    element: section,
    wrap: section.querySelector('.directory-grid-wrap'),
    grid: section.querySelector('.directory-grid'),
    toggle: section.querySelector('.show-all-button'),
    cards: Array.from(section.querySelectorAll('[data-card]')),
    threshold: Number(section.dataset.collapseAfter || 6),
    expanded: false,
  }))

  const getSearchInput = () => document.getElementById('generator-search')
  const getQuery = () => (getSearchInput()?.value || '').trim().toLowerCase()
  const getVisibleCards = (section) => section.cards.filter((card) => !card.hidden)
  let lastObservedQuery = ''

  const updateCountLabel = (matches, hasQuery) => {
    if (!countLabel) return
    if (!hasQuery) {
      countLabel.textContent = locale.labels.total
      return
    }

    const label = matches === 1 ? locale.labels.matchSingular : locale.labels.matchPlural
    countLabel.textContent = `${matches} ${label}`
  }

  const getCollapsedHeight = (section, visibleCards) => {
    const targetCard = visibleCards[Math.min(section.threshold, visibleCards.length) - 1]
    return targetCard ? targetCard.offsetTop + targetCard.offsetHeight : 0
  }

  const syncSectionHeight = (section, hasQuery) => {
    if (!section.wrap || !section.grid || !section.toggle) return

    const visibleCards = getVisibleCards(section)
    const hasMatches = visibleCards.length > 0
    const shouldShowToggle = !hasQuery && section.cards.length > section.threshold

    section.element.hidden = hasQuery && !hasMatches
    section.toggle.hidden = !shouldShowToggle

    if (shouldShowToggle) {
      section.toggle.textContent = section.expanded
        ? locale.labels.showLess
        : `${locale.labels.showAllPrefix} ${section.cards.length} ${locale.labels.showAllSuffix}`
      section.toggle.setAttribute('aria-expanded', String(section.expanded))
    }

    if (!hasMatches) {
      section.wrap.style.height = '0px'
      return
    }

    const nextHeight = hasQuery || section.expanded || visibleCards.length <= section.threshold
      ? section.grid.scrollHeight
      : getCollapsedHeight(section, visibleCards)

    section.wrap.style.height = `${nextHeight}px`
  }

  const syncAllSections = () => {
    const query = getQuery()
    const hasQuery = Boolean(query)
    let matchCount = 0
    lastObservedQuery = query

    sections.forEach((section) => {
      section.cards.forEach((card) => {
        const haystack = `${card.dataset.search || ''} ${card.dataset.category || ''}`.toLowerCase()
        const isMatch = !query || haystack.includes(query)
        card.hidden = !isMatch
        if (isMatch) {
          matchCount += 1
        }
      })
    })

    window.requestAnimationFrame(() => {
      sections.forEach((section) => syncSectionHeight(section, hasQuery))
      updateCountLabel(matchCount, hasQuery)
      if (emptyState) {
        emptyState.classList.toggle('is-visible', hasQuery && matchCount === 0)
      }
      document.documentElement.classList.add('directory-ready')

      if (hasQuery) {
        const hash = window.location.hash
        const hashTarget = hash ? document.querySelector(hash) : null
        if (hashTarget && !hashTarget.hidden) {
          hashTarget.scrollIntoView({ block: 'start' })
        }
      }
    })
  }

  const handleSearchChange = () => {
    syncAllSections()
  }

  const watchSearchValue = () => {
    const nextQuery = getQuery()
    if (nextQuery !== lastObservedQuery) {
      syncAllSections()
    }
  }

  const handleResize = () => {
    const hasQuery = Boolean(getQuery())
    window.requestAnimationFrame(() => {
      sections.forEach((section) => syncSectionHeight(section, hasQuery))
    })
  }

  window.__STRK_SYNC_GENERATORS__ = handleSearchChange

  sections.forEach((section) => {
    if (!section.toggle) return
    section.toggle.addEventListener('click', () => {
      section.expanded = !section.expanded
      syncSectionHeight(section, Boolean(getQuery()))
    })
  })

  document.addEventListener('input', (event) => {
    if (event.target?.id === 'generator-search') {
      handleSearchChange()
    }
  })

  document.addEventListener('keyup', (event) => {
    if (event.target?.id === 'generator-search') {
      handleSearchChange()
    }
  })

  document.addEventListener('change', (event) => {
    if (event.target?.id === 'generator-search') {
      handleSearchChange()
    }
  })

  document.addEventListener('search', (event) => {
    if (event.target?.id === 'generator-search') {
      handleSearchChange()
    }
  })

  clearSearchButton?.addEventListener('click', () => {
    const searchInput = getSearchInput()
    if (!searchInput) return
    searchInput.value = ''
    syncAllSections()
    searchInput.focus()
  })

  faqPanels.forEach((panel, index) => {
    panel.hidden = index !== 0
  })

  faqButtons.forEach((button, index) => {
    button.setAttribute('aria-expanded', String(index === 0))
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('aria-controls')
      const targetPanel = targetId ? document.getElementById(targetId) : null
      const willExpand = button.getAttribute('aria-expanded') !== 'true'

      faqButtons.forEach((otherButton) => {
        otherButton.setAttribute('aria-expanded', 'false')
      })

      faqPanels.forEach((panel) => {
        panel.hidden = true
      })

      button.setAttribute('aria-expanded', String(willExpand))
      if (targetPanel) {
        targetPanel.hidden = !willExpand
      }
    })
  })

  window.addEventListener('resize', handleResize)
  window.addEventListener('pageshow', syncAllSections)
  window.addEventListener('focus', watchSearchValue, true)
  document.addEventListener('visibilitychange', watchSearchValue)
  window.setInterval(watchSearchValue, 500)
  window.addEventListener('hashchange', () => {
    syncAllSections()
    window.requestAnimationFrame(() => {
      const hash = window.location.hash
      const target = hash ? document.querySelector(hash) : null
      if (target) {
        target.scrollIntoView({ block: 'start' })
      }
    })
  })

  syncAllSections()
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGeneratorsPage, { once: true })
} else {
  initGeneratorsPage()
}
