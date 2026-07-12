import { Languages, Landmark, Scale, BadgeCheck } from 'lucide-react';
import SEO from '@/components/shared/SEO';
import PageHeader from '@/components/shared/PageHeader';
import Reveal from '@/components/shared/Reveal';
import { teamMembers } from '@/data/team';

export default function Team() {
  return (
    <>
      <SEO
        title="Our Team"
        description="Meet the advocates of Clarity Associates and their qualifications, enrollment details, and courts of practice."
        path="/team"
      />
      <PageHeader
        eyebrow="Our Team"
        title="The Advocates"
        description="Qualifications and enrollment details of the advocates practicing at Clarity Associates."
      />

      <section className="section-pad bg-paper">
        <div className="container-luxury space-y-20">
          {teamMembers.map((member, i) => (
            <Reveal key={member.id} delay={i * 0.1}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                <div className="lg:col-span-4">
                  <div className="aspect-[4/5] w-full max-w-sm mx-auto lg:mx-0 bg-ink relative overflow-hidden">
                    <img
                      src={member.photo}
                      alt={`Portrait of ${member.name}`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 border border-gold/30 m-3 pointer-events-none" />
                  </div>
                </div>

                <div className="lg:col-span-8">
                  <p className="eyebrow mb-3">{member.designation}</p>
                  <h2 className="font-heading text-2xl sm:text-3xl text-ink mb-2">{member.name}</h2>
                  <p className="font-sub text-lg italic text-stone-500 mb-8">{member.qualification}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                    {member.enrollment && (
                      <div className="flex items-start gap-3">
                        <BadgeCheck className="text-gold-dark shrink-0 mt-0.5" size={18} />
                        <div>
                          <p className="text-stone-500 uppercase text-xs tracking-wide mb-1">Enrollment Number</p>
                          <p className="text-ink">{member.enrollment}</p>
                        </div>
                      </div>
                    )}
                    {member.barCouncil && (
                      <div className="flex items-start gap-3">
                        <Scale className="text-gold-dark shrink-0 mt-0.5" size={18} />
                        <div>
                          <p className="text-stone-500 uppercase text-xs tracking-wide mb-1">Bar Council</p>
                          <p className="text-ink">{member.barCouncil}</p>
                        </div>
                      </div>
                    )}
                    {member.experience && (
                      <div className="flex items-start gap-3">
                        <BadgeCheck className="text-gold-dark shrink-0 mt-0.5" size={18} />
                        <div>
                          <p className="text-stone-500 uppercase text-xs tracking-wide mb-1">Experience</p>
                          <p className="text-ink">{member.experience}</p>
                        </div>
                      </div>
                    )}
                    {member.languages && (
                      <div className="flex items-start gap-3">
                        <Languages className="text-gold-dark shrink-0 mt-0.5" size={18} />
                        <div>
                          <p className="text-stone-500 uppercase text-xs tracking-wide mb-1">Languages</p>
                          <p className="text-ink">{member.languages.join(', ')}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-8">
                    <p className="text-stone-500 uppercase text-xs tracking-wide mb-3 flex items-center gap-2">
                      <Landmark size={15} className="text-gold-dark" /> Courts of Practice
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.courts.map((court) => (
                        <span
                          key={court}
                          className="text-xs px-3 py-1.5 border border-ink/15 text-stone-600"
                        >
                          {court}
                        </span>
                      ))}
                    </div>
                  </div>

                  {member.practiceAreas && (
                    <div className="mt-6">
                      <p className="text-stone-500 uppercase text-xs tracking-wide mb-3">Practice Areas</p>
                      <div className="flex flex-wrap gap-2">
                        {member.practiceAreas.map((area) => (
                          <span
                            key={area}
                            className="text-xs px-3 py-1.5 bg-ink/5 text-ink"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
