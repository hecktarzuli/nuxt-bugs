export default defineEventHandler((event) => {
    const urlObj = getRequestURL(event) 
    console.log(urlObj)
    
    // https://www.jsdocs.io/package/h3#getRequestURL
  
  })