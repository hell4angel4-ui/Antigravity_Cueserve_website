import AboutSection from '@/components/AboutSection';
import AwardsSection from '@/components/AwardsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';

export const metadata = {
  title: 'About Us - Cueserve',
  description: 'Learn more about Cueserve, our team of designers, developers, and thinkers.',
};

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '40px' }}>
      <AboutSection />
      <AwardsSection />
      <TestimonialsSection />
      <FaqSection />
    </div>
  );
}
