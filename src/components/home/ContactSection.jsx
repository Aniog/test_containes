import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Button } from '@/components/ui/Button'
import { submitContact } from '@/api/contact'
import { CheckCircle2, Loader2 } from 'lucide-react'

export function ContactSection() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = (v) => {
    if (!v.name.trim()) return 'Name is required'
    if (!v.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email'
    if (!v.message.trim()) return 'Message is required'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    const validationError = validate(values)
    if (validationError) {
      setError(validationError)
      return
    }

    setStatus('submitting')

    try {
      await submitContact(values)
      setStatus('success')
      setValues({ name: '', email: '', company: '', phone: '', message: '' })
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  return (
    <section id='contact' className='bg-white py-20 md:py-28'>
      <Container>
        <SectionHeader
          badge='Get in touch'
          title='Request a quote'
          subtitle='Tell us about your project and we will recommend the right folding machine, tooling and delivery options.'
        />

        <div className='mx-auto max-w-2xl rounded-2xl border border-slate-100 bg-cloud p-6 shadow-sm md:p-10'>
          {status === 'success' ? (
            <div className='flex flex-col items-center py-8 text-center'>
              <div className='flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600'>
                <CheckCircle2 className='h-8 w-8' />
              </div>
              <h3 className='mt-4 text-2xl font-bold text-navy'>Thank you</h3>
              <p className='mt-2 text-slate-600'>
                We received your message and will get back to you within one
                business day.
              </p>
              <Button
                className='mt-6'
                onClick={() => setStatus('idle')}
                variant='outline'
              >
                Send another message
              </Button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className='space-y-5'>
              <div className='grid gap-5 md:grid-cols-2'>
                <div>
                  <label
                    htmlFor='name'
                    className='mb-1.5 block text-sm font-medium text-slate-700'
                  >
                    Full name
                  </label>
                  <Input
                    id='name'
                    name='name'
                    value={values.name}
                    onChange={onChange}
                    placeholder='John Smith'
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='mb-1.5 block text-sm font-medium text-slate-700'
                  >
                    Email
                  </label>
                  <Input
                    id='email'
                    name='email'
                    type='email'
                    value={values.email}
                    onChange={onChange}
                    placeholder='john@company.com'
                    required
                  />
                </div>
              </div>

              <div className='grid gap-5 md:grid-cols-2'>
                <div>
                  <label
                    htmlFor='company'
                    className='mb-1.5 block text-sm font-medium text-slate-700'
                  >
                    Company
                  </label>
                  <Input
                    id='company'
                    name='company'
                    value={values.company}
                    onChange={onChange}
                    placeholder='Your company'
                  />
                </div>
                <div>
                  <label
                    htmlFor='phone'
                    className='mb-1.5 block text-sm font-medium text-slate-700'
                  >
                    Phone
                  </label>
                  <Input
                    id='phone'
                    name='phone'
                    type='tel'
                    value={values.phone}
                    onChange={onChange}
                    placeholder='+1 800 123 4567'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='mb-1.5 block text-sm font-medium text-slate-700'
                >
                  Message
                </label>
                <Textarea
                  id='message'
                  name='message'
                  value={values.message}
                  onChange={onChange}
                  rows={5}
                  placeholder='Tell us about the material, thickness and fold lengths you need.'
                  required
                />
              </div>

              {error && (
                <p className='text-sm font-medium text-red-600' role='alert'>
                  {error}
                </p>
              )}

              <Button
                type='submit'
                variant='accent'
                className='w-full md:w-auto'
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                    Sending...
                  </>
                ) : (
                  'Send message'
                )}
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  )
}
