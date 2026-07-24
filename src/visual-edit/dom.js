import { TEXT_TAGS } from './constants.js';

export function getEditableElement(target) {
  if (!(target instanceof Element)) return null;
  if (
    target.closest(
      '.oh-ve-toolbar, .oh-ve-popover, .oh-ve-tag-badge, .oh-ve-image-overlay'
    )
  ) {
    return null;
  }
  return target.closest('[data-visual-id]');
}

export function isImageElement(element) {
  return element?.tagName?.toLowerCase() === 'img';
}

export function isTextElement(element) {
  if (!element) return false;
  return TEXT_TAGS.has(element.tagName.toLowerCase());
}

export function getRect(element) {
  const rect = element.getBoundingClientRect();
  return {
    left: rect.left,
    top: rect.top,
    width: rect.width,
    height: rect.height,
  };
}

export function placeBox(box, element, padding = 0) {
  const rect = getRect(element);
  box.style.left = `${Math.max(0, rect.left - padding)}px`;
  box.style.top = `${Math.max(0, rect.top - padding)}px`;
  box.style.width = `${Math.max(0, rect.width + padding * 2)}px`;
  box.style.height = `${Math.max(0, rect.height + padding * 2)}px`;
}
