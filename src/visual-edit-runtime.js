const CHANNEL = 'openhands-visual-edit';
const VERSION = 1;

const TEXT_SIZE_CLASSES = [
  'text-xs',
  'text-sm',
  'text-base',
  'text-lg',
  'text-xl',
  'text-2xl',
  'text-3xl',
  'text-4xl',
  'text-5xl',
  'text-6xl',
  'text-7xl',
];

const TEXT_TAGS = new Set([
  'a',
  'button',
  'blockquote',
  'em',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'label',
  'li',
  'p',
  'small',
  'span',
  'strong',
]);

const state = {
  active: false,
  hovered: null,
  selected: null,
  changes: new Map(),
  hoverBox: null,
  selectedBox: null,
  toolbar: null,
  imageOverlay: null,
  styleNode: null,
};

function ensureStyle() {
  if (state.styleNode) return;

  state.styleNode = document.createElement('style');
  state.styleNode.textContent = `
    .oh-ve-hover-box,
    .oh-ve-selected-box,
    .oh-ve-image-overlay,
    .oh-ve-toolbar {
      box-sizing: border-box;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }
    .oh-ve-hover-box {
      position: fixed;
      z-index: 2147483000;
      pointer-events: none;
      border: 1px solid rgba(34, 197, 94, 0.95);
      background: rgba(34, 197, 94, 0.08);
      border-radius: 3px;
    }
    .oh-ve-selected-box {
      position: fixed;
      z-index: 2147483001;
      pointer-events: none;
      border: 1px solid rgba(25, 25, 25, 0.55);
      box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.75);
      border-radius: 3px;
    }
    .oh-ve-toolbar {
      position: fixed;
      z-index: 2147483003;
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 7px;
      border-radius: 4px;
      background: #2f2f2f;
      color: #fff;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.22);
    }
    .oh-ve-toolbar button,
    .oh-ve-toolbar label {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      border: 0;
      border-radius: 3px;
      background: transparent;
      color: #fff;
      cursor: pointer;
      font-size: 14px;
      font-weight: 700;
      line-height: 1;
    }
    .oh-ve-toolbar button:hover,
    .oh-ve-toolbar label:hover {
      background: rgba(255, 255, 255, 0.14);
    }
    .oh-ve-toolbar input[type="color"] {
      width: 0;
      height: 0;
      opacity: 0;
      position: absolute;
    }
    .oh-ve-image-overlay {
      position: fixed;
      z-index: 2147483002;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 48px;
      border: 1px solid rgba(255, 255, 255, 0.28);
      background: rgba(0, 0, 0, 0.68);
      color: #fff;
    }
    .oh-ve-image-action {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      border: 0;
      background: transparent;
      color: #fff;
      cursor: pointer;
      font-size: 14px;
      font-weight: 700;
    }
    .oh-ve-image-action span:first-child {
      font-size: 34px;
      line-height: 1;
    }
    [contenteditable="true"][data-visual-id] {
      outline: none;
      caret-color: currentColor;
    }
  `;
  document.head.appendChild(state.styleNode);
}

function postToParent(type, payload = {}) {
  window.parent?.postMessage(
    {
      channel: CHANNEL,
      version: VERSION,
      type,
      payload,
    },
    '*',
  );
}

function getEditableElement(target) {
  if (!(target instanceof Element)) return null;
  if (target.closest('.oh-ve-toolbar, .oh-ve-image-overlay')) return null;
  return target.closest('[data-visual-id]');
}

function isImageElement(element) {
  return element?.tagName?.toLowerCase() === 'img';
}

function isTextElement(element) {
  if (!element) return false;
  return TEXT_TAGS.has(element.tagName.toLowerCase());
}

function getRect(element) {
  const rect = element.getBoundingClientRect();
  return {
    left: rect.left,
    top: rect.top,
    width: rect.width,
    height: rect.height,
  };
}

function placeBox(box, element, padding = 0) {
  const rect = getRect(element);
  box.style.left = `${Math.max(0, rect.left - padding)}px`;
  box.style.top = `${Math.max(0, rect.top - padding)}px`;
  box.style.width = `${Math.max(0, rect.width + padding * 2)}px`;
  box.style.height = `${Math.max(0, rect.height + padding * 2)}px`;
}

function ensureHoverBox() {
  if (!state.hoverBox) {
    state.hoverBox = document.createElement('div');
    state.hoverBox.className = 'oh-ve-hover-box';
    document.body.appendChild(state.hoverBox);
  }
  return state.hoverBox;
}

function ensureSelectedBox() {
  if (!state.selectedBox) {
    state.selectedBox = document.createElement('div');
    state.selectedBox.className = 'oh-ve-selected-box';
    document.body.appendChild(state.selectedBox);
  }
  return state.selectedBox;
}

