const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Sample API endpoint for portfolio data
app.get('/api/portfolio', (req, res) => {
  res.json({
    name: 'Tyler Stahl',
    title: 'Software Developer',
    description: 'Full-stack developer passionate about creating innovative solutions',
    skills: ['React', 'Node.js', 'TypeScript', 'Express.js', 'MongoDB'],
    projects: [
      {
        id: 1,
        title: 'Portfolio Website',
        description: 'Personal portfolio built with React and Express',
        technologies: ['React', 'Express', 'TypeScript'],
        github: 'https://github.com/yourusername/portfolio'
      }
    ]
  });
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api`);
});
