export const ImageHelper = {
  loadImages: (config, container) => {
    console.log('[Mock SDK] loadImages called', { hasConfig: !!config, hasContainer: !!container });
    return () => {};
  }
};

export class DataClient {
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
      maybeSingle: () => this,
    };
  }
}

export const User = {
  upsert: async (data) => ({ id: 'mock-user-id', ...data }),
  create: async (data) => ({ id: 'mock-user-id', ...data }),
  edit: async (id, data) => ({ id, ...data }),
  getBrowserId: () => 'mock-browser-id',
};

export const Auth = {
  signUp: async () => ({ user: { id: 'mock-user-id' }, session: {}, error: null }),
  signInWithPassword: async () => ({ user: { id: 'mock-user-id' }, session: { access_token: 'mock-token' }, error: null }),
  getSession: async () => ({ session: { user: { email: 'mock@example.com' } }, error: null }),
  getUser: async () => ({ user: { id: 'mock-user-id' }, error: null }),
  signOut: async () => ({ error: null }),
  resetPassword: async () => ({ data: {}, error: null }),
  updatePassword: async () => ({ user: { id: 'mock-user-id' }, error: null }),
};

export const API = {
  uploadImage: async () => ({ storageKey: 'uploads/sites/site_123/images/mock-jewelry.png', filename: 'gallery.png', mimeType: 'image/png' }),
  uploadFile: async () => ({ storageKey: 'uploads/sites/site_123/files/mock-doc.pdf', filename: 'document.pdf', mimeType: 'application/pdf' }),
};
