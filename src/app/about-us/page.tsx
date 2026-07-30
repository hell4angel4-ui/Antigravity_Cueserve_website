import AboutHeroBanner from '@/components/AboutHeroBanner';
import AboutSection from '@/components/AboutSection';
import TeamMembersSection from '@/components/TeamMembersSection';
import ValuesSection from '@/components/ValuesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';

export const metadata = {
  title: 'About Us - Cueserve Digital Agency',
  description: 'Crafting the future of digital brands. Learn more about Cueserve, our mission, vision, and talented team of designers, developers, and strategists.',
};

export default function AboutPage() {
  return (
    <main className="about-us-page">
      <AboutHeroBanner />
      <AboutSection isAboutPage={true} />
      <TeamMembersSection />
      <ValuesSection />
      <TestimonialsSection />
      <FaqSection />
    </main>
  );
}
