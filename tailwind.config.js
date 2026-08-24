module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          dark: '#111827',
          DEFAULT: '#1f2937',
          darker: '#0b0f17',
          light: '#273244'
        },
        accent: {
          teal: '#5eead4',
          DEFAULT: '#38bdf8',
          light: '#7dd3fc',
          dark: '#0ea5e9'
        },
        surface: {
          DEFAULT: '#1f2937',
          dark: '#161d29',
          hover: '#28344a'
        },
        text: {
          primary: '#f8fafc',
          secondary: '#94a3b8',
          muted: '#64748b'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(to bottom right, #111827, #1f2937)'
      },
      fontFamily: {
        sans: ['Inter', '"Segoe UI"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'monospace'],
        script: ['"Dancing Script"', 'cursive']
      }
    }
  },
  plugins: []
};