function hideHover() {
  if (state.hoverBox) state.hoverBox.style.display = 'none';
}

function hideSelected() {
  if (state.selectedBox) state.selectedBox.style.display = 'none';
}

function metadataFor(element) {
  return {
    id: element.dataset.visualId || '',
    file: element.dataset.sourceFile || '',
    line: Number(element.dataset.sourceLine || 0),
    column: Number(element.dataset.sourceColumn || 0),
    tagName: element.tagName.toLowerCase(),
  };
}

function patchFor(element, action = 'update') {
  const metadata = metadataFor(element);
  const patch = {
    ...metadata,
    action,
    className: element.getAttribute('class') || '',
  };

  if (isImageElement(element)) {
    patch.src = element.getAttribute('src') || '';
  } else if (isTextElement(element)) {
    patch.textContent = element.textContent || '';
  }

  if (element.style.color) {
    patch.style = { color: element.style.color };
  }

  return patch;
}

function recordPatch(element, action = 'update') {
  const patch = patchFor(element, action);
  if (!patch.id || !patch.file || !patch.line || !patch.column) {
    return;
  }
  state.changes.set(patch.id, patch);
}

function classListWithoutTextSize(classList) {
  return classList.filter((className) => !TEXT_SIZE_CLASSES.includes(className));
}

function setClassName(element, classList) {
  element.setAttribute('class', Array.from(new Set(classList)).join(' ').trim());
  recordPatch(element);
  updateSelectionUI();
}

function toggleBold() {
  const element = state.selected;
  if (!element) return;

  const classes = (element.getAttribute('class') || '').split(/\s+/).filter(Boolean);
  const hasBold = classes.includes('font-bold');
  setClassName(
    element,
    hasBold
      ? classes.filter((className) => className !== 'font-bold')
      : [...classes.filter((className) => !/^font-(normal|medium|semibold|bold)$/.test(className)), 'font-bold'],
  );
}

function stepTextSize(direction) {
  const element = state.selected;
  if (!element) return;

  const classes = (element.getAttribute('class') || '').split(/\s+/).filter(Boolean);
  const currentSize = classes.find((className) => TEXT_SIZE_CLASSES.includes(className));
  const currentIndex = currentSize ? TEXT_SIZE_CLASSES.indexOf(currentSize) : 2;
  const nextIndex = Math.max(0, Math.min(TEXT_SIZE_CLASSES.length - 1, currentIndex + direction));
  setClassName(element, [...classListWithoutTextSize(classes), TEXT_SIZE_CLASSES[nextIndex]]);
}

function setTextColor(color) {
  const element = state.selected;
  if (!element) return;

  element.style.color = color;
  recordPatch(element);
}

function ensureToolbar() {
  if (state.toolbar) return state.toolbar;

  const toolbar = document.createElement('div');
  toolbar.className = 'oh-ve-toolbar';
  toolbar.innerHTML = `
    <button type="button" data-action="bold" title="Bold">B</button>
    <button type="button" data-action="smaller" title="Smaller">A-</button>
    <button type="button" data-action="larger" title="Larger">A+</button>
    <label title="Text color">C<input type="color" data-action="color" /></label>
  `;
  toolbar.addEventListener('mousedown', (event) => {
    event.preventDefault();
    event.stopPropagation();
  });
  toolbar.addEventListener('click', (event) => {
    const action = event.target?.dataset?.action;
    if (action === 'bold') toggleBold();
    if (action === 'smaller') stepTextSize(-1);
    if (action === 'larger') stepTextSize(1);
  });
  toolbar.querySelector('[data-action="color"]').addEventListener('input', (event) => {
    setTextColor(event.target.value);
  });
  document.body.appendChild(toolbar);
  state.toolbar = toolbar;
  return toolbar;
}

function hideToolbar() {
  if (state.toolbar) state.toolbar.style.display = 'none';
}

function placeToolbar(element) {
  if (!isTextElement(element)) {
    hideToolbar();
    return;
  }

  const toolbar = ensureToolbar();
  const rect = getRect(element);
  toolbar.style.display = 'flex';
  const toolbarRect = toolbar.getBoundingClientRect();
  const left = Math.max(8, Math.min(window.innerWidth - toolbarRect.width - 8, rect.left));
  const top = Math.max(8, rect.top - toolbarRect.height - 10);
  toolbar.style.left = `${left}px`;
  toolbar.style.top = `${top}px`;
}

