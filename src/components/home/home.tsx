import heroImage from '../../assets/hero.png'; // Adjust the dots based on your folder depth

const Home = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-[#0A4646] to-emerald-600 text-white py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">Welcome to My Portfolio</h1>
        
        {/* Use the imported variable here */}
        <img 
          src={heroImage} 
          alt="Headshot" 
          className="rounded-full mx-auto mb-8 w-32 h-32 md:w-48 md:h-48 object-cover object-top border-4 border-white/20 shadow-xl" 
        />
        
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">I'm a developer passionate about creating amazing web experiences.</p>
        <button className="bg-white text-[#0A4646] px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition">
          Get In Touch
        </button>
      </div>
    </section>
  )
}

export default Home;