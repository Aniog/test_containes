export const STRK_PROJECT_URL = 'https://www.uat.strikingly.com/api/v1/sites/60188/form_entities'
export const STRK_PROJECT_ANON_KEY = 'xx'
export const SITE_ID = '60188'
export const REQUEST_DOMAIN = 'https://www.uat.strikingly.com'
export const S3_DOMAIN = 'https://strikingly-user-asset-images-dev.s3.ap-northeast-1.amazonaws.com'
import { DataClient } from '@strikingly/sdk'
export const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

