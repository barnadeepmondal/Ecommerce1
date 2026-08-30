import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="bg-white text-black">

      <Navbar />

      <main>

        {/* ================= HERO ================= */}
        <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Text */}
            <div>

              <h1 className="font-serif text-5xl md:text-7xl leading-[1.05]">
                Timeless Spaces,
                <br />
                Refined Living
              </h1>

              <p className="mt-8 max-w-lg text-gray-600 text-lg leading-relaxed">
                We craft environments that harmonize structure with nature,
                delivering architectural solutions of quiet authority and
                enduring elegance.
              </p>

              <a
                href="#works"
                className="inline-block mt-8 border border-gray-500 px-8 py-4 text-xs font-semibold tracking-widest hover:bg-black hover:text-white transition"
              >
                EXPLORE WORKS
              </a>

            </div>

            {/* Image */}
            <div>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTzCT7f7ZzgtTyXJs_lOsethEDfJtO0TiuMShQKOx0KdkiCsifXjbwIX2EMgRFFkpzpo3AVqbhsAW-4Lvevcv63Cga9HH-FB6QaKZW4ZWAaEiYrZ4lnUKlxaRgwRBjm4VKC4JXXiHucoOIBeM2P-YjLw_KtEvaaAafqXrXzMZMlSGbHwYnHcQPw3x7NMpZMOLo-alfoekhRoh5Ni6yZ6Xli3gOL_MJDKtR0heilchaTPGFIqQ4gpK6"
                alt="Modern architecture"
                className="w-full h-[500px] md:h-[650px] object-cover"
              />
            </div>

          </div>

        </section>


        {/* ================= EXPERTISE ================= */}
        <section className="bg-gray-50 py-24">

          <div className="max-w-7xl mx-auto px-6 md:px-10">

            <h2 className="font-serif text-4xl text-center mb-16">
              Our Expertise
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              <div className="bg-white p-10">
                <div className="text-3xl mb-6">⌂</div>

                <h3 className="font-serif text-2xl mb-4">
                  Residential
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Bespoke sanctuaries designed for private contemplation
                  and modern luxury.
                </p>
              </div>


              <div className="bg-white p-10">
                <div className="text-3xl mb-6">□</div>

                <h3 className="font-serif text-2xl mb-4">
                  Commercial
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Commanding corporate structures that define skylines
                  and corporate identity.
                </p>
              </div>


              <div className="bg-white p-10">
                <div className="text-3xl mb-6">◇</div>

                <h3 className="font-serif text-2xl mb-4">
                  Interior Design
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Curated interior landscapes focused on texture,
                  light, and spatial poetry.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* ================= SELECTED WORKS ================= */}
        <section
          id="works"
          className="max-w-7xl mx-auto px-6 md:px-10 py-24"
        >

          <div className="flex justify-between items-end mb-12">

            <h2 className="font-serif text-4xl">
              Selected Works
            </h2>

            <span className="text-xs tracking-widest border-b border-black pb-1">
              VIEW ALL
            </span>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:h-[750px]">

            {/* Large image */}
            <div className="md:col-span-8 relative overflow-hidden">

              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA4Mz7PYUlWoS2hB4tNfRronMxl9U3bK015ZnY-PSF6XM3Aa0JkhzK9pjc7z2Ms9mddSU-voUcG6LCwjk_wFhlSUzU8gPWn9XLNE95Ymga2IfQk1fzomuHP88NdEPGQE6ElZms5HaCmjYt8n3Qru7ErrJEf17xYA5dlasoSiu6L_TnI5JD85U49Gqa5UoNRMFfvYzkBOqr2VsejuwKyF_3tiLTrKcnmDqmMH6SRj9rpg-rcLxmqAxs"
                alt="The Glass Pavilion"
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />

              <div className="absolute bottom-0 left-0 right-0 p-8 text-white bg-gradient-to-t from-black/70 to-transparent">

                <p className="text-xs tracking-widest mb-2">
                  RESIDENTIAL / 2023
                </p>

                <h3 className="font-serif text-3xl">
                  The Glass Pavilion
                </h3>

              </div>

            </div>


            {/* Right top */}
            <div className="md:col-span-4 relative overflow-hidden">

              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWqyP4SvgE0_Vg285dcFiXtnGYTtve1cA2PXpBwP3SoHnjMWlHnsuCgyB_Xx4N2QywUTTaI_iszM5mukGTOXkAG5KV-bAGcU9PfVvxTnZTtQW00ybMZ_NOsO-Za3mTBRwOSmhuv3XNhlzA9Gw8OBXj5rtXEDGeucPJppXONZzHkd9tGo7ltwhwlVN4Edx4y--np-dI0bFAAq1V1ubV2ZevjRUuCv24TzWbqZZNjbJxe0L7hS4ZtFY2"
                alt="Nexus Tower"
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/70 to-transparent">

                <p className="text-xs tracking-widest">
                  COMMERCIAL / 2022
                </p>

                <h3 className="font-serif text-2xl mt-1">
                  Nexus Tower
                </h3>

              </div>

            </div>


            {/* Right bottom */}
            <div className="md:col-span-4 relative overflow-hidden">

              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMoKiPToV_je79_uxb8FWeV2JIICj_OAgVm6Hk5HtbNOnqVe172NaX0HnuMlGOHPnEggD-G_34Et83pyDWAho5Suy-sSrEf1lnVs9ejhyP-LuZJwHlwtgW5KAS_PDNVBlPjfaBjZl9vTkO8TVGUjyb-UCjTd1-K3l3R7Rs2SIfxwXXyUSzKAOTos_FZddT8WCz7fwWQY6E8n-7lE9b7vMa7blgEtYVlQbGw6RIPjmnqrXn2mjGkqsr"
                alt="Lumina Residence"
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/70 to-transparent">

                <p className="text-xs tracking-widest">
                  INTERIOR / 2024
                </p>

                <h3 className="font-serif text-2xl mt-1">
                  Lumina Residence
                </h3>

              </div>

            </div>

          </div>

        </section>


        {/* ================= TESTIMONIAL ================= */}
        <section className="bg-gray-100 py-28">

          <div className="max-w-4xl mx-auto px-6 text-center">

            <div className="text-5xl mb-8">
              “
            </div>

            <h2 className="font-serif italic text-3xl md:text-4xl leading-relaxed">
              "Aesthetique did not just design a building for us; they shaped
              an experience of light, space, and profound tranquility that
              redefines how we live daily."
            </h2>

            <p className="mt-8 text-xs tracking-widest text-gray-500">
              — ELEANOR VANCE, PRIVATE CLIENT
            </p>

          </div>

        </section>


        {/* ================= CTA ================= */}
        <section className="py-28 border-t border-gray-200">

          <div className="max-w-3xl mx-auto text-center px-6">

            <h2 className="font-serif text-5xl">
              Ready to begin?
            </h2>

            <p className="mt-6 text-gray-600 text-lg">
              Schedule a private consultation to discuss your vision
              with our principal architects.
            </p>

            <a
              href="/inquiry"
              className="inline-block mt-8 bg-black text-white px-10 py-4 text-xs tracking-widest font-semibold hover:bg-gray-800"
            >
              START YOUR PROJECT
            </a>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default Home;