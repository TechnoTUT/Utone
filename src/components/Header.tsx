export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img className="h-8" src="https://file.notion.so/f/f/67b2bbd3-1f9a-4a21-ba16-08a4e13b627c/8fc3100f-a5be-480d-82ad-74c3dbca486a/Logo_Bblack_2.png?table=block&id=d9095ab3-2079-4025-a31d-8845187fd6f6&spaceId=67b2bbd3-1f9a-4a21-ba16-08a4e13b627c&expirationTimestamp=1735034400000&signature=2-qNNtLq-gWtlNdrnu4d_RUIjI8wWeJkwseyDvaOi-I&downloadName=Logo_Bblack_2.png" alt="The Utopia Tone Logo" />
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