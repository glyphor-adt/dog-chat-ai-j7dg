import React from 'react'

function Hero() {
  return (
    <header className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
      <div className="container mx-auto text-center">
        <h1 className="text-6xl font-bold mb-4">Unlock Your Dog's Inner Thoughts with BarkBot</h1>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">The AI-powered chat app that lets you understand what your furry friend is really thinking. Connect on a deeper level and build an unbreakable bond.</p>
        <div className="mt-8 flex justify-center">
          <a href="#signup" className="bg-primary hover:bg-blue-700 px-8 py-4 rounded-xl text-lg shadow-xl transition-all duration-300">Start Chatting Now</a>
          <a href="#learn-more" className="border-2 border-gray-300 hover:border-blue-500 text-white px-6 py-3 rounded-xl ml-4 transition-all duration-300">Learn More</a>
        </div>
        <img src="https://images.unsplash.com/photo-1574158622682-e40e698ddf86?w=800&h=600" alt="Happy dog using BarkBot" className="mt-12 rounded-xl shadow-2xl mx-auto" aria-label="Happy dog using BarkBot"/>
      </div>
    </header>
  )
}

export default Hero
