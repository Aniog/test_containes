import { useState } from 'react';

const phases = [
  {
    id: 'before',
    label: '台风来临前',
    icon: '⚡',
    color: '#f4a261',
    items: [
      {
        category: '信息准备',
        icon: '📱',
        tips: [
          '关注气象部门发布的台风预警信息',
          '下载官方气象APP，开启推送通知',
          '了解台风路径和预计登陆时间',
          '记录当地应急管理部门电话',
        ],
      },
      {
        category: '物资储备',
        icon: '📦',
        tips: [
          '储备3-7天的饮用水（每人每天3升）',
          '准备足够的食物（罐头、干粮等）',
          '备好手电筒、蜡烛和备用电池',
          '准备急救药品和常用药物',
          '充满手机电量，准备充电宝',
        ],
      },
      {
        category: '房屋加固',
        icon: '🏠',
        tips: [
          '检查并加固门窗，必要时用胶带加固玻璃',
          '清理阳台、屋顶的杂物和花盆',
          '检查屋顶和排水系统',
          '关闭不必要的电源和燃气',
          '将重要文件放入防水袋',
        ],
      },
      {
        category: '人员安排',
        icon: '👨‍👩‍👧‍👦',
        tips: [
          '确认家庭成员的联系方式',
          '制定家庭紧急疏散计划',
          '了解附近的避难场所位置',
          '安排老人、儿童等弱势群体的照料',
          '如需撤离，提前做好准备',
        ],
      },
    ],
  },
  {
    id: 'during',
    label: '台风期间',
    icon: '🌀',
    color: '#e63946',
    items: [
      {
        category: '室内安全',
        icon: '🏠',
        tips: [
          '留在室内，远离门窗',
          '关闭所有门窗，拉上窗帘',
          '避免使用电话，除非紧急情况',
          '不要使用蜡烛，防止火灾',
          '保持冷静，等待台风过去',
        ],
      },
      {
        category: '禁止行为',
        icon: '🚫',
        tips: [
          '不要外出，即使台风眼经过时也不要出门',
          '不要在海边、河边、山坡等危险地带停留',
          '不要驾车穿越积水路段',
          '不要靠近广告牌、大树等可能倒塌的物体',
          '不要触碰倒落的电线',
        ],
      },
      {
        category: '紧急情况',
        icon: '🆘',
        tips: [
          '如房屋受损严重，立即撤离到安全地点',
          '遭遇洪水时，向高处转移',
          '如被困，拨打119或120求救',
          '保存体力，等待救援',
          '用手机发送位置信息给救援人员',
        ],
      },
    ],
  },
  {
    id: 'after',
    label: '台风过后',
    icon: '🌤️',
    color: '#48cae4',
    items: [
      {
        category: '安全检查',
        icon: '🔍',
        tips: [
          '等待官方宣布台风解除后再外出',
          '检查房屋结构是否受损',
          '注意地面积水和泥石流风险',
          '检查电气设备，确认安全后再使用',
          '不要饮用可能被污染的水',
        ],
      },
      {
        category: '灾后处理',
        icon: '🛠️',
        tips: [
          '拍照记录受损情况，用于保险理赔',
          '清理积水，防止蚊虫滋生',
          '对受损房屋进行临时修缮',
          '向当地政府报告灾情',
          '关注官方发布的灾后救助信息',
        ],
      },
      {
        category: '心理健康',
        icon: '💙',
        tips: [
          '关注家人和邻居的心理状态',
          '如有需要，寻求心理援助',
          '帮助有需要的邻居和社区成员',
          '保持正常作息，逐步恢复生活',
          '总结经验，为下次台风做更好准备',
        ],
      },
    ],
  },
];

const emergencyContacts = [
  { name: '报警', number: '110', icon: '🚔', desc: '紧急治安事件' },
  { name: '急救', number: '120', icon: '🚑', desc: '医疗紧急救援' },
  { name: '消防', number: '119', icon: '🚒', desc: '火灾及救援' },
  { name: '气象', number: '12121', icon: '🌤️', desc: '气象信息查询' },
];

