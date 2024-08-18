# React with Vite

```
npm create vite@latest
```

Alternative:

```
npm create vite@latest Project_Name -- --template react
```

## Tailwind in React-Vite

- Install

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- Path Configuration

```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- Adding Tailwind Directives

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Links

- [React Docs](https://react.dev/learn)
- [Tailwind Docs](https://tailwindcss.com/docs/installation)
- [React-Router](https://reactrouter.com/en/main)
