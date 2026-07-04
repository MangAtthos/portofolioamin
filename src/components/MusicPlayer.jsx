import { useState, useRef, useEffect } from 'react'

// ===== DAFTAR LAGU =====
// Ganti path lagu di bawah ini dengan file MP3 kamu!
// Taruh file MP3 di folder public/music/
const playlist = [
  {
    id: 1,
    title: 'bye [Altare Remix]',
    artist: 'Ariana Grande',
    src: '/music/song1.mp3',
    color: 'bg-brutal-yellow',
  },
  {
    id: 2,
    title: 'SWIM',
    artist: 'Chase Atlantic',
    src: '/music/song2.mp3',
    color: 'bg-brutal-pink',
  },
  {
    id: 3,
    title: 'Confident',
    artist: 'Justin Bieber ft. Chance The Rapper',
    src: '/music/song3.mp3',
    color: 'bg-brutal-blue',
  },
  {
    id: 4,
    title: 'Love Me',
    artist: 'Lil Wayne ft. Drake, Future',
    src: '/music/song4.mp3',
    color: 'bg-brutal-green',
  },
  {
    id: 5,
    title: 'Bad (Remix)',
    artist: 'Wale ft. Rihanna',
    src: '/music/song5.mp3',
    color: 'bg-brutal-purple',
  },
]

