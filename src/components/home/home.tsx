const Home = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-[#0A4646] to-emerald-600 text-white py-16 md:py-24"
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
          Hi, I'm Levina
        </h1>

        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">
           Software Developer passionate about building modern, responsive,
          and user-friendly web applications using React, JavaScript, PHP, and
          modern web technologies.
        </p>

        <button className="bg-white text-[#0A4646] px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition">
          Get In Touch
        </button>
      </div>
    </section>
  );
};

export default Home;