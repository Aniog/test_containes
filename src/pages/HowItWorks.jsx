import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, FileSearch, Camera, FileSignature, ClipboardCheck, Truck } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { processSteps } from '../data/content';

const stepIcons = [MessageSquare, FileSearch, Camera, FileSignature, ClipboardCheck, Truck];

const HowItWorks = () => {
  return (
    <>
      <PageHeader
        breadcrumb="How It Works"
        eyebrow="How it works"
        title="Our six-step sourcing process"
        description="A structured workflow that keeps you informed and in control from the first inquiry to the moment your goods arrive."
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {processSteps.map((step, idx) => {
              const Icon = stepIcons[idx] || MessageSquare;
              return (
                <div
                  key={step.id}
                  className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 flex flex-col md:flex-row gap-6"
                >
                  <div className="md:w-32 shrink-0">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl font-bold text-blue-600">{step.number}</span>
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 text-blue-600">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-semibold text-slate-900">{step.title}</h2>
                    <p className="mt-2 text-base text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'What you get every week',
                items: ['Production status update', 'Photos from the factory', 'Risks and ETA changes flagged early'],
              },
              {
                title: 'What you get on every order',
                items: ['Bilingual contract review', 'Final QC photo report', 'Shipping documents pack'],
              },
              {
                title: 'What we do not do',
                items: ['No hidden margin on supplier prices', 'No long-term lock-in', 'No exaggerated promises'],
              },
            ].map((block) => (
              <div key={block.title} className="bg-white rounded-xl border border-slate-200 p-6 md:p-7">
                <h3 className="text-lg font-semibold text-slate-900">{block.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {block.items.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Ready to start step one?
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
            Tell us what you want to source. We will reply within one business day.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