export default function MusicPlayer() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentSong, setCurrentSong] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.7)
  const audioRef = useRef(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration)
    const handleEnded = () => {
      // Auto-play next song
      if (currentSong !== null) {
        const nextIndex = (currentSong + 1) % playlist.length
        playSong(nextIndex)
      }
    }

    audio.addEventListener('timeupdate', updateTime)
    audio.addEventListener('loadedmetadata', updateDuration)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('timeupdate', updateTime)
      audio.removeEventListener('loadedmetadata', updateDuration)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [currentSong])

  const playSong = (index) => {
    const audio = audioRef.current
    if (currentSong === index && isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else if (currentSong === index && !isPlaying) {
      audio.play()
      setIsPlaying(true)
    } else {
      setCurrentSong(index)
      audio.src = playlist[index].src
      audio.volume = volume
      audio.play().catch(() => {
        // Browser may block autoplay
        setIsPlaying(false)
      })
      setIsPlaying(true)
    }
  }

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio || currentSong === null) return
    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const prevSong = () => {
    if (currentSong === null) return
    const prev = (currentSong - 1 + playlist.length) % playlist.length
    playSong(prev)
  }

  const nextSong = () => {
    if (currentSong === null) return
    const next = (currentSong + 1) % playlist.length
    playSong(next)
  }

  const handleSeek = (e) => {
    const audio = audioRef.current
    if (!audio) return
    audio.currentTime = parseFloat(e.target.value)
  }

  const handleVolume = (e) => {
    const vol = parseFloat(e.target.value)
    setVolume(vol)
    if (audioRef.current) audioRef.current.volume = vol
  }

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00'
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60).toString().padStart(2, '0')
    return `${minutes}:${seconds}`
  }

  const activeSong = currentSong !== null ? playlist[currentSong] : null

  return (
    <>
      <audio ref={audioRef} />

      {/* Floating toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 neo-btn 
                   ${isPlaying ? 'bg-brutal-pink' : 'bg-brutal-yellow'} 
                   w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-2xl sm:text-3xl
                   rounded-none`}
        aria-label="Toggle music player"
      >
        {isPlaying ? (
          <div className="flex items-end gap-[3px] h-6 sm:h-7">
            <div className="w-[3px] bg-brutal-black wave-bar-1" />
            <div className="w-[3px] bg-brutal-black wave-bar-2" />
            <div className="w-[3px] bg-brutal-black wave-bar-3" />
            <div className="w-[3px] bg-brutal-black wave-bar-4" />
          </div>
        ) : (
          '🎵'
        )}
      </button>

      {/* Player panel */}
      <div className={`fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-50 transition-all duration-300 
                      ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'}`}>
        <div className="neo-card bg-brutal-bg w-[320px] sm:w-[360px] overflow-hidden">
          {/* Header */}
          <div className="bg-brutal-yellow border-b-3 border-brutal-black p-3 sm:p-4 flex items-center justify-between">
            <h3 className="font-bold text-sm sm:text-base font-[family-name:var(--font-family-heading)] flex items-center gap-2">
              <span className="text-lg">🎶</span> Music Player
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 sm:w-8 sm:h-8 bg-brutal-red border-2 border-brutal-black flex items-center justify-center
                       text-white font-bold text-sm hover:scale-110 transition-transform"
            >
              ✕
            </button>
          </div>

          {/* Now playing */}
          {activeSong && (
            <div className={`${activeSong.color} border-b-3 border-brutal-black p-3 sm:p-4`}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white border-3 border-brutal-black flex items-center justify-center text-2xl sm:text-3xl shadow-[3px_3px_0px_#1A1A2E]">
                  {isPlaying ? '🔊' : '🔇'}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-sm sm:text-base truncate font-[family-name:var(--font-family-heading)]">
                    {activeSong.title}
                  </div>
                  <div className="text-xs sm:text-sm font-[family-name:var(--font-family-mono)] opacity-80 truncate">
                    {activeSong.artist}
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-3">
                <input
                  type="range"
                  min="0"
                  max={duration || 0}
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full h-2"
                />
                <div className="flex justify-between mt-1">
                  <span className="text-[10px] sm:text-xs font-[family-name:var(--font-family-mono)]">{formatTime(currentTime)}</span>
                  <span className="text-[10px] sm:text-xs font-[family-name:var(--font-family-mono)]">{formatTime(duration)}</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-2 sm:gap-3 mt-2">
                <button onClick={prevSong} className="neo-btn bg-white w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-base sm:text-lg">
                  ⏮
                </button>
                <button onClick={togglePlay} className="neo-btn bg-brutal-black text-white w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center text-lg sm:text-xl">
                  {isPlaying ? '⏸' : '▶'}
                </button>
                <button onClick={nextSong} className="neo-btn bg-white w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-base sm:text-lg">
                  ⏭
                </button>
              </div>

              {/* Volume */}
              <div className="flex items-center gap-2 mt-3">
                <span className="text-sm">🔈</span>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolume}
                  className="flex-1 h-2"
                />
                <span className="text-sm">🔊</span>
              </div>
            </div>
          )}

          {/* Playlist */}
          <div className="max-h-48 sm:max-h-56 overflow-y-auto">
            <div className="p-2 sm:p-3 space-y-1.5 sm:space-y-2">
              {playlist.map((song, index) => (
                <button
                  key={song.id}
                  onClick={() => playSong(index)}
                  className={`w-full text-left p-2.5 sm:p-3 border-2 border-brutal-black transition-all flex items-center gap-3
                            ${currentSong === index
                      ? `${song.color} shadow-[3px_3px_0px_#1A1A2E]`
                      : 'bg-white hover:bg-brutal-cream shadow-[2px_2px_0px_#1A1A2E] hover:shadow-[3px_3px_0px_#1A1A2E]'
                    }`}
                >
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 ${song.color} border-2 border-brutal-black flex items-center justify-center font-bold text-xs sm:text-sm font-[family-name:var(--font-family-mono)]`}>
                    {currentSong === index && isPlaying ? '♫' : index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-xs sm:text-sm truncate font-[family-name:var(--font-family-heading)]">
                      {song.title}
                    </div>
                    <div className="text-[10px] sm:text-xs font-[family-name:var(--font-family-mono)] opacity-60 truncate">
                      {song.artist}
                    </div>
                  </div>
                  {currentSong === index && isPlaying && (
                    <div className="flex items-end gap-[2px] h-4">
                      <div className="w-[2px] bg-brutal-black wave-bar-1" />
                      <div className="w-[2px] bg-brutal-black wave-bar-2" />
                      <div className="w-[2px] bg-brutal-black wave-bar-3" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="border-t-3 border-brutal-black bg-brutal-cream p-2 sm:p-3 text-center">
            <p className="font-[family-name:var(--font-family-mono)] text-[10px] sm:text-xs opacity-60">
              🎧 Pilih lagu favoritmu dan nikmati!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
