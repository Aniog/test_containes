import { DataClient } from '@strikingly/sdk';

// These should ideally come from a config.jsx but for now using process.env logic if available or defaults
export const STRK_PROJECT_URL = window.location.origin;
export const STRK_PROJECT_ANON_KEY = 'anon-key'; // This is usually provided in the environment

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export const getRows = (response) => response?.data?.list ?? [];
export const getEntity = (response) => response?.data ?? null;

export default client;
