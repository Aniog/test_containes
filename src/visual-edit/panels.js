import { TEXT_SIZE_CLASSES } from './constants.js';
import { state } from './state.js';
import { metadataFor, recordPatch } from './patches.js';
import {
  classListWithoutTextSize,
  getClassList,
  replaceClassByPattern,
  setBackgroundColor,
  setClassName,
  setElementClasses,
  setElementText,
  setOpacity,
  setTextColor,
} from './actions.js';

let updateSelectionUI = () => {};

export function setPanelUpdateCallback(callback) {
  updateSelectionUI = callback;
}

export function hidePopover() {
  state.activePanel = null;
  if (state.popover) state.popover.style.display = 'none';
  if (state.toolbar) {
    state.toolbar
      .querySelectorAll('[data-panel]')
      .forEach((button) => button.classList.remove('oh-ve-tool-active'));
  }
}

function ensurePopover() {
  if (!state.popover) {
    state.popover = document.createElement('div');
    state.popover.className = 'oh-ve-popover';
    state.popover.addEventListener('mousedown', (event) => {
      event.stopPropagation();
    });
    state.popover.addEventListener('click', handlePopoverClick);
    state.popover.addEventListener('input', handlePopoverInput);
    state.popover.addEventListener('change', handlePopoverInput);
    document.body.appendChild(state.popover);
  }
  return state.popover;
}

export function placePopover(anchor) {
  const popover = ensurePopover();
  const anchorRect = anchor.getBoundingClientRect();
  const popoverRect = popover.getBoundingClientRect();
  const left = Math.max(
    12,
    Math.min(
      window.innerWidth - popoverRect.width - 12,
      anchorRect.left + anchorRect.width / 2 - popoverRect.width / 2
    )
  );
  const top = Math.min(
    window.innerHeight - popoverRect.height - 12,
    anchorRect.bottom + 10
  );
  popover.style.left = `${left}px`;
  popover.style.top = `${Math.max(12, top)}px`;
}

function getColorValue(panel) {
  const element = state.selected;
  if (!element) return '#111827';
  if (panel === 'background') {
    return element.style.backgroundColor || '#ffffff';
  }
  return element.style.color || '#111827';
}

function normalizeHexColor(value) {
  if (!value || value.startsWith('#')) return value || '#111827';
  const temp = document.createElement('span');
  temp.style.color = value;
  document.body.appendChild(temp);
  const computed = getComputedStyle(temp).color;
  temp.remove();
  const match = computed.match(/\d+/g);
  if (!match) return '#111827';
  return `#${match
    .slice(0, 3)
    .map((part) => Number(part).toString(16).padStart(2, '0'))
    .join('')}`;
}

function colorPanelHtml(panel) {
  const value = normalizeHexColor(getColorValue(panel));
  const clearBackgroundButton =
    panel === 'background'
      ? `
        <button
          type="button"
          class="oh-ve-clear-color"
          data-action="palette"
          data-panel="background"
          data-color="transparent"
          title="Remove background color"
        ></button>
      `
      : '';

  return `
    <div class="oh-ve-color-card">
      <div class="oh-ve-color-hint">Click to change color</div>
      <input
        class="oh-ve-direct-color-picker"
        type="color"
        data-action="set-color"
        data-panel="${panel}"
        value="${value}"
      />
      <div class="oh-ve-direct-color-actions">
        ${clearBackgroundButton}
        <input
          class="oh-ve-color-input"
          type="text"
          data-action="set-color-text"
          data-panel="${panel}"
          value="${value}"
        />
      </div>
    </div>
  `;
}

function textContentPanelHtml() {
  return `
    <h3>Text Content</h3>
    <textarea data-action="text-content">${state.selected?.textContent || ''}</textarea>
  `;
}

