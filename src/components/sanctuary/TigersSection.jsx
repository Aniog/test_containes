import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const tigers = [
  {
    id: 'baiyu',
    name: '白玉',
    species: '白化孟加拉虎',
    age: '8岁',
    story: '白玉曾是马戏团的表演动物，长期生活在狭小的铁笼中。2019年被救出后，她花了整整一年才学会在草地上奔跑。如今她是救护站最受欢迎的"明星"。',
    status: '永久居住',
    statusColor: 'bg-amber-100 text-amber-800',
    imgId: 'tiger-baiyu-img-g7h8i9',
    titleId: 'tiger-baiyu-title',
    descId: 'tiger-baiyu-desc',
  },
  {
    id: 'dongbei',
    name: '雪松',
    species: '东北虎',
    age: '5岁',
    story: '雪松在幼年时因栖息地被破坏而与母亲失散，被发现时已严重营养不良。经过两年的精心照料，他已成长为一只健壮的成年雄虎。',
    status: '康复中',
    statusColor: 'bg-green-100 text-green-800',
    imgId: 'tiger-dongbei-img-j1k2l3',
    titleId: 'tiger-dongbei-title',
    descId: 'tiger-dongbei-desc',
  },
  {
    id: 'menghu',
    name: '橙橙',
    species: '孟加拉虎',
    age: '3岁',
    story: '橙橙是从非法宠物交易中解救出来的，到达救护站时只有6个月大。她活泼好动，最喜欢在水池里玩耍，是救护站里最调皮的小家伙。',
    status: '待评估野放',
    statusColor: 'bg-blue-100 text-blue-800',
    imgId: 'tiger-menghu-img-m4n5o6',
    titleId: 'tiger-menghu-title',
    descId: 'tiger-menghu-desc',
  },
]

export default function TigersSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="tigers" ref={containerRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest text-amber-600 mb-3 block">
            救护的老虎
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            认识我们的老虎家族
          </h2>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto leading-relaxed">
            每一只老虎都有自己的名字、故事和个性。
            了解它们，是守护它们的第一步。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tigers.map((tiger) => (
            <article
              key={tiger.id}
              className="bg-stone-50 border border-stone-200 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  alt={tiger.name}
                  data-strk-img-id={tiger.imgId}
                  data-strk-img={`[${tiger.descId}] [${tiger.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 id={tiger.titleId} className="text-2xl font-black text-white">
                    {tiger.name}
                  </h3>
                  <p className="text-stone-300 text-sm">{tiger.species} · {tiger.age}</p>
                </div>
              </div>
              <div className="p-6">
                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${tiger.statusColor}`}>
                  {tiger.status}
                </span>
                <p id={tiger.descId} className="text-stone-600 text-sm leading-relaxed">
                  {tiger.story}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-stone-500 text-base">
            救护站目前共照料 <strong className="text-stone-900">23只老虎</strong>，
            每一只都需要您的关注与支持。
          </p>
        </div>
      </div>
    </section>
  )
}
