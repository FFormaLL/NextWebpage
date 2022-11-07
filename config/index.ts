export const IS_DEV = process.env.NODE_ENV === 'development'
export const HOST = 'http://localhost:3000'
export const API_HOST = IS_DEV ? 'http://localhost:8080' : 'https://api.achaves.dev'
export const GOOGLE_ANALYTICS_ID = 'UA-46595000-1'
