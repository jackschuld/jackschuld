module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Source Sans Pro"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      colors: {
        creative: {
          primary: '#2D3047',     // Deep blue-purple
          accent: '#FF9F1C',      // Vibrant orange
          light: '#F4F7F5',       // Off-white
          dark: '#1A1A1D',        // Almost black
          muted: '#A9B3CE',       // Soft blue-gray
        }
      },
    },
  },
  plugins: [],
};
