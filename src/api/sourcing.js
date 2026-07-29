import { DataClient, User } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const getRows = (response) => response?.data?.list ?? [];
const getEntity = (response) => response?.data ?? null;

export const fetchCaseStudies = async () => {
  const { data: response, error } = await client
    .from('CaseStudy')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return getRows(response);
};

export const fetchBlogPosts = async () => {
  const { data: response, error } = await client
    .from('BlogPost')
    .select('*')
    .order('published_at', { ascending: false });

  if (error) throw error;
  return getRows(response);
};

export const submitInquiry = async (inquiryData) => {
  // First, upsert the User (CRM Record)
  const userRecord = await User.upsert({
    email: inquiryData.email,
    name: inquiryData.name,
    role: 'guest',
  });

  if (!userRecord || !userRecord.id) {
    throw new Error('Failed to create user record.');
  }

  // Then, insert the Sourcing Inquiry entity
  const { data: response, error } = await client
    .from('SourcingInquiry')
    .insert({
      data: {
        ...inquiryData,
        user_id: userRecord.id
      },
    })
    .select()
    .single();

  if (error || response?.success === false) {
    const errorMsg = Array.isArray(response?.errors) ? response.errors.join(', ') : (error?.message || 'Submission failed');
    throw new Error(errorMsg);
  }

  return getEntity(response);
};
