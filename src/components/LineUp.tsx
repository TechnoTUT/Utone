const DJS = [
  {
    name: "DDlia",
    genre: "Techno / Trance",
    time: "10:00-10:30",
    image: "https://pbs.twimg.com/profile_images/1724095036965715968/sOqXExU-_400x400.jpg"
  },
  {
    name: "hiziki",
    genre: "Techno",
    time: "10:30-11:00",
    image: "https://technotut.net/_next/static/chunks/images/images/logo/Logo_Bblack_2_640.webp"
  },
  {
    name: "komezi",
    genre: "Garage",
    time: "11:00-11:30",
    image: "https://technotut.net/_next/static/chunks/images/images/logo/Logo_Bblack_2_640.webp"
  },
  {
    name: "1000Shin",
    genre: "Vocaloid",
    time: "11:30-12:10",
    image: "https://technotut.net/_next/static/chunks/images/images/logo/Logo_Bblack_2_640.webp"
  },
  {
    name: "motty",
    genre: "Vocaloid",
    time: "11:30-12:10",
    image: "https://technotut.net/_next/static/chunks/images/images/logo/Logo_Bblack_2_640.webp"
  },
  {
    name: "與田レオ",
    genre: "Unknown",
    time: "12:10-12:40",
    image: "https://technotut.net/_next/static/chunks/images/images/logo/Logo_Bblack_2_640.webp"
  },
  {
    name: "きりしゃめ",
    genre: "Hardcore",
    time: "12:40-13:20",
    image: "https://technotut.net/_next/static/chunks/images/images/logo/Logo_Bblack_2_640.webp"
  },
  {
    name: "剛の舞DJ",
    genre: "Hardcore",
    time: "12:40-13:20",
    image: "https://technotut.net/_next/static/chunks/images/images/logo/Logo_Bblack_2_640.webp"
  },
  {
    name: "ククリ",
    genre: "Unknown",
    time: "13:20-13:50",
    image: "https://technotut.net/_next/static/chunks/images/images/logo/Logo_Bblack_2_640.webp"
  },
  {
    name: "くきわかめ",
    genre: "Anime",
    time: "13:50-14:20",
    image: "https://technotut.net/_next/static/chunks/images/images/logo/Logo_Bblack_2_640.webp"
  },
  {
    name: "Smith",
    genre: "Anime + α",
    time: "14:20-15:00",
    image: "https://technotut.net/_next/static/chunks/images/images/logo/Logo_Bblack_2_640.webp"
  },
  {
    name: "くぅ",
    genre: "Anime + α",
    time: "14:20-15:00",
    image: "https://technotut.net/_next/static/chunks/images/images/logo/Logo_Bblack_2_640.webp"
  },
  {
    name: "Ⱥcchi͛",
    genre: "Subculture",
    time: "15:00-15:30",
    image: "https://technotut.net/_next/static/chunks/images/images/logo/Logo_Bblack_2_640.webp"
  },
  {
    name: "空自の撮り",
    genre: "J-POP",
    time: "15:30-16:00",
    image: "https://technotut.net/_next/static/chunks/images/images/logo/Logo_Bblack_2_640.webp"
  },
  {
    name: "ぽんず",
    genre: "Idol",
    time: "16:00-16:40",
    image: "https://technotut.net/_next/static/chunks/images/images/logo/Logo_Bblack_2_640.webp"
  },
  {
    name: "nikko",
    genre: "Idol",
    time: "16:00-16:40",
    image: "https://technotut.net/_next/static/chunks/images/images/logo/Logo_Bblack_2_640.webp"
  },
  {
    name: "ぴっさん",
    genre: "im@s / JPOP",
    time: "16:40-17:10",
    image: "https://technotut.net/_next/static/chunks/images/images/logo/Logo_Bblack_2_640.webp"
  },
  {
    name: "s-knot",
    genre: "Music Game",
    time: "17:10-17:50",
    image: "https://technotut.net/_next/static/chunks/images/images/logo/Logo_Bblack_2_640.webp"
  },
  {
    name: "kz-don",
    genre: "Music Game",
    time: "17:10-17:50",
    image: "https://technotut.net/_next/static/chunks/images/images/logo/Logo_Bblack_2_640.webp"
  },
  {
    name:"ESU",
    genre: "UK Hardcore / Happy Hardcore",
    time: "17:50-18:20",
    image: "https://technotut.net/_next/static/chunks/images/images/logo/Logo_Bblack_2_640.webp"
  },
  {
    name: "10-U",
    genre: "Hardcore",
    time: "18:20-18:50",
    image: "https://technotut.net/_next/static/chunks/images/images/logo/Logo_Bblack_2_640.webp"
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