export function Hero() {
  return (
    <section className="relative h-screen flex items-center " style={{ top: '50px' }}>
      <div 
      className="absolute inset-0 bg-no-repeat bg-right bg-contain hidden sm:block"
      style={{
        backgroundImage: 'url("https://file.notion.so/f/f/67b2bbd3-1f9a-4a21-ba16-08a4e13b627c/79727817-feff-49e7-9942-6fd975b88736/1.gif?table=block&id=8450405e-67cf-460c-a08c-94f159b80390&spaceId=67b2bbd3-1f9a-4a21-ba16-08a4e13b627c&expirationTimestamp=1735027200000&signature=2tsJojkRSPNCmA5YzjpYoe9QqvXkoUW6cUeH6kilrOk&downloadName=1.gif")',
        backgroundSize: '50%', // Reduce the image size
      }}
      >
      </div>
      
      <div className="relative text-white space-y-1 px-6">
      <h1 className="text-6xl md:text-8xl font-bold">
        <span className="block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">The Utopia Tone</span>
        <span className="block">
        Vol.2
        </span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-300">2025.02.15 SAT 10:00-20:00</p>
      <p className="text-lg md:text-xl text-gray-400">@ Toyohashi University of Technology, TOYOHASHI, AICHI</p>
      <p className="text-lg md:text-xl text-gray-400">DOOR FREE / 無料・予約不要</p>
      <a href="#access">
        <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition shadow-lg">
          Check Access
        </button>
      </a>
      </div>
    </section>
  );
}