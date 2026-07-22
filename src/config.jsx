import { Utils } from '@strikingly/sdk'

// The platform injects real credentials via cookies at runtime.
// Fall back to the hardcoded values only when cookies are absent (local dev).
export const STRK_PROJECT_URL =
  Utils.getCookieItem('__strk_project_url') ||
  'https://www.uat.strikingly.com/api/v1/sites/63134/form_entities'

export const STRK_PROJECT_ANON_KEY =
  Utils.getCookieItem('__strk_project_anon_key') || 'xx'

export const SITE_ID = '63134'
export const REQUEST_DOMAIN = 'https://www.uat.strikingly.com'
export const S3_DOMAIN = 'https://strikingly-user-asset-images-dev.s3.ap-northeast-1.amazonaws.com'
