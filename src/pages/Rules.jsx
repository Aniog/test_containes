import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ruleSections = [
  {
    id: 'the-table',
    title: 'The Table',
    icon: '🏓',
    rules: [
      'The table shall be in a rectangular shape, 2.74m long and 1.525m wide.',
      'The playing surface shall be 76cm above the floor.',
      'The playing surface shall be uniformly dark coloured and matt, with a white side line along each 2.74m edge and a white end line along each 1.525m edge.',
      'The playing surface shall be divided into 2 equal courts by a vertical net running parallel with the end lines.',
      'For doubles, each court shall be divided into 2 equal half-courts by a white centre line, 3mm wide, running parallel with the side lines.',
    ],
  },
  {
    id: 'the-net',
    title: 'The Net Assembly',
    icon: '🔗',
    rules: [
      'The net assembly shall consist of the net, its suspension and the supporting posts.',
      'The net shall be suspended by a cord attached at each end to an upright post 15.25cm high.',
      'The top of the net, along its whole length, shall be 15.25cm above the playing surface.',
      'The bottom of the net, along its whole length, shall be as close as possible to the playing surface.',
      'The ends of the net shall be as close as possible to the supporting posts.',
    ],
  },
  {
    id: 'the-ball',
    title: 'The Ball',
    icon: '⚪',
    rules: [
      'The ball shall be spherical, with a diameter of 40mm.',
      'The ball shall weigh 2.7g.',
      'The ball shall be made of celluloid or similar plastics material and shall be white or orange, and matt.',
      'The ball shall bounce approximately 23cm when dropped from a height of 30cm onto a standard steel block.',
    ],
  },
  {
    id: 'the-racket',
    title: 'The Racket',
    icon: '🏏',
    rules: [
      'The racket may be of any size, shape or weight but the blade shall be flat and rigid.',
      'At least 85% of the blade by thickness shall be of natural wood.',
      'A side of the blade used for striking the ball shall be covered with either ordinary pimpled rubber or sandwich rubber.',
      'The covering material shall extend up to but not beyond the limits of the blade.',
      'The blade, any layer within the blade, and any layer of covering material or adhesive shall be continuous and of even thickness.',
      'Both sides of the blade, even if one is not used for striking, shall be of a different colour — one side red, the other black.',
    ],
  },
  {
    id: 'service',
    title: 'A Good Service',
    icon: '🎯',
    rules: [
      'Service shall start with the ball resting freely on the open palm of the server\'s stationary free hand.',
      'The server shall then project the ball near vertically upwards, without imparting spin, so that it rises at least 16cm after leaving the palm of the free hand.',
      'As the ball is falling the server shall strike it so that it touches first the server\'s court and then, after passing over or around the net assembly, touches the receiver\'s court.',
      'From the start of service until it is struck, the ball shall be above the level of the playing surface and behind the server\'s end line.',
      'It is the responsibility of the player to serve so that the umpire or assistant umpire can be satisfied that service conforms to the requirements.',
    ],
  },
  {
    id: 'a-good-return',
    title: 'A Good Return',
    icon: '↩️',
    rules: [
      'The ball, having been served or returned in play, shall be struck so that it passes over or around the net assembly and touches the opponent\'s court.',
      'If the ball, having been served or returned in play, returns with its own impetus over or around the net assembly, it may be struck so that it touches the opponent\'s court.',
      'A player may strike the ball around the outside of the net post, provided the ball touches the opponent\'s court.',
    ],
  },
  {
    id: 'a-let',
    title: 'A Let',
    icon: '🔄',
    rules: [
      'The rally is a let if in service the ball touches the net assembly, provided the service is otherwise good or the ball is obstructed by the receiver or their partner.',
      'The rally is a let if service is delivered when the receiving player or pair is not ready, provided that neither the receiver nor their partner attempts to strike the ball.',
      'The rally is a let if a player is prevented from making a good service or a good return by an accident not under their control.',
      'The rally is a let if play is interrupted by the umpire or assistant umpire.',
      'A let rally is not scored and is replayed.',
    ],
  },
  {
    id: 'a-point',
    title: 'A Point',
    icon: '✅',
    rules: [
      'A player scores a point if the opponent fails to make a good service.',
      'A player scores a point if the opponent fails to make a good return.',
      'A player scores a point if the ball touches anything other than the net assembly before being struck by the opponent.',
      'A player scores a point if the ball passes over their court or beyond their end line without touching their court, after being struck by the opponent.',
      'A player scores a point if the opponent strikes the ball twice successively.',
      'A player scores a point if the opponent strikes the ball with a side of the racket blade whose surface does not comply with the requirements.',
      'A player scores a point if the opponent moves the playing surface or touches the net assembly while the ball is in play.',
    ],
  },
  {
    id: 'a-game',
    title: 'A Game',
    icon: '🏆',
    rules: [
      'A game shall be won by the player or pair first scoring 11 points unless both players or pairs score 10 points, when the game shall be won by the first player or pair subsequently gaining a lead of 2 points.',
      'A match shall consist of the best of any odd number of games.',
      'Play shall be continuous throughout a match except that any player is entitled to claim a rest period of up to 1 minute between successive games of a match.',
    ],
  },
  {
    id: 'order-of-play',
    title: 'Order of Play',
    icon: '🔀',
    rules: [
      'In singles, the server shall first make a good service, the receiver shall then make a good return, and thereafter server and receiver shall alternately make a good return.',
      'In doubles, the server shall first make a good service, the receiver shall then make a good return, the partner of the server shall then make a good return, the partner of the receiver shall then make a good return, and thereafter each player shall make a good return in sequence.',
      'The right to choose the initial order of serving, receiving and ends shall be decided by lot, and the winner may choose to serve or to receive first, or to start at a particular end.',
      'The player or pair serving first in a game shall receive first in the next game of the match.',
    ],
  },
];

