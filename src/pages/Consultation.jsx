import { useState } from "react";

function Consultation() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <main className="max-w-3xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <p className="text-xs tracking-[0.2em] text-gray-500">AESTHETIQUE</p>
        <h1 className="mt-5 font-serif text-5xl md:text-6xl">Book a consultation</h1>
        <p className="mt-6 max-w-xl text-gray-600 text-lg leading-relaxed">
          Tell us about your project and we will arrange a private consultation.
        </p>

        {submitted ? (
          <div className="mt-12 border border-gray-200 p-8">
            <h2 className="font-serif text-3xl">Thank you.</h2>
            <p className="mt-3 text-gray-600">Your consultation request has been received.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-12 grid gap-6">
            <label className="grid gap-2 text-sm">
              Name
              <input required name="name" className="border border-gray-300 px-4 py-3" />
            </label>
            <label className="grid gap-2 text-sm">
              Email
              <input required type="email" name="email" className="border border-gray-300 px-4 py-3" />
            </label>
            <label className="grid gap-2 text-sm">
              Project details
              <textarea required name="details" rows="5" className="border border-gray-300 px-4 py-3" />
            </label>
            <button type="submit" className="w-fit bg-black px-8 py-4 text-xs font-semibold tracking-widest text-white hover:bg-gray-800">
              REQUEST CONSULTATION
            </button>
          </form>
        )}
      </main>
    </div>
  );
}

export default Consultation;
