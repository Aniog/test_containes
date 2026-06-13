export class DataClient {
  constructor() {}
  from() { return this; }
  select() { return this; }
  insert() { return this; }
  update() { return this; }
  delete() { return this; }
  eq() { return this; }
  order() { return this; }
  range() { return this; }
  single() { return Promise.resolve({ data: {}, error: null }); }
  maybeSingle() { return Promise.resolve({ data: {}, error: null }); }
  then(res) { return res({ data: { list: [] }, error: null }); }
}

export const User = {
  upsert: () => Promise.resolve({ id: "mock-user-id" }),
  create: () => Promise.resolve({ id: "mock-user-id" }),
  edit: () => Promise.resolve({ id: "mock-user-id" })
};

export const ImageHelper = {
  loadImages: () => {}
};

export const Auth = {
  signUp: () => Promise.resolve({ user: { id: "mock" }, session: null, error: null }),
  signInWithPassword: () => Promise.resolve({ user: { id: "mock" }, session: { access_token: "mock" }, error: null }),
  getSession: () => Promise.resolve({ session: null, error: null }),
  getUser: () => Promise.resolve({ user: null, error: null }),
  signOut: () => Promise.resolve({ error: null })
};

export const API = {
  uploadImage: () => Promise.resolve({ storageKey: "mock-key", url: "mock-url" }),
  uploadFile: () => Promise.resolve({ storageKey: "mock-key", url: "mock-url" })
};
