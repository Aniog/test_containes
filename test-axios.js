const axios = require('axios');

async function run() {
  try {
    const res = await axios.get('https://www.uat.strikingly.com/api/v1/sites/60391/form_entities', {
      params: {
        form_name: 'Product',
        _anon_key: 'xx'
      }
    });
    console.log(JSON.stringify(res.data, null, 2));
  } catch (err) {
    console.error(err.response?.data || err.message);
  }
}
run();
