export class DataClient {
  constructor(url, key) {
    this.url = url;
    this.key = key;
  }
  from(table) {
    return {
      select: () => ({
        order: () => ({
          range: () => Promise.resolve({ data: { list: [] }, success: true, error: null }),
          eq: () => Promise.resolve({ data: { list: [] }, success: true, error: null }),
        }),
        eq: () => ({
          select: () => ({
            single: () => Promise.resolve({ data: null, success: true, error: null }),
          }),
        }),
        single: () => Promise.resolve({ data: null, success: true, error: null }),
      }),
      insert: () => ({
        select: () => ({
          single: () => Promise.resolve({ data: { id: Date.now(), data: {} }, success: true, error: null }),
        }),
      }),
      update: () => ({
        eq: () => ({
          select: () => ({
            single: () => Promise.resolve({ data: { id: 1, data: {} }, success: true, error: null }),
          }),
        }),
      }),
      delete: () => ({
        eq: () => ({
          select: () => ({
            maybeSingle: () => Promise.resolve({ data: null, success: true, error: null }),
          }),
        }),
      }),
    };
  }
}

export const User = {
  upsert: async (data) => ({ id: 'mock-user-id', ...data }),
  getBrowserId: () => 'mock-browser-id',
};

export const Auth = {
  signUp: async () => ({ user: { id: 'mock-id' }, session: {}, error: null }),
  signInWithPassword: async () => ({ user: { id: 'mock-id' }, session: {}, error: null }),
  getSession: async () => ({ session: { user: { email: 'mock@example.com' } } }),
  getUser: async () => ({ user: { id: 'mock-id' } }),
  signOut: async () => ({ error: null }),
  resetPassword: async () => ({ data: {}, error: null }),
  updatePassword: async () => ({ user: { id: 'mock-id' }, error: null }),
};

export const API = {
  uploadImage: async () => ({ storageKey: 'mock-image-key' }),
  uploadFile: async () => ({ storageKey: 'mock-file-key' }),
};

export const ImageHelper = {
  loadImages: () => () => {},
};
