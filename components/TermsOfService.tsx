
import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6 sm:py-20 animate-in fade-in duration-500">
      <h1 className="text-3xl sm:text-5xl font-extrabold text-main mb-8 leading-tight">Terms of Service</h1>
      <p className="text-muted mb-8 font-medium italic text-sm sm:text-base">Last Updated: October 2026</p>
      
      <div className="space-y-10 text-main/80 leading-relaxed">
        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-main mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using YahwehPuppyFarm, you accept and agree to be bound by the terms and provision of this agreement. Any participation in this service will constitute acceptance of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-main mb-4">2. User Eligibility</h2>
          <p>
            You must be at least 18 years of age to use this website. By using YahwehPuppyFarm, you warrant that you are at least 18 years old and that you possess the legal right and ability to enter into these Terms of Service.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-main mb-4">3. All Puppies Collection Rules</h2>
          <p className="mb-4">YahwehPuppyFarm acts as a platform to connect buyers with ethical dog breeders. Users agree that:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Breeder certification is handled based on documentation provided at the time of onboarding.</li>
            <li>YahwehPuppyFarm does not own the animals listed; we facilitate the discovery and initial communication.</li>
            <li>All health claims are provided by the breeders and verified by their respective veterinary certificates.</li>
            <li>Any final transaction occurs between the buyer and the breeder directly.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-main mb-4">4. Pet Welfare Policy</h2>
          <p>
            YahwehPuppyFarm has a zero-tolerance policy for animal cruelty or unethical breeding practices. Any breeder found violating local animal welfare laws or our internal ethical standards will be permanently banned from the platform.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-main mb-4">5. Disclaimer of Liability</h2>
          <p>
            YahwehPuppyFarm is not liable for any behavioral issues, health complications not covered by the initial guarantee, or other problems that may arise after the adoption of a pet. We recommend all new owners to conduct their own independent veterinary check within 48 hours of pet arrival.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-main mb-4">6. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-main mb-4">7. Modifications to Service</h2>
          <p>
            We reserve the right to modify or withdraw, temporarily or permanently, this website (or any part thereof) with or without notice to you.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
