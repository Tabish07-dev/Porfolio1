"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Message sent successfully ✅");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Something went wrong ❌");
    }
  };

  return (
   <section className="mx-auto px-6 py-20 bg-gradient-to-br from-amber-50 via-white to-indigo-50">
  <div className="max-w-6xl mx-auto">
    <div className="grid md:grid-cols-2 gap-14 items-center bg-white/70 backdrop-blur-lg shadow-xl rounded-3xl p-10">

     
      <div>
        <span className="text-sm uppercase tracking-widest text-indigo-600 font-semibold">
          Contact
        </span>

        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-4">
          Let&apos;s talk
        </h2>

        <p className="text-gray-600 mb-8 max-w-md">
          Have a project in mind or just want to say hello?  
          Fill the form and I’ll get back to you shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-white border border-gray-200 px-5 py-4 rounded-xl text-gray-700 placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
          />

          <input
            type="email"
            name="email"
            placeholder="Your email address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-white border border-gray-200 px-5 py-4 rounded-xl text-gray-700 placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
          />

          <textarea
            name="message"
            placeholder="Tell me about your project..."
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full bg-white border border-gray-200 px-5 py-4 rounded-xl text-gray-700 placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm resize-none"
          />

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white font-semibold
            px-8 py-4 rounded-xl hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Send Message
          </button>
        </form>
      </div>

   
  
<div className="relative">

  <div className="absolute -top-6 -left-6 w-full h-full bg-indigo-100 rounded-3xl"></div>

  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
    <img
      src="tabi07.jpeg"
      alt="Contact"
      className="
        w-full 
        aspect-[3/4]
        object-cover 
        object-top
        scale-105
      "
    />

   
    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
  </div>
</div>



    </div>
  </div>
</section>

  );
}
