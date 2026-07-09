import { DataClient } from '@strikingly/sdk';

const URL = 'https://www.uat.strikingly.com/api/v1/sites/61351/form_entities';
const KEY = 'xx';

const client = new DataClient(URL, KEY);

async function test() {
  console.log('Testing with UAT config...');
  try {
    const { data, error } = await client.from('Product').select('*');
    if (error) {
      console.error('Error:', error.message);
    } else {
      console.log('Success! Found rows:', data?.list?.length ?? 0);
    }
  } catch (err) {
    console.error('System error:', err.message);
  }
}

test();
