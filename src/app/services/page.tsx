import ServicesSection from '@/components/ServicesSection';
import FaqSection from '@/components/FaqSection';

export const metadata = {
  title: 'Services - Cueserve',
  description: 'Explore the full spectrum of digital services offered by Cueserve.',
};

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: '40px' }}>
      <ServicesSection />
      <FaqSection />
    </div>
  );
}
