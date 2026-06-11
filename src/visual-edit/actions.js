import { TEXT_SIZE_CLASSES } from './constants.js';
import { state } from './state.js';
import { isTextElement } from './dom.js';
import { recordPatch } from './patches.js';

export function classListWithoutTextSize(classList) {
  return classList.filter(
    (className) => !TEXT_SIZE_CLASSES.includes(className)
  );
}

export function getClassList(element = state.selected) {
  return (element?.getAttribute('class') || '').split(/\s+/).filter(Boolean);
}

export function setClassName(element, classList) {
  element.setAttribute(
    'class',
    Array.from(new Set(classList)).join(' ').trim()
  );
  recordPatch(element);
}

export function replaceClassByPattern(element, pattern, nextClass) {
  const classes = getClassList(element).filter(
    (className) => !pattern.test(className)
  );
  if (nextClass) classes.push(nextClass);
  setClassName(element, classes);
}

export function setElementText(text) {
  const element = state.selected;
  if (!element || !isTextElement(element)) return;
  element.textContent = text;
  recordPatch(element);
}

export function setElementClasses(className) {
  const element = state.selected;
  if (!element) return;
  element.setAttribute('class', className.trim());
  recordPatch(element);
}

export function setTextColor(color) {
  const element = state.selected;
  if (!element) return;
  element.style.color = color;
  recordPatch(element);
}

export function setBackgroundColor(color) {
  const element = state.selected;
  if (!element) return;
  element.style.backgroundColor = color;
  recordPatch(element);
}

export function setOpacity(value) {
  const element = state.selected;
  if (!element) return;
  element.style.opacity = String(Number(value) / 100);
  recordPatch(element);
}
