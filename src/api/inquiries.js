const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Request failed'
}

export async function submitSourcingInquiry(formData, source) {
  const { DataClient, User } = await import('@strikingly/sdk')
  const { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } = await import('../config.jsx')

  const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

  // Step 1: Upsert user to CRM
  const userRecord = await User.upsert({
    email: formData.email,
    name: formData.name,
    browserId: User.getBrowserId(),
    role: 'guest',
  })

  if (!userRecord || !userRecord.id) {
    throw new Error('Failed to create user record.')
  }

  // Step 2: Insert inquiry linked to user
  const { data: response, error } = await client
    .from('Sourcing Inquiries')
    .insert({
      data: {
        user_id: userRecord.id,
        name: formData.name,
        email: formData.email,
        company: formData.company || '',
        phone: formData.phone || '',
        product: formData.product,
        quantity: formData.quantity || '',
        timeline: formData.timeline || '',
        message: formData.message || '',
        source: source,
      },
    })
    .select()
    .single()

  if (error || response?.success === false) {
    throw new Error(getErrorMessage(response, error))
  }

  console.log('Inquiry submitted successfully:', response)
  return response
}
