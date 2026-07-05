export const ImageHelper = {
  loadImages: (config, container) => {
    // In a real environment, this would load images based on data-strk-img attributes.
    // For this storefront, we'll let the fallback src handle it or let the real SDK take over if available.
    console.log('ImageHelper scanning container:', container);
    return () => {};
  }
};

export const DataClient = class {
  constructor(url, key) {
    this.url = url;
    this.key = key;
  }
  from(table) {
    return {
      select: () => this,
      insert: () => this,
      update: () => this,
      delete: () => this,
      eq: () => this,
      order: () => this,
      range: () => this,
      single: () => this,
      maybeSingle: () => this
    };
  }
};

export const User = {
  upsert: async (data) => ({ id: 'mock-user-id', ...data }),
  getBrowserId: () => 'mock-browser-id'
};

export const Auth = {
  getSession: async () => ({ session: null }),
  getUser: async () => ({ user: null }),
  signInWithPassword: async () => ({ user: null, session: null }),
  signUp: async () => ({ user: null, session: null }),
  signOut: async () => ({ error: null })
};

export const API = {
  uploadImage: async () => ({ storageKey: 'mock-key' }),
  uploadFile: async () => ({ storageKey: 'mock-key' })
};
