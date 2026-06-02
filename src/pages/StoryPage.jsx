import PageTransition from '@/components/layout/PageTransition';
import StoryDetail from '@/components/stories/StoryDetail';

export default function StoryPage() {
  return (
    <PageTransition>
      <div className="pt-16">
        <StoryDetail />
      </div>
    </PageTransition>
  );
}
