import { useMemo, useState } from 'react';
import { Search, FileText, ExternalLink } from 'lucide-react';
import SEO from '@/components/shared/SEO';
import PageHeader from '@/components/shared/PageHeader';
import Reveal from '@/components/shared/Reveal';
import { cases } from '@/data/cases';

export default function RepresentativeMatters() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return cases;
    return cases.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.role.toLowerCase().includes(q) ||
        c.court.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <>
      <SEO
        title="Representative Matters"
        description="A factual record of representative matters handled by advocates of Clarity Associates before various courts, listed by date and role."
        path="/representative-matters"
      />
      <PageHeader
        eyebrow="Representative Matters"
        title="A Record of Appearances"
        description="Listed below are representative matters in which advocates of the chamber have appeared. Only factual details are provided; no outcomes are described or implied."
      />

      <section className="section-pad bg-paper">
        <div className="container-luxury">
          <Reveal className="mb-12 max-w-md">
            <label htmlFor="matter-search" className="sr-only">
              Search representative matters
            </label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-500" size={18} />
              <input
                id="matter-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by party, role, or court&hellip;"
                className="w-full pl-12 pr-4 py-3.5 bg-white border border-ink/15 focus:border-gold outline-none text-sm text-ink placeholder:text-stone-400 transition-colors"
              />
            </div>
          </Reveal>

          {filtered.length === 0 ? (
            <p className="text-stone-500">No matters found matching your search.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((c, i) => (
                <Reveal key={c.id} delay={(i % 6) * 0.06}>
                  <div className="card-luxury p-7 h-full flex flex-col">
                    <FileText className="text-gold-dark" size={22} strokeWidth={1.5} />
                    <h2 className="mt-5 font-heading text-base text-ink leading-snug">{c.title}</h2>
                    <dl className="mt-4 space-y-1.5 text-xs">
                      <div className="flex gap-2">
                        <dt className="text-stone-500 uppercase tracking-wide shrink-0">Date</dt>
                        <dd className="text-ink">{c.displayDate}</dd>
                      </div>
                      <div className="flex gap-2">
                        <dt className="text-stone-500 uppercase tracking-wide shrink-0">Role</dt>
                        <dd className="text-gold-dark">{c.role}</dd>
                      </div>
                      <div className="flex gap-2">
                        <dt className="text-stone-500 uppercase tracking-wide shrink-0">Court</dt>
                        <dd className="text-ink">{c.court}</dd>
                      </div>
                    </dl>
                    {c.judgmentUrl && (
                      <a
                        href={c.judgmentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2 text-xs tracking-widest2 uppercase text-gold-dark hover:text-gold transition-colors w-fit"
                      >
                        Read Public Judgment <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
