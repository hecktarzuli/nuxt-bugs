// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules:{
    '/old-page2': { redirect: { to: '/new-page', statusCode: 301 } },
    '/old-page3': { redirect: '/new-page' }, // reeturns 307 (temp redirect
    '/old-path/**': { redirect: '/new-page '}, // redirect products/(any) to /new-page
    '/test-path4/:name': { redirect: '/new-test-path4/[:name]'}, 
    '/test-path3/**': { redirect: '/new-test-path3/'}, 
  }
})
