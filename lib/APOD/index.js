import client from './client.js'

export const getTodaysImage = async () => {
  const res = await client().get()
  return res
}