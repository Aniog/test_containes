import DreamBackground from '../components/home/DreamBackground';
import AIGenerator from '../components/generator/AIGenerator';

export default function Generator() {
  return (
    <div className="relative min-h-screen pt-20">
      <DreamBackground />
      <AIGenerator />
    </div>
  );
}
