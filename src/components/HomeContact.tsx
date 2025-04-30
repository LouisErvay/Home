import React, { useState } from 'react';

const HomeContact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pourriez ajouter la logique d'envoi du formulaire
    // Réinitialiser le formulaire après soumission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div id="contact" className="mt-16 scroll-mt-16">
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-2 text-slate-400">$ </span>
        <span className="text-2xl text-cyan-400">cd ../Contact</span>
      </div>
      <div className="border border-teal-700 p-6 rounded-md">
        {/* Formulaire de contact */}
        <div className="mb-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm">
                  <span className="text-amber-400 opacity-90">NOM:</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-800 border border-teal-700 rounded-sm px-3 py-2 focus:outline-none focus:border-cyan-400 text-slate-300"
                  placeholder="Votre nom"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm">
                  <span className="text-amber-400 opacity-90">EMAIL:</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-800 border border-teal-700 rounded-sm px-3 py-2 focus:outline-none focus:border-cyan-400 text-slate-300"
                  placeholder="votre@email.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm">
                <span className="text-amber-400 opacity-90">OBJET:</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full bg-slate-800 border border-teal-700 rounded-sm px-3 py-2 focus:outline-none focus:border-cyan-400 text-slate-300"
                placeholder="Sujet de votre message"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm">
                <span className="text-amber-400 opacity-90">MESSAGE:</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full bg-slate-800 border border-teal-700 rounded-sm px-3 py-2 focus:outline-none focus:border-cyan-400 text-slate-300 resize-none"
                placeholder="Votre message..."
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-slate-800 border border-teal-700 hover:bg-slate-700 text-cyan-400 px-6 py-2 rounded-sm transition flex items-center"
              >
                <span>Envoyer</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
