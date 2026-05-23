"use client";

import React, { useState } from "react";

const officeDetails = [
  {
    label: "Our Location",
    value: "AKi Studio & trophy",
    subValue: "Saibaba Kovil Opposite,\nAgni Apartment side gate near,\nAndal puram, Madurai - 625002",
  },
  {
    label: "Direct Consultations",
    value: "studio@legacycraft.com",
    subValue: "+1 (555) 234-5678",
  },
  {
    label: "Studio Showroom Hours",
    value: "Monday – Friday: 9 AM – 6 PM",
    subValue: "Saturday: By Appointment Only",
  },
];

const ContactPage = () => {
  const [formType, setFormType] = useState("trophy");
  
  // State variables to capture input values
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Enter your business WhatsApp phone number here (Include country code, no spaces, no dashes)
    // Example: "15552345678" for a US number, "919876543210" for an India number
    const whatsappNumber = "7339364669"; 

    // 2. Format the message into a clean text block
    const formattedMessage = `*New Studio Inquiry*\n\n` +
      `*Project Focus:* ${formType.toUpperCase()}\n` +
      `*Name:* ${firstName} ${lastName}\n` +
      `*Email:* ${email}\n\n` +
      `*Project Details:* \n${message}`;

    // 3. URL encode the text string so browsers can handle spaces and line breaks safely
    const encodedMessage = encodeURIComponent(formattedMessage);

    // 4. Create the ultimate WhatsApp endpoint string
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // 5. Instantly open a new browser tab redirecting to WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-black text-zinc-100 min-h-screen font-sans selection:bg-zinc-800 overflow-x-hidden">
      
      {/* 1. Header Section */}
      <section className="max-w-6xl w-full mx-auto px-6 pt-24 pb-12 md:pt-36 md:pb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold block mb-4">
          Get in Touch
        </span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white max-w-2xl leading-[1.15]">
          Let&apos;s build something timeless together.
        </h1>
        <p className="mt-6 text-zinc-400 text-base md:text-lg max-w-xl leading-relaxed">
          Whether you need to order elite corporate trophies, schedule a portrait or podium photography session, or design a handcrafted presentation frame—our craftsmen are ready.
        </p>
      </section>

      {/* 2. Split Workspace Section */}
      <section className="max-w-6xl w-full mx-auto px-6 pb-24 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Office Contact Details */}
          <div className="md:col-span-4 space-y-10 md:sticky md:top-32">
            <div className="h-[1px] bg-zinc-900 w-full" />
            {officeDetails.map((detail, index) => (
              <div key={index} className="space-y-2">
                <span className="text-xs uppercase tracking-wider text-zinc-500 font-mono">
                  {detail.label}
                </span>
                <p className="text-lg font-medium text-zinc-200">
                  {detail.value}
                </p>
                <p className="text-sm text-zinc-400">
                  {detail.subValue}
                </p>
              </div>
            ))}
            <div className="h-[1px] bg-zinc-900 w-full" />
          </div>

          {/* Right Column: Custom Project Inquiry Form */}
          <div className="md:col-span-8 bg-zinc-950 border border-zinc-900 rounded-2xl p-6 md:p-10 w-full">
            <form onSubmit={handleSubmit} className="space-y-6 w-full">
              
              {/* Custom Segment Selector */}
              <div className="space-y-2">
                <label className="text-xs uppercase font-mono text-zinc-500 tracking-wider block">
                  What is your project focus?
                </label>
                <div className="grid grid-cols-3 gap-2 bg-black p-1 rounded-xl border border-zinc-900">
                  <button
                    type="button"
                    onClick={() => setFormType("trophy")}
                    className={`py-2 px-3 text-xs md:text-sm font-medium rounded-lg transition-colors ${
                      formType === "trophy" ? "bg-zinc-900 text-amber-400 border border-zinc-800" : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    Trophies
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormType("photo")}
                    className={`py-2 px-3 text-xs md:text-sm font-medium rounded-lg transition-colors ${
                      formType === "photo" ? "bg-zinc-900 text-amber-400 border border-zinc-800" : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    Photography
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormType("frame")}
                    className={`py-2 px-3 text-xs md:text-sm font-medium rounded-lg transition-colors ${
                      formType === "frame" ? "bg-zinc-900 text-amber-400 border border-zinc-800" : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    Gift Frames
                  </button>
                </div>
              </div>

              {/* Name fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-5">
                <div className="space-y-2">
                  <label className="text-xs uppercase font-mono text-zinc-500 tracking-wider block" htmlFor="firstName">First Name</label>
                  <input 
                    required 
                    id="firstName" 
                    type="text" 
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full bg-black border border-zinc-900 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-zinc-700 transition-colors" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase font-mono text-zinc-500 tracking-wider block" htmlFor="lastName">Last Name</label>
                  <input 
                    required 
                    id="lastName" 
                    type="text" 
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full bg-black border border-zinc-900 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-zinc-700 transition-colors" 
                  />
                </div>
              </div>

              {/* Contact Email */}
              <div className="space-y-2 my-5">
                <label className="text-xs uppercase font-mono text-zinc-500 tracking-wider block" htmlFor="email">Email Address</label>
                <input 
                  required 
                  id="email" 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-black border border-zinc-900 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-zinc-700 transition-colors" 
                />
              </div>

              {/* Conditional details text area label based on chosen segment */}
              <div className="space-y-2 my-5">
                <label className="text-xs uppercase font-mono text-zinc-500 tracking-wider block" htmlFor="message">
                  {formType === "trophy" && "Tell us about the awards (quantity, text, style)"}
                  {formType === "photo" && "Tell us about your shoot requirements & dates"}
                  {formType === "frame" && "Tell us about the items you want framed"}
                </label>
                <textarea
                  required
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Provide as much detail as possible..."
                  className="w-full bg-black border border-zinc-900 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-zinc-700 transition-colors resize-none"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full bg-amber-500 text-black font-semibold text-sm py-4 rounded-xl hover:bg-amber-400 transition-colors duration-200 shadow-lg shadow-amber-500/5 flex items-center justify-center gap-2"
              >
                {/* SVG WhatsApp icon design */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.66.986 3.292 1.481 4.757 1.483 5.4 0 9.79-4.386 9.793-9.774.002-2.61-1.01-5.064-2.85-6.906C16.446 2.115 14.004 1.1 11.4 1.1c-5.4 0-9.78 4.386-9.784 9.774a9.71 9.71 0 001.419 4.954l-.962 3.515 3.61-.948zm12.385-5.922c-.318-.16-1.885-.93-2.175-1.035-.29-.105-.502-.16-.713.16-.21.32-.816 1.035-1.001 1.246-.184.21-.368.238-.686.078-1.744-.872-2.906-1.536-4.053-3.507-.3-.513.3-.476.858-1.591.092-.185.046-.347-.023-.507-.069-.16-.613-1.477-.84-2.023-.222-.533-.447-.461-.613-.47l-.523-.008c-.185 0-.484.07-.738.347-.254.276-.972.951-.972 2.322 0 1.371 1 2.694 1.14 2.885.14.191 1.968 3.005 4.767 4.213.665.287 1.185.459 1.59.588.669.213 1.279.183 1.76.111.537-.08 1.885-.77 2.151-1.477.266-.707.266-1.314.187-1.442-.079-.128-.29-.21-.608-.37z"/>
                </svg>
                Send Inquiry via WhatsApp
              </button>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
};

export default ContactPage;