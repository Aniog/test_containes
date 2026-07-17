export const ImageHelper = {
  loadImages: (config, container) => {
    console.log('Mock ImageHelper.loadImages called with:', config, container);
    return () => {};
  }
};

export const DataClient = class {
  constructor() {}
  from() { return this; }
  select() { return this; }
  insert() { return this; }
  update() { return this; }
  delete() { return this; }
  eq() { return this; }
  order() { return this; }
  range() { return this; }
  single() { return { data: null, error: null }; }
  maybeSingle() { return { data: null, error: null }; }
};

export const User = {
  upsert: async () => ({ id: 'mock-user' }),
  getBrowserId: () => 'mock-browser-id'
};

export const Auth = {
  getUser: async () => ({ user: null }),
  getSession: async () => ({ session: null }),
  signOut: async () => ({ error: null })
};

export const API = {
    uploadImage: async () => ({ storageKey: 'mock-key' }),
    uploadFile: async () => ({ storageKey: 'mock-key' })
};
