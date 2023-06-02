export default defineEventHandler((event) => {
    const urlObj = getRequestURL(event) 

     // don't touch error routes
  if (urlObj.pathname === '/__nuxt_error') return
  
  })