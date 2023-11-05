export default ({ env }) => ({
  upload: {
    config: {
      breakpoints: {
        xlarge: 1920,
        large: 1000,
        medium: 750,
        small: 500
      }
    }
  },
  publisher: {
    enabled: true,
    config: {
      components: {
        dateTimePicker: {
          step: 15,
        }
      },
      hooks: {
        beforePublish: async ({ strapi, uid, entity }) => { },
        afterPublish: async ({ strapi, uid, entity }) => { },
        beforeUnpublish: async ({ strapi, uid, entity }) => { },
        afterUnpublish: async ({ strapi, uid, entity }) => { },
      },
    }
  },
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    }
  }
});