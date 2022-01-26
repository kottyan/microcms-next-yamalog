import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://yamanoboru.microcms.io/api/v1/',
  timeout: 200000,
  headers: { 'X-MICROCMS-API-KEY': process.env.API_KEY || '' }
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return { error: error.response }
  }
)