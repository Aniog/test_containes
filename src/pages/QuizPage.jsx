import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle, Sparkles, RotateCcw } from 'lucide-react';
import { quizQuestions, quizResults } from '@/data/content';

function getResult(answers) {
  const counts = { fire: 0, nature: 0, sky: 0, moon: 0, energy: 0, calm: 0 };

  answers.forEach(answer => {
    if (answer === 'fire') counts.fire += 2;
    if (answer === 'nature') counts.nature += 2;
    if (answer === 'sky') counts.sky += 2;
    if (answer === 'moon') counts.moon += 2;
    if (answer === 'high' || answer === 'extreme' || answer === 'playful' || answer === 'chaotic') counts.energy += 1;
    if (answer === 'low' || answer === 'calm' || answer === 'wise') counts.calm += 1;
    if (answer === 'large' || answer === 'rural') counts.sky += 1;
    if (answer === 'small') counts.calm += 1;
  });

  const max = Math.max(counts.fire, counts.nature, counts.sky, counts.moon);
  if (counts.fire === max) return quizResults.dragon;
  if (counts.sky === max) return quizResults.cloudWhale;
  if (counts.moon === max) return quizResults.moonFox;
  if (counts.nature === max) return quizResults.forestSpirit;
  if (counts.energy > counts.calm) return quizResults.thunderBunny;
  return quizResults.lavaKitten;
}

export default function QuizPage() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [result, setResult] = useState(null);
  const [animating, setAnimating] = useState(false);

  const question = quizQuestions[currentQ];
  const progress = ((currentQ) / quizQuestions.length) * 100;

  const handleSelect = (value) => {
    setSelected(value);
  };

  const handleNext = () => {
    if (!selected) return;
    const newAnswers = [...answers, selected];

    if (currentQ < quizQuestions.length - 1) {
      setAnimating(true);
      setTimeout(() => {
        setAnswers(newAnswers);
        setCurrentQ(currentQ + 1);
        setSelected(null);
        setAnimating(false);
      }, 300);
    } else {
      setAnswers(newAnswers);
      setResult(getResult(newAnswers));
    }
  };

  const handleBack = () => {
    if (currentQ > 0) {
      setCurrentQ(currentQ - 1);
      setAnswers(answers.slice(0, -1));
      setSelected(answers[currentQ - 1] || null);
    }
  };

  const handleReset = () => {
    setCurrentQ(0);
    setAnswers([]);
    setSelected(null);
    setResult(null);
  };

  if (result) {
    return (
      <div className="min-h-screen bg-[#fef9f0] pt-20 flex items-center justify-center px-6">
        <div className="max-w-2xl w-full">
          <div className={`bg-gradient-to-br ${result.color} rounded-3xl p-10 text-center text-white shadow-2xl animate-bounce-in`}>
            <div className="text-8xl mb-4 animate-float inline-block">{result.emoji}</div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 rounded-full text-sm font-bold mb-4">
              <Sparkles className="w-4 h-4" />
              Your Perfect Match!
            </div>
            <h2 className="font-display text-4xl md:text-5xl mb-2">{result.type}</h2>
            <p className="text-white/80 text-lg font-handwritten mb-6">Meet {result.name}!</p>

            <div className="bg-white/20 rounded-2xl p-6 mb-6">
              <p className="text-lg leading-relaxed">{result.description}</p>
            </div>

            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="text-4xl font-display">{result.compatibility}%</div>
              <div className="text-left">
                <div className="text-sm font-bold">Compatibility Score</div>
                <div className="w-32 h-3 bg-white/30 rounded-full overflow-hidden mt-1">
                  <div
                    className="h-full bg-white rounded-full"
                    style={{ width: `${result.compatibility}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/monsters"
                className="px-6 py-3 bg-white rounded-xl font-display text-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                style={{ color: '#7c3aed' }}
              >
                Browse {result.type}s 🐾
              </Link>
              <Link
                to="/adopt"
                className="px-6 py-3 bg-white/20 border-2 border-white/40 text-white rounded-xl font-display text-lg hover:bg-white/30 transition-all"
              >
                Apply to Adopt 💝
              </Link>
            </div>

            <button
              onClick={handleReset}
              className="mt-4 flex items-center gap-2 text-white/70 hover:text-white text-sm font-semibold mx-auto transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Retake the quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fef9f0] pt-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 py-12 px-6 relative overflow-hidden">
        <div className="blob-bg w-48 h-48 bg-pink-400 top-0 right-0 opacity-20" />
        <div className="relative max-w-2xl mx-auto text-center">
          <div className="text-4xl mb-3 animate-float inline-block">✨</div>
          <h1 className="font-display text-4xl md:text-5xl text-white mb-2">Compatibility Quiz</h1>
          <p className="text-indigo-200">Discover your perfect magical companion!</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-10">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm font-semibold text-gray-500 mb-2">
            <span>Question {currentQ + 1} of {quizQuestions.length}</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className={`bg-white rounded-3xl p-8 shadow-xl transition-all duration-300 ${animating ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
          <div className="text-center mb-8">
            <div className="text-5xl mb-4 animate-float inline-block">{question.emoji}</div>
            <h2 className="font-display text-2xl md:text-3xl text-purple-900">{question.question}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {question.options.map(option => (
              <button
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className={`flex items-center gap-3 p-4 rounded-2xl border-2 text-left transition-all hover:-translate-y-0.5 ${
                  selected === option.value
                    ? 'border-purple-500 bg-purple-50 shadow-md'
                    : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50/50'
                }`}
              >
                <span className="text-2xl">{option.emoji}</span>
                <span className={`font-semibold text-sm ${selected === option.value ? 'text-purple-700' : 'text-gray-700'}`}>
                  {option.text}
                </span>
                {selected === option.value && (
                  <CheckCircle className="w-5 h-5 text-purple-500 ml-auto flex-shrink-0" />
                )}
              </button>
            ))}
          </div>

          <div className="flex justify-between mt-8">
            <button
              onClick={handleBack}
              disabled={currentQ === 0}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-gray-500 hover:text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>

            <button
              onClick={handleNext}
              disabled={!selected}
              className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-display shadow-md hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 transition-all"
            >
              {currentQ === quizQuestions.length - 1 ? 'See My Match!' : 'Next'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Fun fact */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400 font-handwritten text-lg">
            ✨ Over 4,200 families have found their perfect match through this quiz!
          </p>
        </div>
      </div>
    </div>
  );
}
