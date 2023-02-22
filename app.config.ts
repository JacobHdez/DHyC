// https://v3.nuxtjs.org/guide/directory-structure/app.config
export default defineAppConfig({
  theme: {
    meta: {
      name: 'Portafolio - DHyC - JHV',
      description: 'Portafolio para la clase de Desarrollo Humano y Comunicación - UG-DICIS',
      author: 'Jacobo Hernández Varela',
      url: 'https://dh-y-c.vercel.app/'
    },
    author: 'Jacobo Hernández Varela',
    email: 'j.hernandezvarela@ugto.mx',
    avatar: '/avatar.png',
    favicon: '/favicon.ico',
    homePage: {
      showBlogPosts: true,
      postItemLimit: 5
    },
    subscribePage: false,
    articlePage: {
      showTime: true,
      outdated: {
        show: false,
        threshold: 30
      },
      showBlogCatalog: false,
      showNoteCatalog: false
    }
  }
})
