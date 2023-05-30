export default defineEventHandler((event) => {
    const urlObj = getRequestURL(event) 
    console.log(urlObj)
    console.log(isError(event))
    // https://www.jsdocs.io/package/h3#getRequestURL
  
  })