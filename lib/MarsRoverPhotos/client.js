import axios from 'axios'

export default () => {
  const client = axios.create({
    baseURL: `${process.env.MARS_ROVER_PHOTOS_URL}?api_key=${process.env.GLOBAL_API_KEY}`
  })
  client.interceptors.response.use(
    res => res,
    err => Promise.reject(err)
  )
  return client
}