import { Schema, model } from 'mongoose'
import Image from "./interface"

export const modelFile = {
	image: {
		type: String,
		typed: 'string',
		require: false
	}
}
const fileSchema = new Schema<Image>(modelFile)

export default model<Image>('Image', fileSchema)
