export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t-3 border-brutal-black bg-brutal-black text-white py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brutal-yellow border-2 border-white flex items-center justify-center font-mono font-bold text-brutal-black text-sm">
              P
            </div>
            <span className="font-bold text-sm sm:text-base tracking-tight">PORTFOLIO</span>
          </div>

          <p className="font-[family-name:var(--font-family-mono)] text-xs sm:text-sm text-center">
            © {year} — Built with 💛 & Neobrutalism
          </p>

          <div className="flex gap-2">
            {['#home', '#about', '#skills', '#projects', '#contact'].map((link) => (
              <a
                key={link}
                href={link}
                className="w-8 h-8 bg-brutal-yellow/20 border-2 border-white/30 flex items-center justify-center
                         text-xs font-bold hover:bg-brutal-yellow hover:text-brutal-black transition-all
                         no-underline text-white"
              >
                {link.replace('#', '').charAt(0).toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
