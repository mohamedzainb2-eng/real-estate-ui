export default function Navbar({ onSearch }) {
  return (
    <nav className="w-full bg-white/70 dark:bg-emerald-900/40 backdrop-blur-md border border-emerald-200/20 dark:border-emerald-700/30 py-3 px-6 flex flex-col md:flex-row md:items-center md:justify-between mt-4 rounded-xl gap-3 shadow-md">
      {/* Logo */}
      <h2 className="text-2xl font-bold text-emerald-700 dark:text-emerald-200 drop-shadow-sm text-center md:text-left">
        🏡 EstateFinder
      </h2>

      {/* Search Bar */}
      <div className="flex gap-3 items-center w-full md:w-1/3">
        <input
          type="text"
          placeholder="ابحث عن عقار..."
          onChange={(e) => onSearch(e.target.value)}
          className="flex-1 border border-emerald-300/50 bg-white/80 dark:bg-emerald-950/40 text-gray-700 dark:text-emerald-50 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-400 placeholder-gray-400 dark:placeholder-emerald-200/70"
        />
      </div>

      {/* Menu Links */}
      <ul className="hidden md:flex gap-6 text-lg font-medium text-emerald-700 dark:text-emerald-100">
        <li className="hover:text-emerald-400 cursor-pointer transition">الرئيسية</li>
        <li className="hover:text-emerald-400 cursor-pointer transition">العقارات</li>
        <li className="hover:text-emerald-400 cursor-pointer transition">من نحن</li>
        <li className="hover:text-emerald-400 cursor-pointer transition">تواصل معنا</li>
      </ul>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => document.documentElement.classList.toggle("dark")}
        className="mt-2 md:mt-0 px-4 py-2 bg-emerald-600 dark:bg-emerald-300 text-white dark:text-emerald-950 rounded-lg hover:opacity-90 transition"
      >
        🌓 تبديل النمط
      </button>
    </nav>
  );
}
