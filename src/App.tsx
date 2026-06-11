import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Phone, MapPin, Calendar, Clock, X } from "lucide-react";

/**
 * Premium Sri Lankan Wedding Invitation Theme
 * Names: Naween & Nadeesha
 * Background: Cream/Sand
 * Accents: Green/Brown
 */

const mandalaImage = "/images/mandala_gold.png";
const centerImage = "/images/ChatGPT_Image_Jun_10__2026__12_17_13_AM-removebg-preview.png";

function FloatingPetals() {
  const petals = useMemo(() =>
    Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 12 + Math.random() * 10,
      size: 8 + Math.random() * 12,
      rotation: Math.random() * 360,
    })), []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {petals.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-theme-200/20"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 1.2,
            borderRadius: "50% 5% 50% 5%",
            rotate: p.rotation
          }}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: [0, 1200], opacity: [0, 0.5, 0], rotate: p.rotation + 360 }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </div>
  );
}

export default function WeddingInvitation() {
  const [isOpened, setIsOpened] = useState(false);
  const [rsvpName, setRsvpName] = useState("");
  const [attendance, setAttendance] = useState<"attending" | "declined" | null>(null);
  const [guests, setGuests] = useState(1);
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rsvpName || !attendance) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setRsvpSubmitted(true);
    }, 1200);
  };

  return (
    <main className="h-[100dvh] w-full bg-brown-dark overflow-hidden relative flex items-center justify-center font-montserrat">
      <FloatingPetals />

      <AnimatePresence mode="wait">
        {!isOpened ? (
          <motion.div
            key="envelope-stage"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 1.1,
              transition: { duration: 0.8, ease: "easeInOut" }
            }}
            className="flex flex-col items-center justify-center p-6 relative z-10 w-full"
          >
            {/* Title */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
              <span className="inline-block px-5 py-2 rounded-full bg-brown-base border border-theme-500/20 text-[10px] uppercase tracking-[0.5em] text-theme-600 font-bold mb-6">
                Save the Date
              </span>
              <h1 className="font-cinzel text-4xl md:text-5xl text-theme-900 mb-4 tracking-tight">
                Ravindu & Dilmi
              </h1>
              <p className="text-theme-600 text-sm tracking-[0.2em] font-light">MARCH 04, 2027</p>
            </motion.div>

            {/* Gatefold Envelope */}
            <div
              className="relative w-full max-w-[400px] aspect-[1/1.4] flex items-center justify-center group cursor-pointer perspective-1000"
              onClick={() => setIsOpened(true)}
            >
              <div className="absolute inset-0 bg-brown-base rounded-xl shadow-2xl border border-theme-500/20 overflow-hidden" />

              {/* Left Flap */}
              <motion.div
                className="absolute inset-y-0 left-0 w-1/2 bg-brown-base z-20 shadow-[5px_0_15px_rgba(0,0,0,0.3)] origin-left flex items-center justify-end pr-4 overflow-hidden"
                whileHover={{ rotateY: -10 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
                <div className="absolute right-0 top-0 bottom-0 w-1 bg-theme-400/30" />

                {/* Envelope Illustrations */}
                <img
                  src="/images/envelope_mandala.png"
                  className="absolute -top-10 -left-10 w-40 h-40 opacity-40 mix-blend-screen"
                  alt=""
                />
                <img
                  src="/images/envelope_mandala.png"
                  className="absolute -bottom-10 -left-10 w-40 h-40 opacity-40 mix-blend-screen -rotate-90"
                  alt=""
                />

                <div className="text-theme-200/40 rotate-90 whitespace-nowrap text-xs tracking-[0.5em] uppercase font-bold relative z-10">
                  RAVINDU & DILMI
                </div>
              </motion.div>

              {/* Right Flap */}
              <motion.div
                className="absolute inset-y-0 right-0 w-1/2 bg-brown-base z-20 shadow-[-5px_0_15px_rgba(0,0,0,0.3)] origin-right flex items-center justify-start pl-4 overflow-hidden"
                whileHover={{ rotateY: 10 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-theme-400/30" />

                {/* Envelope Illustrations */}
                <img
                  src="/images/envelope_mandala.png"
                  className="absolute -top-10 -right-10 w-40 h-40 opacity-40 mix-blend-screen rotate-90"
                  alt=""
                />
                <img
                  src="/images/envelope_mandala.png"
                  className="absolute -bottom-10 -right-10 w-40 h-40 opacity-40 mix-blend-screen rotate-180"
                  alt=""
                />
              </motion.div>

              {/* The Seal Button */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-24 h-24 rounded-full bg-gradient-to-br from-theme-200 via-theme-100 to-theme-300 shadow-2xl border-4 border-[#3d2a25] flex items-center justify-center group-hover:shadow-theme-500/20"
              >
                <div className="text-center">
                  <p className="font-cinzel text-2xl font-bold text-[#3d2a25] leading-none">R&D</p>
                  <div className="h-px w-10 bg-[#3d2a25]/30 mx-auto my-1.5" />
                  <p className="text-[8px] uppercase tracking-[0.3em] font-bold text-[#3d2a25]">Open</p>
                </div>
              </motion.div>

              {/* Card Preview inside (Mandala) */}
              <div className="absolute inset-10 opacity-30 flex items-center justify-center">
                <img src={mandalaImage} alt="" className="w-full h-auto animate-spin-slow" style={{ animationDuration: '20s' }} />
              </div>
            </div>

            <p className="mt-8 text-[11px] uppercase tracking-[0.6em] text-theme-500 font-bold animate-pulse">
              Tap to Reveal
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="card-stage"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
            className="relative z-10 w-full h-full flex flex-col items-center justify-center p-2 sm:p-4"
          >
            {/* The Main Card */}
            <div className="relative w-full max-w-[480px] h-[85vh] bg-brown-base shadow-[0_30px_60px_rgba(0,0,0,0.5)] rounded-2xl border-[6px] md:border-[10px] border-theme-500/80 flex flex-col text-theme-900 overflow-hidden">
              
              {/* Top fixed close button */}
              <button
                onClick={() => setIsOpened(false)}
                className="absolute top-3 right-3 z-50 p-1.5 rounded-full border border-theme-500/20 text-theme-700 hover:text-theme-500 hover:border-theme-500/50 bg-brown-base/80 backdrop-blur-sm transition-all duration-300"
                title="Return to envelope"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Center Background Image (Fixed during scroll) */}
              <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none opacity-20">
                <motion.img
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.4, scale: 1 }}
                  transition={{ delay: 0.5, duration: 1.2 }}
                  src={centerImage}
                  className="w-64 sm:w-80 h-auto select-none"
                  alt=""
                />
              </div>

              {/* Scrollable Container */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-8 scrollbar-thin relative text-center">
                
                {/* Background Textures */}
                <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

                {/* Content Sections */}
                <div className="flex flex-col items-center justify-center space-y-6 relative z-10 w-full">
                  
                  {/* Top Mandala */}
                  <img src={mandalaImage} alt="Mandala" className="w-16 h-16 md:w-20 md:h-20 object-contain mb-2 mx-auto" />

                  {/* Names Section */}
                  <div className="space-y-2">
                    <p className="text-[8px] md:text-[10px] tracking-[0.25em] font-medium text-theme-600 uppercase">Loving son of</p>
                    <p className="text-[10px] md:text-[12px] font-cinzel text-theme-900">Mr. & Mrs. Kuruppu,</p>

                    <h2 className="text-3xl md:text-5xl font-playball text-theme-700 leading-tight" style={{ WebkitTextStroke: '0.5px white' }}>Ravindu</h2>

                    <p className="text-xl md:text-2xl font-playball italic text-theme-500">&</p>

                    <p className="text-[8px] md:text-[10px] tracking-[0.25em] font-medium text-theme-600 uppercase">Loving daughter of</p>
                    <p className="text-[10px] md:text-[12px] font-cinzel text-theme-900">Mr. & Mrs. Ekanayake,</p>

                    <h2 className="text-3xl md:text-5xl font-playball text-theme-700 leading-tight" style={{ WebkitTextStroke: '0.5px white' }}>Dilmi</h2>
                  </div>

                  <div className="w-24 h-px bg-gradient-to-r from-transparent via-theme-500/50 to-transparent mx-auto" />

                  {/* Invitation Text */}
                  <div className="space-y-1.5 max-w-[320px] mx-auto">
                    <p className="text-[9px] md:text-[11px] tracking-widest font-semibold text-theme-600 uppercase">Together with their families</p>
                    <p className="text-[9px] md:text-[10px] italic text-theme-600/90 font-serif leading-relaxed">
                      joyfully invite you to celebrate their wedding
                    </p>
                  </div>

                  <div className="w-24 h-px bg-gradient-to-r from-transparent via-theme-500/50 to-transparent mx-auto" />

                  {/* Date Section */}
                  <div className="space-y-4">
                    <div className="flex flex-col items-center">
                      <p className="text-[9px] md:text-[11px] font-cinzel tracking-[0.2em] font-bold text-theme-600 uppercase">THURSDAY</p>
                      <p className="text-2xl md:text-4xl font-cinzel text-theme-500 leading-none my-1 font-bold">04</p>
                      <p className="text-[9px] md:text-[11px] font-cinzel tracking-[0.2em] font-bold text-theme-600 uppercase">March 2027</p>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-xs md:text-base font-cinzel tracking-wider text-theme-900 uppercase font-bold">Tropical Life Resort & Spa Dambulla</h3>
                    </div>

                    <div className="flex flex-col items-center gap-1">
                      <div className="flex items-center justify-center gap-1.5 text-[8px] md:text-[10px] font-semibold tracking-widest text-theme-700">
                        <Clock className="w-3.5 h-3.5 text-theme-500" />
                        <span>10:00AM - 04:00PM</span>
                      </div>
                      <p className="text-[7px] md:text-[8px] font-bold text-theme-700 tracking-[0.1em] uppercase bg-brown-light/30 px-2 py-0.5 rounded">
                        (PORUWA CEREMONY AT 10:30 AM)
                      </p>
                    </div>
                  </div>

                  {/* Location Connection Link instead of QR */}
                  <div className="pt-2 w-full max-w-[280px] mx-auto">
                    <a
                      href="https://maps.app.goo.gl/DfQCcHx4DSfLnUUg8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg border border-theme-500/40 text-theme-500 hover:bg-theme-500 hover:text-brown-base transition-all duration-300 font-semibold tracking-[0.15em] text-[10px] uppercase shadow-md shadow-theme-500/5 hover:shadow-theme-500/20"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      View Location on Maps
                    </a>
                  </div>

                  <div className="w-full h-px bg-gradient-to-r from-transparent via-theme-500/30 to-transparent my-2 mx-auto" />

                  {/* RSVP Section */}
                  <div className="w-full max-w-[320px] space-y-4 pt-2 mx-auto">
                    <div className="text-center space-y-1">
                      <h4 className="font-cinzel text-xs md:text-sm tracking-widest text-theme-900 font-bold uppercase">
                        Will You Attend?
                      </h4>
                      <p className="text-[8px] md:text-[9px] text-theme-600 italic">
                        Please respond by February 4, 2027
                      </p>
                    </div>

                    <AnimatePresence mode="wait">
                      {!rsvpSubmitted ? (
                        <motion.form
                          key="rsvp-form"
                          onSubmit={handleRsvpSubmit}
                          className="w-full space-y-4 text-left"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <div>
                            <label className="block text-[8px] uppercase tracking-widest text-theme-700 font-bold mb-1">
                              Your Name
                            </label>
                            <input
                              type="text"
                              required
                              value={rsvpName}
                              onChange={(e) => setRsvpName(e.target.value)}
                              placeholder="Please enter your name"
                              className="w-full px-3 py-2 rounded-lg bg-brown-dark/40 border border-theme-500/20 text-theme-900 placeholder-theme-700/30 focus:outline-none focus:border-theme-500 text-xs transition-colors"
                            />
                          </div>

                          <div>
                            <label className="block text-[8px] uppercase tracking-widest text-theme-700 font-bold mb-1">
                              Attendance
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                              <button
                                type="button"
                                onClick={() => setAttendance("attending")}
                                className={`py-2 rounded-lg border text-[10px] tracking-wider font-bold uppercase transition-all duration-300 ${
                                  attendance === "attending"
                                    ? "bg-theme-500 text-brown-base border-theme-500 shadow-md shadow-theme-500/20"
                                    : "bg-transparent border-theme-500/20 text-theme-700 hover:border-theme-500/50"
                                }`}
                              >
                                Will Attend
                              </button>
                              <button
                                type="button"
                                onClick={() => setAttendance("declined")}
                                className={`py-2 rounded-lg border text-[10px] tracking-wider font-bold uppercase transition-all duration-300 ${
                                  attendance === "declined"
                                    ? "bg-theme-500 text-brown-base border-theme-500 shadow-md shadow-theme-500/20"
                                    : "bg-transparent border-theme-500/20 text-theme-700 hover:border-theme-500/50"
                                }`}
                              >
                                Decline
                              </button>
                            </div>
                          </div>

                          {attendance === "attending" && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="space-y-4 overflow-hidden"
                            >
                              <div>
                                <label className="block text-[8px] uppercase tracking-widest text-theme-700 font-bold mb-1">
                                  Number of Guests
                                </label>
                                <select
                                  value={guests}
                                  onChange={(e) => setGuests(Number(e.target.value))}
                                  className="w-full px-3 py-2 rounded-lg bg-brown-dark/40 border border-theme-500/20 text-theme-900 focus:outline-none focus:border-theme-500 text-xs transition-colors"
                                >
                                  {[1, 2, 3, 4, 5].map((n) => (
                                    <option key={n} value={n} className="bg-brown-base text-theme-900">
                                      {n} {n === 1 ? "Guest" : "Guests"}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </motion.div>
                          )}

                          <button
                            type="submit"
                            disabled={submitting || !rsvpName || !attendance}
                            className="w-full py-2.5 mt-2 rounded-lg bg-gradient-to-r from-theme-500 to-theme-600 hover:from-theme-600 hover:to-theme-700 disabled:opacity-40 text-brown-base font-bold text-[10px] tracking-[0.15em] uppercase shadow-lg shadow-theme-500/5 hover:shadow-theme-500/20 active:scale-[0.98] transition-all duration-150 cursor-pointer flex items-center justify-center gap-2"
                          >
                            {submitting ? (
                              <div className="w-3.5 h-3.5 border-2 border-brown-base border-t-transparent rounded-full animate-spin" />
                            ) : (
                              "Confirm RSVP"
                            )}
                          </button>
                        </motion.form>
                      ) : (
                        <motion.div
                          key="rsvp-success"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          className="w-full py-6 px-4 rounded-xl bg-brown-dark/30 border border-theme-500/10 text-center space-y-3"
                        >
                          <div className="w-10 h-10 rounded-full bg-theme-500/10 border border-theme-500/20 flex items-center justify-center mx-auto text-theme-500">
                            <Sparkles className="w-5 h-5 animate-pulse" />
                          </div>
                          <h4 className="font-cinzel text-xs text-theme-900 font-bold uppercase tracking-wider">Thank You!</h4>
                          <p className="text-[9px] md:text-[10px] text-theme-600 max-w-[240px] mx-auto leading-relaxed">
                            Your response has been received. We look forward to celebrating this special day with you!
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* RSVP Regrets only (Phone contacts) */}
                    <div className="text-center pt-3 border-t border-theme-500/10 space-y-1">
                      <p className="text-[8px] tracking-[0.1em] font-bold text-theme-600 uppercase">RSVP (Regrets only)</p>
                      <div className="text-[8px] md:text-[9px] font-semibold text-theme-700 flex justify-center gap-6">
                        <span>Ravindu: 0703577268</span>
                        <span>Dilmi: 0716373630</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom close button */}
                  <button
                    onClick={() => setIsOpened(false)}
                    className="mt-4 text-theme-700 hover:text-theme-500 hover:underline transition-colors text-[8px] uppercase tracking-[0.2em] flex items-center justify-center gap-1 group w-full pt-4 border-t border-theme-500/10 mx-auto"
                  >
                    Return to Cover
                  </button>

                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow linear infinite;
        }
        /* Styling scrollbar in card */
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(212, 175, 55, 0.2);
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(212, 175, 55, 0.4);
        }
      `}} />
    </main>
  );
}
