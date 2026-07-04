export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 relative w-full flex justify-center">
      <div className="max-w-7xl w-full px-6 sm:px-12 lg:px-16">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="neo-tag bg-brutal-blue inline-block mb-4">📖 Tentang Saya</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-family-heading)]">
            Siapa <span className="bg-brutal-pink text-white px-2 border-3 border-brutal-black inline-block rotate-1 shadow-[4px_4px_0px_#1A1A2E]">Saya?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* About text */}
          <div className="neo-card bg-white p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 font-[family-name:var(--font-family-heading)]">
              💡 Web Developer & Tech Enthusiast
            </h3>
            <div className="space-y-4 font-[family-name:var(--font-family-mono)] text-sm sm:text-base leading-relaxed">
              <p>
                Halo! Saya adalah seorang <span className="bg-brutal-yellow px-1 border-2 border-brutal-black font-bold">Web Developer</span> yang 
                passionate dalam membangun website yang fungsional dan menarik secara visual.
              </p>
              <p>
                Saya memiliki pengalaman dalam berbagai teknologi web, mulai dari 
                <span className="bg-brutal-blue px-1 border-2 border-brutal-black font-bold"> frontend</span> hingga 
                <span className="bg-brutal-green px-1 border-2 border-brutal-black font-bold"> backend</span>, 
                dan selalu antusias untuk mempelajari hal-hal baru dalam dunia teknologi.
              </p>
              <p>
                Saya percaya bahwa website yang baik bukan hanya soal tampilan, 
                tapi juga tentang <span className="bg-brutal-orange px-1 border-2 border-brutal-black font-bold">pengalaman pengguna</span> yang 
                seamless dan performa yang optimal.
              </p>
            </div>
          </div>

          {/* Info cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              { icon: '🌐', title: 'Frontend', desc: 'HTML, CSS, JS, React', color: 'bg-brutal-yellow' },
              { icon: '⚙️', title: 'Backend', desc: 'PHP, Python, Laravel', color: 'bg-brutal-pink' },
              { icon: '🗄️', title: 'Database', desc: 'MySQL', color: 'bg-brutal-blue' },
              { icon: '🎨', title: 'UI/CSS', desc: 'Bootstrap, Tailwind', color: 'bg-brutal-green' },
            ].map((card) => (
              <div key={card.title} className={`neo-card ${card.color} p-4 sm:p-6`}>
                <div className="text-3xl sm:text-4xl mb-3">{card.icon}</div>
                <h4 className="font-bold text-base sm:text-lg mb-1 font-[family-name:var(--font-family-heading)]">{card.title}</h4>
                <p className="font-[family-name:var(--font-family-mono)] text-xs sm:text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
