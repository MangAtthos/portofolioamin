export default function Marquee() {
  const items = [
    '✦ HTML', '✦ CSS', '✦ JavaScript', '✦ PHP', '✦ Python',
    '✦ React JS', '✦ Laravel', '✦ Bootstrap', '✦ Tailwind CSS', '✦ MySQL',
    '✦ HTML', '✦ CSS', '✦ JavaScript', '✦ PHP', '✦ Python',
    '✦ React JS', '✦ Laravel', '✦ Bootstrap', '✦ Tailwind CSS', '✦ MySQL',
  ]

  return (
    <div className="border-y-3 border-brutal-black bg-brutal-yellow py-3 sm:py-4 overflow-hidden">
      <div className="flex marquee-track whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={i}
            className="text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-wider mx-4 sm:mx-6 md:mx-8 font-[family-name:var(--font-family-mono)]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
