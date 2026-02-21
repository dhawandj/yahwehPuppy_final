
import React, { useState } from 'react';
import { getPetMatchRecommendations } from '../services/gemini';
import { RecommendedBreed } from '../types';

const BreedRecommender: React.FC = () => {
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<RecommendedBreed[] | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    setLoading(true);
    const results = await getPetMatchRecommendations(userInput);
    setRecommendations(results);
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-main mb-4">AI Pet Matchmaker</h2>
        <p className="text-muted max-w-2xl mx-auto">
          Tell us about your home, family, and activity level. Our advanced AI will analyze dozens of breeds to find your perfect canine match.
        </p>
      </div>

      <div className="bg-card rounded-[2.5rem] p-8 shadow-premium border border-main">
        <form onSubmit={handleSubmit} className="mb-8">
          <label className="block text-sm font-bold text-muted mb-2">Describe Your Ideal Life with a Dog</label>
          <textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="e.g., I live in a small apartment in the city, I work from home, and I want a low-shedding companion who enjoys short walks."
            className="w-full h-32 px-5 py-4 rounded-2xl border-2 border-main bg-main focus:border-primary focus:ring-0 transition-all outline-none resize-none text-main"
          />
          <button
            type="submit"
            disabled={loading}
            className="mt-4 w-full py-4 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-primary-hover transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-primary/20"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                AI is Thinking...
              </span>
            ) : "Find My Perfect Breed"}
          </button>
        </form>

        {recommendations && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-xl font-bold text-main mb-4">Top Breed Matches</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {recommendations.map((rec, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-main border border-main relative group">
                  <div className="absolute top-4 right-4 w-10 h-10 bg-surface rounded-full flex items-center justify-center text-primary font-bold text-sm shadow-sm">
                    {rec.suitabilityScore}%
                  </div>
                  <h4 className="text-lg font-bold text-main mb-2">{rec.breed}</h4>
                  <p className="text-xs text-muted leading-relaxed mb-4">{rec.reason}</p>
                  <button className="text-xs font-bold text-primary hover:underline">View Availability →</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BreedRecommender;
