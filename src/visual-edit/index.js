import { CHANNEL, VERSION } from './constants.js';
import { state } from './state.js';
import { ensureStyle } from './styles.js';
import {
  clearSelection,
  handleClick,
  handleInput,
  handlePointerMove,
  handleScrollOrResize,
  hideHover,
} from './toolbar.js';

function postToParent(type, payload = {}) {
  window.parent?.postMessage(
    {
      channel: CHANNEL,
      version: VERSION,
      type,
      payload,
    },
    '*'
  );
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
