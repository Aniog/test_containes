import { state } from './state.js';
import {
  getEditableElement,
  getRect,
  isImageElement,
  isTextElement,
  placeBox,
} from './dom.js';
import { recordPatch } from './patches.js';
import { setElementText } from './actions.js';
import {
  hidePopover,
  placePopover,
  setPanelUpdateCallback,
  showPanel,
} from './panels.js';
import backgroundColorIcon from './icons/background-color.svg?raw';
import closeIcon from './icons/close.svg?raw';
import deleteIcon from './icons/delete.svg?raw';
import editElementIcon from './icons/edit-element.svg?raw';
import opacityIcon from './icons/opacity.svg?raw';
import sourceCodeIcon from './icons/source-code.svg?raw';
import spacingIcon from './icons/spacing.svg?raw';
import submitIcon from './icons/submit.svg?raw';
import tailwindClassesIcon from './icons/tailwind-classes.svg?raw';
import textColorIcon from './icons/text-color.svg?raw';
import textContentIcon from './icons/text-content.svg?raw';
import textStyleIcon from './icons/text-style.svg?raw';
import backIcon from './icons/back.svg?raw';

function icon(svg) {
  return svg
    .replace(
      '<svg ',
      '<svg class="oh-ve-icon" aria-hidden="true" focusable="false" '
    )
    .replaceAll(/fill="(?!none)[^"]*"/g, 'fill="currentColor"')
    .replaceAll(/stroke="(?!none)[^"]*"/g, 'stroke="currentColor"');
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

function ensureTagBadge() {
  if (!state.tagBadge) {
    state.tagBadge = document.createElement('button');
    state.tagBadge.type = 'button';
    state.tagBadge.className = 'oh-ve-tag-badge';
    document.body.appendChild(state.tagBadge);
  }
  return state.tagBadge;
}

export function hideHover() {
  if (state.hoverBox) state.hoverBox.style.display = 'none';
}

function hideSelected() {
  if (state.selectedBox) state.selectedBox.style.display = 'none';
}

function hideTagBadge() {
  if (state.tagBadge) state.tagBadge.style.display = 'none';
}

function placeTagBadge(element) {
  const badge = ensureTagBadge();
  const rect = getRect(element);
  const tagName = element.tagName.toLowerCase();
  badge.innerHTML = `<span>${tagName}</span>`;
  badge.style.display = 'inline-flex';
  const badgeRect = badge.getBoundingClientRect();
  const left = Math.max(8, rect.left);
  const top = Math.max(8, rect.top - badgeRect.height - 10);
  badge.style.left = `${Math.min(window.innerWidth - badgeRect.width - 8, left)}px`;
  badge.style.top = `${top}px`;
}

function ensureToolbar() {
  if (state.toolbar) return state.toolbar;

  const toolbar = document.createElement('div');
  toolbar.className = 'oh-ve-toolbar';
  toolbar.innerHTML = `
    <div class="oh-ve-toolbar-menu">
      <button type="button" class="oh-ve-edit-button" data-action="prompt">${icon(editElementIcon)} <span>Edit Element</span></button>
      <div class="oh-ve-menu-items">
        <button type="button" data-panel="background" title="Background">${icon(backgroundColorIcon)}</button>
        <button type="button" data-panel="foreground" title="Text Color">${icon(textColorIcon)}</button>
        <button type="button" data-panel="content" title="Text Content">${icon(textContentIcon)}</button>
        <button type="button" data-panel="text-style" title="Text Style">${icon(textStyleIcon)}</button>
        <button type="button" data-panel="opacity" title="Opacity">${icon(opacityIcon)}</button>
        <button type="button" data-panel="spacing" title="Spacing">${icon(spacingIcon)}</button>
        <span class="oh-ve-tool-separator"></span>
        <button type="button" data-panel="classes" title="Tailwind Classes">${icon(tailwindClassesIcon)}</button>
        <button type="button" data-panel="code" title="Source">${icon(sourceCodeIcon)}</button>
        <button type="button" data-action="delete" title="Delete">${icon(deleteIcon)}</button>
        <span class="oh-ve-tool-separator"></span>
        <button type="button" class="oh-ve-close-button" data-action="close" title="Close">${icon(closeIcon)}</button>
      </div>
    </div>
    <div class="oh-ve-inline-prompt">
      <button type="button" data-action="prompt-back" title="Back">${icon(backIcon)}</button>
      <input class="oh-ve-prompt-input" placeholder="What to change?" />
      <button type="button" class="oh-ve-prompt-submit" data-action="prompt-submit" title="Submit">${icon(submitIcon)}</button>
      <span class="oh-ve-tool-separator"></span>
      <button type="button" class="oh-ve-close-button" data-action="prompt-close" title="Close">${icon(closeIcon)}</button>
    </div>
  `;
  toolbar.addEventListener('mousedown', (event) => {
    event.stopPropagation();
    if (!event.target.closest('input, textarea, select')) {
      event.preventDefault();
    }
  });
  toolbar.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (!button) return;
    if (button.dataset.panel) {
      hidePromptBar();
      showPanel(button.dataset.panel, button);
    }
    const action = button.dataset.action;
    if (action === 'prompt') showPromptBar();
    if (action === 'prompt-back') hidePromptBar();
    if (action === 'prompt-close') clearSelection();
    if (action === 'prompt-submit') submitPromptChange();
    if (action === 'close') clearSelection();
    if (action === 'delete' && state.selected) {
      state.selected.style.display = 'none';
      recordPatch(state.selected, 'remove');
      clearSelection();
    }
  });
  toolbar.addEventListener('keydown', (event) => {
    if (!event.target.matches('.oh-ve-prompt-input')) return;
    if (event.key === 'Enter') {
      event.preventDefault();
      submitPromptChange();
    }
    if (event.key === 'Escape') {
      event.preventDefault();
      hidePromptBar();
    }
  });
  document.body.appendChild(toolbar);
  state.toolbar = toolbar;
  return toolbar;
}

