/**
 * Local shim for @strikingly/sdk
 * Implements ImageHelper.loadImages using pre-fetched strk-img-config.json data.
 * Also provides no-op stubs for DataClient, User, Auth, API so imports don't break.
 */

// ─── ImageHelper ────────────────────────────────────────────────────────────

function getPickedUrl(entry) {
  if (!entry || !entry.results || entry.results.length === 0) return null;
  const pickedId = entry.picked;
  if (pickedId) {
    const found = entry.results.find((r) => r.id === pickedId);
    if (found) return found.url;
  }
  return entry.results[0].url;
}

export const ImageHelper = {
  /**
   * Finds all data-strk-img-id and data-strk-bg-id elements inside `container`
   * and populates them with images from the pre-fetched config.
   *
   * @param {Record<string, any>} config  - Contents of strk-img-config.json
   * @param {HTMLElement|null}    container - Root element to search within
   */
  loadImages(config, container) {
    if (!config || !container) return;

    // Handle <img data-strk-img-id="..."> elements
    const imgEls = container.querySelectorAll('[data-strk-img-id]');
    imgEls.forEach((el) => {
      const id  = el.getAttribute('data-strk-img-id');
      const entry = config[id];
      const url = getPickedUrl(entry);
      if (url && el.tagName === 'IMG') {
        el.src = url;
        if (entry.results?.[0]?.alt) el.alt = entry.results[0].alt;
      }
    });

    // Handle elements with data-strk-bg-id (background images)
    const bgEls = container.querySelectorAll('[data-strk-bg-id]');
    bgEls.forEach((el) => {
      const id  = el.getAttribute('data-strk-bg-id');
      const entry = config[id];
      const url = getPickedUrl(entry);
      if (url) {
        el.style.backgroundImage  = `url(${url})`;
        el.style.backgroundSize   = el.style.backgroundSize   || 'cover';
        el.style.backgroundPosition = el.style.backgroundPosition || 'center';
      }
    });
  },
};

// ─── DataClient stub ─────────────────────────────────────────────────────────

class QueryBuilder {
  constructor() {
    this._data = { success: true, data: { total: 0, limit: 10, offset: 0, list: [] } };
  }
  select()  { return this; }
  insert()  { return this; }
  update()  { return this; }
  delete()  { return this; }
  eq()      { return this; }
  neq()     { return this; }
  gte()     { return this; }
  lte()     { return this; }
  ilike()   { return this; }
  in()      { return this; }
  is()      { return this; }
  order()   { return this; }
  limit()   { return this; }
  range()   { return this; }
  single()  { return Promise.resolve({ data: this._data, error: null }); }
  maybeSingle() { return Promise.resolve({ data: null, error: null }); }
  then(resolve) { return Promise.resolve({ data: this._data, error: null }).then(resolve); }
}

export class DataClient {
  constructor() {}
  from() { return new QueryBuilder(); }
}

// ─── User stub ───────────────────────────────────────────────────────────────

export const User = {
  getBrowserId: () => 'browser-stub',
  upsert:  async (data) => ({ id: 'stub-id', ...data }),
  create:  async (data) => ({ id: 'stub-id', ...data }),
  edit:    async (id, data) => ({ id, ...data }),
};

// ─── Auth stub ───────────────────────────────────────────────────────────────

export const Auth = {
  signUp:              async () => ({ user: null, session: null, error: null }),
  signInWithPassword:  async () => ({ user: null, session: null, error: null }),
  getSession:          async () => ({ session: null, error: null }),
  getUser:             async () => ({ user: null, error: null }),
  signOut:             async () => ({ error: null }),
  resetPassword:       async () => ({ data: null, error: null }),
  updatePassword:      async () => ({ user: null, error: null }),
};

// ─── API stub ────────────────────────────────────────────────────────────────

export const API = {
  uploadImage: async () => ({ storageKey: '', filename: '' }),
  uploadFile:  async () => ({ storageKey: '', filename: '' }),
};
