import fs from 'fs'
import axios from "axios";
import { getTodaysImage } from "../../lib/APOD/index.js"
import { getFormattedDate } from '../../utils/dates.js'

async function download(url, fileName) {
  const response = await axios.get(url, {
    responseType: 'arraybuffer'
  });
  
  const buffer = Buffer.from(response.data, 'binary')
  fs.writeFile(`images/${fileName}.jpg`, buffer, () => {
    return true
  })
}

export default async (request, reply) => {
  try {
    const res = await getTodaysImage()
    const date = getFormattedDate()
    const imageName = res.data.title.replaceAll(' ', '-')
    await download(res.data.url, `${date}--${imageName}`)
    reply.send({response: 'Image Saved Successfully'})
  } catch (error) {
    reply.send(error)
  }
}