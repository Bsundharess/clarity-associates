import SEO from '@/components/shared/SEO';
import PageHeader from '@/components/shared/PageHeader';
import Reveal from '@/components/shared/Reveal';

export default function Disclaimer() {
  return (
    <>
      <SEO
        title="Disclaimer"
        description="Disclaimer regarding the informational nature of the Clarity Associates website, in accordance with the Rules of the Bar Council of India."
        path="/disclaimer"
      />
      <PageHeader eyebrow="Legal" title="Disclaimer" />

      <section className="section-pad bg-paper">
        <div className="container-luxury max-w-3xl">
          <Reveal className="prose-luxury space-y-8 text-stone-600 leading-relaxed">
            <p>
              The Bar Council of India does not permit advocates to solicit work or
              advertise. By accessing this website, www.clarityassociates.example
              (&ldquo;the website&rdquo;), the user acknowledges the following:
            </p>

            <div>
              <h2 className="font-heading text-xl text-ink mb-3">Informational Purpose Only</h2>
              <p>
                This website is intended solely to provide information about Clarity
                Associates, its advocates, and their areas and courts of practice.
                It is not intended to be a source of advertising or solicitation of
                work.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-ink mb-3">No Advocate-Client Relationship</h2>
              <p>
                Viewing, browsing, or otherwise accessing this website does not
                create an advocate-client relationship between the user and Clarity
                Associates or any of its advocates. Such a relationship is
                established only through direct consultation and formal engagement.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-ink mb-3">Not Legal Advice</h2>
              <p>
                The information provided on this website is general in nature and is
                based on the understanding of the advocates at the time of
                publication. It should not be construed as legal advice or relied
                upon in place of consultation with a qualified advocate regarding a
                specific matter.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-ink mb-3">Voluntary Access</h2>
              <p>
                The user acknowledges that they are voluntarily seeking information
                relating to Clarity Associates for their own information and use, and
                that there has been no solicitation, invitation, or inducement of any
                sort whatsoever from Clarity Associates or any of its advocates to
                solicit work through this website.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-ink mb-3">No Liability</h2>
              <p>
                Clarity Associates is not liable for any consequence of any action
                taken by a user relying on material or information provided on this
                website. Users are advised to seek independent legal advice before
                acting on any information contained herein.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-ink mb-3">External Links</h2>
              <p>
                This website may contain links to third-party websites, including
                court websites for the purpose of viewing public judgments. Clarity
                Associates does not control and is not responsible for the content of
                such external websites.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
