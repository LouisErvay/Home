import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';

// Définition des variables d'environnement par défaut
const EMAILJS_SERVICE_ID = 'emailjs-service-id';
const EMAILJS_TEMPLATE_ID = 'emailjs-template-id';
const EMAILJS_USER_ID = 'emailjs-user-id';
const RECAPTCHA_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"; // Clé de test de google recaptcha 

const HomeContact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [sending, setSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<{type: 'success' | 'error', message: string} | null>(null);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaVerified(!!token);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!captchaVerified) {
      setSendStatus({
        type: 'error',
        message: 'Veuillez valider le captcha avant d\'envoyer votre message.'
      });
      return;
    }
    
    setSending(true);
    setSendStatus(null);
    
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: `Message de mon site : ${formData.subject}`,
        message: `Message de ${formData.name} | adresse mail : ${formData.email}\nMessage :\n${formData.message}`
      };
      
      // Essayer d'utiliser les variables d'environnement via import.meta.env, sinon utiliser les valeurs par défaut
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_USER_ID || EMAILJS_USER_ID
      );
      
      setSendStatus({
        type: 'success',
        message: 'Votre message a été envoyé avec succès!'
      });
      
      // Réinitialiser le formulaire et le captcha après soumission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setCaptchaVerified(false);
      recaptchaRef.current?.reset();
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      setSendStatus({
        type: 'error',
        message: 'Une erreur est survenue lors de l\'envoi de votre message.'
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="mt-16 scroll-mt-16">
      <div className="flex items-center mb-4">
        <span className="text-2xl font-bold text-cyan-400">Contact</span>
      </div>
      <article className="border border-slate-400 p-6 rounded-md hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_10px_rgba(34,211,238,0.2)]">
        {/* Formulaire de contact */}
        <div className="mb-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm">
                  <span className="text-amber-400 font-bold">NOM:</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-800 border border-slate-400 rounded-sm px-3 py-2 focus:outline-none focus:border-cyan-400 text-slate-300"
                  placeholder="Votre nom"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm">
                  <span className="text-amber-400 font-bold">EMAIL:</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-800 border border-slate-400 rounded-sm px-3 py-2 focus:outline-none focus:border-cyan-400 text-slate-300"
                  placeholder="votre@email.com"
                />
              </div>
            </fieldset>
            <fieldset className="space-y-2">
              <label htmlFor="subject" className="block text-sm">
                <span className="text-amber-400 font-bold">OBJET:</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full bg-slate-800 border border-slate-400 rounded-sm px-3 py-2 focus:outline-none focus:border-cyan-400 text-slate-300"
                placeholder="Sujet de votre message"
              />
            </fieldset>
            <fieldset className="space-y-2">
              <label htmlFor="message" className="block text-sm">
                <span className="text-amber-400 font-bold">MESSAGE:</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full bg-slate-800 border border-slate-400 rounded-sm px-3 py-2 focus:outline-none focus:border-cyan-400 text-slate-300 resize-none"
                placeholder="Votre message..."
              ></textarea>
            </fieldset>
            
            {sendStatus && (
              <div className={`p-3 rounded-sm ${sendStatus.type === 'success' ? 'bg-green-900/30 text-green-400 border border-green-700' : 'bg-red-900/30 text-red-400 border border-red-700'}`}>
                {sendStatus.message}
              </div>
            )}
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="w-full md:w-auto">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || RECAPTCHA_SITE_KEY}
                  onChange={handleCaptchaChange}
                  theme="dark"
                />
              </div>
              <div className="w-full md:w-auto">
                <button
                  type="submit"
                  disabled={sending || !captchaVerified}
                  className={`w-full md:w-auto bg-slate-800 border border-slate-400 hover:bg-slate-700 hover:border-cyan-400 text-cyan-400 px-6 py-2 rounded-sm transition flex items-center justify-center ${(sending || !captchaVerified) ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <span>{sending ? 'Envoi en cours...' : 'Envoyer'}</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export default HomeContact;
