import { useEffect, useRef, useState } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

const tutorials = {
  vibrator: {
    title: '震动棒使用教程',
    steps: [
      { text: '第一步：充电', duration: 90, color: '#e91e8c' },
      { text: '第二步：涂抹润滑液', duration: 90, color: '#9c27b0' },
      { text: '第三步：选择震动模式', duration: 90, color: '#673ab7' },
      { text: '第四步：轻柔使用', duration: 90, color: '#e91e8c' },
      { text: '第五步：清洁保存', duration: 90, color: '#9c27b0' },
    ],
  },
  couple: {
    title: '情侣用品使用教程',
    steps: [
      { text: '第一步：下载配套APP', duration: 90, color: '#9c27b0' },
      { text: '第二步：蓝牙配对连接', duration: 90, color: '#673ab7' },
      { text: '第三步：充电备用', duration: 90, color: '#e91e8c' },
      { text: '第四步：远程控制互动', duration: 90, color: '#9c27b0' },
      { text: '第五步：使用后清洁', duration: 90, color: '#673ab7' },
    ],
  },
  massage: {
    title: '按摩器使用教程',
    steps: [
      { text: '第一步：充满电量', duration: 90, color: '#ff6b35' },
      { text: '第二步：选择按摩部位', duration: 90, color: '#e91e8c' },
      { text: '第三步：调节力度模式', duration: 90, color: '#ff6b35' },
      { text: '第四步：顺肌肉方向按摩', duration: 90, color: '#9c27b0' },
      { text: '第五步：每次15-20分钟', duration: 90, color: '#ff6b35' },
    ],
  },
  lubricant: {
    title: '润滑液使用教程',
    steps: [
      { text: '第一步：检查成分过敏', duration: 90, color: '#2196f3' },
      { text: '第二步：取适量于手心', duration: 90, color: '#03a9f4' },
      { text: '第三步：均匀涂抹', duration: 90, color: '#2196f3' },
      { text: '第四步：按需补充', duration: 90, color: '#03a9f4' },
      { text: '第五步：用后清洗干净', duration: 90, color: '#2196f3' },
    ],
  },
  condom: {
    title: '安全套使用教程',
    steps: [
      { text: '第一步：检查有效期', duration: 90, color: '#4caf50' },
      { text: '第二步：撕开包装', duration: 90, color: '#388e3c' },
      { text: '第三步：捏住顶端排气', duration: 90, color: '#4caf50' },
      { text: '第四步：正确佩戴', duration: 90, color: '#388e3c' },
      { text: '第五步：使用后妥善处理', duration: 90, color: '#4caf50' },
    ],
  },
  lingerie: {
    title: '情趣内衣穿着教程',
    steps: [
      { text: '第一步：选择合适尺码', duration: 90, color: '#e91e63' },
      { text: '第二步：轻柔穿戴', duration: 90, color: '#f06292' },
      { text: '第三步：调整松紧', duration: 90, color: '#e91e63' },
      { text: '第四步：搭配场景', duration: 90, color: '#f06292' },
      { text: '第五步：手洗轻柔清洁', duration: 90, color: '#e91e63' },
    ],
  },
  toy: {
    title: '情趣玩具使用教程',
    steps: [
      { text: '第一步：使用前清洁', duration: 90, color: '#3f51b5' },
      { text: '第二步：加热至体温', duration: 90, color: '#5c6bc0' },
      { text: '第三步：涂抹润滑液', duration: 90, color: '#3f51b5' },
      { text: '第四步：轻松使用', duration: 90, color: '#5c6bc0' },
      { text: '第五步：清洁晾干保存', duration: 90, color: '#3f51b5' },
    ],
  },
};

