# Tyler Stahl Portfolio

A modern portfolio website built with React, TypeScript, Vite, and React Router, deployed on Vercel with Supabase as the backend.

## Features

- **Frontend**: React with TypeScript and Vite
- **Backend**: Supabase (via `@supabase/supabase-js`)
- **Routing**: React Router for single-page application navigation
- **Styling**: Modern CSS with responsive design
- **Icons**: React Icons for beautiful UI elements

## Project Structure

```
tyler-stahl-portfolio/
├── src/
│   ├── components/     # Reusable React components
│   ├── sections/      # Content sections
│   ├── lib/           # Supabase client
│   └── ...
├── vercel.json        # SPA rewrites for client-side routing
└── ...
```

The application uses React Router for navigation between pages:
- `/` - Home page
- `/about` - About page
- `/skills` - Skills page
- `/projects` - Projects page
- `/contact` - Contact page

## Getting Started

```bash
npm install
cp .env.example .env.local   # fill in Supabase URL and anon key
npm run dev
```

## Deployment

Import the repo in Vercel (framework preset: Vite) and set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` as environment variables. Pushes to `main` deploy automatically.

## Technologies Used

- **Frontend**: React 19, TypeScript, Vite, React Router DOM
- **Backend**: Supabase
- **Hosting**: Vercel
- **Icons**: React Icons
- **Development**: ESLint
