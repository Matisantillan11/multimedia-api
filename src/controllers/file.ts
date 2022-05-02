import { Request, Response } from 'express'
import { customResponse } from '../helpers/customResponse';

const cloudinary = require('cloudinary').v2



export const uploadImage = async (req: Request, res: Response) => {
	await cloudinary.config({ 
		cloud_name: 'dj9mg8pvk', 
		api_key: process.env.CLOUDINARY_API_KEY, 
		api_secret: process.env.CLOUDINARY_API_SECRET,
		secure: true
	});

	const { image } = req.body

	if(!req.files || Object.keys(req.files).length === 0){
		return res.status(404).send(customResponse(404, [], true, 'No se encontraron archivos para subir. Por favor, asegurate de haber elegido una imagen.'))
	}

	try {
			const file: any = req.files.image
			if(file){

				const {secure_url} = await cloudinary.uploader.upload(file?.tempFilePath)
				console.log("File uploaded")
				return res.send(customResponse(201, secure_url , false, 'File subido correctamente'))

			} else {
				return res.status(404).send(customResponse(404, [], true, 'No se encontraron archivos para subir. Por favor, asegurate de haber elegido una imagen.'))
			}

			
		
	} catch (error: any) {
		return res.status(500).send(customResponse(500, [], true, error))
	}
}



