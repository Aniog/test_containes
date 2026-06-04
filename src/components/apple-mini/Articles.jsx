import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const articles = [
  {
    id: 'art-review',
    titleId: 'art-review-title',
    descId: 'art-review-desc',
    imgId: 'art-review-img-s1t2u3',
    category: 'Review',
    date: 'May 28, 2026',
    title: 'APPLE mini Review: The Desktop Reinvented',
    desc: 'After six weeks of daily use, we put the new APPLE mini through its paces — from 4K video editing to running local AI models. The verdict? It changes everything.',
    readTime: '8 min read',
    body: `The APPLE mini has always been Apple's most underrated product. But with the M4 chip inside, it's no longer just a capable little box — it's a genuine powerhouse that rivals workstations costing three times as much.

We spent six weeks using the APPLE mini Pro (24GB, 512GB) as our primary machine. Here's what we found.

**Performance**
The M4 chip is a revelation. Compiling a large Xcode project that took 4 minutes on an Intel Mac mini now finishes in under 90 seconds. Final Cut Pro renders a 10-minute 4K timeline in real time. Even running a local LLM (Llama 3 8B) while simultaneously editing video didn't cause any slowdown.

**Thermals & Noise**
The fan is virtually inaudible under normal use. Even during sustained CPU-heavy tasks, it stays whisper-quiet — well below 25dB. The chassis barely gets warm.

**Display Support**
We ran a triple-monitor setup: two 4K displays via Thunderbolt and one 8K display via HDMI 2.1. All three ran at full resolution and refresh rate without a hitch.

**Verdict**
If you're still on an Intel Mac or a Windows mini PC, the APPLE mini is the most compelling upgrade you can make in 2026. It's fast, silent, compact, and surprisingly affordable for what it delivers.`,
  },
  {
    id: 'art-vs',
    titleId: 'art-vs-title',
    descId: 'art-vs-desc',
    imgId: 'art-vs-img-v4w5x6',
    category: 'Comparison',
    date: 'May 15, 2026',
    title: 'APPLE mini vs. The Competition: Who Wins?',
    desc: 'We stack the APPLE mini against the Intel NUC 14 and the ASUS ROG NUC to see which mini PC delivers the best performance per dollar in 2026.',
    readTime: '6 min read',
    body: `Mini PCs have never been more competitive. Intel's NUC 14 and ASUS's ROG NUC are both excellent machines — but how do they stack up against the APPLE mini?

**CPU Performance**
In Cinebench R24 multi-core, the APPLE mini M4 scores 1,850 points. The Intel NUC 14 (Core Ultra 9) scores 1,420. The ASUS ROG NUC (Core Ultra 9 185H) scores 1,610. The M4 wins by a significant margin.

**GPU Performance**
For GPU-accelerated tasks, the M4's 10-core GPU outperforms Intel's integrated Xe graphics by roughly 3×. The ROG NUC's discrete Arc GPU is competitive for gaming, but the M4 wins in creative workloads.

**Power Efficiency**
The APPLE mini draws just 18W under typical load. The NUC 14 draws 45W. The ROG NUC peaks at 65W. Apple's efficiency advantage is enormous.

**Price**
At $599, the APPLE mini undercuts both competitors at equivalent performance tiers.

**Verdict**
For creative professionals and developers, the APPLE mini wins on every metric. The ROG NUC is the better choice only if you need Windows gaming support.`,
  },
  {
    id: 'art-setup',
    titleId: 'art-setup-title',
    descId: 'art-setup-desc',
    imgId: 'art-setup-img-y7z8a9',
    category: 'Guide',
    date: 'June 1, 2026',
    title: '10 Tips to Get the Most Out of Your APPLE mini',
    desc: 'From hidden keyboard shortcuts to optimizing memory usage and setting up a triple-monitor workspace — here are the power-user tips you need to know.',
    readTime: '5 min read',
    body: `Just got your APPLE mini? Here are 10 tips to unlock its full potential from day one.

**1. Enable ProRes acceleration**
In System Settings → General → Storage, enable ProRes hardware acceleration for dramatically faster video exports in Final Cut Pro and DaVinci Resolve.

**2. Use Stage Manager for multi-app workflows**
Stage Manager (Control Center → Stage Manager) keeps your active app front and center while recent apps stay visible on the left. Perfect for multi-monitor setups.

**3. Set up Continuity Camera**
Use your iPhone as a high-quality webcam wirelessly. Just bring your iPhone near your Mac — it connects automatically via Continuity Camera.

**4. Optimize memory with Activity Monitor**
Open Activity Monitor → Memory tab. Watch the "Memory Pressure" graph. If it's consistently yellow or red, consider upgrading to a higher memory config.

**5. Use Shortcuts for automation**
The Shortcuts app on macOS is incredibly powerful. Automate repetitive tasks like resizing images, converting files, or sending emails with a single keystroke.

**6. Enable Night Shift**
System Settings → Displays → Night Shift. Reduces blue light in the evening for better sleep without affecting color accuracy during the day.

**7. Use Handoff for seamless device switching**
Start a task on your iPhone and pick it up on your APPLE mini instantly. Works with Safari, Mail, Notes, and most third-party apps.

**8. Configure Hot Corners**
System Settings → Desktop & Dock → Hot Corners. Assign actions like Mission Control, Launchpad, or screen lock to each corner of your display.

**9. Use Rosetta 2 for legacy apps**
Some older apps still run under Rosetta 2 (Intel emulation). Right-click the app → Get Info → check "Open using Rosetta" if you encounter compatibility issues.

**10. Keep macOS updated**
Apple regularly releases performance and security updates. System Settings → General → Software Update → enable automatic updates.`,
  },
  {
    id: 'art-m4',
    titleId: 'art-m4-title',
    descId: 'art-m4-desc',
    imgId: 'art-m4-img-b1c2d3',
    category: 'Deep Dive',
    date: 'April 30, 2026',
    title: 'Inside the M4 Chip: What Makes It So Fast?',
    desc: 'A technical breakdown of Apple\'s M4 architecture — the new CPU cores, the Neural Engine improvements, and why unified memory is a game-changer for creative pros.',
    readTime: '10 min read',
    body: `Apple's M4 chip is the most significant leap in Apple Silicon since the original M1. Here's a deep technical look at what makes it tick.

**CPU Architecture**
The M4 features a 10-core CPU with 4 performance cores and 6 efficiency cores. The performance cores are based on a new microarchitecture with a wider decode width (10-wide vs 8-wide in M3), larger reorder buffer, and improved branch prediction. This translates to roughly 25% better single-threaded performance over M3.

**GPU Architecture**
The 10-core GPU in the M4 introduces hardware ray tracing acceleration and mesh shading support. Compared to M3's GPU, it delivers approximately 35% better throughput in compute workloads.

**Neural Engine**
The M4's 16-core Neural Engine runs at up to 38 TOPS (trillion operations per second), up from 18 TOPS in M3. This powers Apple Intelligence features like on-device text summarization, image generation, and real-time transcription.

**Unified Memory Architecture**
Unlike traditional PCs where CPU and GPU have separate memory pools, the M4's unified memory is shared across all compute units. The memory bus runs at 120GB/s bandwidth, meaning the GPU can access the same data as the CPU without any copying overhead. This is why the M4 can run 70B parameter LLMs that would require a $3,000 discrete GPU on a Windows PC.

**Process Node**
The M4 is manufactured on TSMC's 3nm N3E process, the same node as the M3 but with improved yields and slightly higher clock speeds. Apple is expected to move to 2nm with M5.`,
  },
  {
    id: 'art-dev',
    titleId: 'art-dev-title',
    descId: 'art-dev-desc',
    imgId: 'art-dev-img-e4f5g6',
    category: 'Developer',
    date: 'June 3, 2026',
    title: 'Why Developers Are Switching to APPLE mini',
    desc: 'Docker, Xcode, VS Code, and local LLMs — we talk to five developers about why the APPLE mini has become their go-to machine for serious software development.',
    readTime: '7 min read',
    body: `We spoke with five developers who recently switched to the APPLE mini as their primary development machine. Here's what they told us.

**Sarah, iOS Developer**
"I was skeptical about switching from my Intel Mac Pro, but the APPLE mini Pro compiles my largest iOS project in 40 seconds. It used to take 4 minutes. The ROI was immediate."

**Marcus, Full-Stack Engineer**
"I run Docker with 8 containers simultaneously, VS Code, Chrome with 30 tabs, and Slack — all without any slowdown. The 24GB unified memory handles everything I throw at it."

**Priya, ML Engineer**
"I use the APPLE mini Max with 64GB to run local LLMs for code completion and testing. Running Llama 3 70B locally means my code never leaves my machine. That's huge for enterprise work."

**Tom, Game Developer**
"Unity builds that took 20 minutes on my old machine now finish in 6. The Metal GPU performance is excellent for testing shaders and rendering pipelines."

**Aiko, DevOps Engineer**
"The power efficiency is what sold me. My home lab used to cost $80/month in electricity. The APPLE mini draws so little power that my bill dropped by $60. It pays for itself."

**Common Themes**
All five developers cited build speed, memory efficiency, and silence as the top reasons for switching. None reported any significant compatibility issues with their toolchains.`,
  },
  {
    id: 'art-ai',
    titleId: 'art-ai-title',
    descId: 'art-ai-desc',
    imgId: 'art-ai-img-h7i8j9',
    category: 'AI',
    date: 'May 20, 2026',
    title: 'Running Local AI on APPLE mini: A Practical Guide',
    desc: 'With 64GB of unified memory, the APPLE mini can run large language models locally. We test Llama 3, Mistral, and Stable Diffusion — here\'s what you can expect.',
    readTime: '9 min read',
    body: `The APPLE mini Max with 64GB unified memory is one of the most capable local AI machines you can buy for under $1,500. Here's a practical guide to getting started.

**Why Local AI?**
Running AI models locally means your data never leaves your machine, there are no API costs, and you get consistent performance without rate limits. For developers, writers, and researchers, it's a game-changer.

**Setting Up Ollama**
Ollama is the easiest way to run LLMs on macOS. Install it from ollama.ai, then run: \`ollama run llama3\`. The model downloads automatically and runs entirely on your APPLE mini's Neural Engine and GPU.

**Model Performance**
- Llama 3 8B: ~45 tokens/second on M4, ~80 tokens/second on M4 Max
- Llama 3 70B: Requires 64GB. Runs at ~12 tokens/second on M4 Max — usable for most tasks
- Mistral 7B: ~50 tokens/second on M4. Excellent for coding assistance
- Phi-3 Mini: ~90 tokens/second. Great for quick tasks with lower memory usage

**Stable Diffusion**
Use DiffusionBee or Draw Things for image generation. On M4, a 512×512 image generates in about 3 seconds. On M4 Max, it's under 1 second.

**Recommended Setup**
For the best local AI experience, we recommend the APPLE mini Max with 64GB. The 24GB model handles models up to 13B parameters comfortably. The 16GB base model is limited to 7B models.

**Privacy Note**
All processing happens on-device. No data is sent to external servers. This makes the APPLE mini ideal for working with sensitive documents, proprietary code, or personal data.`,
  },
];

