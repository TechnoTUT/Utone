export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm z-50">
      <div className="w-full overflow-x-hidden px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img className="h-8" src="https://technotut.net/_next/static/chunks/images/images/logo/Logo_Bblack_2_640.webp" alt="The Utopia Tone Logo" />
          <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            The Utopia Tone
          </span>
        </div>
        <nav>
          <ul className="flex gap-6">
            <li className="hidden sm:block"><a href="#about" className="text-white hover:text-purple-400 transition">About</a></li>
            <li className="hidden sm:block"><a href="#lineup" className="text-white hover:text-purple-400 transition">Line Up</a></li>
            <li><a href="#access" className="text-white hover:text-purple-400 transition">Access</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
