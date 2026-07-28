import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export const createInquiry = async (inquiryData) => {
  try {
    const { data: response, error } = await client
      .from('SourcingInquiry')
      .insert({
        data: {
          name: inquiryData.name,
          email: inquiryData.email,
          company: inquiryData.company || '',
          product: inquiryData.product,
          quantity: inquiryData.quantity || '',
          message: inquiryData.message || '',
          status: 'new',
          source: inquiryData.source || 'website',
        },
      })
      .select()
      .single();

    if (error) throw error;
    if (response?.success === false) {
      const errors = Array.isArray(response?.errors) ? response.errors.join(', ') : 'Submission failed';
      throw new Error(errors);
    }

    return response?.data ?? null;
  } catch (error) {
    console.error('Error creating inquiry:', error);
    throw error;
  }
};

export const fetchInquiries = async (limit = 50, offset = 0) => {
  try {
    const { data: response, error } = await client
      .from('SourcingInquiry')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit)
      .range(offset, offset + limit - 1);

    if (error) throw error;
    if (response?.success === false) {
      const errors = Array.isArray(response?.errors) ? response.errors.join(', ') : 'Fetch failed';
      throw new Error(errors);
    }

    return response?.data?.list ?? [];
  } catch (error) {
    console.error('Error fetching inquiries:', error);
    throw error;
  }
};

export const updateInquiryStatus = async (id, status) => {
  try {
    const { data: response, error } = await client
      .from('SourcingInquiry')
      .update({
        data: { status },
      })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    if (response?.success === false) {
      const errors = Array.isArray(response?.errors) ? response.errors.join(', ') : 'Update failed';
      throw new Error(errors);
    }

    return response?.data ?? null;
  } catch (error) {
    console.error('Error updating inquiry:', error);
    throw error;
  }
};

export const deleteInquiry = async (id) => {
  try {
    const { data: response, error } = await client
      .from('SourcingInquiry')
      .delete()
      .eq('id', id)
      .select()
      .maybeSingle();

    if (error) throw error;
    if (response?.success === false) {
      const errors = Array.isArray(response?.errors) ? response.errors.join(', ') : 'Delete failed';
      throw new Error(errors);
    }

    return response?.data ?? null;
  } catch (error) {
    console.error('Error deleting inquiry:', error);
    throw error;
  }
};
