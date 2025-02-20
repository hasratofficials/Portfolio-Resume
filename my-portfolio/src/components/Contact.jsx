import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-semibold">Contact</h2>
      <form className="mt-6 max-w-md mx-auto">
        <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 rounded text-gray-900" />
        <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 rounded text-gray-900" />
        <textarea placeholder="Your Message" className="w-full p-3 mb-4 rounded text-gray-900"></textarea>
        <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
