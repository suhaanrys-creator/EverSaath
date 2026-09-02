import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { navy: '#063B70', teal: '#008F95', emerald: '#178B5A', gold: '#F5B21A', cream: '#FFFDF7', sage: '#EAF4EC' }, fontFamily: { sans: ['var(--font-manrope)', 'sans-serif'] }, boxShadow: { soft: '0 12px 40px rgba(6,59,112,.10)' } } }, plugins: [] };
export default config;
