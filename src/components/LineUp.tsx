import React from 'react';

const DJS = [
  {
    name: "T_TEST__",
    genre: "Techno",
    time: "10:00-10:30",
    image: "https://pbs.twimg.com/profile_images/1786438722772418563/GdVPILAx_400x400.jpg"
  },
  {
    name: "DDlia",
    genre: "Techno",
    time: "10:30-11:00",
    image: "https://pbs.twimg.com/profile_images/1724095036965715968/sOqXExU-_400x400.jpg"
  }
];

export function LineUp() {
  return (
    <section id="lineup" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Line Up
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DJS.map((dj) => (
            <div key={dj.name} className="group relative overflow-hidden rounded-lg">
              <img 
                src={dj.image} 
                alt={dj.name}
                className="w-full h-96 object-cover transition group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white">{dj.name}</h3>
                <p className="text-purple-400">{dj.genre}</p>
                <p className="text-gray-400">{dj.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}