function hideToolbar() {
  if (state.toolbar) state.toolbar.style.display = 'none';
  hidePopover();
}

function hidePromptBar() {
  if (!state.toolbar) return;
  const wasPrompting = state.toolbar.classList.contains('is-prompting');
  state.toolbar.classList.remove('is-prompting');
  if (wasPrompting && state.selected) {
    requestAnimationFrame(() => placeToolbar(state.selected));
  }
}

function showPromptBar() {
  if (!state.selected || !state.toolbar) return;
  hidePopover();
  state.toolbar.classList.add('is-prompting');
  placeToolbar(state.selected);
  const input = state.toolbar.querySelector('.oh-ve-prompt-input');
  if (input) input.value = '';
  requestAnimationFrame(() => input?.focus());
}

function submitPromptChange() {
  const input = state.toolbar?.querySelector('.oh-ve-prompt-input');
  if (input?.value?.trim() && isTextElement(state.selected)) {
    setElementText(input.value.trim());
  }
  hidePromptBar();
  updateSelectionUI();
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
  const left = Math.max(
    8,
    Math.min(window.innerWidth - toolbarRect.width - 8, rect.left)
  );
  const top = Math.min(
    window.innerHeight - toolbarRect.height - 8,
    rect.top + rect.height + 16
  );
  toolbar.style.left = `${left}px`;
  toolbar.style.top = `${Math.max(8, top)}px`;
  if (state.activePanel) {
    const activeButton = toolbar.querySelector(
      `[data-panel="${state.activePanel}"]`
    );
    if (activeButton) placePopover(activeButton);
  }
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
      const nextSrc = window.prompt(
        'Image URL',
        element.getAttribute('src') || ''
      );
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

export function clearSelection() {
  if (state.selected) {
    state.selected.removeAttribute('contenteditable');
  }
  state.selected = null;
  hideSelected();
  hideTagBadge();
  hideToolbar();
  hidePromptBar();
  hideImageOverlay();
}

function selectElement(element) {
  const selectedChanged = state.selected && state.selected !== element;

  if (state.selected && state.selected !== element) {
    state.selected.removeAttribute('contenteditable');
  }
  if (selectedChanged) {
    hidePromptBar();
  }

  state.selected = element;
  const box = ensureSelectedBox();
  box.style.display = 'block';
  placeBox(box, element);
  placeTagBadge(element);
  placeToolbar(element);
  placeImageOverlay(element);

  if (isTextElement(element)) {
    element.setAttribute('contenteditable', 'true');
    element.focus({ preventScroll: true });
  }
}

export function updateSelectionUI() {
  if (!state.selected) return;
  placeBox(ensureSelectedBox(), state.selected);
  placeTagBadge(state.selected);
  placeToolbar(state.selected);
  placeImageOverlay(state.selected);
}

setPanelUpdateCallback(updateSelectionUI);

export function handlePointerMove(event) {
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

export function handleClick(event) {
  if (!state.active) return;

  if (
    event.target instanceof Element &&
    event.target.closest(
      '.oh-ve-toolbar, .oh-ve-popover, .oh-ve-tag-badge, .oh-ve-image-overlay'
    )
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

export function handleInput(event) {
  if (!state.active) return;
  const element = getEditableElement(event.target);
  if (!element || element !== state.selected || !isTextElement(element)) {
    return;
  }
  recordPatch(element);
  updateSelectionUI();
}

export function handleScrollOrResize() {
  if (!state.active) return;
  if (state.hovered) placeBox(ensureHoverBox(), state.hovered);
  updateSelectionUI();
}