function ensureImageOverlay() {
  if (state.imageOverlay) return state.imageOverlay;

  const overlay = document.createElement('div');
  overlay.className = 'oh-ve-image-overlay';
  overlay.innerHTML = `
    <button type="button" class="oh-ve-image-action" data-action="replace">
      <span>↻</span><span>Replace</span>
    </button>
    <button type="button" class="oh-ve-image-action" data-action="remove">
      <span>×</span><span>Remove</span>
    </button>
  `;
  overlay.addEventListener('mousedown', (event) => {
    event.preventDefault();
    event.stopPropagation();
  });
  overlay.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    const action = button?.dataset?.action;
    const element = state.selected;
    if (!element) return;

    if (action === 'replace') {
      const nextSrc = window.prompt('Image URL', element.getAttribute('src') || '');
      if (nextSrc) {
        element.setAttribute('src', nextSrc);
        recordPatch(element);
      }
    }

    if (action === 'remove') {
      element.style.display = 'none';
      recordPatch(element, 'remove');
      clearSelection();
    }
  });
  document.body.appendChild(overlay);
  state.imageOverlay = overlay;
  return overlay;
}

function hideImageOverlay() {
  if (state.imageOverlay) state.imageOverlay.style.display = 'none';
}

function placeImageOverlay(element) {
  if (!isImageElement(element)) {
    hideImageOverlay();
    return;
  }

  const overlay = ensureImageOverlay();
  overlay.style.display = 'flex';
  placeBox(overlay, element);
}

function clearSelection() {
  if (state.selected) {
    state.selected.removeAttribute('contenteditable');
  }
  state.selected = null;
  hideSelected();
  hideToolbar();
  hideImageOverlay();
}

function selectElement(element) {
  if (state.selected && state.selected !== element) {
    state.selected.removeAttribute('contenteditable');
  }

  state.selected = element;
  const box = ensureSelectedBox();
  box.style.display = 'block';
  placeBox(box, element);
  placeToolbar(element);
  placeImageOverlay(element);

  if (isTextElement(element)) {
    element.setAttribute('contenteditable', 'true');
    element.focus({ preventScroll: true });
  }
}

function updateSelectionUI() {
  if (!state.selected) return;
  placeBox(ensureSelectedBox(), state.selected);
  placeToolbar(state.selected);
  placeImageOverlay(state.selected);
}

function handlePointerMove(event) {
  if (!state.active) return;

  const element = getEditableElement(event.target);
  if (!element || element === state.selected) {
    hideHover();
    return;
  }

  state.hovered = element;
  const hoverBox = ensureHoverBox();
  hoverBox.style.display = 'block';
  placeBox(hoverBox, element);
}

function handleClick(event) {
  if (!state.active) return;

  if (
    event.target instanceof Element &&
    event.target.closest('.oh-ve-toolbar, .oh-ve-image-overlay')
  ) {
    return;
  }

  const element = getEditableElement(event.target);
  if (!element) {
    clearSelection();
    return;
  }

  event.preventDefault();
  event.stopPropagation();
  selectElement(element);
}

function handleInput(event) {
  if (!state.active) return;
  const element = getEditableElement(event.target);
  if (!element || element !== state.selected || !isTextElement(element)) {
    return;
  }
  recordPatch(element);
  updateSelectionUI();
}

function handleScrollOrResize() {
  if (!state.active) return;
  if (state.hovered) placeBox(ensureHoverBox(), state.hovered);
  updateSelectionUI();
}

function enable() {
  if (state.active) return;

  ensureStyle();
  state.active = true;
  document.documentElement.dataset.visualEditMode = 'true';
  document.addEventListener('pointermove', handlePointerMove, true);
  document.addEventListener('click', handleClick, true);
  document.addEventListener('input', handleInput, true);
  window.addEventListener('scroll', handleScrollOrResize, true);
  window.addEventListener('resize', handleScrollOrResize);
  postToParent('visual-edit:ready');
}

function flushChanges() {
  const patches = Array.from(state.changes.values());
  state.changes.clear();
  postToParent('visual-edit:changes', { patches });
}

function disable() {
  if (!state.active) {
    flushChanges();
    return;
  }

  flushChanges();
  state.active = false;
  delete document.documentElement.dataset.visualEditMode;
  clearSelection();
  hideHover();
  document.removeEventListener('pointermove', handlePointerMove, true);
  document.removeEventListener('click', handleClick, true);
  document.removeEventListener('input', handleInput, true);
  window.removeEventListener('scroll', handleScrollOrResize, true);
  window.removeEventListener('resize', handleScrollOrResize);
}

window.addEventListener('message', (event) => {
  const message = event.data;
  if (!message || message.channel !== CHANNEL || message.version !== VERSION) {
    return;
  }

  if (message.type === 'visual-edit:enable') {
    enable();
  }

  if (message.type === 'visual-edit:disable') {
    disable();
  }

  if (message.type === 'visual-edit:request-changes') {
    flushChanges();
  }
});
