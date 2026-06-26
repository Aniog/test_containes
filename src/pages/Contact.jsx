import React from 'react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: 'Office Address',
      value: 'Room 1208, Building 3, 88 Lujiazui Ring Road, Pudong, Shanghai 200120, China',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@ssourcingchina.com',
      href: 'mailto:info@ssourcingchina.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+86 21 5000 0000',
      href: 'tel:+862150000000',
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Monday – Friday, 9:00 – 18:00 (China Standard Time)',
    },
  ];

  const regions = [
    { region: 'North America', contact: 'inquiries.na@ssourcingchina.com' },
    { region: 'Europe', contact: 'inquiries.eu@ssourcingchina.com' },
    { region: 'Australia & NZ', contact: 'inquiries.au@ssourcingchina.com' },
    { region: 'General Inquiries', contact: 'info@ssourcingchina.com' },
  ];

  return (
    <div>
      <section className="bg-slate-900 text-white py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Contact Us</h1>
            <p className="text-lg text-slate-300">
              Tell us about your sourcing requirements. We will review your needs and respond within 
              1-2 business days with an initial assessment and next steps.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Submit an Inquiry</h2>
              <InquiryForm title="Request a Sourcing Quote" />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              
              <div className="space-y-6 mb-10">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-slate-700" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-slate-500 mb-1">{item.label}</div>
                        {item.href ? (
                          <a href={item.href} className="text-slate-700 hover:text-slate-900">
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-slate-700">{item.value}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="card bg-slate-50 border-slate-200">
                <h3 className="font-semibold mb-4">Regional Inquiries</h3>
                <div className="space-y-3">
                  {regions.map((r, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                      <span className="text-slate-600">{r.region}</span>
                      <a href={`mailto:${r.contact}`} className="text-slate-700 hover:text-slate-900">
                        {r.contact}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-center mb-8">What Happens After You Submit</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card text-center">
                <div className="text-2xl font-bold text-slate-300 mb-2">01</div>
                <h3 className="font-semibold mb-2">Review</h3>
                <p className="text-sm text-slate-600">
                  We review your requirements and assess feasibility based on product type, volume, and timeline.
                </p>
              </div>
              <div className="card text-center">
                <div className="text-2xl font-bold text-slate-300 mb-2">02</div>
                <h3 className="font-semibold mb-2">Response</h3>
                <p className="text-sm text-slate-600">
                  You receive a response within 1-2 business days with initial thoughts and questions.
                </p>
              </div>
              <div className="card text-center">
                <div className="text-2xl font-bold text-slate-300 mb-2">03</div>
                <h3 className="font-semibold mb-2">Discussion</h3>
                <p className="text-sm text-slate-600">
                  We schedule a call or continue via email to clarify details and provide a scope and quote.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white border-t border-slate-200">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="section-title mb-4">Before You Contact Us</h2>
            <p className="text-slate-600 mb-6">
              To provide a useful initial response, we need some basic information about what you are looking to source. 
              The inquiry form above asks for the key details. If you prefer to email directly, please include:
            </p>
            <div className="text-left max-w-md mx-auto">
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400">•</span> Product description or specifications
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400">•</span> Target quantity or annual volume
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400">•</span> Target price range if known
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400">•</span> Destination country
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400">•</span> Timeline requirements
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
