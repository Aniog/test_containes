export const ImageHelper = {
  loadImages: (config, container) => {
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
      select: () => ({
        order: () => ({
          range: () => Promise.resolve({ data: { list: [] }, error: null }),
          limit: () => Promise.resolve({ data: { list: [] }, error: null })
        }),
        eq: () => ({
          single: () => Promise.resolve({ data: {}, error: null }),
          maybeSingle: () => Promise.resolve({ data: {}, error: null })
        })
      }),
      insert: () => ({
        select: () => ({
          single: () => Promise.resolve({ data: {}, error: null })
        })
      }),
      update: () => ({
        eq: () => ({
          select: () => ({
            single: () => Promise.resolve({ data: {}, error: null })
          })
        })
      }),
      delete: () => ({
        eq: () => ({
          select: () => ({
            maybeSingle: () => Promise.resolve({ data: {}, error: null })
          })
        })
      })
    };
  }
}

export const User = {
  upsert: (data) => Promise.resolve({ id: 'mock-user-id', ...data }),
  getBrowserId: () => 'mock-browser-id'
};

export const Auth = {
  getSession: () => Promise.resolve({ session: null, error: null }),
  getUser: () => Promise.resolve({ user: null, error: null }),
  signInWithPassword: () => Promise.resolve({ user: {}, session: {}, error: null }),
  signOut: () => Promise.resolve({ error: null }),
  signUp: () => Promise.resolve({ user: {}, session: null, error: null })
};
