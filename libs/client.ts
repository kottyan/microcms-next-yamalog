import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: 'yamanoboru',
  apiKey: process.env.API_KEY
})
