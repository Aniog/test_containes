import DreamBackground from '../components/home/DreamBackground';
import CreatorDashboard from '../components/dashboard/CreatorDashboard';

export default function Dashboard() {
  return (
    <div className="relative min-h-screen pt-20">
      <DreamBackground />
      <CreatorDashboard />
    </div>
  );
}
