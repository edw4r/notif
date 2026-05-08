import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: '#111827',
        cloud: '#f8fafc',
        signal: '#2563eb',
        leaf: '#0f9f6e',
        ember: '#ef7d31'
      },
      fontFamily: {
        sans: [
          'Google Sans Flex',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif'
        ]
      },
      boxShadow: {
        phone: '0 24px 70px rgba(17, 24, 39, 0.18)'
      }
    }
  },
  plugins: [typography]
};
