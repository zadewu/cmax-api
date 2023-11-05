/**
 * movie controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController(
  'api::movie.movie',
  ({ strapi }) => ({
    async findHotMovies(ctx) {
      const entries = await strapi.entityService.findMany('api::movie.movie', {
        fields: ['movieTitle', 'movieDuration'],
        sort: { outNow: 'desc' },
        populate: { categories: true, image: true },
      })

      // @ts-ignore
      const sanitizedEntity = await this.sanitizeOutput(entries, ctx)

      // @ts-ignore
      return this.transformResponse(sanitizedEntity, {})
    },
  })
)
