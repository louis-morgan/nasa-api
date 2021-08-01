import { getImages } from "../../lib/MarsRoverPhotos/index.js"

export default async (request, reply) => {
  try {
    const res = await getImages()
    reply.send(res)
  } catch (error) {
    reply.send(error)
  }
}