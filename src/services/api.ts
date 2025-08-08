const API_BASE_URL = 'http://localhost:3001/api';

export interface PortfolioData {
  name: string;
  title: string;
  description: string;
  skills: string[];
  projects: Project[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
}

export const api = {
  async getHealth(): Promise<{ status: string; message: string }> {
    const response = await fetch(`${API_BASE_URL}/health`);
    if (!response.ok) {
      throw new Error('Failed to fetch health status');
    }
    return response.json();
  },

  async getPortfolio(): Promise<PortfolioData> {
    const response = await fetch(`${API_BASE_URL}/portfolio`);
    if (!response.ok) {
      throw new Error('Failed to fetch portfolio data');
    }
    return response.json();
  }
};
