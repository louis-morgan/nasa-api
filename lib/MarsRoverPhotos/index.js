import client from './client.js'

export const getImages = async rover => {
  try {
    const res = await client().get('?concept_tags=True')
    console.log(res);
    return res.data
  } catch (error) {
    return error
  }
}