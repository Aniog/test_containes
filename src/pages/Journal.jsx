import NewsletterSection from '@/components/home/NewsletterSection'
import JournalGrid from '@/components/journal/JournalGrid'
import { useImageLoader } from '@/hooks/useImageLoader'

const Journal = () => {
  const containerRef = useImageLoader('journal-page')

  return (
    <div ref={containerRef}>
      <JournalGrid />
      <NewsletterSection />
    </div>
  )
}

export default Journal