function textStylePanelHtml() {
  const classes = getClassList();
  const size =
    classes.find((className) => TEXT_SIZE_CLASSES.includes(className)) ||
    'text-base';
  const weight =
    classes.find((className) => /^font-/.test(className)) || 'font-semibold';

  return `
    <h3>Text Style</h3>
    <div class="oh-ve-panel-row">
      <span>Size</span>
      <select class="oh-ve-pill-input" data-action="text-size">
        ${TEXT_SIZE_CLASSES.map(
          (className) =>
            `<option value="${className}" ${className === size ? 'selected' : ''}>${className.replace('text-', '')}</option>`
        ).join('')}
      </select>
    </div>
    <div class="oh-ve-panel-row">
      <span>Weight</span>
      <select class="oh-ve-pill-input" data-action="font-weight">
        ${['font-normal', 'font-medium', 'font-semibold', 'font-bold']
          .map(
            (className) =>
              `<option value="${className}" ${className === weight ? 'selected' : ''}>${className.replace('font-', '').replace('-', ' ')}</option>`
          )
          .join('')}
      </select>
    </div>
    <div class="oh-ve-panel-row">
      <span>Decoration</span>
      <div class="oh-ve-segment">
        <button type="button" data-action="toggle-class" data-class="underline">U</button>
        <button type="button" data-action="toggle-class" data-class="line-through">abc</button>
      </div>
    </div>
    <div class="oh-ve-panel-row">
      <span>Alignment</span>
      <div class="oh-ve-segment">
        ${['text-left', 'text-center', 'text-right', 'text-justify']
          .map(
            (className) =>
              `<button type="button" data-action="align" data-class="${className}">≡</button>`
          )
          .join('')}
      </div>
    </div>
    <div class="oh-ve-panel-row">
      <span>Transform</span>
      <div class="oh-ve-segment">
        ${['normal-case', 'uppercase', 'lowercase', 'capitalize']
          .map(
            (className) =>
              `<button type="button" data-action="transform" data-class="${className}">${className === 'normal-case' ? '—' : className[0] + className[1]}</button>`
          )
          .join('')}
      </div>
    </div>
  `;
}

function opacityPanelHtml() {
  const opacity = Math.round(Number(state.selected?.style.opacity || 1) * 100);
  return `
    <h3>Opacity</h3>
    <div class="oh-ve-range-row">
      <input type="range" min="0" max="100" value="${opacity}" data-action="opacity" />
      <strong data-opacity-value>${opacity}%</strong>
    </div>
  `;
}

function spacingPanelHtml() {
  return `
    <div class="oh-ve-panel-row"><span>Margin</span><input class="oh-ve-pill-input" data-action="spacing" data-prefix="m" type="number" value="0" /></div>
    <div class="oh-ve-panel-row"><span></span><input class="oh-ve-pill-input" data-action="spacing" data-prefix="my" type="number" value="0" /></div>
    <div style="border-top:1px solid #e5e7eb;margin:18px 0"></div>
    <div class="oh-ve-panel-row"><span>Padding</span><input class="oh-ve-pill-input" data-action="spacing" data-prefix="p" type="number" value="0" /></div>
    <div class="oh-ve-panel-row"><span></span><input class="oh-ve-pill-input" data-action="spacing" data-prefix="py" type="number" value="0" /></div>
  `;
}

function classesPanelHtml() {
  return `
    <h3>Tailwind Classes</h3>
    <textarea data-action="classes">${state.selected?.getAttribute('class') || ''}</textarea>
    <div class="oh-ve-helper">Enter custom Tailwind CSS classes for advanced styling</div>
  `;
}

function codePanelHtml() {
  const metadata = state.selected ? metadataFor(state.selected) : null;
  return `
    <h3>Source</h3>
    <textarea readonly>${metadata ? `${metadata.file}:${metadata.line}:${metadata.column}` : ''}</textarea>
    <div class="oh-ve-helper">This element is mapped through data-source-location.</div>
  `;
}

function renderPopover(panel) {
  const popover = ensurePopover();
  if (panel === 'background' || panel === 'foreground')
    popover.innerHTML = colorPanelHtml(panel);
  if (panel === 'content') popover.innerHTML = textContentPanelHtml();
  if (panel === 'text-style') popover.innerHTML = textStylePanelHtml();
  if (panel === 'opacity') popover.innerHTML = opacityPanelHtml();
  if (panel === 'spacing') popover.innerHTML = spacingPanelHtml();
  if (panel === 'classes') popover.innerHTML = classesPanelHtml();
  if (panel === 'code') popover.innerHTML = codePanelHtml();
}

