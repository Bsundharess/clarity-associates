import { Link } from 'react-router-dom';
import SEO from '@/components/shared/SEO';

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you are looking for could not be found." path="/404" />
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 bg-ink">
        <p className="eyebrow text-gold-light mb-4">404</p>
        <h1 className="font-heading text-3xl sm:text-4xl text-white mb-4">Page Not Found</h1>
        <p className="text-white/60 max-w-md mb-8">
          The page you are looking for does not exist or may have been moved.
        </p>
        <Link to="/" className="btn-gold">
          Return Home
        </Link>
      </section>
    </>
  );
}
