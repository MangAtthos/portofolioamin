const projects = [
  {
    title: 'SIPINTAR LMS',
    description: 'Sistem Informasi Pintar - Learning Management System dengan fitur AI, manajemen kelas, tugas, dan nilai. Dibangun dengan Laravel.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS'],
    color: 'bg-brutal-yellow',
    url: 'https://sipintar.site.je', // Ganti dengan URL hosting kamu
    image: '/images/sipintar.png',
  },
  {
    title: 'TOKO SEMBAKO MAMA ZIKRY',
    description: 'Website toko online lengkap dengan keranjang belanja, payment gateway, dan dashboard admin yang interaktif.',
    tech: ['PHP', 'Bootstrap', 'MySQL', 'JavaScript'],
    color: 'bg-brutal-pink',
    url: 'https://tokomamazikry.gt.tc', // Ganti dengan URL hosting kamu
    image: '/images/toko.png',
  },
  {
    title: 'WADAH BEKISAH',
    description: 'Platform media sosial yang menampung cerita dari berbagai orang dengan fitur sama persis dengan instagram.',
    tech: ['PHP', 'JavaScript', 'MySQL', 'CSS'],
    color: 'bg-brutal-purple',
    url: 'https://wadahbekisah.rf.gd', // Ganti dengan URL hosting kamu
    image: '/images/bekisah.png',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 w-full flex justify-center">
      <div className="max-w-7xl w-full px-6 sm:px-12 lg:px-16">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="neo-tag bg-brutal-orange inline-block mb-4">🚀 Projects</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-family-heading)]">
            Hasil <span className="bg-brutal-blue px-2 border-3 border-brutal-black inline-block rotate-1 shadow-[4px_4px_0px_#1A1A2E]">Karya</span> Saya
          </h2>
          <p className="mt-4 font-[family-name:var(--font-family-mono)] text-sm sm:text-base max-w-xl mx-auto">
            Klik pada setiap project untuk mengunjungi website-nya langsung! 🔗
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`neo-card ${project.color} p-0 overflow-hidden block no-underline text-brutal-black group`}
            >
              {/* Project image/icon area */}
              <div className="h-40 sm:h-48 border-b-3 border-brutal-black flex items-center justify-center bg-white/30 relative overflow-hidden">
                {project.image && (project.image.startsWith('/') || project.image.startsWith('http')) ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <span className="text-6xl sm:text-7xl group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </span>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-brutal-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="neo-btn bg-brutal-yellow px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base">
                    🔗 Kunjungi Site
                  </span>
                </div>
              </div>

              {/* Project info */}
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg sm:text-xl font-bold font-[family-name:var(--font-family-heading)]">
                    {project.title}
                  </h3>
                  <span className="text-lg sm:text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
                </div>
                <p className="font-[family-name:var(--font-family-mono)] text-xs sm:text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="neo-tag bg-white/80 text-[10px] sm:text-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Note */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="neo-card bg-brutal-cream p-4 sm:p-6 inline-block max-w-lg">
            <p className="font-[family-name:var(--font-family-mono)] text-xs sm:text-sm">
              💡 <strong>Catatan:</strong> Semua project sudah di-hosting dan bisa langsung diakses.
              Klik pada card untuk melihat versi live-nya!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
