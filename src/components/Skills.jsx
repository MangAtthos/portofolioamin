const skills = {
  languages: [
    { name: 'HTML', level: 90, color: 'bg-brutal-orange' },
    { name: 'CSS', level: 85, color: 'bg-brutal-blue' },
    { name: 'JavaScript', level: 80, color: 'bg-brutal-yellow' },
    { name: 'PHP', level: 75, color: 'bg-brutal-purple' },
    { name: 'Python', level: 70, color: 'bg-brutal-green' },
  ],
  frameworks: [
    { name: 'Bootstrap', icon: '🅱️', color: 'bg-brutal-purple' },
    { name: 'Tailwind CSS', icon: '🌊', color: 'bg-brutal-blue' },
    { name: 'React JS', icon: '⚛️', color: 'bg-brutal-cyan' },
    { name: 'Laravel', icon: '🔺', color: 'bg-brutal-red' },
  ],
  tools: [
    { name: 'MySQL', icon: '🗄️', color: 'bg-brutal-orange' },
    { name: 'Git', icon: '📦', color: 'bg-brutal-pink' },
    { name: 'VS Code', icon: '💻', color: 'bg-brutal-blue' },
  ],
}

function SkillBar({ name, level, color }) {
  return (
    <div className="mb-4 sm:mb-5">
      <div className="flex justify-between mb-2">
        <span className="font-bold font-[family-name:var(--font-family-mono)] text-sm sm:text-base">{name}</span>
        <span className="font-[family-name:var(--font-family-mono)] text-sm neo-tag bg-brutal-cream">{level}%</span>
      </div>
      <div className="w-full h-5 sm:h-6 border-3 border-brutal-black bg-white">
        <div
          className={`h-full ${color} transition-all duration-1000 ease-out`}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 md:py-24 bg-brutal-cream w-full flex justify-center">
      <div className="max-w-7xl w-full px-6 sm:px-12 lg:px-16">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="neo-tag bg-brutal-green inline-block mb-4">🛠️ Skills</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-family-heading)]">
            Tech <span className="bg-brutal-yellow px-2 border-3 border-brutal-black inline-block -rotate-1 shadow-[4px_4px_0px_#1A1A2E]">Stack</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Languages */}
          <div className="neo-card bg-white p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 font-[family-name:var(--font-family-heading)] flex items-center gap-2">
              <span className="bg-brutal-yellow px-2 py-1 border-2 border-brutal-black text-base sm:text-lg">{'</>'}</span>
              Languages
            </h3>
            {skills.languages.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>

          {/* Frameworks & Tools */}
          <div className="space-y-6 sm:space-y-8">
            {/* Frameworks */}
            <div className="neo-card bg-white p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 font-[family-name:var(--font-family-heading)] flex items-center gap-2">
                <span className="bg-brutal-pink px-2 py-1 border-2 border-brutal-black text-white text-base sm:text-lg">⚡</span>
                Frameworks
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {skills.frameworks.map((fw) => (
                  <div key={fw.name} className={`neo-card ${fw.color} p-3 sm:p-4 text-center`}>
                    <div className="text-2xl sm:text-3xl mb-2">{fw.icon}</div>
                    <div className="font-bold font-[family-name:var(--font-family-mono)] text-xs sm:text-sm">{fw.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="neo-card bg-white p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 font-[family-name:var(--font-family-heading)] flex items-center gap-2">
                <span className="bg-brutal-blue px-2 py-1 border-2 border-brutal-black text-base sm:text-lg">🔧</span>
                Tools
              </h3>
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {skills.tools.map((tool) => (
                  <div key={tool.name} className={`neo-card ${tool.color} p-3 sm:p-4 text-center`}>
                    <div className="text-2xl sm:text-3xl mb-2">{tool.icon}</div>
                    <div className="font-bold font-[family-name:var(--font-family-mono)] text-xs sm:text-sm">{tool.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
