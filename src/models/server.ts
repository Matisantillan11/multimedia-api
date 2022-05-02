import express, { Application } from 'express'
import cors from 'cors'
import fileUpload from 'express-fileupload'
import swaggerUi from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'

import swaggerOptions from '../../swagger'
import file from '../routes/file'
import { connectToDatabase } from '../database/config'

export default class Server {
	private app: Application
	private port: string 
	private fileRoute: string
	private swaggerRoute: string

	constructor() {
		this.app = express()
		this.port = process.env.PORT || '3001'
		this.fileRoute = '/api/file'

		this.swaggerRoute = '/api/docs'

		this.middlewares()

		this.routes()

		this.database()
	}

	middlewares() {
		this.app.use(cors())
		this.app.use(express.json())
		this.app.use(
			fileUpload({
				useTempFiles: true,
				tempFileDir: '/tmp/',
			}),
		)
	}

	async database() {
		await connectToDatabase()
	}


	
	routes() {
		const swaggerDocs = swaggerJsDoc(swaggerOptions.swaggerOptions)

		
		this.app.use(this.fileRoute, file)

		if(process.env.NODE_ENV === 'dev') this.app.use(this.swaggerRoute, swaggerUi.serve, swaggerUi.setup(swaggerDocs))
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log(`Server running on ${process.env.DEVURL}:${this.port}`)
		})
	}
}

