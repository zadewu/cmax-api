export default {
  routes: [
    {
      method: 'GET',
      path: '/movies/hot',
      handler: 'movie.findHotMovies',
      config: {
        tag: 'Movie',
        auth: false,
        policies: [],
      }
    }
  ]
}