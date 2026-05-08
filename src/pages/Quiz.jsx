import { useState } from 'react';
import { CheckCircle, XCircle, Trophy, RotateCcw, ChevronRight } from 'lucide-react';

const questions = [
  {
    q: 'What is the unit of measurement used to measure a horse\'s height?',
    options: ['Feet', 'Hands', 'Cubits', 'Spans'],
    answer: 1,
    explanation: 'Horse height is measured in "hands." One hand equals 4 inches (10.16 cm). The measurement is taken from the ground to the highest point of the withers (the ridge between the shoulder blades).',
  },
  {
    q: 'What is a baby horse called?',
    options: ['Cub', 'Pup', 'Foal', 'Colt'],
    answer: 2,
    explanation: 'A baby horse is called a foal. More specifically, a male foal is called a colt and a female foal is called a filly. A foal becomes a yearling after its first birthday.',
  },
  {
    q: 'How many gaits does a typical horse have?',
    options: ['2', '3', '4', '5'],
    answer: 2,
    explanation: 'Most horses have four natural gaits: walk (4-beat), trot (2-beat), canter (3-beat), and gallop (4-beat). Some breeds like the Icelandic Horse have a fifth gait called the tölt.',
  },
  {
    q: 'What is the term for a male horse that has been castrated?',
    options: ['Stallion', 'Gelding', 'Colt', 'Buck'],
    answer: 1,
    explanation: 'A castrated male horse is called a gelding. An uncastrated adult male horse is a stallion. Geldings are often preferred for riding as they tend to have calmer temperaments.',
  },
  {
    q: 'Which part of the horse\'s body are horseshoes attached to?',
    options: ['The cannon bone', 'The pastern', 'The hoof wall', 'The frog'],
    answer: 2,
    explanation: 'Horseshoes are nailed to the hoof wall — the hard outer layer of the hoof. The nails go through the hoof wall at an angle and are bent over on the outside. The frog is the soft, V-shaped pad on the bottom of the hoof.',
  },
  {
    q: 'What is the name of the fastest horse gait?',
    options: ['Canter', 'Trot', 'Gallop', 'Pace'],
    answer: 2,
    explanation: 'The gallop is the fastest gait, with horses reaching speeds of 25–55 mph. It is a 4-beat gait where all four hooves leave the ground simultaneously at one point. The canter is a slower, 3-beat gait.',
  },
  {
    q: 'Approximately how long is a horse\'s gestation period?',
    options: ['6 months', '9 months', '11 months', '14 months'],
    answer: 2,
    explanation: 'A mare\'s gestation period is approximately 11 months (320–370 days). Foals are typically born in spring, as mares naturally cycle in longer daylight periods. Foals can stand and walk within hours of birth.',
  },
  {
    q: 'What is the name of the ridge between a horse\'s shoulder blades, used as the reference point for measuring height?',
    options: ['Croup', 'Withers', 'Fetlock', 'Cannon'],
    answer: 1,
    explanation: 'The withers is the highest point of a horse\'s back, located at the base of the neck between the shoulder blades. It is the standard reference point for measuring a horse\'s height because it is a stable, fixed point.',
  },
  {
    q: 'Which breed is known as the "Horse of Kings" and is famous for classical dressage?',
    options: ['Friesian', 'Lipizzaner', 'Andalusian', 'Arabian'],
    answer: 2,
    explanation: 'The Andalusian, originating from Spain, is known as the "Horse of Kings." It has been prized by royalty for centuries and excels in classical dressage. The Spanish Riding School in Vienna uses Lipizzaners, which are closely related.',
  },
  {
    q: 'What is "colic" in horses?',
    options: ['A type of horse breed', 'Abdominal pain', 'A grooming technique', 'A riding style'],
    answer: 1,
    explanation: 'Colic refers to abdominal pain in horses. It is one of the most common and potentially life-threatening conditions in horses. Unlike humans, horses cannot vomit, so digestive blockages can be very serious and require immediate veterinary attention.',
  },
  {
    q: 'How many bones does a horse have?',
    options: ['180', '195', '205', '220'],
    answer: 2,
    explanation: 'Horses have 205 bones in their skeleton, slightly fewer than humans (206). Interestingly, horses walk on the equivalent of their middle finger and toe — their "knee" is actually their wrist, and their "hock" is their ankle.',
  },
  {
    q: 'What is the term for a female horse over 4 years old?',
    options: ['Filly', 'Mare', 'Dam', 'Broodmare'],
    answer: 1,
    explanation: 'A female horse over 4 years old is called a mare. A female horse under 4 is called a filly. "Dam" specifically refers to a mare that is the mother of a foal, and "broodmare" refers to a mare used for breeding.',
  },
  {
    q: 'Which country has the largest horse population in the world?',
    options: ['China', 'Brazil', 'United States', 'Mongolia'],
    answer: 2,
    explanation: 'The United States has the largest horse population with approximately 9.5 million horses. The US is followed by China and Brazil. There are approximately 60 million horses worldwide.',
  },
  {
    q: 'What is the "stay apparatus" in horses?',
    options: ['A training device', 'A leg-locking mechanism for sleeping standing up', 'A type of saddle', 'A hoof condition'],
    answer: 1,
    explanation: 'The stay apparatus is a system of muscles, tendons, and ligaments that allows horses to lock their legs in place and rest or sleep while standing. This evolutionary adaptation allowed wild horses to flee predators quickly without needing to lie down.',
  },
  {
    q: 'What is the approximate weight of a horse\'s heart?',
    options: ['2–3 pounds', '5–6 pounds', '9–10 pounds', '15–16 pounds'],
    answer: 2,
    explanation: 'A horse\'s heart weighs about 9–10 pounds (4–4.5 kg) on average. The legendary racehorse Secretariat had a heart estimated at 22 pounds — more than twice the normal size — which is believed to have contributed to his extraordinary racing ability.',
  },
];

