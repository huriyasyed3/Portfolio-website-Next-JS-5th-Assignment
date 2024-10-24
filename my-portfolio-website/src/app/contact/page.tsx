'use client'
import React from 'react';
import Link from 'next/link'
const ContactPage = () => {
  return (
    <>
     
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black flex items-center justify-center py-12">
      <div className="container max-w-md mx-auto px-4">
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-xl p-6">
          <h1 className="text-2xl font-bold text-white text-center mb-6">Get in Touch</h1>

          <form className="space-y-4">
            {/* Name */}
            <div className="relative">
              <label htmlFor="name" className="text-white">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full mt-1 p-2 bg-white bg-opacity-5 rounded-lg focus:ring-2 focus:ring-purple-500 text-white"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <label htmlFor="email" className="text-white">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="w-full mt-1 p-2 bg-white bg-opacity-5 rounded-lg focus:ring-2 focus:ring-purple-500 text-white"
              />
            </div>

            {/* Message */}
            <div className="relative">
              <label htmlFor="message" className="text-white">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Your Message"
                className="w-full mt-1 p-2 bg-white bg-opacity-5 rounded-lg focus:ring-2 focus:ring-purple-500 text-white"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:bg-purple-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Social Media Links */}
          <div className="mt-8 text-center text-white">
            <p>Or connect with me on:</p>
            <div className="flex justify-center space-x-4 mt-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">LinkedIn</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">GitHub</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">Twitter</a>
            </div>
            <ul>
  <li className="text-gray-400 text-sm pt-1">
    <Link href='/home'>Go Back</Link>
  </li>
</ul>
          </div>
        </div>
     </div>
  </div>
    </>
  );
};

export default ContactPage;


            