import { useState } from "react";
import { Link } from "react-router-dom";
function Inquiry() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    typology: "",
    message: "",
  });

  const [selectedDay, setSelectedDay] = useState("TUE");
  const [selectedTime, setSelectedTime] = useState("02:00 PM");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Your consultation request has been submitted.");

    console.log({
      ...formData,
      day: selectedDay,
      time: selectedTime,
    });
  };

  return (
    <div className="bg-white text-black">

      <main>

        {/* ================= INTRO ================= */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            <div>

              <h1 className="font-serif text-5xl">
                Dialogue & Vision
              </h1>

              <p className="mt-8 text-gray-600 text-lg leading-relaxed max-w-lg">
                Architecture begins with a conversation. We believe that
                a deep understanding of your intent is the foundation of
                any enduring spatial experience. Let us discuss the
                parameters of your ambition.
              </p>

            </div>

            <Link
              to="/projects/lumina-residence"
              className="block"
              aria-label="View Lumina Residence project"
            >
              <img
                src="/images/architecture.png"
                alt="Architecture studio"
                className="w-full h-[500px] object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </Link>

          </div>

        </section>


        {/* ================= INQUIRY FORM ================= */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 border-t border-gray-200">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

            {/* Left */}
            <div>

              <h2 className="font-serif text-2xl">
                Inquiry
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Submit your details to initiate a preliminary discussion
                regarding your architectural needs.
              </p>

            </div>


            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="md:col-span-2 space-y-8"
            >

              {/* Name */}
              <div>

                <label className="block text-xs tracking-widest mb-3">
                  FULL NAME
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  required
                  className="w-full border-b border-gray-300 py-3 outline-none focus:border-black"
                />

              </div>


              {/* Email */}
              <div>

                <label className="block text-xs tracking-widest mb-3">
                  EMAIL ADDRESS
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  required
                  className="w-full border-b border-gray-300 py-3 outline-none focus:border-black"
                />

              </div>


              {/* Typology */}
              <div>

                <label className="block text-xs tracking-widest mb-3">
                  PROJECT TYPOLOGY
                </label>

                <select
                  name="typology"
                  value={formData.typology}
                  onChange={handleChange}
                  required
                  className="w-full border-b border-gray-300 py-3 outline-none bg-white"
                >
                  <option value="">
                    Select Typology
                  </option>

                  <option value="Residential">
                    Residential
                  </option>

                  <option value="Commercial">
                    Commercial
                  </option>

                  <option value="Interior Design">
                    Interior Design
                  </option>

                </select>

              </div>


              {/* Message */}
              <div>

                <label className="block text-xs tracking-widest mb-3">
                  BRIEF MESSAGE
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Outline the scope and location of your project..."
                  rows="4"
                  required
                  className="w-full border-b border-gray-300 py-3 outline-none focus:border-black resize-none"
                />

              </div>


              <button
                type="submit"
                className="bg-black text-white px-8 py-4 text-xs font-semibold tracking-widest hover:bg-gray-800 transition"
              >
                SUBMIT REQUEST
              </button>

            </form>

          </div>

        </section>


        {/* ================= SCHEDULE ================= */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 border-t border-gray-200">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

            {/* Schedule */}
            <div>

              <h2 className="font-serif text-2xl">
                Schedule an Initial Conversation
              </h2>

              <p className="mt-5 text-gray-600">
                Select an available window for a brief introductory
                call with our lead architects.
              </p>


              {/* Days */}
              <div className="grid grid-cols-3 gap-2 mt-8">

                {["MON", "TUE", "WED"].map((day, index) => (

                  <button
                    key={day}
                    onClick={() => setSelectedDay(day)}
                    className={`border p-5 text-center transition ${
                      selectedDay === day
                        ? "bg-black text-white"
                        : "bg-white text-black"
                    }`}
                  >

                    <div className="text-xs tracking-widest">
                      {day}
                    </div>

                    <div className="mt-2 font-serif text-xl">
                      {12 + index}
                    </div>

                  </button>

                ))}

              </div>


              {/* Times */}
              <div className="flex flex-wrap gap-2 mt-4">

                {["09:00 AM", "11:30 AM", "02:00 PM"].map((time) => (

                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`border px-5 py-3 text-sm ${
                      selectedTime === time
                        ? "bg-black text-white"
                        : "bg-white"
                    }`}
                  >
                    {time}
                  </button>

                ))}

              </div>

            </div>


            {/* Studio */}
            <div className="border-l border-gray-200 md:pl-12">

              <h2 className="font-serif text-2xl">
                Studio Presence
              </h2>

              <p className="mt-6 text-gray-700">
                Global Headquarters
              </p>

              <p className="mt-2 text-gray-600 leading-relaxed">
                124 Minimalist Ave, Floor 7
                <br />
                Design District, Metropolis
              </p>


              <p className="mt-8 text-gray-700">
                Digital Engagement
              </p>

              <p className="mt-2 text-gray-600 leading-relaxed">
                Virtual consultations available globally via secure
                high-definition video conferencing.
              </p>


              <a
                href="#"
                className="inline-block mt-8 border-b border-black pb-1 text-sm"
              >
                View Map
              </a>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Inquiry;