function drawStep(ctx, canvas, step, progress, stepIndex, totalSteps) {
  const W = canvas.width;
  const H = canvas.height;
  ctx.clearRect(0, 0, W, H);

  // Background gradient
  const grad = ctx.createLinearGradient(0, 0, W, H);
  grad.addColorStop(0, '#1a1a2e');
  grad.addColorStop(1, '#16213e');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // Animated particles
  const time = Date.now() / 1000;
  for (let i = 0; i < 20; i++) {
    const x = (Math.sin(time * 0.5 + i * 1.3) * 0.5 + 0.5) * W;
    const y = (Math.cos(time * 0.4 + i * 0.9) * 0.5 + 0.5) * H;
    const alpha = (Math.sin(time + i) * 0.5 + 0.5) * 0.3;
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${alpha})`;
    ctx.fill();
  }

  // Step indicator dots
  const dotSpacing = 28;
  const dotsStartX = W / 2 - ((totalSteps - 1) * dotSpacing) / 2;
  for (let i = 0; i < totalSteps; i++) {
    ctx.beginPath();
    ctx.arc(dotsStartX + i * dotSpacing, 30, i === stepIndex ? 7 : 4, 0, Math.PI * 2);
    ctx.fillStyle = i === stepIndex ? step.color : 'rgba(255,255,255,0.3)';
    ctx.fill();
    if (i === stepIndex) {
      ctx.beginPath();
      ctx.arc(dotsStartX + i * dotSpacing, 30, 11, 0, Math.PI * 2);
      ctx.strokeStyle = step.color + '60';
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }

  // Central animated icon
  const cx = W / 2;
  const cy = H / 2 - 20;
  const pulse = Math.sin(time * 3) * 0.1 + 1;
  const iconRadius = 55 * pulse;

  // Outer glow ring
  const glowGrad = ctx.createRadialGradient(cx, cy, iconRadius * 0.5, cx, cy, iconRadius * 1.5);
  glowGrad.addColorStop(0, step.color + '40');
  glowGrad.addColorStop(1, 'transparent');
  ctx.beginPath();
  ctx.arc(cx, cy, iconRadius * 1.5, 0, Math.PI * 2);
  ctx.fillStyle = glowGrad;
  ctx.fill();

  // Main circle
  const circleGrad = ctx.createRadialGradient(cx - 15, cy - 15, 5, cx, cy, iconRadius);
  circleGrad.addColorStop(0, step.color + 'ff');
  circleGrad.addColorStop(1, step.color + '99');
  ctx.beginPath();
  ctx.arc(cx, cy, iconRadius, 0, Math.PI * 2);
  ctx.fillStyle = circleGrad;
  ctx.fill();

  // Step number in circle
  ctx.fillStyle = 'white';
  ctx.font = `bold ${Math.round(iconRadius * 0.7)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(stepIndex + 1, cx, cy);

  // Step text
  ctx.fillStyle = 'white';
  ctx.font = `bold 18px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.fillText(step.text, cx, cy + iconRadius + 20);

  // Progress bar
  const barW = W - 60;
  const barH = 8;
  const barX = 30;
  const barY = H - 35;

  ctx.beginPath();
  ctx.roundRect(barX, barY, barW, barH, 4);
  ctx.fillStyle = 'rgba(255,255,255,0.15)';
  ctx.fill();

  const progressGrad = ctx.createLinearGradient(barX, 0, barX + barW, 0);
  progressGrad.addColorStop(0, step.color);
  progressGrad.addColorStop(1, step.color + 'aa');
  ctx.beginPath();
  ctx.roundRect(barX, barY, barW * progress, barH, 4);
  ctx.fillStyle = progressGrad;
  ctx.fill();

  // Progress text
  ctx.fillStyle = 'rgba(255,255,255,0.6)';
  ctx.font = '12px Arial';
  ctx.textAlign = 'right';
  ctx.textBaseline = 'bottom';
  ctx.fillText(`${stepIndex + 1} / ${totalSteps}`, W - 30, barY - 5);
}

export default function TutorialCanvas({ tutorialType = 'vibrator' }) {
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const progressRef = useRef(0);
  const lastTimeRef = useRef(null);

  const tutorial = tutorials[tutorialType] || tutorials.vibrator;
  const steps = tutorial.steps;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let stepIndex = currentStep;
    let progress = progressRef.current;
    let playing = isPlaying;

    const animate = (timestamp) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;

      if (playing) {
        const stepDuration = steps[stepIndex].duration / 60;
        progress += delta / stepDuration;
        if (progress >= 1) {
          progress = 0;
          stepIndex = (stepIndex + 1) % steps.length;
          setCurrentStep(stepIndex);
        }
        progressRef.current = progress;
      }

      drawStep(ctx, canvas, steps[stepIndex], progress, stepIndex, steps.length);
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animFrameRef.current);
      lastTimeRef.current = null;
    };
  }, [isPlaying, tutorialType]);

  const handleReset = () => {
    setCurrentStep(0);
    progressRef.current = 0;
    lastTimeRef.current = null;
    setIsPlaying(true);
  };

  return (
    <div className="bg-gray-900 rounded-2xl overflow-hidden">
      <div className="px-4 py-3 flex items-center justify-between border-b border-gray-700">
        <h3 className="text-white font-semibold text-sm">{tutorial.title}</h3>
        <div className="flex items-center gap-2">
          <button
            onClick={() => { setIsPlaying(p => !p); lastTimeRef.current = null; }}
            className="text-white/70 hover:text-white transition p-1.5 rounded-lg hover:bg-white/10"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <button
            onClick={handleReset}
            className="text-white/70 hover:text-white transition p-1.5 rounded-lg hover:bg-white/10"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>
      <canvas
        ref={canvasRef}
        width={400}
        height={280}
        className="w-full"
        style={{ display: 'block' }}
      />
      {/* Step list */}
      <div className="px-4 py-3 border-t border-gray-700">
        <div className="flex flex-col gap-1.5">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`flex items-center gap-2 text-xs transition-all ${i === currentStep ? 'text-white' : 'text-gray-500'}`}
            >
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all ${i === currentStep ? 'scale-110' : ''}`}
                style={{ backgroundColor: i === currentStep ? step.color : '#374151', color: 'white' }}
              >
                {i + 1}
              </div>
              <span>{step.text}</span>
              {i === currentStep && (
                <span className="ml-auto text-xs" style={{ color: step.color }}>进行中</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
