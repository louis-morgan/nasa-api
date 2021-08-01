import fastify from 'fastify'
import fastifyEnv from 'fastify-env'
import prettifier from 'pino-pretty'
import rawHeaders from 'fastify-raw-body'
import getImages from './routes/MarsRoverPhotos/get-images.js'
import todaysImage from './routes/APOD/todays-image.js'

const server = fastify({
  logger: {
    prettyPrint: {
      levelFirst: true
    },
    prettifier
  }
}).register(fastifyEnv, { dotenv: true, schema: { type: 'object' }})


server.register(rawHeaders)

await server.after()

server.get('/APOD/todays-image', todaysImage)
server.get('/mars-rover-photos/images', getImages)

const start = async () => {
  try {
    await server.listen(3000, '0.0.0.0')
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()

process.on('uncaughtException', err =>{
  console.log('Major error, preventing from server fallover')
  console.log('--------------------------------------------')
  console.log(err)
})