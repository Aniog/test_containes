import { useState, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Send, ImagePlus, Paperclip, X, CheckCircle2, Loader2 } from 'lucide-react';
import { DataClient, API } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY, SITE_ID, REQUEST_DOMAIN, S3_DOMAIN } from '@/config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

function buildPublicUrl(storageKey) {
  if (!storageKey) return '';
  const base = (S3_DOMAIN || '').trim().replace(/\/+$/, '');
  const path = storageKey.trim().replace(/^\/+/, '');
  return base && path ? `${base}/${path}` : '';
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function UploadZone({ label, hint, accept, icon: Icon, file, uploading, uploaded, error, onSelect, onClear, preview }) {
  const inputRef = useRef(null);

  return (
    <div>
      <label className="block text-[#1A2332] text-sm font-semibold mb-2">{label}</label>
      {!file ? (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="w-full border-2 border-dashed border-gray-200 hover:border-[#1E5FA8] rounded-xl p-6 flex flex-col items-center gap-3 transition-colors duration-200 group bg-[#F4F6F9] hover:bg-[#1E5FA8]/5"
        >
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
            <Icon className="w-6 h-6 text-[#1E5FA8]" />
          </div>
          <div className="text-center">
            <div className="text-[#1A2332] text-sm font-medium">点击上传{label}</div>
            <div className="text-[#8A9BB0] text-xs mt-1">{hint}</div>
          </div>
        </button>
      ) : (
        <div className={`border rounded-xl p-4 flex items-start gap-4 ${error ? 'border-red-300 bg-red-50' : uploaded ? 'border-green-300 bg-green-50' : 'border-[#1E5FA8]/30 bg-[#1E5FA8]/5'}`}>
          {/* Image preview or file icon */}
          {preview ? (
            <img src={preview} alt="preview" className="w-16 h-16 rounded-lg object-cover flex-shrink-0 border border-gray-200" />
          ) : (
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center flex-shrink-0 border border-gray-200">
              <Icon className="w-7 h-7 text-[#1E5FA8]" />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <div className="text-[#1A2332] text-sm font-medium truncate">{file.name}</div>
            <div className="text-[#8A9BB0] text-xs mt-0.5">{formatBytes(file.size)}</div>
            {uploading && (
              <div className="flex items-center gap-1.5 mt-2">
                <Loader2 className="w-3.5 h-3.5 text-[#1E5FA8] animate-spin" />
                <span className="text-[#1E5FA8] text-xs">上传中…</span>
              </div>
            )}
            {uploaded && !uploading && (
              <div className="flex items-center gap-1.5 mt-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                <span className="text-green-700 text-xs">上传成功</span>
              </div>
            )}
            {error && (
              <div className="text-red-600 text-xs mt-2">{error}</div>
            )}
          </div>
          <button
            type="button"
            onClick={onClear}
            className="flex-shrink-0 w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-red-50 hover:border-red-300 transition-colors"
            aria-label="移除文件"
          >
            <X className="w-3.5 h-3.5 text-[#8A9BB0]" />
          </button>
        </div>
      )}
      <input ref={inputRef} type="file" accept={accept} className="hidden" onChange={onSelect} />
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '' });

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageUploading, setImageUploading] = useState(false);
  const [imageUploaded, setImageUploaded] = useState(null);
  const [imageError, setImageError] = useState('');

  const [attachFile, setAttachFile] = useState(null);
  const [attachUploading, setAttachUploading] = useState(false);
  const [attachUploaded, setAttachUploaded] = useState(null);
  const [attachError, setAttachError] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleImageSelect = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
    setImageUploaded(null);
    setImageError('');
    setImageUploading(true);
    console.log('Uploading image:', file.name);
    const result = await API.uploadImage(SITE_ID, REQUEST_DOMAIN, file);
    setImageUploading(false);
    if (result?.storageKey) {
      setImageUploaded(result);
      console.log('Image uploaded:', result.storageKey);
    } else {
      setImageError('图片上传失败，请重试');
      console.error('Image upload failed:', result);
    }
    e.target.value = '';
  };

  const handleAttachSelect = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setAttachFile(file);
    setAttachUploaded(null);
    setAttachError('');
    setAttachUploading(true);
    console.log('Uploading file:', file.name);
    const result = await API.uploadFile(SITE_ID, REQUEST_DOMAIN, file);
    setAttachUploading(false);
    if (result?.storageKey) {
      setAttachUploaded(result);
      console.log('File uploaded:', result.storageKey);
    } else {
      setAttachError('文件上传失败，请重试');
      console.error('File upload failed:', result);
    }
    e.target.value = '';
  };

  const clearImage = () => {
    setImageFile(null);
    setImagePreview(null);
    setImageUploaded(null);
    setImageError('');
  };

  const clearAttach = () => {
    setAttachFile(null);
    setAttachUploaded(null);
    setAttachError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');

    if (imageFile && !imageUploaded) {
      setSubmitError('请等待图片上传完成后再提交');
      return;
    }
    if (attachFile && !attachUploaded) {
      setSubmitError('请等待文件上传完成后再提交');
      return;
    }

    setSubmitting(true);
    console.log('Submitting contact form…');

    const payload = {
      data: {
        name: form.name,
        company: form.company || undefined,
        email: form.email,
        phone: form.phone || undefined,
        message: form.message,
        ...(imageUploaded ? { reference_image: imageUploaded } : {}),
        ...(attachUploaded ? { attachment: attachUploaded } : {}),
      },
    };

    const { data: response, error } = await client
      .from('Contact Form Responses')
      .insert(payload)
      .select()
      .single();

    setSubmitting(false);

    if (error || response?.success === false) {
      const msg = Array.isArray(response?.errors) ? response.errors.join(', ') : (error?.message || '提交失败，请稍后重试');
      setSubmitError(msg);
      console.error('Submit error:', msg);
      return;
    }

    console.log('Form submitted successfully:', response?.data?.id);
    setSubmitted(true);
  };

  const inputCls = 'w-full border border-gray-200 rounded-lg px-4 py-3 text-[#1A2332] text-sm focus:outline-none focus:border-[#1E5FA8] focus:ring-2 focus:ring-[#1E5FA8]/20 transition-all bg-white';

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[#1E5FA8] text-xs font-semibold uppercase tracking-widest mb-4">联系我们</div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1A2332] mb-4">开启合作，共创精密未来</h2>
          <div className="w-12 h-1 bg-[#C8922A] mx-auto mb-6" />
          <p className="text-[#8A9BB0] text-lg max-w-2xl mx-auto">
            无论您有定制加工需求、技术咨询还是合作意向，
            我们的专业团队将在 24 小时内为您提供专属响应。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <div>
            <h3 className="text-[#1A2332] font-bold text-2xl mb-8">联系方式</h3>
            <div className="space-y-6 mb-10">
              {[
                { icon: MapPin, label: '公司地址', value: '中国·广东省深圳市宝安区智造产业园 A 栋 8 楼' },
                { icon: Phone, label: '销售热线', value: '+86 755-8888-9999' },
                { icon: Mail, label: '商务邮箱', value: 'sales@luokebaidao.com' },
                { icon: Clock, label: '服务时间', value: '周一至周五 08:30 – 18:00（UTC+8）' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#1E5FA8]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#1E5FA8]" />
                  </div>
                  <div>
                    <div className="text-[#8A9BB0] text-xs font-semibold uppercase tracking-widest mb-1">{label}</div>
                    <div className="text-[#1A2332] text-base font-medium">{value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-[#0A1628] rounded-2xl p-8">
              <div className="text-[#2E9CDB] text-sm font-semibold uppercase tracking-widest mb-3">快速报价</div>
              <p className="text-white text-base leading-relaxed mb-5">
                提供图纸或技术规格，我们将在 24 小时内为您出具详细报价单及工艺方案。
              </p>
              <div className="text-[#C8922A] font-bold text-lg">+86 755-8888-9999</div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {submitted ? (
              <div className="bg-[#F4F6F9] rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center min-h-[500px]">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-9 h-9 text-green-600" />
                </div>
                <h3 className="text-[#1A2332] font-bold text-2xl mb-3">感谢您的留言</h3>
                <p className="text-[#8A9BB0] text-base">
                  我们已收到您的需求，专属客户经理将在 24 小时内与您联系。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Company */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#1A2332] text-sm font-semibold mb-2">
                      姓名 <span className="text-red-500">*</span>
                    </label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="您的姓名" className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-[#1A2332] text-sm font-semibold mb-2">公司名称</label>
                    <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="所在公司" className={inputCls} />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#1A2332] text-sm font-semibold mb-2">
                      电子邮箱 <span className="text-red-500">*</span>
                    </label>
                    <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="email@example.com" className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-[#1A2332] text-sm font-semibold mb-2">联系电话</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+86 138 0000 0000" className={inputCls} />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[#1A2332] text-sm font-semibold mb-2">
                    需求描述 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="请描述您的加工需求、材料、数量、精度要求等信息，以便我们为您提供精准报价…"
                    className={`${inputCls} resize-none`}
                  />
                </div>

                {/* Upload: Reference Image */}
                <UploadZone
                  label="参考图片"
                  hint="支持 JPG、PNG、WEBP、GIF，最大 10MB"
                  accept="image/*"
                  icon={ImagePlus}
                  file={imageFile}
                  uploading={imageUploading}
                  uploaded={imageUploaded}
                  error={imageError}
                  preview={imagePreview}
                  onSelect={handleImageSelect}
                  onClear={clearImage}
                />

                {/* Upload: Attachment */}
                <UploadZone
                  label="技术文件 / 图纸"
                  hint="支持 PDF、DWG、STEP、IGES、Excel、Word、ZIP，最大 50MB"
                  accept=".pdf,.doc,.docx,.xls,.xlsx,.dwg,.dxf,.step,.stp,.iges,.igs,.txt,.zip,.rar"
                  icon={Paperclip}
                  file={attachFile}
                  uploading={attachUploading}
                  uploaded={attachUploaded}
                  error={attachError}
                  preview={null}
                  onSelect={handleAttachSelect}
                  onClear={clearAttach}
                />

                {/* Submit error */}
                {submitError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-red-700 text-sm">
                    {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting || imageUploading || attachUploading}
                  className="w-full bg-[#1E5FA8] hover:bg-[#2E9CDB] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-base"
                >
                  {submitting ? (
                    <><Loader2 className="w-4 h-4 animate-spin" />提交中…</>
                  ) : (
                    <><Send className="w-4 h-4" />提交需求</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
