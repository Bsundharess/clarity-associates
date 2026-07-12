import SEO from '@/components/shared/SEO';
import Hero from '@/components/home/Hero';
import StatsSection from '@/components/home/StatsSection';
import PracticeAreasSection from '@/components/home/PracticeAreasSection';
import MattersPreview from '@/components/home/MattersPreview';
import CourtsSection from '@/components/home/CourtsSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import FaqSection from '@/components/home/FaqSection';
import MapSection from '@/components/home/MapSection';

export default function Home() {
  return (
    <>
      <SEO
        title="Advocates, Madurai Bench of Madras High Court"
        description="Clarity Associates is a chamber of advocates providing informational content about practice areas and courts of appearance. This website does not advertise or solicit clients."
        path="/"
      />
      <Hero />
      <StatsSection />
      <PracticeAreasSection />
      <MattersPreview />
      <CourtsSection />
      <WhyChooseUs />
      <FaqSection />
      <MapSection />
    </>
  );
}
