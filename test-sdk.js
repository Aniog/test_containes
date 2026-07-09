import { DataClient } from '@strikingly/sdk';

const STRK_PROJECT_URL = 'https://www.uat.strikingly.com/api/v1/sites/61351/form_entities';
const STRK_PROJECT_ANON_KEY = 'xlYXCxyB6pEOf86BfH8bU5X'; // from config.jsx

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

async function test() {
  try {
    console.log('Fetching single product...');
    const result = await client.from('Product').select('*').eq('slug', 'royal-heirloom-set').single();
    console.log('Single result:', JSON.stringify(result, null, 2));
  } catch (err) {
    console.error('Error:', err);
  }
}

test();
