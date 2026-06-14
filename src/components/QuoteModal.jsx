import React from 'react';
import { X } from 'lucide-react';
import InquiryForm from './InquiryForm';

const QuoteModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between rounded-t-2xl z-10">
          <div>
            <div className="font-semibold text-lg text-slate-900">Request a Free Sourcing Quote</div>
            <div className="text-sm text-slate-500">Tell us about your project and we will prepare a preliminary assessment.</div>
          </div>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600" aria-label="Close">
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          <InquiryForm onSuccess={() => {
            // Keep modal open briefly to show success, then close
            setTimeout(() => {
              onClose();
            }, 2200);
          }} />
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
