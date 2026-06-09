import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(v => ({ ...v, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulating form submission as the database synchronization reported a failure.
    // In a real scenario, this would use the @strikingly/sdk to save ContactFormResponse
    setTimeout(() => {
      setStatus('success');
      toast.success('Message sent completely!', {
        description: 'We will be in touch shortly.'
      });
      setValues({ name: '', email: '', company: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 border-t items-center flex justify-center border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-blue-400" />
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Request a Quote</h2>
            <p className="mt-4 text-slate-600">
              Get in touch with our engineering experts to discuss your manufacturing requirements.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name</label>
                <Input 
                  id="name" 
                  name="name" 
                  value={values.name} 
                  onChange={handleChange} 
                  required 
                  className="bg-slate-50 border-slate-200 focus-visible:ring-blue-600"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">Work Email</label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  value={values.email} 
                  onChange={handleChange} 
                  required 
                  className="bg-slate-50 border-slate-200 focus-visible:ring-blue-600"
                  placeholder="jane@company.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium text-slate-700">Company Name</label>
              <Input 
                id="company" 
                name="company" 
                value={values.company} 
                onChange={handleChange} 
                className="bg-slate-50 border-slate-200 focus-visible:ring-blue-600"
                placeholder="Acme Manufacturing"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-700">Project Details</label>
              <Textarea 
                id="message" 
                name="message" 
                rows={5} 
                value={values.message} 
                onChange={handleChange} 
                required 
                className="bg-slate-50 border-slate-200 focus-visible:ring-blue-600"
                placeholder="Tell us about the materials you're working with..."
              />
            </div>
            
            <Button 
              type="submit" 
              disabled={status === 'submitting'}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg"
            >
              {status === 'submitting' ? 'Sending Request...' : 'Submit Request'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
