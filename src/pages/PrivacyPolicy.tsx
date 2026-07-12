import SEO from '@/components/shared/SEO';
import PageHeader from '@/components/shared/PageHeader';
import Reveal from '@/components/shared/Reveal';
import { siteConfig } from '@/data/site';

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy policy describing how Clarity Associates handles information submitted through this website."
        path="/privacy-policy"
      />
      <PageHeader eyebrow="Legal" title="Privacy Policy" />

      <section className="section-pad bg-paper">
        <div className="container-luxury max-w-3xl">
          <Reveal className="space-y-8 text-stone-600 leading-relaxed">
            <p>
              This Privacy Policy describes how Clarity Associates (&ldquo;the
              chamber&rdquo;) handles information in connection with this website.
            </p>

            <div>
              <h2 className="font-heading text-xl text-ink mb-3">Information We Receive</h2>
              <p>
                This website does not use tracking cookies or collect personal data
                through forms. Where a user chooses to contact the chamber via
                telephone, email, or WhatsApp, the chamber will receive the
                information voluntarily provided by the user through that channel,
                such as their name, contact details, and the substance of their
                query.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-ink mb-3">Use of Information</h2>
              <p>
                Information voluntarily provided by a user is used solely to respond
                to their query or to provide requested information, and is not used
                for any advertising or marketing purpose.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-ink mb-3">Confidentiality</h2>
              <p>
                Any information shared by a user in the course of seeking a
                consultation is treated as confidential in accordance with
                professional obligations applicable to advocates.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-ink mb-3">Third-Party Services</h2>
              <p>
                This website embeds a Google Maps view to display the location of the
                chamber, and links to WhatsApp to facilitate contact. These
                third-party services are governed by their own respective privacy
                policies.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-ink mb-3">Contact</h2>
              <p>
                For questions regarding this Privacy Policy, please write to{' '}
                <a href={`mailto:${siteConfig.email}`} className="text-gold-dark hover:text-gold">
                  {siteConfig.email}
                </a>.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
