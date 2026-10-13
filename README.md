# Mahesh Zalte — Developer Portfolio

A responsive portfolio built with React and Vite. It presents Mahesh Zalte's backend-focused software development experience, skills, projects, education, and contact information.

## Development

```sh
npm ci
npm run dev
```

## Build and lint

```sh
npm run build
npm run lint
```

The production build is written to `dist/`. For static hosting such as Netlify, use `npm run build` as the build command and `dist` as the publish directory.

## Content and contact

Resume source content is in `main.tex`; the portfolio links to `public/Mahesh_Zalte.pdf`. The contact form uses the existing Getform endpoint configured in `src/components/Contact.jsx`.
