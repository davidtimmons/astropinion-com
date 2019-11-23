/**
 * Configure Tailwind CSS. For Parcel to detect changes, modify this file then save a CSS file.
 */
const { colors, fontFamily, maxHeight } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      colors: {
        blue: {
          ...colors.blue,
          // congress: 'var(--blue-congress)',
          // electric: 'var(--blue-electric)',
          shuttle: 'var(--blue-shuttle)',
          // shark: 'var(--blue-shark)',
          // dove: 'var(--blue-dove)',
          // mariner: 'var(--blue-mariner)',
          rhino: 'var(--blue-rhino)',
        },
        red: {
          ...colors.red,
          'burnt-umber': 'var(--red-burnt-umber)',
          // brick: 'var(--red-brick)',
          // espresso: 'var(--red-espresso)',
        },
        // yellow: {
        //   ...colors.yellow,
        //   eagle: 'var(--yellow-eagle)',
        //   olive: 'var(--yellow-olive)',
        //   sand: 'var(--yellow-sand)',
        //   woodland: 'var(--yellow-woodland)',
        // },
      },
      fontFamily: {
        ...fontFamily,
        dosis: '"Dosis", "sans-serif"',
      },
      maxHeight: {
        ...maxHeight,
        '3': '0.75rem',
        '4': '1.0rem',
        '6': '1.5rem',
      },
      screens: {
        xxs: { max: '320px' },  // template
        xs: { max: '375px' },   // template
        sm: { max: '576px' },   // Bootstrap
        md: { max: '768px' },   // Tailwind, Bootstrap
        lg: { max: '991px' },   // template, Bootstrap
        xl: { max: '1024px' },  // Tailwind
        xxl: { max: '1200px' }, // Bootstrap
      },
    }
  },
  variants: {},
  plugins: []
}
