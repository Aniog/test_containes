import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from './src/config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

async function run() {
  const { data, error } = await client.from('Product').select('*')
  console.log('Error:', error)
  console.log('Data:', data)
}

run()