const categoryColors = {
  Review: 'bg-blue-100 text-blue-700',
  Comparison: 'bg-purple-100 text-purple-700',
  Guide: 'bg-green-100 text-green-700',
  'Deep Dive': 'bg-orange-100 text-orange-700',
  Developer: 'bg-gray-100 text-gray-700',
  AI: 'bg-pink-100 text-pink-700',
};

const ArticleModal = ({ article, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, modalRef.current);
  }, [article]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const paragraphs = article.body.split('\n\n');

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-start justify-center p-4 md:p-8 overflow-y-auto"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="relative bg-white rounded-2xl max-w-2xl w-full my-8 overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hero image */}
        <div className="aspect-video overflow-hidden bg-gray-100">
          <img
            alt={article.title}
            data-strk-img-id={`${article.imgId}-modal`}
            data-strk-img={`[${article.descId}-modal] [${article.titleId}-modal]`}
            data-strk-img-ratio="16x9"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hidden text refs for image query */}
        <span id={`${article.titleId}-modal`} className="sr-only">{article.title}</span>
        <span id={`${article.descId}-modal`} className="sr-only">{article.desc}</span>

        {/* Content */}
        <div className="p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColors[article.category]}`}>
              {article.category}
            </span>
            <span className="text-gray-400 text-sm">{article.date}</span>
            <span className="text-gray-300">·</span>
            <span className="text-gray-400 text-sm">{article.readTime}</span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-6">
            {article.title}
          </h2>

          <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
            {paragraphs.map((para, i) => {
              if (para.startsWith('**') && para.endsWith('**')) {
                return (
                  <h3 key={i} className="text-lg font-bold text-gray-900 mt-6 mb-2">
                    {para.replace(/\*\*/g, '')}
                  </h3>
                );
              }
              const parts = para.split(/(\*\*[^*]+\*\*)/g);
              return (
                <p key={i} className="text-gray-600">
                  {parts.map((part, j) =>
                    part.startsWith('**') && part.endsWith('**')
                      ? <strong key={j} className="text-gray-900 font-semibold">{part.replace(/\*\*/g, '')}</strong>
                      : part
                  )}
                </p>
              );
            })}
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-colors text-lg leading-none"
          aria-label="Close article"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