function RuleSection({ section }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <span className="text-2xl">{section.icon}</span>
          <h3 className="text-lg font-semibold text-slate-900">{section.title}</h3>
        </div>
        {open ? (
          <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-6 border-t border-slate-100">
          <ul className="mt-4 space-y-3">
            {section.rules.map((rule, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                  {i + 1}
                </span>
                <p className="text-sm text-slate-600 leading-relaxed">{rule}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function Rules() {
  return (
    <div>
      {/* Page header */}
      <section className="bg-slate-950 pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-orange-400 mb-3 block">
            Official Rules
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
            Table Tennis <span className="text-orange-400">Rules</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            The official rules of table tennis as defined by the International Table Tennis
            Federation (ITTF). Click any section to expand the rules.
          </p>
        </div>
      </section>

      {/* Quick summary */}
      <section className="bg-orange-500 py-10">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: 'Points to win a game', value: '11' },
              { label: 'Games in a match', value: 'Best of 5 or 7' },
              { label: 'Serves per rotation', value: '2' },
              { label: 'Net height', value: '15.25 cm' },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-2xl md:text-3xl font-extrabold text-white">{item.value}</p>
                <p className="text-sm text-orange-100 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rules accordion */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="space-y-3">
            {ruleSections.map((section) => (
              <RuleSection key={section.id} section={section} />
            ))}
          </div>
        </div>
      </section>

      {/* Scoring explainer */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
            How Scoring Works
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="font-semibold text-slate-900 mb-3 text-lg">Singles Scoring</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2"><span className="text-orange-500 font-bold">→</span> First to 11 points wins a game</li>
                <li className="flex gap-2"><span className="text-orange-500 font-bold">→</span> Must win by 2 clear points (e.g. 12–10)</li>
                <li className="flex gap-2"><span className="text-orange-500 font-bold">→</span> Service alternates every 2 points</li>
                <li className="flex gap-2"><span className="text-orange-500 font-bold">→</span> At 10–10 (deuce), service alternates every point</li>
                <li className="flex gap-2"><span className="text-orange-500 font-bold">→</span> Match is best of 5 or 7 games</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="font-semibold text-slate-900 mb-3 text-lg">Doubles Scoring</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2"><span className="text-orange-500 font-bold">→</span> Same 11-point format as singles</li>
                <li className="flex gap-2"><span className="text-orange-500 font-bold">→</span> Partners must alternate hitting the ball</li>
                <li className="flex gap-2"><span className="text-orange-500 font-bold">→</span> Service must go to the right half-court</li>
                <li className="flex gap-2"><span className="text-orange-500 font-bold">→</span> Serving pair rotates after every 2 points</li>
                <li className="flex gap-2"><span className="text-orange-500 font-bold">→</span> Receiver becomes server after each game</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
