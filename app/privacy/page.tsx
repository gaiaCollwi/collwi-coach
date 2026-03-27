import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | CollWi',
  description: 'CollWi Privacy Policy - How we collect, use, and protect your personal information.',
  openGraph: {
    title: "Privacy Policy — CollWi",
    description: "Your data, your rights. Read our privacy commitments.",
    url: "https://collwi.coach/privacy",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "CollWi Privacy Policy" }],
  },
  alternates: {
    canonical: "https://collwi.coach/privacy",
  },
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-intense"></div>
        <div className="absolute top-20 right-[10%] w-64 h-64 bg-brand-purple/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-[10%] w-56 h-56 bg-brand-coral/8 rounded-full blur-3xl animate-float-delayed"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-32 pb-16">
          <span className="inline-block px-5 py-2 bg-brand-purple/10 text-brand-purple text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-6">
            Legal
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-light leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-brand-navy/50 max-w-2xl mx-auto">
            Your privacy is of utmost importance to us. This policy explains how we collect, use, and protect your personal information.
          </p>
          <p className="text-sm text-brand-navy/40 mt-4">
            Effective Date: January 1, 2025
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {/* Data Controller */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-sans font-light text-brand-navy mb-4">
                1. Data Controller
              </h2>
              <p className="text-brand-navy/70 leading-relaxed">
                The Data Controller is CollWi PBC, located in Delaware, and can be contacted via email at{' '}
                <a href="mailto:care@collwi.com" className="text-brand-teal hover:text-brand-teal-dark font-medium transition-colors">
                  care@collwi.com
                </a>
                .
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-sans font-light text-brand-navy mb-6">
                2. Information We Collect
              </h2>
              
              <h3 className="text-xl font-semibold text-brand-navy mb-3 mt-6">
                2.1 Personal Information
              </h3>
              <p className="text-brand-navy/70 leading-relaxed mb-3">
                We collect personal information you provide directly to us when you:
              </p>
              <ul className="space-y-2 text-brand-navy/70 list-disc pl-6 mb-6">
                <li>Create an account (e.g., name, email address, date of birth, payment details)</li>
                <li>Complete your profile (e.g., interests, goals, profile picture)</li>
                <li>Participate in group sessions, coaching programs, or other platform features</li>
                <li>Contact our support team (e.g., email, phone number)</li>
                <li>Submit information requests via contact forms</li>
              </ul>

              <h3 className="text-xl font-semibold text-brand-navy mb-3 mt-6">
                2.2 Usage Information
              </h3>
              <p className="text-brand-navy/70 leading-relaxed mb-3">
                We collect information about your interactions with our platform, including:
              </p>
              <ul className="space-y-2 text-brand-navy/70 list-disc pl-6 mb-6">
                <li>IP address, browser type, and device information</li>
                <li>Pages viewed, features used, and time spent on the platform</li>
                <li>Chat logs (only for quality assurance or troubleshooting purposes)</li>
              </ul>

              <h3 className="text-xl font-semibold text-brand-navy mb-3 mt-6">
                2.3 Cookies and Tracking Technologies
              </h3>
              <p className="text-brand-navy/70 leading-relaxed mb-3">
                We use cookies and similar technologies to:
              </p>
              <ul className="space-y-2 text-brand-navy/70 list-disc pl-6">
                <li>Improve platform functionality and performance</li>
                <li>Personalize your experience</li>
                <li>Analyze usage trends and gather aggregate data</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-sans font-light text-brand-navy mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-brand-navy/70 leading-relaxed mb-3">
                We use your information to:
              </p>
              <ul className="space-y-2 text-brand-navy/70 list-disc pl-6">
                <li>Provide and improve our platform and services</li>
                <li>Facilitate group coaching sessions and communication between users</li>
                <li>Personalize your experience based on your preferences and activities</li>
                <li>Process payments and manage your account</li>
                <li>Communicate with you regarding updates, promotions, and important notifications</li>
                <li>Enforce our Terms and Conditions and other policies</li>
                <li>Ensure website security and improve your browsing experience</li>
                <li>Schedule and manage your coaching sessions</li>
              </ul>
            </div>

            {/* Sharing Your Information */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-sans font-light text-brand-navy mb-4">
                4. Sharing Your Information
              </h2>
              <p className="text-brand-navy/70 leading-relaxed mb-3">
                We do not sell or rent your personal information. We may share your information with:
              </p>
              <ul className="space-y-2 text-brand-navy/70 list-disc pl-6">
                <li><strong>Service Providers:</strong> Third-party vendors who assist us with platform operations, payment processing, analytics, or customer support</li>
                <li><strong>Legal Obligations:</strong> Authorities or legal entities if required by law, regulation, or to protect our legal rights</li>
                <li><strong>Consent-Based Sharing:</strong> Other users within group coaching programs, but only as necessary for the program's functionality and with your explicit consent</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-sans font-light text-brand-navy mb-4">
                5. Data Security
              </h2>
              <p className="text-brand-navy/70 leading-relaxed mb-3">
                We take reasonable measures to protect your information, including:
              </p>
              <ul className="space-y-2 text-brand-navy/70 list-disc pl-6 mb-4">
                <li>Encryption of sensitive data</li>
                <li>Regular security audits and monitoring</li>
                <li>Access controls to limit who can view or handle your data</li>
              </ul>
              <p className="text-brand-navy/70 leading-relaxed">
                We implement industry-standard security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security. We encourage users to safeguard their account credentials.
              </p>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-sans font-light text-brand-navy mb-4">
                6. Data Retention
              </h2>
              <p className="text-brand-navy/70 leading-relaxed">
                We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy or as required by law. Once your data is no longer needed, it will be securely deleted.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-sans font-light text-brand-navy mb-4">
                7. Your Rights
              </h2>
              <p className="text-brand-navy/70 leading-relaxed mb-3">
                Depending on your location, you may have the following rights under applicable data protection laws:
              </p>
              <ul className="space-y-2 text-brand-navy/70 list-disc pl-6 mb-4">
                <li>Access your personal data</li>
                <li>Request rectification or deletion of your personal data</li>
                <li>Restrict or object to the processing of your data</li>
                <li>Withdraw your consent at any time, without affecting the lawfulness of processing based on consent before its withdrawal</li>
                <li>Request data portability</li>
              </ul>
              <p className="text-brand-navy/70 leading-relaxed">
                To exercise these rights, contact us at{' '}
                <a href="mailto:care@collwi.com" className="text-brand-teal hover:text-brand-teal-dark font-medium transition-colors">
                  care@collwi.com
                </a>
                .
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-sans font-light text-brand-navy mb-4">
                8. Children's Privacy
              </h2>
              <p className="text-brand-navy/70 leading-relaxed">
                Our platform is not intended for children under 18 years of age. We do not knowingly collect personal information from children. If we become aware of such data, we will delete it promptly.
              </p>
            </div>

            {/* International Data Transfers */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-sans font-light text-brand-navy mb-4">
                9. International Data Transfers
              </h2>
              <p className="text-brand-navy/70 leading-relaxed">
                If you are located outside the United States, please note that your data may be transferred to and processed in the United States or other countries where our servers or service providers are located. We ensure that such transfers comply with applicable data protection laws and include appropriate safeguards.
              </p>
            </div>

            {/* Changes to This Privacy Policy */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-sans font-light text-brand-navy mb-4">
                10. Changes to This Privacy Policy
              </h2>
              <p className="text-brand-navy/70 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Updates will be posted on this page with the &quot;Effective Date&quot; revised accordingly. We encourage you to review this Privacy Policy periodically.
              </p>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-br from-brand-teal-light/30 to-brand-purple/10 rounded-3xl p-8 md:p-10 border border-brand-teal/20">
              <h2 className="text-2xl md:text-3xl font-sans font-light text-brand-navy mb-4">
                Contact Us
              </h2>
              <p className="text-brand-navy/70 leading-relaxed mb-4">
                For questions, concerns, or support, please contact us at:
              </p>
              <div className="space-y-2 text-brand-navy/70">
                <p>
                  <strong>Customer Care:</strong>{' '}
                  <a href="mailto:care@collwi.com" className="text-brand-teal hover:text-brand-teal-dark font-medium transition-colors">
                    care@collwi.com
                  </a>
                </p>
                <p>
                  <strong>Tech Support:</strong>{' '}
                  <a href="mailto:support@collwi.com" className="text-brand-teal hover:text-brand-teal-dark font-medium transition-colors">
                    support@collwi.com
                  </a>
                </p>
              </div>
              <p className="text-brand-navy/60 italic mt-6">
                Thank you for trusting CollWi with your personal growth journey. Your privacy is our priority.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
