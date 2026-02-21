
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "How do I find dogs for sale near me through Yahweh Puppy Farm?",
    answer: "Yahweh Puppy Farm makes it simple to find the best dogs for sale near you. We offer climate-controlled, safe delivery to major hubs including Bangalore, Hyderabad, Chennai, and Mumbai. You can browse our 'All Puppies' collection to see available certified puppies and connect with our team via WhatsApp for real-time updates."
  },
  {
    question: "What is the typical puppy price in Bangalore and other cities?",
    answer: "Puppy prices vary based on breed, lineage, and certification. While we focus on elite quality rather than budget-grade pets, our pricing is transparent and includes comprehensive health screenings, KCI registration (where applicable), and initial vaccinations. Contact us for a specific quote on your chosen breed."
  },
  {
    question: "Are your puppies health-certified and vaccinated?",
    answer: "Yes! Every divine companion at Yahweh Puppy Farm undergoes a 15-point clinical screening by our veterinary panel. We provide a health record that includes deworming schedules and initial vaccinations. We recommend all new owners conduct an independent check within 48 hours to confirm our high standards."
  },
  {
    question: "Does Yahweh Puppy Farm practice ethical breeding?",
    answer: "Absolutely. Ethical breeding is our core mission. We audit all parent lineage for genetic markers and skeletal health. Our dogs live in spacious, climate-controlled environments and are never treated as 'machines.' We prioritize the quality of life for our sires and dams above all else."
  },
  {
    question: "How does the 'AI Matchmaker' help me find the right dog breed?",
    answer: "Our AI tool analyzes your lifestyle—including apartment size, activity level, and family dynamics—to recommend the perfect breed match. For example, it might suggest a French Bulldog for city apartments or a Golden Retriever for active families in larger homes."
  },
  {
    question: "Can I visit the farm before buying a puppy?",
    answer: "We encourage transparency! While we maintain strict bio-security protocols to protect our young puppies from infections, we offer scheduled video calls and, in some cases, physical visits to our regional hubs to see the environment where your future companion is raised."
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-main">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-4">
            Help & Information
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-main tracking-tight mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-muted font-medium text-lg leading-relaxed">
            Everything you need to know about finding and adopting your <br className="hidden sm:block" />
            certified companion from Yahweh Puppy Farm.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => (
            <div 
              key={index}
              className={`group border rounded-[1.5rem] transition-all duration-300 ${
                activeIndex === index 
                ? 'border-primary bg-primary/5 shadow-md' 
                : 'border-main bg-card hover:border-primary/20 hover:bg-surface'
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 sm:p-8 text-left outline-none"
              >
                <span className={`text-sm sm:text-base font-bold transition-colors ${
                  activeIndex === index ? 'text-primary' : 'text-main'
                }`}>
                  {item.question}
                </span>
                <span className={`ml-4 shrink-0 transition-transform duration-300 ${
                  activeIndex === index ? 'rotate-180 text-primary' : 'text-muted'
                }`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 sm:p-8 pt-0 text-muted text-sm sm:text-base leading-relaxed font-medium">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SEO Keyword Footer */}
        <div className="mt-16 pt-12 border-t border-main text-center">
          <p className="text-[10px] font-black text-muted/30 uppercase tracking-[0.3em] mb-4">
            Search Tags: Dogs for sale near me, Puppy price in Bangalore, Golden Retriever Bangalore, Ethical Dog Breeders India
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
