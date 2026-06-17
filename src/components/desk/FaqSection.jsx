import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: '办公桌的标准高度是多少？',
    a: '标准办公桌高度为 72–76cm，适合身高 160–180cm 的人群。如果团队成员身高差异较大，建议选择可调节高度的升降桌，范围通常在 60–125cm 之间。',
  },
  {
    q: '批量采购办公桌有哪些注意事项？',
    a: '批量采购时需注意：① 统一尺寸规格便于后期维护；② 提前测量办公室空间，预留走道宽度（建议 ≥ 90cm）；③ 与供应商确认交货周期和安装服务；④ 索取样品或到展厅实地体验。',
  },
  {
    q: '实木桌和密度板桌哪个更适合办公室？',
    a: '实木桌耐用、质感好，适合高端办公室或管理层使用，但价格较高；密度板桌面经济实惠、款式多样，适合大规模员工工位采购。两者各有优势，可根据预算和使用场景灵活搭配。',
  },
  {
    q: '升降桌真的有必要购买吗？',
    a: '对于长时间伏案工作的员工，升降桌能有效减少久坐带来的腰颈问题，研究表明坐站交替工作可提升专注力和工作效率。虽然初期投入较高，但从员工健康和长期生产力角度来看，性价比很高。',
  },
  {
    q: '如何选择适合开放式办公区的桌子？',
    a: '开放式办公区建议选择模块化拼接桌，可根据团队规模灵活扩展；桌面颜色建议选择浅色系（如白色、浅灰），视觉上更宽敞；同时注意走线管理，避免线缆杂乱影响整体美观。',
  },
  {
    q: '办公桌的保修期一般是多久？',
    a: '正规品牌的办公桌通常提供 1–3 年质保，部分高端品牌可达 5 年。购买时务必确认保修范围（是否包含桌面划伤、结构损坏等），并保留购买凭证。',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
            常见问题
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2 mb-4">
            采购前必看 FAQ
          </h2>
          <p className="text-slate-600 leading-relaxed">
            整理了采购过程中最常遇到的问题，帮你快速找到答案。
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-slate-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-slate-900 text-sm md:text-base pr-4">
                  {faq.q}
                </span>
                {openIndex === i ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
