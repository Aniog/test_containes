import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const demos = [
  {
    id: 'refactor',
    label: '代码重构',
    prompt: '> 重构这个函数，提升可读性和性能',
    before: `// 重构前
function getUserData(id) {
  var result = null;
  for (var i = 0; i < users.length; i++) {
    if (users[i].id == id) {
      result = users[i];
      break;
    }
  }
  if (result != null) {
    return {
      name: result.name,
      email: result.email,
      age: result.age
    };
  }
  return null;
}`,
    after: `// 重构后 ✨
const getUserData = (id) => {
  const user = users.find(u => u.id === id);
  if (!user) return null;

  const { name, email, age } = user;
  return { name, email, age };
};`,
    steps: ['分析函数逻辑', '识别性能问题', '应用现代 ES6+ 语法', '优化解构赋值'],
  },
  {
    id: 'test',
    label: '生成测试',
    prompt: '> 为 calculateDiscount 函数生成完整的单元测试',
    before: `// 原始函数
function calculateDiscount(price, userType) {
  if (userType === 'premium') {
    return price * 0.8;
  } else if (userType === 'member') {
    return price * 0.9;
  }
  return price;
}`,
    after: `// 生成的测试 ✨
describe('calculateDiscount', () => {
  it('premium 用户享受 20% 折扣', () => {
    expect(calculateDiscount(100, 'premium'))
      .toBe(80);
  });

  it('member 用户享受 10% 折扣', () => {
    expect(calculateDiscount(100, 'member'))
      .toBe(90);
  });

  it('普通用户无折扣', () => {
    expect(calculateDiscount(100, 'guest'))
      .toBe(100);
  });

  it('处理边界值 price=0', () => {
    expect(calculateDiscount(0, 'premium'))
      .toBe(0);
  });
});`,
    steps: ['解析函数签名', '识别边界条件', '生成测试用例', '覆盖所有分支'],
  },
  {
    id: 'debug',
    label: '调试修复',
    prompt: '> 找出并修复这段代码中的 bug',
    before: `// 有 bug 的代码
async function fetchUserPosts(userId) {
  const response = await fetch(
    \`/api/users/\${userId}/posts\`
  );
  const data = response.json(); // ❌ 缺少 await
  
  return data.posts.map(post => ({
    id: post.id,
    title: post.title,
    // ❌ 未处理 undefined
    author: post.author.name
  }));
}`,
    after: `// 修复后 ✨
async function fetchUserPosts(userId) {
  const response = await fetch(
    \`/api/users/\${userId}/posts\`
  );
  
  if (!response.ok) {
    throw new Error(\`HTTP \${response.status}\`);
  }
  
  const data = await response.json(); // ✅ 添加 await
  
  return data.posts.map(post => ({
    id: post.id,
    title: post.title,
    // ✅ 安全访问
    author: post.author?.name ?? '未知作者'
  }));
}`,
    steps: ['静态分析代码', '检测异步问题', '识别空值风险', '应用安全修复'],
  },
];

function CodeLine({ children, type = 'normal' }) {
  const colors = {
    normal: 'text-slate-300',
    comment: 'text-slate-600',
    keyword: 'text-purple-400',
    string: 'text-emerald-400',
    added: 'text-emerald-400 bg-emerald-500/10',
    removed: 'text-red-400 bg-red-500/10 line-through opacity-60',
    highlight: 'text-yellow-300',
  };
  return (
    <div className={`font-mono text-xs leading-6 px-1 rounded ${colors[type]}`}>
      {children}
    </div>
  );
}

export default function CodeDemo() {
  const [activeDemo, setActiveDemo] = useState(demos[0]);
  const [showAfter, setShowAfter] = useState(false);

  const handleDemoChange = (demo) => {
    setActiveDemo(demo);
    setShowAfter(false);
  };

  return (
    <section className="py-24 lg:py-32 relative bg-[#0d0d14]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-violet-600/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-violet-300 text-sm font-medium">实际演示</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            看 CodeAgent 如何工作
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            一条自然语言指令，CodeAgent 自动分析、规划并执行——实时查看代码变化。
          </p>
        </div>

        {/* Demo Tabs */}
        <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
          {demos.map((demo) => (
            <button
              key={demo.id}
              onClick={() => handleDemoChange(demo)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeDemo.id === demo.id
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/25'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {demo.label}
            </button>
          ))}
        </div>

        {/* Main Demo Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Agent Steps */}
          <div className="bg-[#111118] border border-white/10 rounded-2xl p-6">
            <div className="text-slate-500 text-xs font-mono mb-4">AGENT 执行步骤</div>

            {/* Prompt */}
            <div className="bg-[#0d1117] border border-violet-500/20 rounded-xl p-4 mb-6">
              <div className="text-violet-400 text-xs font-mono mb-1">用户指令</div>
              <div className="text-slate-300 text-sm font-mono">{activeDemo.prompt}</div>
            </div>

            {/* Steps */}
            <div className="space-y-3">
              {activeDemo.steps.map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-violet-600/20 border border-violet-500/30 flex items-center justify-center shrink-0">
                    <span className="text-violet-400 text-xs font-bold">{i + 1}</span>
                  </div>
                  <span className="text-slate-400 text-sm">{step}</span>
                  <span className="ml-auto text-emerald-400 text-xs">✓</span>
                </div>
              ))}
            </div>

            {/* Toggle Button */}
            <button
              onClick={() => setShowAfter(!showAfter)}
              className="w-full mt-6 flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold py-2.5 rounded-xl transition-all duration-200"
            >
              {showAfter ? '查看原始代码' : '查看优化结果'}
              <ChevronRight className={`w-4 h-4 transition-transform ${showAfter ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Right: Code Panels */}
          <div className="lg:col-span-2 code-block overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#21262d] bg-[#161b22]">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              <div className="ml-3 flex gap-4">
                <span
                  className={`text-xs font-mono cursor-pointer transition-colors ${!showAfter ? 'text-white' : 'text-slate-500 hover:text-slate-300'}`}
                  onClick={() => setShowAfter(false)}
                >
                  原始代码
                </span>
                <span
                  className={`text-xs font-mono cursor-pointer transition-colors ${showAfter ? 'text-emerald-400' : 'text-slate-500 hover:text-slate-300'}`}
                  onClick={() => setShowAfter(true)}
                >
                  优化后 ✨
                </span>
              </div>
            </div>

            {/* Code Content */}
            <div className="p-6 overflow-auto min-h-[320px]">
              <pre className="text-xs font-mono leading-6 text-slate-300 whitespace-pre-wrap">
                {showAfter ? activeDemo.after : activeDemo.before}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
