'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Emails = () => {
  const form = useRef();
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setErrorMessage('');  
    setSuccessMessage(''); // Reset success message
    setLoading(true); 

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID, 
        process.env.NEXT_PUBLIC_TEMPLATE_ID, 
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY 
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          form.current.reset(); 
          setLoading(false);
          setSuccessMessage('Your message was sent successfully!'); // Success message
        },
        (error) => {
          console.log('FAILED...', error.text);
          setErrorMessage('Failed to send the email. Please try again.'); 
          setLoading(false);
        }
      );
  };

  return (
    <section className="bg-black text-white p-6 rounded-lg shadow-lg">
      <h4 className="text-xl font-bold text-white mb-4">Stay in Touch</h4>
      
      {/* Error and Success Messages */}
      {errorMessage && <div className="text-red-500 mb-4" aria-live="assertive">{errorMessage}</div>}
      {successMessage && <div className="text-green-500 mb-4" aria-live="assertive">{successMessage}</div>}

      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <div>
          <label htmlFor="to_name" className="text-purple-500 text-sm font-mono mb-2">Your Name</label>
          <input
            id="to_name"
            type="text"
            name="to_name"
            required
            placeholder="Your Name"
            className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
          />
        </div>

        <div>
          <label htmlFor="user_email" className="text-purple-500 text-sm font-mono mb-2">Your Email</label>
          <input
            id="user_email"
            type="email"
            name="user_email"
            required
            placeholder="youremail@example.com"
            className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
          />
        </div>

        <div>
          <label htmlFor="user_message" className="text-purple-500 text-sm font-mono mb-2">Your Message</label>
          <textarea
            id="user_message"
            name="user_message"
            required
            placeholder="Your message here..."
            className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
            rows={4}
          />
        </div>

        <button
          type="submit"
          className="p-3 rounded bg-purple-600 text-white hover:bg-purple-700 transition mt-4 w-full sm:w-auto"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
};

export default Emails;
