import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const apiClient = axios.create({
  baseURL: BASE_URL,
});

const apiGet = async (resource, params = {}) => {
  try {
    const response = await apiClient.get(resource, { params });
    return response.data;
  } catch (error) {
    console.error(`GET ${resource} failed`, error);
    throw error;
  }
};

export const getJobs = () => apiGet('/api/jobs');
export const getJobById = (id) => apiGet(`/api/jobs/${id}`);
export const getCompanies = () => apiGet('/api/companies');
export const getCompanyById = (id) => apiGet(`/api/companies/${id}`);
