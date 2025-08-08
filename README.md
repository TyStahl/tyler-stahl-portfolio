# Tyler Stahl Portfolio

A modern portfolio website built with React, TypeScript, Express.js, and React Router.

## Features

- **Frontend**: React with TypeScript and Vite
- **Backend**: Express.js server with RESTful API
- **Routing**: React Router for single-page application navigation
- **Styling**: Modern CSS with responsive design
- **Icons**: React Icons for beautiful UI elements

## Project Structure

```
tyler-stahl-portfolio/
├── src/
│   ├── components/     # Reusable React components
│   ├── pages/         # Individual page components
│   ├── sections/      # Content sections
│   ├── services/      # API services
│   └── ...
├── server/
│   └── server.js      # Express.js backend server
└── ...
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tyler-stahl-portfolio
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

#### Development Mode

1. **Start the backend server** (in one terminal):
```bash
npm run dev:server
```
The server will run on http://localhost:3001

2. **Start the frontend development server** (in another terminal):
```bash
npm run dev
```
The frontend will run on http://localhost:5173

#### Production Mode

1. Build the frontend:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

This will serve both the built React app and the API from http://localhost:3001

## Available Scripts

- `npm run dev` - Start frontend development server
- `npm run dev:server` - Start backend development server with nodemon
- `npm run server` - Start backend server
- `npm run build` - Build the frontend for production
- `npm run start` - Build and start production server
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## API Endpoints

- `GET /api/health` - Server health check
- `GET /api/portfolio` - Portfolio data

## Navigation

The application uses React Router for navigation between pages:
- `/` - Home page
- `/about` - About page
- `/skills` - Skills page
- `/projects` - Projects page
- `/contact` - Contact page

## Technologies Used

- **Frontend**: React 19, TypeScript, Vite, React Router DOM
- **Backend**: Express.js, CORS, dotenv
- **Icons**: React Icons
- **Development**: ESLint, nodemon
