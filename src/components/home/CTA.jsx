import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="bg-[#E63946] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#F1FAEE] mb-6 leading-tight">
          准备好开始了吗？
        </h2>
        <p className="text-red-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          立即联系我们，获取免费咨询，让我们一起探讨如何帮助您的业务腾飞。
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="flex items-center gap-2 bg-[#F1FAEE] text-[#E63946] hover:bg-[#A8DADC] font-bold px-10 py-4 rounded-full transition-colors duration-200 shadow-lg text-base">
            免费咨询
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="flex items-center gap-2 border-2 border-[#F1FAEE] text-[#F1FAEE] hover:bg-[#F1FAEE] hover:text-[#E63946] font-bold px-10 py-4 rounded-full transition-colors duration-200 text-base">
            查看方案
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
