import { state } from './state.js';

export function ensureStyle() {
  if (state.styleNode) return;

  state.styleNode = document.createElement('style');
  state.styleNode.textContent = `
    .oh-ve-hover-box,
    .oh-ve-selected-box,
    .oh-ve-tag-badge,
    .oh-ve-popover,
    .oh-ve-image-overlay,
    .oh-ve-toolbar {
      box-sizing: border-box;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }
    .oh-ve-hover-box {
      position: fixed;
      z-index: 2147483000;
      pointer-events: none;
      border: 2px solid rgba(37, 99, 235, 0.65);
      background: rgba(37, 99, 235, 0.035);
    }
    .oh-ve-selected-box {
      position: fixed;
      z-index: 2147483001;
      pointer-events: none;
      border: 2px solid #2563eb;
      box-shadow: none;
    }
    .oh-ve-tag-badge {
      position: fixed;
      z-index: 2147483004;
      display: none;
      align-items: center;
      gap: 6px;
      height: 28px;
      padding: 0 10px;
      border: 0;
      border-radius: 5px;
      background: #2563eb;
      color: #fff;
      font-size: 15px;
      font-weight: 600;
      line-height: 1;
      box-shadow: 0 4px 10px rgba(37, 99, 235, 0.18);
    }
    .oh-ve-toolbar {
      position: fixed;
      z-index: 2147483003;
      display: flex;
      align-items: center;
      gap: 4px;
      min-height: 44px;
      padding: 6px 8px;
      border: 1px solid #dde1e7;
      border-radius: 10px;
      background: #fff;
      color: #111827;
      box-shadow: 0 10px 24px rgba(15, 23, 42, 0.14);
    }
    .oh-ve-toolbar-menu,
    .oh-ve-menu-items,
    .oh-ve-inline-prompt {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .oh-ve-inline-prompt {
      display: none;
      min-width: 420px;
      max-width: calc(100vw - 32px);
      gap: 10px;
    }
    .oh-ve-toolbar.is-prompting .oh-ve-toolbar-menu {
      display: none;
    }
    .oh-ve-toolbar.is-prompting .oh-ve-inline-prompt {
      display: flex;
    }
    .oh-ve-toolbar button,
    .oh-ve-toolbar label {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 32px;
      height: 32px;
      border: 0;
      border-radius: 6px;
      background: transparent;
      color: #545b64;
      cursor: pointer;
      font-size: 14px;
      font-weight: 600;
      line-height: 1;
      transition: background 120ms ease, color 120ms ease, opacity 120ms ease;
    }
    .oh-ve-toolbar button:hover,
    .oh-ve-toolbar label:hover {
      background: #f3f4f6;
      color: #111827;
    }
    .oh-ve-toolbar button[disabled] {
      color: #a8afb9;
      cursor: not-allowed;
    }
    .oh-ve-toolbar button[disabled]:hover {
      background: transparent;
      color: #a8afb9;
    }
    .oh-ve-toolbar .oh-ve-tool-active {
      color: #3f454d;
    }
    .oh-ve-toolbar .oh-ve-tool-active:hover {
      background: #f3f4f6;
    }
    .oh-ve-icon {
      display: block;
      width: 15px;
      height: 15px;
      flex: 0 0 auto;
      color: currentColor;
    }
    .oh-ve-edit-button {
      width: auto !important;
      min-width: 128px !important;
      gap: 7px;
      padding: 0 10px;
      background: transparent !important;
      color: #6b7280 !important;
      font-size: 12px !important;
      font-weight: 700 !important;
    }
    .oh-ve-edit-button:hover {
      background: #f3f4f6 !important;
      color: #374151 !important;
    }
    .oh-ve-edit-button .oh-ve-icon {
      width: 13px;
      height: 13px;
    }
    .oh-ve-close-button {
      margin-left: 0 !important;
    }
    .oh-ve-close-button:hover {
      background: #f3f4f6 !important;
      color: #374151 !important;
    }
    .oh-ve-tool-separator {
      width: 1px;
      height: 22px;
      background: #cbd2dd;
      margin: 0 4px;
    }
    .oh-ve-color-pair {
      position: relative;
      width: 40px;
      min-width: 40px !important;
    }
    .oh-ve-empty-swatch,
    .oh-ve-color-swatch {
      width: 20px;
      height: 20px;
      border-radius: 999px;
      border: 1px solid #cbd5e1;
      background: #fff;
    }
    .oh-ve-empty-swatch {
      background: linear-gradient(135deg, transparent 47%, #cbd5e1 48%, #cbd5e1 53%, transparent 54%), #fff;
    }
    .oh-ve-color-swatch {
      margin-left: -7px;
      border-color: #fff;
      box-shadow: 0 0 0 2px #111827;
    }
    .oh-ve-popover {
      position: fixed;
      z-index: 2147483005;
      display: none;
      min-width: 300px;
      max-width: min(360px, calc(100vw - 24px));
      padding: 14px;
      border: 1px solid #dde1e7;
      border-radius: 10px;
      background: #fff;
      color: #111827;
      box-shadow: 0 10px 24px rgba(15, 23, 42, 0.14);
      font-size: 14px;
    }
    .oh-ve-popover:has(.oh-ve-color-card) {
      min-width: 240px;
      max-width: min(280px, calc(100vw - 24px));
    }
    .oh-ve-popover h3 {
      margin: 0 0 12px;
      color: #374151;
      font-size: 16px;
      font-weight: 700;
    }
    .oh-ve-popover textarea,
    .oh-ve-popover input,
    .oh-ve-popover select {
      box-sizing: border-box;
      width: 100%;
      border: 1px solid #d9dee7;
      border-radius: 8px;
      background: #fff;
      color: #111827;
      font: inherit;
      outline: none;
    }
    .oh-ve-popover textarea {
      min-height: 86px;
      padding: 10px;
      resize: vertical;
      line-height: 1.45;
    }
    .oh-ve-panel-row {
      display: grid;
      grid-template-columns: 92px 1fr;
      align-items: center;
      gap: 10px;
      margin: 10px 0;
      color: #374151;
      font-size: 14px;
    }
    .oh-ve-panel-control {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .oh-ve-pill-input {
      height: 36px;
      padding: 0 12px;
      border: 0 !important;
      background: #f2f4f7 !important;
      font-size: 14px !important;
      text-align: center;
    }
    .oh-ve-segment {
      display: grid;
      grid-auto-flow: column;
      border: 1px solid #d9dee7;
      border-radius: 8px;
      overflow: hidden;
    }
    .oh-ve-segment button {
      min-width: 42px;
      height: 34px;
      border: 0;
      border-right: 1px solid #d9dee7;
      background: #fff;
      color: #374151;
      font-size: 14px;
      cursor: pointer;
    }
    .oh-ve-segment button:last-child {
      border-right: 0;
    }
    .oh-ve-segment button.is-active {
      background: #e5e7eb;
    }
    .oh-ve-color-card {
      display: grid;
      gap: 8px;
      padding: 0;
    }
    .oh-ve-color-hint {
      color: #6b7280;
      font-size: 12px;
      font-weight: 600;
      line-height: 1.2;
    }
    .oh-ve-direct-color-picker {
      width: 100%;
      height: 88px;
      padding: 0;
      border: 0;
      border-radius: 8px;
      background: transparent;
      cursor: pointer;
    }
    .oh-ve-direct-color-picker::-webkit-color-swatch-wrapper {
      padding: 0;
    }
    .oh-ve-direct-color-picker::-webkit-color-swatch {
      border: 1px solid #d9dee7;
      border-radius: 8px;
    }
    .oh-ve-direct-color-picker::-moz-color-swatch {
      border: 1px solid #d9dee7;
      border-radius: 8px;
    }
    .oh-ve-direct-color-actions {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 6px;
      align-items: center;
    }
    .oh-ve-direct-color-actions .oh-ve-color-input:first-child {
      grid-column: 1 / -1;
    }
    .oh-ve-clear-color {
      width: 26px;
      height: 26px;
      border: 1px solid #d9dee7;
      border-radius: 6px;
      background: linear-gradient(135deg, transparent 47%, #94a3b8 48%, #94a3b8 53%, transparent 54%), #fff;
      cursor: pointer;
    }
    .oh-ve-clear-color:hover {
      background: linear-gradient(135deg, transparent 47%, #64748b 48%, #64748b 53%, transparent 54%), #f8fafc;
    }
    .oh-ve-color-input {
      height: 30px;
      padding: 0 8px;
      font-size: 12px !important;
      color: #6b7280 !important;
    }
    .oh-ve-range-row {
      display: grid;
      grid-template-columns: 1fr 52px;
      gap: 12px;
      align-items: center;
    }
    .oh-ve-range-row input[type="range"] {
      accent-color: #3b82f6;
    }
    .oh-ve-helper {
      margin-top: 10px;
      color: #6b7280;
      line-height: 1.4;
    }
    .oh-ve-prompt-input {
      flex: 1;
      min-width: 0;
      height: 32px;
      border: 0;
      padding: 0 0 0 4px;
      color: #111827;
      font-size: 14px;
      outline: none;
    }
    .oh-ve-prompt-input::placeholder {
      color: #9ca3af;
    }
    .oh-ve-prompt-submit {
      min-width: 28px !important;
      width: 28px;
      height: 28px !important;
      background: #e5e7eb !important;
      color: #6b7280 !important;
    }
    .oh-ve-prompt-submit:hover {
      background: #d1d5db !important;
      color: #374151 !important;
    }
    .oh-ve-prompt-submit .oh-ve-icon {
      width: 13px;
      height: 13px;
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