const Articles = () => {
  const containerRef = useRef(null);
  const [activeArticle, setActiveArticle] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const [featured, ...rest] = articles;

  return (
    <section id="articles" ref={containerRef} className="py-24 md:py-32 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">Articles</span>
          <h2 id="articles-title" className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 tracking-tight">
            From the APPLE mini blog
          </h2>
          <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto">
            Reviews, guides, comparisons, and deep dives — everything you need to know.
          </p>
        </div>

        {/* Featured article */}
        <div
          className="group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow bg-gray-50 mb-8 cursor-pointer"
          onClick={() => setActiveArticle(featured)}
        >
          <div className="grid md:grid-cols-2">
            <div className="aspect-video md:aspect-auto overflow-hidden bg-gray-100">
              <img
                alt={featured.title}
                data-strk-img-id={featured.imgId}
                data-strk-img={`[${featured.descId}] [${featured.titleId}] [articles-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColors[featured.category]}`}>
                  {featured.category}
                </span>
                <span className="text-gray-400 text-sm">Featured</span>
              </div>
              <h3 id={featured.titleId} className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-3">
                {featured.title}
              </h3>
              <p id={featured.descId} className="text-gray-500 leading-relaxed mb-6">
                {featured.desc}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span>{featured.readTime}</span>
                </div>
                <span className="text-blue-600 font-semibold text-sm group-hover:underline">
                  Read more →
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Article grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((article) => (
            <div
              key={article.id}
              className="group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-gray-50 cursor-pointer flex flex-col"
              onClick={() => setActiveArticle(article)}
            >
              <div className="aspect-video overflow-hidden bg-gray-100">
                <img
                  alt={article.title}
                  data-strk-img-id={article.imgId}
                  data-strk-img={`[${article.descId}] [${article.titleId}] [articles-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${categoryColors[article.category]}`}>
                    {article.category}
                  </span>
                </div>
                <h3 id={article.titleId} className="text-lg font-bold text-gray-900 leading-snug mb-2">
                  {article.title}
                </h3>
                <p id={article.descId} className="text-gray-500 text-sm leading-relaxed flex-1">
                  {article.desc}
                </p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>
                  <span className="text-blue-600 font-semibold text-xs group-hover:underline">
                    Read more →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-8 py-3 rounded-full transition-colors">
            View all articles →
          </button>
        </div>
      </div>

      {activeArticle && (
        <ArticleModal article={activeArticle} onClose={() => setActiveArticle(null)} />
      )}
    </section>
  );
};

export default Articles;
