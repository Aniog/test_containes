import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config';

export const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);