function getScoreMessage(score, total) {
  const pct = (score / total) * 100;
  if (pct === 100) return { msg: 'Perfect Score! You\'re a true Equine Expert! 🏆', color: 'text-amber-500' };
  if (pct >= 80) return { msg: 'Excellent! You really know your horses! 🌟', color: 'text-green-600' };
  if (pct >= 60) return { msg: 'Good job! You have solid horse knowledge! 👍', color: 'text-blue-600' };
  if (pct >= 40) return { msg: 'Not bad! Keep learning and try again! 📚', color: 'text-orange-600' };
  return { msg: 'Keep studying — horses have so much to teach! 🐴', color: 'text-red-600' };
}

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const q = questions[current];
  const isAnswered = selected !== null;
  const isCorrect = selected === q.answer;

  const handleSelect = (idx) => {
    if (isAnswered) return;
    setSelected(idx);
    setShowExplanation(true);
  };

  const handleNext = () => {
    const newAnswers = [...answers, { correct: selected === q.answer }];
    setAnswers(newAnswers);
    if (current + 1 >= questions.length) {
      setShowResult(true);
    } else {
      setCurrent(current + 1);
      setSelected(null);
      setShowExplanation(false);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setSelected(null);
    setAnswers([]);
    setShowResult(false);
    setShowExplanation(false);
  };

  const score = answers.filter((a) => a.correct).length;

  if (showResult) {
    const { msg, color } = getScoreMessage(score, questions.length);
    return (
      <div className="min-h-screen bg-[#faf8f5] pt-20 flex items-center justify-center px-4">
        <div className="max-w-lg w-full text-center">
          <div className="bg-white rounded-3xl shadow-xl p-10 border border-amber-100">
            <div className="text-7xl mb-6">
              {score === questions.length ? '🏆' : score >= questions.length * 0.8 ? '🌟' : score >= questions.length * 0.6 ? '👍' : '📚'}
            </div>
            <h2
              className="text-3xl font-bold text-[#2c1810] mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Quiz Complete!
            </h2>
            <p
              className={`text-lg font-semibold mb-6 ${color}`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {msg}
            </p>
            <div className="bg-amber-50 rounded-2xl p-6 mb-8">
              <div
                className="text-5xl font-bold text-[#2c1810] mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {score} / {questions.length}
              </div>
              <p
                className="text-[#6b4c3b]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {Math.round((score / questions.length) * 100)}% correct
              </p>
            </div>

            {/* Score breakdown */}
            <div className="flex gap-2 justify-center mb-8 flex-wrap">
              {answers.map((a, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold ${
                    a.correct ? 'bg-green-500' : 'bg-red-400'
                  }`}
                  title={`Q${i + 1}: ${a.correct ? 'Correct' : 'Wrong'}`}
                >
                  {i + 1}
                </div>
              ))}
            </div>

            <button
              onClick={handleRestart}
              className="flex items-center gap-2 bg-[#2c1810] text-white font-semibold px-8 py-4 rounded-full mx-auto hover:bg-[#4a2c1a] transition-all duration-200 hover:scale-105"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <RotateCcw size={18} /> Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf8f5] pt-20">
      {/* Header */}
      <div
        className="py-12 px-4 text-center"
        style={{ background: 'linear-gradient(135deg, #1a3050 0%, #2d5080 100%)' }}
      >
        <div className="text-4xl mb-3">🏆</div>
        <h1
          className="text-3xl sm:text-4xl font-bold text-white mb-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Horse Knowledge Quiz
        </h1>
        <p
          className="text-blue-100/80"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {questions.length} questions to test your equine expertise
        </p>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span
              className="text-sm font-medium text-[#6b4c3b]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Question {current + 1} of {questions.length}
            </span>
            <span
              className="text-sm font-medium text-[#6b4c3b]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {answers.filter((a) => a.correct).length} correct
            </span>
          </div>
          <div className="w-full bg-amber-100 rounded-full h-2.5">
            <div
              className="bg-amber-500 h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${((current) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-3xl shadow-md border border-amber-100 p-8 mb-6">
          <h2
            className="text-xl sm:text-2xl font-bold text-[#2c1810] mb-8 leading-snug"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {q.q}
          </h2>

          <div className="space-y-3">
            {q.options.map((opt, idx) => {
              let style = 'border-amber-200 bg-amber-50 hover:bg-amber-100 text-[#2c1810]';
              if (isAnswered) {
                if (idx === q.answer) style = 'border-green-400 bg-green-50 text-green-800';
                else if (idx === selected) style = 'border-red-400 bg-red-50 text-red-800';
                else style = 'border-amber-100 bg-white text-[#6b4c3b] opacity-60';
              }
              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  disabled={isAnswered}
                  className={`w-full flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all duration-200 ${style} ${!isAnswered ? 'cursor-pointer' : 'cursor-default'}`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <span className="w-7 h-7 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="font-medium">{opt}</span>
                  {isAnswered && idx === q.answer && (
                    <CheckCircle size={18} className="ml-auto text-green-600 flex-shrink-0" />
                  )}
                  {isAnswered && idx === selected && idx !== q.answer && (
                    <XCircle size={18} className="ml-auto text-red-500 flex-shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div
            className={`rounded-2xl p-5 mb-6 border-l-4 ${
              isCorrect
                ? 'bg-green-50 border-green-500'
                : 'bg-red-50 border-red-400'
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              {isCorrect ? (
                <CheckCircle size={18} className="text-green-600" />
              ) : (
                <XCircle size={18} className="text-red-500" />
              )}
              <span
                className={`font-semibold text-sm ${isCorrect ? 'text-green-700' : 'text-red-700'}`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {isCorrect ? 'Correct!' : 'Not quite!'}
              </span>
            </div>
            <p
              className="text-sm text-[#4a2c1a] leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {q.explanation}
            </p>
          </div>
        )}

        {/* Next Button */}
        {isAnswered && (
          <button
            onClick={handleNext}
            className="w-full flex items-center justify-center gap-2 bg-[#2c1810] text-white font-semibold py-4 rounded-2xl hover:bg-[#4a2c1a] transition-all duration-200 hover:scale-[1.02]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {current + 1 >= questions.length ? (
              <>See Results <Trophy size={18} /></>
            ) : (
              <>Next Question <ChevronRight size={18} /></>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
