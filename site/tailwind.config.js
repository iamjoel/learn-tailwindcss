/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  safelist: [ // 一定会加载的类名。无视 css Purge
    'columns-2', 'columns-3', 'columns-4',
    'columns-xs', 'columns-sm',
    'gap-4', 'gap-8',
    'flex', 'flex-wrap',
    'w-6',
    'h-6',
    'p-1', 'p-2', 'px-1', 'px-2', 'px-4', 'px-8',
    'space-x-1', 'space-x-2','space-x-3', 'space-x-4',
    'space-y-1', 'space-y-2','space-y-3', 'space-y-4',
    'bg-gray-200'
  ],
  plugins: [],
}
