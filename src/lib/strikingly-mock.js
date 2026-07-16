export const ImageHelper = {
  loadImages: () => {
    console.log('Mock ImageHelper.loadImages called');
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
  in() { return this; }
  is() { return this; }
  order() { return this; }
  range() { return this; }
  single() { return this; }
  maybeSingle() { return this; }
};

export const User = {
  upsert: async (v) => v,
  create: async (v) => v,
  edit: async (id, v) => v,
  getBrowserId: () => 'mock-browser-id'
};

export const Auth = {
  signUp: async () => ({ user: { id: 'mock-user' }, session: {}, error: null }),
  signInWithPassword: async () => ({ user: { id: 'mock-user' }, session: { access_token: 'mock-token' }, error: null }),
  getSession: async () => ({ session: { user: { email: 'test@example.com' } }, error: null }),
  getUser: async () => ({ user: { id: 'mock-user', email: 'test@example.com' }, error: null }),
  signOut: async () => ({ error: null }),
  resetPassword: async () => ({ data: {}, error: null }),
  updatePassword: async () => ({ user: { id: 'mock-user' }, error: null })
};

export const API = {
  uploadImage: async () => ({ storageKey: 'mock/image.png' }),
  uploadFile: async () => ({ storageKey: 'mock/file.txt' })
};
