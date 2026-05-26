import { useState } from 'react';
import { DataClient, API } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY, SITE_ID, REQUEST_DOMAIN, S3_DOMAIN } from '../config.jsx';
import { Mail, MessageCircle, MapPin, Upload, CheckCircle, AlertCircle, X } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const REQUEST_TYPES = [
  'Mold Sourcing',
  'Custom Mold Making',
  'Quotation Comparison',
  'Sampling Support',
  'Production Follow-up',
  'Delivery Support',
  'Other',
];

const initialValues = {
  name: '',
  company: '',
  email: '',
  whatsapp: '',
  request_type: '',
  product_type: '',
  material: '',
  quantity: '',
  target_country: '',
  project_details: '',
};

function buildPublicAssetUrl(s3Domain, storageKey) {
  const base = (s3Domain || '').trim().replace(/\/+$/, '');
  const path = (storageKey || '').trim().replace(/^\/+/, '');
  if (!base || !path) return '';
  return `${base}/${path}`;
}

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const onFileChange = (e) => {
    const selected = e.target.files?.[0] || null;
    setFile(selected);
  };

  const removeFile = () => {
    setFile(null);
    const input = document.getElementById('file-upload');
    if (input) input.value = '';
  };

  const validate = () => {
    if (!values.name.trim()) return 'Name is required.';
    if (!values.email.trim()) return 'Email is required.';
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address.';
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    const err = validate();
    if (err) { setErrorMsg(err); return; }

    setStatus('submitting');

    let attachmentData = undefined;

    if (file) {
      const uploadResult = await API.uploadFile(SITE_ID, REQUEST_DOMAIN, file);
      if (uploadResult?.storageKey) {
        attachmentData = {
          filename: uploadResult.filename || file.name,
          size: uploadResult.size || file.size,
          storageKey: uploadResult.storageKey,
          storage: uploadResult.storage || 's3',
          mimeType: uploadResult.mimeType || file.type,
        };
      }
    }

    const payload = {
      data: {
        name: values.name.trim(),
        company: values.company.trim() || undefined,
        email: values.email.trim(),
        whatsapp: values.whatsapp.trim() || undefined,
        request_type: values.request_type || undefined,
        product_type: values.product_type.trim() || undefined,
        material: values.material.trim() || undefined,
        quantity: values.quantity.trim() || undefined,
        target_country: values.target_country.trim() || undefined,
        project_details: values.project_details.trim() || undefined,
        attachment: attachmentData,
      },
    };

    const { data: response, error } = await client
      .from('Contact Inquiries')
      .insert(payload)
      .select()
      .single();

    if (error || response?.success === false) {
      const msg = Array.isArray(response?.errors) && response.errors.length > 0
        ? response.errors.join(', ')
        : error?.message || 'Submission failed. Please try again.';
      setErrorMsg(msg);
      setStatus('error');
      return;
    }

    setStatus('success');
    setValues(initialValues);
    setFile(null);
  };

  const inputClass = 'w-full border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-[#1A2332] text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4F8A]/30 focus:border-[#1B4F8A] bg-white placeholder-gray-400';
  const labelClass = 'block text-[#1A2332] text-sm font-medium mb-1.5';

  return (
    <div>
      {/* Hero */}
      <section style={{background: 'linear-gradient(135deg, #1B4F8A 0%, #163F6E 100%)'}} className="text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="max-w-2xl">
            <span className="inline-block bg-white/15 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-5">Contact Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
              Send Us Your Mold Requirement
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              Fill in the form below with your project details. We'll review your requirement and get back to you with a sourcing plan.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 md:py-24 bg-[#F7F9FC]">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-[#1A2332] font-bold text-xl mb-6">Get in Touch</h2>
              <div className="flex flex-col gap-5 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-[#1B4F8A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-[#1B4F8A]" />
                  </div>
                  <div>
                    <p className="text-[#1A2332] font-medium text-sm">Email</p>
                    <a href="mailto:info@casemoldtrading.com" className="text-[#1B4F8A] text-sm hover:underline">info@casemoldtrading.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-[#1B4F8A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-4 h-4 text-[#1B4F8A]" />
                  </div>
                  <div>
                    <p className="text-[#1A2332] font-medium text-sm">WhatsApp</p>
                    <a href="https://wa.me/" className="text-[#1B4F8A] text-sm hover:underline">Send a WhatsApp Message</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-[#1B4F8A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-[#1B4F8A]" />
                  </div>
                  <div>
                    <p className="text-[#1A2332] font-medium text-sm">Location</p>
                    <p className="text-[#4A5568] text-sm">China-based, serving global buyers</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-[#E2E8F0] rounded-xl p-5">
                <h3 className="text-[#1A2332] font-semibold text-sm mb-3">What to Include</h3>
                <ul className="flex flex-col gap-2">
                  {[
                    'Drawing, photo, or sample reference',
                    'Mold type and material',
                    'Estimated quantity',
                    'Target delivery country',
                    'Any specific requirements',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#E87722] flex-shrink-0 mt-0.5" />
                      <span className="text-[#4A5568] text-xs">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-white border border-[#E2E8F0] rounded-2xl p-10 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-[#1A2332] font-bold text-2xl mb-3">Inquiry Received</h2>
                  <p className="text-[#4A5568] mb-6 max-w-md mx-auto">
                    Thank you for your inquiry. We have received your mold requirement and will review it and get back to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="bg-[#1B4F8A] hover:bg-[#163F6E] text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm border-0"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="bg-white border border-[#E2E8F0] rounded-2xl p-6 md:p-8">
                  <h2 className="text-[#1A2332] font-bold text-xl mb-6">Inquiry Form</h2>

                  {/* Contact Details */}
                  <div className="mb-6">
                    <h3 className="text-[#4A5568] text-xs font-semibold uppercase tracking-wide mb-4">Contact Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className={labelClass}>Name <span className="text-red-500">*</span></label>
                        <input id="name" name="name" type="text" value={values.name} onChange={onChange} placeholder="Your full name" className={inputClass} required />
                      </div>
                      <div>
                        <label htmlFor="company" className={labelClass}>Company</label>
                        <input id="company" name="company" type="text" value={values.company} onChange={onChange} placeholder="Company name" className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="email" className={labelClass}>Email <span className="text-red-500">*</span></label>
                        <input id="email" name="email" type="email" value={values.email} onChange={onChange} placeholder="you@company.com" className={inputClass} required />
                      </div>
                      <div>
                        <label htmlFor="whatsapp" className={labelClass}>WhatsApp</label>
                        <input id="whatsapp" name="whatsapp" type="text" value={values.whatsapp} onChange={onChange} placeholder="+1 234 567 8900" className={inputClass} />
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="mb-6">
                    <h3 className="text-[#4A5568] text-xs font-semibold uppercase tracking-wide mb-4">Project Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="request_type" className={labelClass}>Request Type</label>
                        <select id="request_type" name="request_type" value={values.request_type} onChange={onChange} className={inputClass}>
                          <option value="">Select request type</option>
                          {REQUEST_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="product_type" className={labelClass}>Product Type</label>
                        <input id="product_type" name="product_type" type="text" value={values.product_type} onChange={onChange} placeholder="e.g. Phone case, automotive part" className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="material" className={labelClass}>Material</label>
                        <input id="material" name="material" type="text" value={values.material} onChange={onChange} placeholder="e.g. ABS, PP, Aluminum" className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="quantity" className={labelClass}>Quantity</label>
                        <input id="quantity" name="quantity" type="text" value={values.quantity} onChange={onChange} placeholder="e.g. 10,000 pcs/month" className={inputClass} />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="target_country" className={labelClass}>Target Country</label>
                        <input id="target_country" name="target_country" type="text" value={values.target_country} onChange={onChange} placeholder="e.g. United States, Germany, Australia" className={inputClass} />
                      </div>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div className="mb-6">
                    <label htmlFor="project_details" className={labelClass}>Project Details</label>
                    <textarea
                      id="project_details"
                      name="project_details"
                      rows={5}
                      value={values.project_details}
                      onChange={onChange}
                      placeholder="Describe your mold requirement in detail — dimensions, tolerances, surface finish, timeline, or any other relevant information."
                      className={inputClass}
                    />
                  </div>

                  {/* File Upload */}
                  <div className="mb-6">
                    <label className={labelClass}>Attach File (Optional)</label>
                    <p className="text-[#4A5568] text-xs mb-3">Upload a drawing, photo, or reference file. Accepted: JPG, PNG, PDF, DWG, STEP, IGES (max 20MB)</p>
                    {file ? (
                      <div className="flex items-center gap-3 bg-[#F7F9FC] border border-[#E2E8F0] rounded-lg px-4 py-3">
                        <Upload className="w-4 h-4 text-[#1B4F8A] flex-shrink-0" />
                        <span className="text-[#1A2332] text-sm flex-1 truncate">{file.name}</span>
                        <span className="text-[#4A5568] text-xs">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                        <button type="button" onClick={removeFile} className="text-[#4A5568] hover:text-red-500 transition-colors border-0 bg-transparent p-0">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <label htmlFor="file-upload" className="flex flex-col items-center justify-center border-2 border-dashed border-[#E2E8F0] rounded-lg py-8 cursor-pointer hover:border-[#1B4F8A] hover:bg-[#F7F9FC] transition-colors">
                        <Upload className="w-6 h-6 text-[#4A5568] mb-2" />
                        <span className="text-[#4A5568] text-sm">Click to upload or drag and drop</span>
                        <input
                          id="file-upload"
                          type="file"
                          className="hidden"
                          accept=".jpg,.jpeg,.png,.gif,.webp,.pdf,.doc,.docx,.dwg,.dxf,.step,.stp,.iges,.igs"
                          onChange={onFileChange}
                        />
                      </label>
                    )}
                  </div>

                  {/* Error */}
                  {(status === 'error' || errorMsg) && (
                    <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg px-4 py-3 mb-5">
                      <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-red-700 text-sm">{errorMsg}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-[#E87722] hover:bg-[#C9651A] disabled:opacity-60 text-white font-semibold py-3.5 rounded-lg transition-colors text-base border-0"
                  >
                    {status === 'submitting' ? 'Sending Inquiry…' : 'Send Inquiry'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
