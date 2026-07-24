import { state } from './state.js';
import { isImageElement, isTextElement } from './dom.js';

export function metadataFor(element) {
  return {
    id: element.dataset.visualId || '',
    file: element.dataset.sourceFile || '',
    line: Number(element.dataset.sourceLine || 0),
    column: Number(element.dataset.sourceColumn || 0),
    tagName: element.tagName.toLowerCase(),
  };
}

export function patchFor(element, action = 'update') {
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

  const style = {};
  if (element.style.color) {
    style.color = element.style.color;
  }
  if (element.style.backgroundColor) {
    style.backgroundColor = element.style.backgroundColor;
  }
  if (element.style.opacity) {
    style.opacity = element.style.opacity;
  }

  if (Object.keys(style).length > 0) {
    patch.style = style;
  }

  return patch;
}

export function recordPatch(element, action = 'update') {
  const patch = patchFor(element, action);
  if (!patch.id || !patch.file || !patch.line || !patch.column) {
    return;
  }
  state.changes.set(patch.id, patch);
}