export function showPanel(panel, anchor) {
  if (!state.selected) return;
  if (state.activePanel === panel) {
    hidePopover();
    return;
  }

  state.activePanel = panel;
  renderPopover(panel);
  const popover = ensurePopover();
  popover.style.display = 'block';
  if (state.toolbar) {
    state.toolbar
      .querySelectorAll('[data-panel]')
      .forEach((button) =>
        button.classList.toggle(
          'oh-ve-tool-active',
          button.dataset.panel === panel
        )
      );
  }
  placePopover(anchor);
}

function handlePopoverClick(event) {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const actionElement = target.closest('[data-action]');
  const action = actionElement?.dataset?.action;
  if (!action || !state.selected) return;

  if (action === 'close-panel') hidePopover();
  if (action === 'palette') {
    const color = actionElement.dataset.color || '';
    if (color === 'transparent') {
      if (actionElement.dataset.panel === 'background')
        state.selected.style.backgroundColor = '';
      else state.selected.style.color = '';
      recordPatch(state.selected);
      updateSelectionUI();
      if (actionElement.dataset.panel === 'background')
        renderPopover('background');
      return;
    }
    if (actionElement.dataset.panel === 'background') setBackgroundColor(color);
    else setTextColor(color);
    updateSelectionUI();
  }
  if (action === 'toggle-class') {
    const className = actionElement.dataset.class;
    const classes = getClassList(state.selected);
    setClassName(
      state.selected,
      classes.includes(className)
        ? classes.filter((item) => item !== className)
        : [...classes, className]
    );
    updateSelectionUI();
  }
  if (action === 'align') {
    replaceClassByPattern(
      state.selected,
      /^text-(left|center|right|justify)$/,
      actionElement.dataset.class
    );
    updateSelectionUI();
  }
  if (action === 'transform') {
    replaceClassByPattern(
      state.selected,
      /^(normal-case|uppercase|lowercase|capitalize)$/,
      actionElement.dataset.class
    );
    updateSelectionUI();
  }
}

function handlePopoverInput(event) {
  const target = event.target;
  if (
    !(target instanceof HTMLInputElement) &&
    !(target instanceof HTMLTextAreaElement) &&
    !(target instanceof HTMLSelectElement)
  )
    return;

  const action = target.dataset.action;
  if (!state.selected || !action) return;

  if (action === 'set-color' || action === 'set-color-text') {
    const color = target.value;
    if (!/^#[0-9a-f]{6}$/i.test(color)) return;
    if (target.dataset.panel === 'background') setBackgroundColor(color);
    else setTextColor(color);
    const companionSelector =
      action === 'set-color'
        ? '.oh-ve-color-input'
        : '.oh-ve-direct-color-picker';
    const companion = state.popover?.querySelector(companionSelector);
    if (companion instanceof HTMLInputElement) companion.value = color;
  }
  if (action === 'text-content') setElementText(target.value);
  if (action === 'classes') setElementClasses(target.value);
  if (action === 'text-size')
    setClassName(state.selected, [
      ...classListWithoutTextSize(getClassList(state.selected)),
      target.value,
    ]);
  if (action === 'font-weight')
    replaceClassByPattern(
      state.selected,
      /^font-(normal|medium|semibold|bold)$/,
      target.value
    );
  if (action === 'opacity') {
    setOpacity(target.value);
    const valueLabel = state.popover?.querySelector('[data-opacity-value]');
    if (valueLabel) valueLabel.textContent = `${target.value}%`;
  }
  if (action === 'spacing') {
    const prefix = target.dataset.prefix;
    replaceClassByPattern(
      state.selected,
      new RegExp(`^${prefix}-\\d+$`),
      `${prefix}-${target.value}`
    );
  }
  updateSelectionUI();
}
