
import React, { useState } from 'react';
import { Dog } from '../types';
import DogCard from './DogCard';

interface AdminProps {
  onAddDog: (dog: Dog) => void;
}

const Admin: React.FC<AdminProps> = ({ onAddDog }) => {
  const [formData, setFormData] = useState<Partial<Dog>>({
    name: '',
    breed: '',
    category: 'Puppy',
    age: '',
    gender: 'Male',
    price: 0,
    images: [''],
    description: '',
    personality: [''],
    weight: '',
    lifeSpan: ''
  });

  const [showCode, setShowCode] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === 'price' ? Number(value) : value }));
  };

  const handleArrayChange = (index: number, value: string, field: 'images' | 'personality') => {
    const newArray = [...(formData[field] || [])];
    newArray[index] = value;
    setFormData(prev => ({ ...prev, [field]: newArray }));
  };

  const addArrayItem = (field: 'images' | 'personality') => {
    setFormData(prev => ({ ...prev, [field]: [...(prev[field] || []), ''] }));
  };

  const removeArrayItem = (index: number, field: 'images' | 'personality') => {
    const newArray = [...(formData[field] || [])].filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, [field]: newArray }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newDog: Dog = {
      ...formData,
      id: Date.now().toString(),
      tags: [],
    } as Dog;
    
    // Save to local storage
    const localDogs = JSON.parse(localStorage.getItem('yahwehfarm_inventory') || '[]');
    localStorage.setItem('yahwehfarm_inventory', JSON.stringify([...localDogs, newDog]));
    
    onAddDog(newDog);
    alert('Dog added successfully to local storage!');
  };

  const generatedCode = `  {
    id: '${Date.now()}',
    name: '${formData.name}',
    breed: '${formData.breed}',
    category: '${formData.category}',
    age: '${formData.age}',
    gender: '${formData.gender}',
    price: ${formData.price}, // Kept for internal logic, hidden in UI
    images: [
      ${formData.images?.map(img => `'${img}'`).join(',\n      ')}
    ],
    description: '${formData.description?.replace(/'/g, "\\'")}',
    tags: [],
    personality: [${formData.personality?.map(p => `'${p}'`).join(', ')}],
    weight: '${formData.weight}',
    lifeSpan: '${formData.lifeSpan}'
  },`;

  return (
    <div className="max-w-7xl mx-auto py-12 px-6 sm:py-20 animate-in fade-in duration-500">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Form Section */}
        <div className="flex-1 bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-100">
          <div className="flex justify-between items-start mb-2">
             <h1 className="text-3xl font-extrabold text-slate-900">Add New Puppy</h1>
             <span className="px-3 py-1 bg-slate-900 text-white text-[10px] font-black uppercase rounded-lg">Admin Mode</span>
          </div>
          <p className="text-slate-500 mb-8 font-medium">Enter dog details. Note: Prices and redundant badges are hidden from the public UI.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Puppy Name</label>
                <input required name="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none transition-all" placeholder="e.g. Charlie" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Breed</label>
                <input required name="breed" value={formData.breed} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none transition-all" placeholder="e.g. Beagle" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Category</label>
                <select required name="category" value={formData.category} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none transition-all">
                  <option value="Puppy">Puppy</option>
                  <option value="Adult">Adult</option>
                  <option value="Premium">Premium</option>
                  <option value="New Arrival">New Arrival</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Age</label>
                <input required name="age" value={formData.age} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none transition-all" placeholder="e.g. 10 weeks" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Internal Price (₹) - [HIDDEN IN UI]</label>
                <input required type="number" name="price" value={formData.price} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none transition-all" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Gender</label>
                <select name="gender" value={formData.gender} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none transition-all">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Weight</label>
                <input name="weight" value={formData.weight} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none transition-all" placeholder="e.g. 5-8 lbs" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Image URLs</label>
              <div className="space-y-3">
                {formData.images?.map((url, idx) => (
                  <div key={idx} className="flex gap-2">
                    <input required value={url} onChange={(e) => handleArrayChange(idx, e.target.value, 'images')} className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none" placeholder="https://..." />
                    {idx > 0 && <button type="button" onClick={() => removeArrayItem(idx, 'images')} className="px-3 text-red-500">✕</button>}
                  </div>
                ))}
                <button type="button" onClick={() => addArrayItem('images')} className="text-primary text-xs font-bold">+ Add Another Image</button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Personality Traits (Comma separated)</label>
              <div className="flex flex-wrap gap-2">
                {formData.personality?.map((trait, idx) => (
                  <div key={idx} className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-2">
                    <input value={trait} onChange={(e) => handleArrayChange(idx, e.target.value, 'personality')} className="bg-transparent text-xs py-1.5 outline-none w-20" placeholder="Trait" />
                    <button type="button" onClick={() => removeArrayItem(idx, 'personality')} className="ml-1 text-slate-400">✕</button>
                  </div>
                ))}
                <button type="button" onClick={() => addArrayItem('personality')} className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-600">+ Add</button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-2">About Description</label>
              <textarea name="description" value={formData.description} onChange={handleInputChange} className="w-full h-32 px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none resize-none" placeholder="Tell the story of this puppy..." />
            </div>

            <div className="flex gap-4 pt-4">
              <button type="submit" className="flex-1 py-4 bg-primary text-white rounded-2xl font-bold shadow-xl shadow-primary-custom active:scale-95 transition-all">Save to Site</button>
              <button type="button" onClick={() => setShowCode(!showCode)} className="px-6 py-4 bg-slate-900 text-white rounded-2xl font-bold active:scale-95 transition-all">Get Code</button>
            </div>
          </form>

          {showCode && (
            <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200">
              <h3 className="text-xs font-bold text-slate-400 uppercase mb-4 tracking-widest">TypeScript Object (Copy to mockData.ts)</h3>
              <pre className="text-[10px] sm:text-xs overflow-x-auto text-slate-700 bg-white p-4 rounded-xl border border-slate-100">
                {generatedCode}
              </pre>
              <button onClick={() => { navigator.clipboard.writeText(generatedCode); alert('Copied!'); }} className="absolute top-10 right-10 bg-slate-900 text-white px-3 py-1.5 rounded-lg text-[10px] font-bold">Copy</button>
            </div>
          )}
        </div>

        {/* Preview Section */}
        <div className="lg:w-80 shrink-0">
          <div className="sticky top-24">
            <h2 className="text-xs font-bold text-slate-400 uppercase mb-4 tracking-widest text-center">Live Preview (As user sees)</h2>
            <div className="pointer-events-none scale-100 transform-gpu origin-top">
              <DogCard 
                onSelect={() => {}}
                dog={{
                  id: 'preview',
                  name: formData.name || 'Puppy Name',
                  breed: formData.breed || 'Breed Name',
                  category: formData.category as any || 'Puppy',
                  age: formData.age || '0 weeks',
                  gender: formData.gender as any,
                  price: formData.price || 0,
                  images: formData.images?.[0] ? formData.images : ['https://via.placeholder.com/800'],
                  description: formData.description || '',
                  tags: [] as string[],
                  personality: formData.personality || [],
                  weight: formData.weight || '',
                  lifeSpan: ''
                }} 
              />
            </div>
            <p className="mt-6 text-[10px] text-center text-slate-400 font-bold uppercase tracking-[0.2em] leading-relaxed">
              Price and redundant badges <br /> are hidden for a clean aesthetic.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
