declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string
    DB_URL: string
    DEVURL: string
    CLOUDINARY_API_KEY: string
    CLOUDINARY_API_SECRET: string
    NODE_ENV: 'dev' | 'prod'
  }
}

export {}