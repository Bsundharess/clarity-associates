import Reveal from './Reveal';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative bg-ink pt-40 pb-20 md:pt-48 md:pb-28 px-6 sm:px-10 lg:px-20 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_20%_20%,#C9A227,transparent_45%)]" />
      <div className="container-luxury relative">
        <Reveal>
          <p className="eyebrow text-gold-light mb-4">{eyebrow}</p>
          <h1 className="font-heading text-4xl sm:text-5xl text-white max-w-3xl">{title}</h1>
          {description && (
            <p className="mt-6 max-w-2xl text-white/60 leading-relaxed">{description}</p>
          )}
          <div className="hairline mt-8" />
        </Reveal>
      </div>
    </section>
  );
}
