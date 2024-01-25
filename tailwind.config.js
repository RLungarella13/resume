export default {
  content: [],
  theme: {
    extend: {},
    colors: {
      'primary': '#F8F4EC',
      'secondary': '#323232',
      'accent': '#FFBB64',
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {};
      for (let i = 1; i <= 100; i++) {
        // Generating classes from text-xs-vw to text-100vw
        newUtilities[`.text-${i}vw`] = {
          'font-size': `${i}vw`,
        };
      }
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
} 
