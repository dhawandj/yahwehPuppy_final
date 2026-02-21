
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6 sm:py-20 animate-in fade-in duration-500">
      <h1 className="text-3xl sm:text-5xl font-extrabold text-main mb-8 leading-tight">Privacy Policy</h1>
      <p className="text-muted mb-8 font-medium italic text-sm sm:text-base">Last Updated: October 2026</p>
      
      <div className="space-y-10 text-main/80 leading-relaxed">
        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-main mb-4">1. Introduction</h2>
          <p>
            Welcome to YahwehPuppyFarm. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-main mb-4">2. The Data We Collect</h2>
          <p className="mb-4">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Identity Data:</strong> Includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data:</strong> Includes email address and telephone numbers (WhatsApp).</li>
            <li><strong>Technical Data:</strong> Includes internet protocol (IP) address, browser type and version, time zone setting and location, and other technology on the devices you use to access this website.</li>
            <li><strong>Usage Data:</strong> Includes information about how you use our website, products and services.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-main mb-4">3. How We Use Your Data</h2>
          <p className="mb-4">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To facilitate the connection between you and our certified dog breeders.</li>
            <li>To manage our relationship with you, including notifying you about changes to our terms or privacy policy.</li>
            <li>To use data analytics to improve our website, services, and customer experiences.</li>
            <li>To provide personalized AI breed recommendations based on your lifestyle inputs.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-main mb-4">4. Data Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-main mb-4">5. Third-Party Links</h2>
          <p>
            This website may include links to third-party websites (like WhatsApp or external breeder portals). Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-main mb-4">6. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact us at <span className="text-primary font-bold">privacy@yahwehpuppyfarm.in</span> or via our official WhatsApp support channel.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
