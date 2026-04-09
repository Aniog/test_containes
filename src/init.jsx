import { Utils } from '@strikingly/sdk'

const STRK_PROJECT_URL = 'https://www.uat.strikingly.com/api/v1/sites/56341/form_entities';
const STRK_PROJECT_ANON_KEY = 'xx'

Utils.setCookieItem('__strk_project_url', STRK_PROJECT_URL)
Utils.setCookieItem('__strk_project_anon_key', STRK_PROJECT_ANON_KEY)
