import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Philosophy() {
  return (
    <div className="bg-white text-black">

      <Navbar />

      <main>

        {/* ================= HERO ================= */}
        <section className="bg-gray-300 min-h-[600px] flex items-center justify-center text-center px-6">

          <div className="max-w-3xl">

            <h1 className="font-serif text-5xl md:text-6xl">
              The quiet eloquence of space.
            </h1>

            <p className="mt-6 text-gray-600 max-w-xl mx-auto leading-relaxed">
              We believe architecture is the art of subtraction.
              By stripping away the non-essential, we reveal the profound
              beauty of structure, light, and material truth.
            </p>

            <div className="mt-32 text-2xl">
              ↓
            </div>

          </div>

        </section>


        {/* ================= MATERIAL HONESTY ================= */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-28">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            <div className="md:pl-10">

              <h2 className="font-serif text-3xl">
                Material Honesty
              </h2>

              <p className="mt-5 text-gray-600 leading-relaxed max-w-md">
                Our materials are not chosen; they are discovered in the
                context of the site. We celebrate the raw, the unadorned,
                and the natural patina of time. Wood, concrete, stone, and
                steel—each element speaks its own language, contributing
                to a harmonious whole that is deeply rooted in its environment.
              </p>

            </div>

            <div>
              <img
                src="/images/screen.jpg"
                alt="Material architecture"
                className="w-full h-[420px] object-cover"
              />
            </div>

          </div>

        </section>


        {/* ================= TIMELESSNESS ================= */}
        <section className="bg-gray-50 py-28">

          <div className="max-w-7xl mx-auto px-6 md:px-10">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

              <div className="order-2 md:order-1">

                <img
                  src="/images/timeless.png"
                  alt="Timeless architecture"
                  className="w-full h-[420px] object-cover"
                />

              </div>

              <div className="order-1 md:order-2">

                <h2 className="font-serif text-3xl">
                  Timelessness
                </h2>

                <p className="mt-5 text-gray-600 leading-relaxed max-w-md">
                  We design for permanence. By avoiding fleeting trends
                  and focusing on enduring principles of proportion, scale,
                  and light, we create spaces that transcend eras.
                  Our architecture is meant to age gracefully, becoming
                  more resonant with each passing generation.
                </p>

                <a
                  href="/"
                  className="inline-block mt-8 text-xs tracking-widest border-b border-black pb-1"
                >
                  VIEW PORTFOLIO →
                </a>

              </div>

            </div>

          </div>

        </section>


        {/* ================= MANIFESTO ================= */}
        <section className="bg-black text-white py-32">

          <div className="max-w-4xl mx-auto px-6 text-center">

            <div className="text-gray-600 text-5xl font-serif mb-10">
              99
            </div>

            <h2 className="font-serif text-3xl md:text-4xl leading-relaxed">
              "Space is the breath of art. We do not build walls;
              we shape the void between them."
            </h2>

            <p className="mt-8 text-xs tracking-widest text-gray-400">
              THE AESTHETIQUE MANIFESTO
            </p>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default Philosophy;