export default function Safety() {
  const [activePhase, setActivePhase] = useState('before');
  const currentPhase = phases.find((p) => p.id === activePhase);

  return (
    <div className="min-h-screen bg-[#0a0f1e] pt-16">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#112240] to-[#0a0f1e] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#e63946]/10 border border-[#e63946]/30 rounded-full px-4 py-2 mb-6">
            <span className="text-[#e63946] text-sm font-medium">⚠ 防灾指南</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            台风防灾指南
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            全面的台风防灾知识，帮助您和家人在台风来临时保持安全
          </p>
        </div>
      </div>

      {/* Emergency Contacts */}
      <div className="bg-[#0d1b2a] border-y border-slate-700/30 py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-white font-bold text-lg mb-4 text-center">紧急联系电话</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {emergencyContacts.map((contact, i) => (
              <div
                key={i}
                className="bg-[#0a0f1e]/60 border border-[#e63946]/20 rounded-xl p-4 text-center hover:border-[#e63946]/50 transition-all duration-200"
              >
                <div className="text-3xl mb-2">{contact.icon}</div>
                <div className="text-white font-bold text-2xl font-mono mb-1">{contact.number}</div>
                <div className="text-[#48cae4] font-semibold text-sm mb-1">{contact.name}</div>
                <div className="text-slate-500 text-xs">{contact.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Phase Selector */}
        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          {phases.map((phase) => (
            <button
              key={phase.id}
              onClick={() => setActivePhase(phase.id)}
              className={`flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-2xl font-semibold transition-all duration-300 ${
                activePhase === phase.id
                  ? 'text-white shadow-lg'
                  : 'bg-[#0d1b2a] border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500'
              }`}
              style={activePhase === phase.id ? {
                backgroundColor: `${phase.color}20`,
                border: `1px solid ${phase.color}60`,
                color: phase.color,
              } : {}}
            >
              <span className="text-xl">{phase.icon}</span>
              <span>{phase.label}</span>
            </button>
          ))}
        </div>

        {/* Tips Grid */}
        {currentPhase && (
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">{currentPhase.icon}</span>
              <h2 className="text-2xl font-bold text-white">{currentPhase.label}注意事项</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentPhase.items.map((item, i) => (
                <div
                  key={i}
                  className="bg-[#0d1b2a] border border-slate-700/50 rounded-2xl p-6 hover:border-[#00b4d8]/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{item.icon}</span>
                    <h3 className="text-white font-bold text-lg">{item.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {item.tips.map((tip, j) => (
                      <li key={j} className="flex items-start gap-2 text-slate-300 text-sm">
                        <span className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                          style={{ backgroundColor: `${currentPhase.color}20`, color: currentPhase.color }}>
                          {j + 1}
                        </span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Emergency Kit */}
        <div className="mt-16 bg-gradient-to-br from-[#112240] to-[#0d1b2a] border border-[#00b4d8]/20 rounded-3xl p-8 md:p-10">
          <h2 className="text-white font-bold text-2xl mb-2">🎒 台风应急包清单</h2>
          <p className="text-slate-400 text-sm mb-8">建议提前准备好应急包，放在容易取到的地方</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { category: '饮食', icon: '🍱', items: ['饮用水（每人3升/天）', '罐头食品', '压缩饼干', '婴儿食品（如需）'] },
              { category: '医疗', icon: '💊', items: ['急救药品', '常用处方药', '绷带和消毒用品', '体温计'] },
              { category: '通讯', icon: '📱', items: ['手机和充电宝', '收音机（电池供电）', '重要联系人名单', '家庭成员证件复印件'] },
              { category: '照明', icon: '🔦', items: ['手电筒', '备用电池', '蜡烛和打火机', '荧光棒'] },
              { category: '工具', icon: '🔧', items: ['多功能刀', '绳子', '防水袋', '口哨'] },
              { category: '其他', icon: '🧳', items: ['换洗衣物', '雨衣和雨靴', '现金（小额）', '地图（纸质）'] },
            ].map((kit, i) => (
              <div key={i} className="bg-[#0a0f1e]/60 border border-slate-700/50 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{kit.icon}</span>
                  <h3 className="text-[#48cae4] font-semibold">{kit.category}</h3>
                </div>
                <ul className="space-y-1">
                  {kit.items.map((item, j) => (
                    <li key={j} className="text-slate-400 text-sm flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-slate-600 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
