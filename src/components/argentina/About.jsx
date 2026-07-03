const About = () => (
  <section id="about" className="bg-light-gray py-20 px-4 md:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <p className="text-gold text-sm font-medium uppercase tracking-widest mb-3">
            关于球队
          </p>
          <h2 className="text-navy text-3xl md:text-4xl font-bold mb-6 leading-tight">
            蓝白军团的
            <br />
            <span className="text-argentina-blue">传奇历史</span>
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              阿根廷国家足球队，绰号"蓝白军团"（La Albiceleste），是世界足球史上最成功的球队之一。
              自1893年成立以来，阿根廷足球以其独特的技术风格和激情四射的比赛风格享誉全球。
            </p>
            <p>
              球队曾三次捧起世界杯冠军奖杯——1978年在本土、1986年在墨西哥，以及2022年在卡塔尔。
              在传奇球星迭戈·马拉多纳和利昂内尔·梅西的带领下，阿根廷足球达到了一个又一个巅峰。
            </p>
            <p>
              阿根廷还是美洲杯历史上最成功的球队，共夺得15次冠军，展现了其在南美洲足球领域的绝对统治力。
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            {['FIFA 世界排名 Top 3', '南美洲霸主', '技术流派代表'].map((tag) => (
              <span
                key={tag}
                className="bg-argentina-blue/10 text-argentina-blue border border-argentina-blue/30 text-sm font-medium px-4 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: '🏟️', title: '主场', value: 'Estadio Monumental', sub: '布宜诺斯艾利斯' },
            { icon: '👕', title: '球衣颜色', value: '蓝白竖条纹', sub: '标志性配色' },
            { icon: '🌍', title: '所属联合会', value: 'CONMEBOL', sub: '南美足球联合会' },
            { icon: '🏆', title: '最近荣誉', value: '2022 世界杯', sub: '卡塔尔' },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col gap-2"
            >
              <span className="text-3xl">{card.icon}</span>
              <span className="text-gray-500 text-xs uppercase tracking-widest font-medium">
                {card.title}
              </span>
              <span className="text-navy font-bold text-base leading-tight">{card.value}</span>
              <span className="text-gray-400 text-xs">{card.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
