import { ShoppingCart, Settings, Trophy } from 'lucide-react';

const Header = ({ balance, level = 12, onBuyCoins }) => {
  return (
    <div className="flex items-center justify-between px-3 py-2 mb-2">
      {/* Balance */}
      <div
        className="flex items-center gap-2 px-3 py-1.5 rounded-full"
        style={{
          background: 'linear-gradient(135deg, #1e1040 0%, #2d1b69 100%)',
          border: '2px solid #f5a623',
          boxShadow: '0 0 10px rgba(245,166,35,0.4)',
        }}
      >
        <span style={{ fontSize: '1rem' }}>🪙</span>
        <span
          className="font-bold tracking-wider"
          style={{
            fontFamily: 'Orbitron, sans-serif',
            color: '#f5a623',
            fontSize: '0.85rem',
            textShadow: '0 0 8px rgba(245,166,35,0.6)',
          }}
        >
          {balance.toLocaleString()}
        </span>
      </div>

      {/* Buy Coins button */}
      <button
        onClick={onBuyCoins}
        className="flex items-center gap-2 px-4 py-2 rounded-full font-bold uppercase transition-all hover:scale-105 active:scale-95"
        style={{
          background: 'linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%)',
          border: '2px solid #a78bfa',
          boxShadow: '0 0 15px rgba(124,58,237,0.5)',
          fontFamily: 'Orbitron, sans-serif',
          color: '#e9d5ff',
          fontSize: '0.7rem',
          letterSpacing: '0.1em',
        }}
      >
        <ShoppingCart size={13} />
        <span>Buy Coins</span>
      </button>

      {/* Right side */}
      <div className="flex items-center gap-2">
        <div
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
          style={{
            background: 'linear-gradient(135deg, #1e1040 0%, #2d1b69 100%)',
            border: '2px solid #ec4899',
            boxShadow: '0 0 8px rgba(236,72,153,0.3)',
          }}
        >
          <Trophy size={13} style={{ color: '#ec4899' }} />
          <span
            className="font-bold"
            style={{
              fontFamily: 'Orbitron, sans-serif',
              color: '#f9a8d4',
              fontSize: '0.8rem',
            }}
          >
            {level}
          </span>
        </div>
        <button
          className="p-2 rounded-full transition-all hover:scale-110 active:scale-95"
          style={{
            background: 'linear-gradient(135deg, #1e1040 0%, #2d1b69 100%)',
            border: '2px solid #7c3aed',
            boxShadow: '0 0 8px rgba(124,58,237,0.3)',
            color: '#a78bfa',
          }}
        >
          <Settings size={15} />
        </button>
      </div>
    </div>
  );
};

export default Header;

