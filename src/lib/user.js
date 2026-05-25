export const User = {
  getBrowserId: () => {
    let id = localStorage.getItem('strk_browser_id');
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem('strk_browser_id', id);
    }
    return id;
  },
  upsert: async (userData) => {
    console.log('User.upsert', userData);
    const userId = userData.browserId || User.getBrowserId();
    // Return a stable guest user object
    return {
      id: userId,
      role: 'guest',
      name: 'Guest User'
    };
  }
};

export const Auth = {
  getUser: async () => ({ user: null, error: null }),
  getSession: async () => ({ session: null, error: null }),
};
