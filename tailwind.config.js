/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--bg)',
        surface: 'var(--surface)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        accent: 'var(--accent)',
        secondary: 'var(--secondary)',
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        button: '6px',
        card: '12px',
      },
      boxShadow: {
        soft: '0 24px 80px rgba(15, 23, 42, 0.08)',
      },
      screens: {
        xs: '375px',
      },
      maxWidth: {
        content: '1280px',
      },
      spacing: {
        8: '8px',
        16: '16px',
        24: '24px',
        32: '32px',
        48: '48px',
        64: '64px',
        96: '96px',
        128: '128px',
      },
      letterSpacing: {
        tight: '-0.02em',
        caps: '0.12em',
      },
    },
  },
  plugins: [],
};
