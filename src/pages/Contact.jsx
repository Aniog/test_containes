import React from 'react';
import ContactForm from '@/components/shared/ContactForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react';

const contactInfo = [
  { icon: MapPin, title: 'Office', detail: 'Shenzhen, China', sub: 'Futian District' },
  { icon: Phone, title: 'Phone', detail: '+86 755 1234 5678', sub: 'Mon-Fri 9am-6pm CST' },
  { icon: Mail, title: 'Email', detail: 'info@ssourcingchina.com', sub: 'We reply within 1 business day' },
  { icon: Clock, title: 'Working hours', detail: '9:00 - 18:00', sub: 'China Standard Time (UTC+8)' },
];

const Contact = () => {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Contact Us</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Ready to start your sourcing project? Get in touch and we will get back to you within 1 business day.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div className="space-y-6">
            {contactInfo.map((item) => (
              <Card key={item.title} className="border-slate-200">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-slate-100 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-slate-900" />
                    </div>
                    <div>
                      <CardTitle className="text-base">{item.title}</CardTitle>
                      <CardDescription>{item.sub}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium text-slate-900">{item.detail}</p>
                </CardContent>
              </Card>
            ))}

            <Card className="border-slate-200 bg-slate-50">
              <CardHeader>
                <CardTitle className="text-base">What happens next?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {['We review your inquiry within 1 business day', 'A sourcing specialist contacts you', 'We provide a tailored proposal', 'You approve and we start sourcing'].map((step) => (
                    <li key={step} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
