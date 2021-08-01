import dotenv from 'dotenv'
dotenv.config()
import axios from 'axios'

export default () => {
  const client = axios.create({
    baseURL: `${process.env.APOD_URL}?api_key=${process.env.GLOBAL_API_KEY}`,
    method: 'GET'
  })

  client.interceptors.response.use(
    res => res,
    err => Promise.reject(err)
  )

  return client
}