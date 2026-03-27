import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and Conditions | CollWi',
  description: 'CollWi Terms and Conditions - Guidelines for using our platform safely and respectfully.',
  openGraph: {
    title: "Terms & Conditions — CollWi",
    description: "Read the terms and conditions governing CollWi's group coaching platform, community guidelines, and user responsibilities.",
    url: "https://collwi.coach/terms",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "CollWi Terms & Conditions" }],
  },
  alternates: {
    canonical: "https://collwi.coach/terms",
  },
}

export default function TermsConditions() {
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
            Terms and Conditions
          </h1>
          <p className="text-lg text-brand-navy/50 max-w-2xl mx-auto">
            Welcome to CollWi! By accessing or using our platform, you agree to comply with these terms and conditions.
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
            {/* Overview */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-sans font-light text-brand-navy mb-4">
                1. Overview of the CollWi Platform
              </h2>
              <p className="text-brand-navy/70 leading-relaxed">
                The CollWi Platform is designed to foster collaboration, learning, and social interaction by providing tools for virtual CollWi sharing rooms, CollWi chats, Coaching Programs and Coaching sessions and other communication features. Users are expected to participate in a manner that aligns with our mission of creating a safe and supportive digital space.
              </p>
            </div>

            {/* Acceptance of Terms */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-sans font-light text-brand-navy mb-4">
                2. Acceptance of Terms
              </h2>
              <p className="text-brand-navy/70 leading-relaxed mb-3">
                By accessing or using any part of the CollWi Platform, you confirm that you:
              </p>
              <ul className="space-y-2 text-brand-navy/70 list-disc pl-6">
                <li>Are at least 18 years of age (or meet the minimum age requirement in your jurisdiction).</li>
                <li>Agree to abide by these terms and any future updates.</li>
                <li>Acknowledge and accept our Privacy Policy, which governs how we collect and use your data.</li>
              </ul>
            </div>

            {/* User Conduct */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-sans font-light text-brand-navy mb-4">
                3. User Conduct
              </h2>
              <p className="text-brand-navy/70 leading-relaxed mb-3">
                To maintain a positive and respectful community, users are required to adhere to the following rules:
              </p>
              <ul className="space-y-2 text-brand-navy/70 list-disc pl-6 mb-6">
                <li><strong>Respect Others:</strong> Harassment, bullying, hate speech, discrimination, or any harmful behavior is strictly prohibited.</li>
                <li><strong>Be Honest:</strong> Provide accurate information when creating an account and refrain from impersonating others.</li>
                <li><strong>Protect Privacy:</strong> Do not share or solicit sensitive personal information from others.</li>
                <li><strong>Comply with Laws:</strong> Ensure that your use of the platform does not violate any applicable laws or regulations.</li>
              </ul>
              <p className="text-brand-navy/70 leading-relaxed mb-3">
                Prohibited activities include, but are not limited to:
              </p>
              <ul className="space-y-2 text-brand-navy/70 list-disc pl-6">
                <li>Posting obscene, offensive, or illegal content.</li>
                <li>Spamming, phishing, or distributing malware.</li>
                <li>Using the platform for unauthorized commercial purposes.</li>
              </ul>
            </div>

            {/* Acceptable Use Policy */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-sans font-light text-brand-navy mb-4">
                4. Acceptable Use Policy
              </h2>
              <p className="text-brand-navy/70 leading-relaxed mb-4">
                To uphold the values of CollWi and protect our users, the following guidelines define acceptable and unacceptable use of the platform:
              </p>
              
              <h3 className="text-xl font-semibold text-brand-navy mb-3 mt-6">
                Prohibited Uses
              </h3>
              <p className="text-brand-navy/70 leading-relaxed mb-3">
                You may not use the platform to:
              </p>
              <ul className="space-y-2 text-brand-navy/70 list-disc pl-6 mb-6">
                <li>Post, transmit, or share any content that is defamatory, obscene, or unlawful.</li>
                <li>Impersonate any individual or organization or misrepresent your affiliation.</li>
                <li>Upload or distribute viruses, malware, or any other harmful software.</li>
                <li>Engage in solicitation, pyramid schemes, or other unauthorized promotional activities.</li>
                <li>Violate intellectual property rights or privacy rights of others.</li>
                <li>Record, reproduce, or share coaching sessions or group discussions without express consent from all participants.</li>
                <li>Exploit the platform or its users in any way that undermines the integrity of the community or service.</li>
              </ul>

              <h3 className="text-xl font-semibold text-brand-navy mb-3 mt-6">
                Responsible Use
              </h3>
              <p className="text-brand-navy/70 leading-relaxed mb-3">
                All users are expected to:
              </p>
              <ul className="space-y-2 text-brand-navy/70 list-disc pl-6 mb-4">
                <li>Treat others with kindness, empathy, and respect.</li>
                <li>Protect the confidentiality of group discussions and shared experiences.</li>
                <li>Use the platform for personal growth, community support, and professional development—not exploitation or manipulation.</li>
              </ul>
              <p className="text-brand-navy/70 leading-relaxed">
                CollWi reserves the right to remove content, restrict access, or terminate accounts that violate these guidelines without prior notice.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-sans font-light text-brand-navy mb-4">
                5. Intellectual Property
              </h2>
              <p className="text-brand-navy/70 leading-relaxed mb-4">
                All content, trademarks, and materials on the CollWi Platform are the intellectual property of CollWi or its licensors. Users may not reproduce, distribute, or create derivative works without prior written consent.
              </p>
              <p className="text-brand-navy/70 leading-relaxed">
                User-generated content remains the property of the user, but by sharing content on the platform, you grant CollWi a non-exclusive, royalty-free, worldwide license to use, modify, and display the content as necessary for platform operations.
              </p>
            </div>

            {/* Safety and Confidentiality */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-sans font-light text-brand-navy mb-4">
                6. Safety and Confidentiality
              </h2>
              <p className="text-brand-navy/70 leading-relaxed mb-3">
                CollWi prioritizes user safety and the confidentiality of interactions. While we take steps to secure the platform, users must also take precautions, including:
              </p>
              <ul className="space-y-2 text-brand-navy/70 list-disc pl-6 mb-4">
                <li>Keeping account credentials secure.</li>
                <li>Reporting suspicious activities or breaches to our support team at{' '}
                  <a href="mailto:support@collwi.com" className="text-brand-teal hover:text-brand-teal-dark font-medium transition-colors">
                    support@collwi.com
                  </a>
                </li>
              </ul>
              <p className="text-brand-navy/70 leading-relaxed mb-4">
                CollWi is not liable for breaches arising from user negligence or actions outside our control.
              </p>
              <p className="text-brand-navy/70 leading-relaxed mb-3">
                We prioritize the safety and privacy of all members. By using CollWi Services, you agree to:
              </p>
              <ul className="space-y-2 text-brand-navy/70 list-disc pl-6">
                <li><strong>Maintain Confidentiality:</strong> Respect the privacy of other members by not sharing any personal or sensitive information discussed within the group outside the platform.</li>
                <li><strong>Avoid Harmful Content:</strong> Do not post, share, or distribute content that is abusive, offensive, defamatory, discriminatory, or otherwise harmful.</li>
                <li><strong>Report Concerns:</strong> Promptly report any content or behavior that violates these terms to the CollWi support team at{' '}
                  <a href="mailto:support@collwi.com" className="text-brand-teal hover:text-brand-teal-dark font-medium transition-colors">
                    support@collwi.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Proper and Respectful Conduct */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-sans font-light text-brand-navy mb-4">
                7. Proper and Respectful Conduct
              </h2>
              <p className="text-brand-navy/70 leading-relaxed mb-3">
                We are committed to creating a respectful and inclusive environment. As a member, you are expected to:
              </p>
              <ul className="space-y-2 text-brand-navy/70 list-disc pl-6">
                <li><strong>Engage Respectfully:</strong> Use courteous and respectful language in all communications.</li>
                <li><strong>Stay On-Topic:</strong> Ensure that your contributions are relevant to the group's focus or purpose.</li>
                <li><strong>Avoid Disruptive Behavior:</strong> Refrain from spamming, trolling, or engaging in any actions that disrupt the group's discussions.</li>
              </ul>
            </div>

            {/* Prohibited Activities */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-sans font-light text-brand-navy mb-4">
                8. Prohibited Activities
              </h2>
              <p className="text-brand-navy/70 leading-relaxed mb-3">
                To maintain the integrity of the CollWi Sharing Room, the following activities are strictly prohibited:
              </p>
              <ul className="space-y-2 text-brand-navy/70 list-disc pl-6">
                <li>Sharing misleading or false information.</li>
                <li>Promoting illegal, violent, or unethical activities.</li>
                <li>Engaging in harassment, hate speech, or discrimination.</li>
                <li>Soliciting personal, financial, or sensitive information from others.</li>
              </ul>
            </div>

            {/* Disclaimer Regarding Coaches */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-sans font-light text-brand-navy mb-4">
                9. Disclaimer Regarding Coaches
              </h2>
              <p className="text-brand-navy/70 leading-relaxed mb-4">
                CollWi provides a platform for independent certified coaches to offer services to users. While we may vet and onboard coaches to uphold our standards, each coach operates independently, and CollWi is not responsible for and cannot be held liable for the actions, advice, or conduct of any coach using the platform.
              </p>
              <p className="text-brand-navy/70 leading-relaxed">
                By using the platform, you agree that any engagement with a coach is at your own discretion and risk.
              </p>
            </div>

            {/* Account Management */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-sans font-light text-brand-navy mb-4">
                10. Account Management
              </h2>
              <ul className="space-y-2 text-brand-navy/70 list-disc pl-6">
                <li>Users are responsible for maintaining the security of their accounts.</li>
                <li>CollWi reserves the right to suspend or terminate accounts that violate these terms or exhibit suspicious behavior.</li>
                <li>You may deactivate your account at any time by following the provided instructions on the platform.</li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-sans font-light text-brand-navy mb-4">
                11. Limitation of Liability
              </h2>
              <p className="text-brand-navy/70 leading-relaxed mb-3">
                CollWi is provided "as is" without warranties of any kind, whether express or implied. CollWi is not liable for:
              </p>
              <ul className="space-y-2 text-brand-navy/70 list-disc pl-6">
                <li>Loss of data or interruptions to service.</li>
                <li>Third-party actions or content.</li>
                <li>Damages resulting from your use of or inability to use the platform.</li>
              </ul>
            </div>

            {/* Modifications */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-sans font-light text-brand-navy mb-4">
                12. Modifications to the Platform or Terms
              </h2>
              <p className="text-brand-navy/70 leading-relaxed">
                CollWi reserves the right to update the platform or these terms at any time. Notifications of significant changes will be provided via the platform or email. Continued use of the platform after updates indicates acceptance of the revised terms.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-sans font-light text-brand-navy mb-4">
                13. Third-Party Links and Content
              </h2>
              <p className="text-brand-navy/70 leading-relaxed">
                The CollWi Platform may include links to third-party websites or content, including Blog posts created by Coaches on CollWi. CollWi is not responsible for the accuracy, security, or practices of these external sites. Interaction with third-party content is at your own risk.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-sans font-light text-brand-navy mb-4">
                14. Governing Law and Dispute Resolution
              </h2>
              <p className="text-brand-navy/70 leading-relaxed">
                These terms are governed by the laws of Delaware. Any disputes will be resolved through mediation or arbitration in accordance with applicable laws.
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
                Thank you for being part of the CollWi community! Together, we can build a respectful and enriching virtual environment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
