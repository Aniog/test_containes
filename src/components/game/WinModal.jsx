const WinModal = ({ level, onNext, onReplay }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }}
      />
      <div
        className="relative rounded-3xl p-8 flex flex-col items-center gap-4 mx-6"
        style={{
          backgroundColor: '#fff8f0',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          minWidth: 280,
        }}
      >
        <div className="text-6xl animate-bounce">🎉</div>
        <h2 className="text-2xl font-bold" style={{ color: '#3d2b1f' }}>
          第 {level} 关完成！
        </h2>
        <p className="text-base" style={{ color: '#7a5c4a' }}>
          所有猫咪都找到了位置 🐱
        </p>
        <div className="flex gap-3 mt-2 w-full">
          <button
            onClick={onReplay}
            className="flex-1 py-3 rounded-2xl font-semibold text-base transition-all active:scale-95"
            style={{
              backgroundColor: '#e8e0d8',
              color: '#5a4030',
              border: 'none',
            }}
          >
            再玩一次
          </button>
          <button
            onClick={onNext}
            className="flex-1 py-3 rounded-2xl font-semibold text-base transition-all active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #e8637a, #c84060)',
              color: '#fff',
              border: 'none',
              boxShadow: '0 4px 12px rgba(200,64,96,0.4)',
            }}
          >
            下一关 →
          </button>
        </div>
      </div>
    </div>
  );
};

export default WinModal;
