export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-28 pb-12 relative overflow-hidden w-full">
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-brutal-yellow border-3 border-brutal-black rotate-12 opacity-60 hidden lg:block" />
      <div className="absolute bottom-40 left-10 w-16 h-16 bg-brutal-pink border-3 border-brutal-black -rotate-12 opacity-60 hidden lg:block" />
      <div className="absolute top-40 left-1/4 w-12 h-12 bg-brutal-blue border-3 border-brutal-black rotate-45 opacity-40 hidden lg:block animate-float" />
      <div className="absolute bottom-20 right-1/4 w-14 h-14 bg-brutal-green border-3 border-brutal-black -rotate-6 opacity-50 hidden lg:block animate-float" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl w-full mx-auto px-6 sm:px-12 lg:px-16 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="neo-tag bg-brutal-lime inline-block mb-4 sm:mb-6">
              👋 Halo, Saya
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 font-[family-name:var(--font-family-heading)]">
              Web
              <span className="bg-brutal-yellow px-2 border-3 border-brutal-black inline-block -rotate-1 mx-1 shadow-[4px_4px_0px_#1A1A2E]">
                Developer
              </span>
              <br />
              <span className="text-brutal-pink">&</span> Creator
            </h1>

            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 font-[family-name:var(--font-family-mono)] leading-relaxed">
              Membangun website yang <span className="bg-brutal-blue px-1 border-2 border-brutal-black">fungsional</span>,
              {' '}<span className="bg-brutal-pink px-1 border-2 border-brutal-black text-white">kreatif</span>,
              dan <span className="bg-brutal-green px-1 border-2 border-brutal-black">modern</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a href="#projects" className="neo-btn bg-brutal-yellow px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg no-underline text-brutal-black">
                🚀 Lihat Karya
              </a>
              <a href="#contact" className="neo-btn bg-brutal-pink text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg no-underline">
                📬 Hubungi Saya
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-4 sm:gap-6 mt-8 sm:mt-12 justify-center lg:justify-start">
              {[
                { num: '5+', label: 'Projects' },
                { num: '4+', label: 'Frameworks' },
                { num: '5+', label: 'Languages' },
              ].map((stat) => (
                <div key={stat.label} className="neo-card bg-white p-3 sm:p-4 text-center">
                  <div className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-family-mono)]">{stat.num}</div>
                  <div className="text-xs sm:text-sm font-mono uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile photo */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-3 sm:-inset-4 bg-brutal-yellow border-3 border-brutal-black rotate-3 shadow-[6px_6px_0px_#1A1A2E]" />
              <div className="absolute -inset-3 sm:-inset-4 bg-brutal-pink border-3 border-brutal-black -rotate-3 shadow-[6px_6px_0px_#1A1A2E] opacity-50" />

              <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 border-4 border-brutal-black shadow-[8px_8px_0px_#1A1A2E] overflow-hidden bg-brutal-yellow">
                <img
                  src="/images/pp.png"
                  alt="Profile Photo"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full bg-brutal-yellow flex items-center justify-center">
                        <span class="text-6xl sm:text-7xl md:text-8xl">👨‍💻</span>
                      </div>
                    `
                  }}
                />
              </div>

              {/* Floating badges around photo */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 neo-tag bg-brutal-blue rotate-12 animate-float text-xs sm:text-sm">
                React
              </div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 neo-tag bg-brutal-orange -rotate-6 animate-float text-xs sm:text-sm" style={{ animationDelay: '0.5s' }}>
                Laravel
              </div>
              <div className="absolute top-1/2 -right-4 sm:-right-8 neo-tag bg-brutal-purple rotate-6 animate-float text-xs sm:text-sm" style={{ animationDelay: '1s' }}>
                MySQL
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
