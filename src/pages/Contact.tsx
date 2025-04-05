
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the form data to a server
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">Contact Us</h1>
            
            <div className="calculator-container p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Get In Touch</h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    Have questions or feedback about Apna Calculator? We'd love to hear from you!
                  </p>
                  
                  <div className="flex items-start mt-6">
                    <Phone className="h-5 w-5 text-calculator-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium text-gray-800 dark:text-white">Phone</h3>
                      <p className="text-gray-600 dark:text-gray-400">+91 98765 43210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-calculator-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium text-gray-800 dark:text-white">Email</h3>
                      <p className="text-gray-600 dark:text-gray-400">contact@apnacalculator.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-calculator-primary mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium text-gray-800 dark:text-white">Address</h3>
                      <p className="text-gray-600 dark:text-gray-400">123 Market Street, Mumbai, India</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Send Message</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="calculator-input"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="calculator-input"
                        placeholder="Your email"
                        required
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="calculator-input"
                        placeholder="Your message"
                        required
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="calculator-button flex items-center justify-center w-full"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
