export const ImageHelper = {
  loadImages: (config, container) => {
    console.log('Mock ImageHelper.loadImages called');
    return () => console.log('Mock ImageHelper cleanup');
  }
};

export class DataClient {
  constructor(url, key) {
    this.url = url;
    this.key = key;
  }
  from(table) {
    return {
      select: () => ({
        order: () => ({
          range: () => Promise.resolve({ data: { list: [] }, error: null })
        }),
        eq: () => ({
          maybeSingle: () => Promise.resolve({ data: null, error: null }),
          select: () => ({
            single: () => Promise.resolve({ data: {}, error: null })
          })
        })
      }),
      insert: (payload) => ({
        select: () => ({
          single: () => {
            console.log(`Mock INSERT into ${table}:`, payload);
            return Promise.resolve({ data: { id: 'mock-id', ...payload }, error: null });
          }
        })
      }),
      update: (payload) => ({
        eq: () => ({
          select: () => ({
            single: () => {
              console.log(`Mock UPDATE ${table}:`, payload);
              return Promise.resolve({ data: { id: 'mock-id', ...payload }, error: null });
            }
          })
        })
      }),
      delete: () => ({
        eq: () => ({
          select: () => ({
            maybeSingle: () => {
              console.log(`Mock DELETE from ${table}`);
              return Promise.resolve({ data: { success: true }, error: null });
            }
          })
        })
      })
    };
  }
}

export const User = {
  upsert: async (userData) => {
    console.log('Mock User.upsert called with:', userData);
    return { id: 'mock-user-uuid', ...userData };
  },
  create: async (userData) => {
    console.log('Mock User.create called with:', userData);
    return { id: 'mock-user-uuid', ...userData };
  },
  edit: async (userId, updateData) => {
    console.log('Mock User.edit called for:', userId, updateData);
    return { id: userId, ...updateData };
  },
  getBrowserId: () => 'mock-browser-id'
};

export const Auth = {
  signUp: async (credentials) => {
    console.log('Mock Auth.signUp called');
    return { user: { id: 'mock-user-id' }, session: null, error: null };
  },
  signInWithPassword: async (credentials) => {
    console.log('Mock Auth.signInWithPassword called');
    return { user: { id: 'mock-user-id', role: 'user' }, session: { access_token: 'mock-token' }, error: null };
  },
  getSession: async () => ({ session: null, error: null }),
  getUser: async () => ({ user: null, error: null }),
  signOut: async () => ({ error: null }),
  resetPassword: async () => ({ error: null }),
  updatePassword: async () => ({ user: {}, error: null })
};

export const API = {
  uploadImage: async (siteId, domain, file) => {
    console.log('Mock API.uploadImage called');
    return { storageKey: `uploads/mock/${file.name}` };
  },
  uploadFile: async (siteId, domain, file) => {
    console.log('Mock API.uploadFile called');
    return { storageKey: `uploads/mock/${file.name}` };
  }
};
