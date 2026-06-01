import { useNavigate } from 'react-router-dom';
import { EMOTIONS } from '../../data/memories';

export default function EmotionCloud() {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-space-navy to-space-black">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-cosmic-violet text-sm tracking-[0.3em] uppercase font-inter mb-3">Browse by Emotion</p>
        <h2 className="font-cinzel text-3xl md:text-4xl text-white mb-4">
          The Spectrum of Human Feeling
        </h2>
        <p className="text-slate-400 font-inter mb-14 max-w-lg mx-auto">
          Every memory carries an emotional signature. Find the ones that resonate with what you feel right now.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {EMOTIONS.map((emotion, i) => {
            const sizes = ['text-2xl', 'text-3xl', 'text-xl', 'text-4xl', 'text-2xl', 'text-3xl', 'text-xl', 'text-2xl'];
            return (
              <button
                key={emotion.id}
                onClick={() => navigate(`/explore?emotion=${emotion.id}`)}
                className={`group flex items-center gap-2 px-5 py-3 rounded-full border transition-all duration-300 hover:scale-110 font-inter font-medium ${sizes[i]}`}
                style={{
                  borderColor: emotion.color + '40',
                  color: emotion.color,
                  backgroundColor: emotion.color + '10',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = emotion.color + '25';
                  e.currentTarget.style.boxShadow = `0 0 20px ${emotion.color}30`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = emotion.color + '10';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <span className="text-base">{emotion.icon}</span>
                <span className="text-sm md:text-base">{emotion.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
