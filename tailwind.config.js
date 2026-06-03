export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 25px 80px rgba(15, 23, 42, 0.08)',
      },
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
        },
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top left, rgba(99, 102, 241, 0.35), transparent 28%), radial-gradient(circle at bottom right, rgba(16, 185, 129, 0.17), transparent 30%)',
      },
    },
  },
  plugins: [],
}
