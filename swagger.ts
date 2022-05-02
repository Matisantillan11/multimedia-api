import { modelFile as File} from './src/models/File/file'


const swagger: any =  {
  swaggerOptions: {
    swaggerDefinition:{
      info:{
        title: "Visualizar API",
        description: "Whatever",
        contact: [
          {
            name: "Matias Santillan"
          },
          {
            name: "Emiliano Dominguez De Soto"
          }
        ],
        servers: [ "http://localhost:3001/", "https://api-visualizar.herokuapp.com/" ]
      },
      paths: {
        "/api/file": {
          "post": {
            "tags": ["Users"],
            "summary": "Upload an new image to the server",
            "responses": {
              "200": {
                "description": "File uploaded successfully",
                "schema": {
                  "$ref": "#/definitions/Files"
                }
              },
              "404": {
                "description": "Parameter Image on form data not found. File not uploaded",
                "schema": {
                  "$ref": "#/definitions/Files"
                }
              },
              "500": {
                "description": "Cloudinary error, not configured or not working",
                "schema": {
                  "$ref": "#/definitions/Files"
                }
              }
            }
          }
        },
        // newimplementation
      },
      definitions: {
        "File": {
          "properties": File
        },
        "Files": {
          "type": "array",
          "$ref": "#/definitions/File"
        },
        // newdefinitions
      }
    },
    apis: ["./routes/*.ts"],
  },
  
}

export default swagger