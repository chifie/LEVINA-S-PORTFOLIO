import heroImage from '../../assets/hero.png'; // Adjust the dots based on your folder depth

const Home = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-green-500 to-pink-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        
        {/* Use the imported variable here */}
        <img 
          src={heroImage} 
          alt="Headshot" 
          className="rounded-full mx-auto mb-8 w-48 h-48 object-cover object-top" 
        />
        
        <p className="text-xl mb-8">I'm a developer passionate about creating amazing web experiences.</p>
        <button className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Get In Touch
        </button>
      </div>
    </section>
  )
}

export default Home;