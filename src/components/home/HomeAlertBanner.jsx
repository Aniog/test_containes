import { Link } from 'react-router-dom';

const alerts = [
  {
    level: '超强台风',
    color: '#e63946',
    bgColor: 'bg-[#e63946]/10',
    borderColor: 'border-[#e63946]/40',
    wind: '≥ 51 m/s',
    desc: '具有极强破坏力，可造成严重灾害',
  },
  {
    level: '强台风',
    color: '#e76f51',
    bgColor: 'bg-[#e76f51]/10',
    borderColor: 'border-[#e76f51]/40',
    wind: '41.5 - 50.9 m/s',
    desc: '破坏力强，可造成重大灾害',
  },
  {
    level: '台风',
    color: '#f4a261',
    bgColor: 'bg-[#f4a261]/10',
    borderColor: 'border-[#f4a261]/40',
    wind: '32.7 - 41.4 m/s',
    desc: '可造成较大灾害，需高度警惕',
  },
  {
    level: '强热带风暴',
    color: '#00b4d8',
    bgColor: 'bg-[#00b4d8]/10',
    borderColor: 'border-[#00b4d8]/40',
    wind: '24.5 - 32.6 m/s',
    desc: '可造成一定灾害，需注意防范',
  },
];

export default function HomeAlertBanner() {
  return (
    <section className="py-20 bg-[#0d1b2a]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">台风强度速查</h2>
          <p className="text-slate-400 text-lg">快速了解不同强度台风的风速标准与危险程度</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {alerts.map((alert, i) => (
            <div
              key={i}
              className={`${alert.bgColor} ${alert.borderColor} border rounded-2xl p-6 transition-all duration-300 hover:scale-105`}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: alert.color }} />
                <span className="font-bold text-white">{alert.level}</span>
              </div>
              <div className="font-mono text-lg font-bold mb-2" style={{ color: alert.color }}>
                {alert.wind}
              </div>
              <p className="text-slate-400 text-sm">{alert.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/knowledge#scale"
            className="inline-flex items-center gap-2 text-[#48cae4] hover:text-white transition-colors font-medium"
          >
            查看完整分级标准 →
          </Link>
        </div>
      </div>
    </section>
  );
}
