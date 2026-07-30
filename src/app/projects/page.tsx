import ProjectsSection from '@/components/ProjectsSection';
import TestimonialsSection from '@/components/TestimonialsSection';

export const metadata = {
  title: 'Works & Projects - Cueserve',
  description: 'Explore our latest design, development, and branding projects.',
};

export default function ProjectsPage() {
  return (
    <div style={{ paddingTop: '40px' }}>
      <ProjectsSection />
      <TestimonialsSection />
    </div>
  );
}
