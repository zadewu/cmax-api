import Logo from './extensions/logo.svg'
import Favicon from './extensions/favicon-32x32.png'
import en from './extensions/translations/en.json'
import vi from './extensions/translations/vi.json'

export default {
  config: {
    auth: {
      logo: Logo,
    },
    head: {
      favicon: Favicon,
    },
    menu: {
      logo: Logo,
    },
    locales: ['vi'],
    tutorials: false,
    notifications: { releases: false },
    translations: {
      en: en,
      vi: vi,
    },
  },
  bootstrap(app) {},
}
