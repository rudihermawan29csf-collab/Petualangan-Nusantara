import React, { useState, useEffect, useRef } from 'react';
import { ScreenState, UserProfile, Difficulty, Question, GalleryItem, LevelType, LeaderboardEntry } from './types';
import { 
  LEVEL_CONFIGS, CHARACTERS, GAME_DATA, RANDOM_BACKGROUNDS, GALLERY_DATA 
} from './constants';
import { TacticalButton, Panel, RankBadge, HealthBar } from './components/UI';
import { UniversalLevelEngine } from './components/GameLevels';
import { Shield, ChevronLeft, Star, Award, Lock, Play, Skull, ScrollText, Target, Crosshair, Swords, Brain, Zap, Loader2, RefreshCw, Radio, FileText, ChevronRight, GraduationCap, Image as ImageIcon, Volume2, Pause, SkipForward, SkipBack, Info, Fingerprint, FileCheck, CheckCircle2, School, MousePointer2, Clock, AlertTriangle, XCircle, RotateCcw, MessageSquare, Trophy, Home, DoorOpen, Sparkles, BookOpen, LayoutGrid, Crown, Map as MapIcon, ClipboardList } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sfx } from './audio';

// --- HELPERS ---

const TypewriterText = ({ text, className = "" }: { text: string, className?: string }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    setDisplayText('');
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(prev => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 20); // Faster typewriter
    
    return () => clearInterval(timer);
  }, [text]);

  return (
    <p className={className}>
      {displayText}
      <span className="animate-pulse ml-1 text-yellow-500">_</span>
    </p>
  );
};

const BackgroundPreloader = () => (
  <div className="fixed opacity-0 pointer-events-none -z-50 w-0 h-0 overflow-hidden">
    {RANDOM_BACKGROUNDS.map((url, i) => (
      <img key={i} src={url} alt="preload" />
    ))}
  </div>
);

const GlobalFooter = () => (
  <div className="fixed bottom-0 right-0 z-[100] flex items-center gap-1.5 px-3 py-1 bg-black/80 backdrop-blur-sm border-t border-l border-slate-700/50 rounded-tl-lg pointer-events-none pb-safe pr-safe">
    <div className="text-right">
      <p className="text-slate-400 text-[6px] md:text-[8px] leading-tight font-mono uppercase">Didukung Oleh:</p>
      <h3 className="text-white font-medium text-[8px] md:text-[10px] leading-tight uppercase font-ops">MGMP PAI SMP & Kemenag Kab. Mojokerto</h3>
    </div>
    <div className="h-4 md:h-5 w-px bg-slate-600"></div>
    <img src="https://iili.io/fcTD21f.png" alt="Logo" className="h-5 md:h-7 w-auto drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]" />
  </div>
);

// --- SCORE REPORT COMPONENT (RAPOR) ---
const ScoreReportScreen = ({ result, onContinue, onRetry }: { result: { score: number, correct: number, wrong: number }, onContinue: () => void, onRetry: () => void }) => {
    // Determine Grade
    const getGrade = (score: number) => {
        if (score >= 90) return { label: 'A', color: 'text-green-400', msg: 'SANGAT MEMUASKAN' };
        if (score >= 70) return { label: 'B', color: 'text-yellow-400', msg: 'BAIK' };
        if (score >= 50) return { label: 'C', color: 'text-orange-400', msg: 'CUKUP' };
        return { label: 'D', color: 'text-red-500', msg: 'PERLU BELAJAR' };
    };
    
    const grade = getGrade(result.score);

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
            <Panel className="w-full max-w-lg border-2 border-yellow-500 animate-in zoom-in duration-300">
                <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-2 border-2 border-yellow-500">
                        <ClipboardList className="text-yellow-500 w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-ops text-white uppercase tracking-wider">RAPOR MISI</h2>
                    <div className="h-1 w-20 bg-yellow-500 mx-auto mt-2"></div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-slate-800 p-4 rounded text-center border border-slate-700">
                        <div className="text-xs text-slate-400 font-mono mb-1 uppercase">Total Skor</div>
                        <div className={`text-4xl font-ops ${grade.color}`}>{result.score}</div>
                    </div>
                    <div className="bg-slate-800 p-4 rounded text-center border border-slate-700">
                         <div className="text-xs text-slate-400 font-mono mb-1 uppercase">Peringkat</div>
                         <div className={`text-4xl font-ops ${grade.color}`}>{grade.label}</div>
                    </div>
                </div>

                <div className="bg-slate-900/50 p-4 rounded mb-8 border border-slate-700">
                     <div className="flex justify-between items-center mb-2 border-b border-slate-700 pb-2">
                         <span className="text-slate-300 flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500"/> Jawaban Benar</span>
                         <span className="text-white font-mono text-xl">{result.correct}</span>
                     </div>
                     <div className="flex justify-between items-center mb-2 border-b border-slate-700 pb-2">
                         <span className="text-slate-300 flex items-center gap-2"><XCircle size={16} className="text-red-500"/> Jawaban Salah</span>
                         <span className="text-white font-mono text-xl">{result.wrong}</span>
                     </div>
                     <div className="text-center mt-4">
                         <span className={`text-sm font-mono tracking-widest ${grade.color}`}>{grade.msg}</span>
                     </div>
                </div>

                <div className="flex gap-4">
                    <button onClick={onRetry} className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-3 rounded font-ops uppercase border-b-4 border-slate-900 active:border-b-0 active:translate-y-1 transition-all">
                        ULANGI
                    </button>
                    <button onClick={onContinue} className="flex-1 bg-yellow-600 hover:bg-yellow-500 text-black py-3 rounded font-ops uppercase border-b-4 border-yellow-800 active:border-b-0 active:translate-y-1 transition-all">
                        SELESAI
                    </button>
                </div>
            </Panel>
        </div>
    );
};

// --- GALLERY COMPONENT ---

const GalleryScreen = ({ onBack }: { onBack: () => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const bgmRef = useRef<HTMLAudioElement | null>(null);
  
  // Handling empty gallery
  if (GALLERY_DATA.length === 0) {
      return (
        <div className="h-[100dvh] w-full bg-slate-950 flex items-center justify-center">
            <div className="text-center text-white">
                <h2 className="text-2xl font-ops mb-4">ARSIP KOSONG</h2>
                <button onClick={onBack} className="bg-yellow-500 text-black px-4 py-2 rounded">KEMBALI</button>
            </div>
        </div>
      );
  }

  const currentItem = GALLERY_DATA[currentIndex];

  useEffect(() => {
    sfx.stopBGM();
    // Use Gamelan for Gallery as requested
    const softBgm = new Audio('https://upload.wikimedia.org/wikipedia/commons/2/23/Gamelan_degung_music_of_West_Java.ogg');
    softBgm.loop = true;
    softBgm.volume = 0.3;
    softBgm.play().catch(() => console.log("Auto-play blocked"));
    bgmRef.current = softBgm;

    return () => {
      softBgm.pause();
    };
  }, []);

  const nextItem = () => {
    sfx.click(); 
    sfx.playGamelan();
    setIsLoading(true);
    setCurrentIndex((prev) => (prev + 1) % GALLERY_DATA.length);
  };

  const prevItem = () => {
    sfx.click(); 
    sfx.playGamelan();
    setIsLoading(true);
    setCurrentIndex((prev) => (prev - 1 + GALLERY_DATA.length) % GALLERY_DATA.length);
  };

  return (
    <div className="h-[100dvh] w-full bg-slate-950 flex flex-col relative overflow-hidden">
        {/* Blurred Background */}
        <div className="absolute inset-0 bg-cover bg-center opacity-30 blur-sm scale-110 transition-all duration-1000" style={{ backgroundImage: `url('${currentItem.image}')` }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black/90"></div>

        <div className="z-30 w-full px-3 py-2 md:px-4 md:py-3 flex justify-between items-center bg-black/60 backdrop-blur-md border-b border-white/10 shrink-0 pt-safe">
            <button onClick={() => { sfx.click(); onBack(); }} className="flex items-center gap-2 text-slate-300 hover:text-white hover:bg-white/10 px-3 py-1.5 rounded-full transition-all font-ops text-xs md:text-sm uppercase border border-transparent hover:border-slate-500">
                <ChevronLeft size={16} /> <span className="hidden sm:inline">Kembali</span>
            </button>
            <div className="flex items-center gap-2 text-yellow-500 font-ops text-sm">
                <MapIcon size={16} /> JELAJAH NUSANTARA
            </div>
        </div>

        <div className="flex-grow flex flex-col items-center justify-start p-4 overflow-y-auto gap-4 z-20 scrollbar-hide pb-24">
            <div className="w-full aspect-video max-h-[30vh] relative shrink-0 group rounded-xl overflow-hidden border-2 border-yellow-500/30 shadow-2xl bg-black">
                 {/* Loading Indicator */}
                 {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-900 z-30">
                        <Loader2 className="animate-spin text-yellow-500 w-12 h-12" />
                    </div>
                 )}
                 
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none"></div>
                 <img 
                    src={currentItem.image} 
                    alt={currentItem.title} 
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${isLoading ? 'opacity-0' : 'opacity-100'}`} 
                    onLoad={() => setIsLoading(false)}
                 />
                 <div className="absolute bottom-3 left-3 z-20 bg-black/80 backdrop-blur px-3 py-1 border border-yellow-500/50 rounded text-yellow-500 font-mono text-[10px] uppercase tracking-widest flex items-center gap-2">
                    <ImageIcon size={12} /> {currentItem.category}
                 </div>
                 <div className="absolute top-3 right-3 z-20 bg-black/50 px-2 py-1 rounded text-white font-mono text-xs">
                    {currentIndex + 1} / {GALLERY_DATA.length}
                 </div>
            </div>
            <div className="w-full flex flex-col gap-2">
                <div>
                     <div className="flex items-center gap-2 mb-1 opacity-70">
                        <div className="h-px w-6 bg-yellow-500"></div>
                        <span className="text-yellow-500 font-mono text-[10px] uppercase tracking-widest">ARCHIVE_ID_{currentItem.id}</span>
                     </div>
                     <h2 className="text-2xl md:text-4xl font-ops text-white uppercase leading-none tracking-tight text-fire drop-shadow-md">{currentItem.title}</h2>
                </div>
                <Panel className="border-l-2 md:border-l-4 border-yellow-500 bg-slate-900/60 backdrop-blur-md p-4 shadow-lg">
                    <TypewriterText text={currentItem.description} className="text-slate-300 text-xs md:text-base leading-relaxed italic font-serif" />
                </Panel>
            </div>
        </div>

        <div className="z-30 w-full bg-black/80 backdrop-blur-xl border-t border-white/10 p-3 shrink-0 flex items-center justify-center absolute bottom-0 pb-safe">
             <div className="flex gap-4 w-full max-w-lg">
                 <button onClick={prevItem} className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 text-slate-300 hover:text-white hover:bg-slate-700 hover:border-yellow-500 rounded transition-all active:scale-95 flex justify-center items-center gap-2 group">
                    <SkipBack size={18} className="group-hover:-translate-x-1 transition-transform" /> <span className="font-ops tracking-wider text-sm">PREV</span>
                 </button>
                 <button onClick={nextItem} className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 text-slate-300 hover:text-white hover:bg-slate-700 hover:border-yellow-500 rounded transition-all active:scale-95 flex justify-center items-center gap-2 group">
                    <span className="font-ops tracking-wider text-sm">NEXT</span> <SkipForward size={18} className="group-hover:translate-x-1 transition-transform" />
                 </button>
             </div>
        </div>
    </div>
  );
};

// ... (Rest of existing components: VictoryGate, TitleScreen, LoginScreen etc) ...

// NEW VICTORY GATE COMPONENT
const VictoryGate = ({ onContinue }: { onContinue: () => void }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        // Start sequence
        const timer1 = setTimeout(() => setIsOpen(true), 1000);
        const timer2 = setTimeout(() => {
            setShowContent(true);
            confetti({
                particleCount: 300,
                spread: 100,
                origin: { y: 0.6 },
                colors: ['#fbbf24', '#f59e0b', '#d97706', '#ffffff']
            });
            sfx.win();
        }, 2500);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-black">
            {/* Background Light (Revealed when doors open) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-200 via-yellow-600 to-black z-0 flex flex-col items-center justify-center text-center p-6">
                 {/* Victory Content */}
                 <div className={`transition-all duration-1000 transform ${showContent ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-90'}`}>
                      <Trophy className="w-24 h-24 md:w-32 md:h-32 text-yellow-900 mx-auto mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] animate-bounce" fill="currentColor" />
                      
                      <h1 className="text-4xl md:text-7xl font-ops text-white mb-2 uppercase drop-shadow-xl tracking-widest text-stroke-gold">
                          MISI SELESAI!
                      </h1>
                      <div className="h-1 w-32 bg-white mx-auto mb-6 shadow-[0_0_10px_white]"></div>
                      
                      <div className="max-w-2xl mx-auto bg-black/60 backdrop-blur-sm p-6 md:p-8 border-y-2 border-yellow-400 mb-8 rounded-xl">
                          <p className="font-serif italic text-lg md:text-2xl text-yellow-100 leading-relaxed">
                              "Data berhasil dikumpulkan. Mari kita lihat hasil analisismu."
                          </p>
                      </div>

                      <button 
                        onClick={onContinue}
                        className="group relative px-8 py-4 bg-yellow-500 text-black font-ops text-xl uppercase tracking-widest hover:bg-yellow-400 transition-all hover:scale-105 shadow-[0_0_30px_rgba(234,179,8,0.6)] rounded-lg overflow-hidden"
                      >
                          <span className="relative z-10 flex items-center gap-2">
                             <Award size={24} /> LIHAT HASIL
                          </span>
                          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                      </button>
                 </div>
            </div>

            {/* Left Door */}
            <div 
                className={`absolute top-0 left-0 w-1/2 h-full bg-slate-900 z-10 transition-transform duration-[2000ms] ease-in-out flex items-center justify-end border-r-4 border-yellow-600 shadow-2xl ${isOpen ? '-translate-x-full' : 'translate-x-0'}`}
                style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/arabesque.png')" }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
                <div className="mr-8 md:mr-16">
                     <div className="w-24 h-24 md:w-48 md:h-48 rounded-full border-4 border-yellow-600/50 flex items-center justify-center opacity-50">
                        <Star size={40} className="text-yellow-600" />
                     </div>
                </div>
            </div>

            {/* Right Door */}
            <div 
                className={`absolute top-0 right-0 w-1/2 h-full bg-slate-900 z-10 transition-transform duration-[2000ms] ease-in-out flex items-center justify-start border-l-4 border-yellow-600 shadow-2xl ${isOpen ? 'translate-x-full' : 'translate-x-0'}`}
                style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/arabesque.png')" }}
            >
                <div className="absolute inset-0 bg-gradient-to-l from-black/80 to-transparent"></div>
                <div className="ml-8 md:ml-16">
                     <div className="w-24 h-24 md:w-48 md:h-48 rounded-full border-4 border-yellow-600/50 flex items-center justify-center opacity-50">
                        <Star size={40} className="text-yellow-600" />
                     </div>
                </div>
            </div>

            {/* Door Joint Light Leak */}
            <div className={`absolute inset-y-0 left-1/2 w-1 bg-yellow-400 z-20 shadow-[0_0_100px_50px_rgba(250,204,21,0.5)] transition-opacity duration-500 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
        </div>
    );
};

const TitleScreen = ({ onStart }: { onStart: () => void }) => {
  return (
    <div className="h-[100dvh] w-full flex flex-col items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        style={{ backgroundImage: `url('${RANDOM_BACKGROUNDS[3]}')` }} 
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-0"></div>
      <div className="scanlines"></div>
      
      <div className="z-20 text-center space-y-6 p-4 flex flex-col items-center h-full justify-center relative w-full pt-safe pb-safe">
        <div className="flex-grow flex flex-col justify-center items-center w-full max-w-4xl">
            <div className="flex items-center gap-2 mb-4 animate-in slide-in-from-top-10 fade-in duration-1000">
                <div className="h-px w-8 md:w-12 bg-yellow-500"></div>
                <span className="text-yellow-400 font-mono tracking-[0.3em] text-[10px] md:text-sm drop-shadow-md uppercase">Edisi Pengetahuan Umum</span>
                <div className="h-px w-8 md:w-12 bg-yellow-500"></div>
            </div>

            <div className="relative mb-2">
                <h1 className="text-5xl md:text-8xl font-ops animate-shine glitch-text drop-shadow-[0_0_15px_rgba(255,0,0,0.8)] leading-none tracking-tighter" data-text="PETUALANG">PETUALANG</h1>
            </div>

            <h1 className="text-3xl md:text-6xl font-ops animate-shine drop-shadow-lg glitch-text leading-tight px-4" data-text="CILIK: NUSANTARA">CILIK: NUSANTARA</h1>
            
            <div className="mt-8 transform -skew-x-12 bg-slate-900/80 border-l-4 border-yellow-500 px-6 py-2 relative overflow-hidden group max-w-[80%]">
                 <div className="absolute inset-0 bg-yellow-500/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                 <p className="text-slate-200 tracking-[0.3em] text-xs md:text-lg font-mono">JELAJAHI INDONESIA & DUNIA</p>
            </div>
            
            <div className="mt-16 md:mt-20 relative group hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-yellow-500 blur-xl opacity-30 group-hover:opacity-60 transition-opacity rounded-full animate-pulse"></div>
                <TacticalButton onClick={() => { sfx.init(); sfx.click(); onStart(); }} className="scale-110 md:scale-125 border-yellow-400 text-lg md:text-xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-500">
                    MULAI PETUALANGAN
                </TacticalButton>
            </div>
        </div>

        <div className="w-full max-w-2xl border-t border-slate-700/50 bg-black/80 backdrop-blur-md p-3 md:p-4 rounded-t-xl flex items-center justify-center gap-4 md:gap-6 animate-in slide-in-from-bottom-5 fade-in duration-1000 border-x border-slate-700/50 relative overflow-hidden mb-6 md:mb-0">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50"></div>
            <div className="text-right">
                <p className="text-slate-400 text-[8px] md:text-[10px] font-mono mb-1 tracking-widest uppercase">Didukung Oleh:</p>
                <h3 className="text-white font-medium text-[9px] md:text-sm font-ops tracking-wide leading-tight uppercase">MGMP PAI SMP & Kemenag<br/>Kab. Mojokerto</h3>
            </div>
            <div className="h-8 md:h-10 w-px bg-slate-600"></div>
            <img src="https://iili.io/fcTD21f.png" alt="Logo Kemenag" className="h-8 md:h-14 w-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:scale-110 transition-transform" />
        </div>
      </div>
    </div>
  );
};

const LoginScreen = ({ onLogin }: { onLogin: (name: string, school: string) => void }) => {
  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  
  const handleInput = (setter: React.Dispatch<React.SetStateAction<string>>, value: string) => {
    setter(value);
    sfx.tick(); 
  };

  return (
    <div className="h-[100dvh] w-full flex items-center justify-center bg-slate-900 relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-cover bg-center z-0 opacity-50" style={{ backgroundImage: `url('${RANDOM_BACKGROUNDS[1]}')` }}></div>
      <Panel className="w-full max-w-md z-10 border-t-4 border-t-yellow-500 shadow-2xl bg-slate-950/90 backdrop-blur-xl p-6">
        <div className="flex justify-center mb-4">
            <Fingerprint className="text-yellow-500 w-12 h-12 animate-pulse" />
        </div>
        <h2 className="text-2xl font-ops text-yellow-500 mb-6 text-center tracking-wider">KARTU PELAJAR</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-slate-400 text-xs mb-1 ml-1 font-mono uppercase tracking-widest flex items-center gap-2">
                <Target size={12} /> Nama Lengkap
            </label>
            <input type="text" value={name} onChange={(e) => handleInput(setName, e.target.value)} className="w-full bg-slate-800 border-2 border-slate-600 p-3 text-white focus:border-yellow-500 focus:outline-none font-ops uppercase text-lg rounded-sm" placeholder="KETIK NAMAMU..." autoFocus />
          </div>
          <div>
            <label className="block text-slate-400 text-xs mb-1 ml-1 font-mono uppercase tracking-widest flex items-center gap-2">
                <School size={12} /> Nama Sekolah
            </label>
            <input type="text" value={school} onChange={(e) => handleInput(setSchool, e.target.value)} className="w-full bg-slate-800 border-2 border-slate-600 p-3 text-white focus:border-yellow-500 focus:outline-none font-ops uppercase text-lg rounded-sm" placeholder="KETIK SEKOLAHMU..." />
          </div>
          <TacticalButton onClick={() => onLogin(name, school)} className="w-full mt-4 py-3 text-lg" disabled={!name || !school}>
             MASUK KELAS
          </TacticalButton>
        </div>
      </Panel>
    </div>
  );
};

const MissionObjectiveScreen = ({ onNext }: { onNext: () => void }) => (
  <div className="h-[100dvh] w-full bg-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-cover opacity-20" style={{ backgroundImage: `url('${RANDOM_BACKGROUNDS[2]}')` }}></div>
    <Panel className="max-w-2xl w-full relative z-10 animate-in fade-in zoom-in duration-500">
      <div className="text-center mb-6">
        <ScrollText className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
        <h2 className="text-3xl md:text-4xl font-ops text-yellow-500 mb-2 uppercase">Misi Utama</h2>
        <div className="h-1 w-24 bg-yellow-500 mx-auto"></div>
      </div>
      <div className="space-y-4 text-slate-300 font-mono text-sm md:text-base leading-relaxed text-justify">
        <p>
          Selamat datang, Agen Pengetahuan! Misi Anda adalah menjelajahi kekayaan Nusantara dan dunia.
        </p>
        <p>
          Kumpulkan data intelijen melalui serangkaian tantangan cepat. Ketepatan dan kecepatan adalah kunci keberhasilan operasi ini.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-yellow-100/80">
          <li>Jawab pertanyaan dengan cepat sebelum waktu habis.</li>
          <li>Hindari jawaban salah untuk menjaga integritas misi.</li>
          <li>Kumpulkan skor tertinggi untuk naik pangkat.</li>
        </ul>
      </div>
      <div className="mt-8 flex justify-center">
        <TacticalButton onClick={onNext} className="w-full md:w-auto text-xl px-8">
          TERIMA MISI
        </TacticalButton>
      </div>
    </Panel>
  </div>
);

const GameTutorialScreen = ({ onNext }: { onNext: () => void }) => (
  <div className="h-[100dvh] w-full bg-slate-950 flex items-center justify-center p-4">
    <Panel className="max-w-4xl w-full grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <h2 className="text-3xl font-ops text-cyan-400 mb-4 flex items-center gap-3">
          <Brain size={32} /> CARA BERMAIN
        </h2>
        <div className="space-y-4">
          <div className="flex gap-4 items-start bg-slate-800/50 p-3 rounded border border-slate-700">
            <MousePointer2 className="text-yellow-500 shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-white mb-1">BIDIK & KLIK</h4>
              <p className="text-xs text-slate-400">Klik jawaban yang benar yang muncul di layar.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start bg-slate-800/50 p-3 rounded border border-slate-700">
            <Clock className="text-red-500 shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-white mb-1">WAKTU TERBATAS</h4>
              <p className="text-xs text-slate-400">Setiap level memiliki batas waktu. Jangan lambat!</p>
            </div>
          </div>
          <div className="flex gap-4 items-start bg-slate-800/50 p-3 rounded border border-slate-700">
            <AlertTriangle className="text-orange-500 shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-white mb-1">HATI-HATI</h4>
              <p className="text-xs text-slate-400">Jawaban salah akan mengurangi kesehatanmu.</p>
            </div>
          </div>
        </div>
        <TacticalButton onClick={onNext} variant="success" className="w-full mt-4">
          SAYA MENGERTI
        </TacticalButton>
      </div>
      <div className="relative h-64 md:h-full bg-black border border-slate-700 rounded-lg overflow-hidden flex items-center justify-center group">
         <div className="absolute inset-0 bg-cover opacity-50" style={{ backgroundImage: `url('${RANDOM_BACKGROUNDS[0]}')` }}></div>
         <div className="relative z-10 text-center">
            <Crosshair className="w-24 h-24 text-white/20 mx-auto animate-spin-slow" />
            <p className="text-xs font-mono text-cyan-400 mt-2 animate-pulse">SYSTEM SIMULATION...</p>
         </div>
      </div>
    </Panel>
  </div>
);

const DifficultySelectScreen = ({ onSelect, onGallery }: { onSelect: (d: Difficulty) => void, onGallery: () => void }) => (
  <div className="h-[100dvh] w-full bg-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
     <div className="absolute inset-0 bg-cover opacity-20 blur-sm" style={{ backgroundImage: `url('${RANDOM_BACKGROUNDS[1]}')` }}></div>
     <div className="relative z-10 w-full max-w-5xl">
        <h2 className="text-4xl md:text-6xl font-ops text-center text-white mb-8 drop-shadow-lg uppercase tracking-wider">
           Pilih Tingkat Kesulitan
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
           {[
             { id: Difficulty.EASY, label: 'PEMULA', color: 'green', icon: BookOpen, desc: 'Santai & Belajar' },
             { id: Difficulty.MEDIUM, label: 'MENENGAH', color: 'yellow', icon: Swords, desc: 'Tantangan Seru' },
             { id: Difficulty.HARD, label: 'AHLI', color: 'red', icon: Skull, desc: 'Uji Nyali' },
             { id: Difficulty.ETHICS, label: 'ETIKA', color: 'cyan', icon: Shield, desc: 'Budi Pekerti' } 
           ].map((item) => {
              const Icon = item.icon;
              const colorClass = item.color === 'green' ? 'text-green-500 border-green-500 hover:bg-green-900/30' : 
                                 item.color === 'yellow' ? 'text-yellow-500 border-yellow-500 hover:bg-yellow-900/30' :
                                 item.color === 'red' ? 'text-red-500 border-red-500 hover:bg-red-900/30' :
                                 'text-cyan-400 border-cyan-400 hover:bg-cyan-900/30';

              return (
                <button 
                  key={item.id}
                  onClick={() => onSelect(item.id)}
                  className={`relative group bg-slate-900/80 backdrop-blur border-2 ${colorClass} p-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_currentColor] flex flex-col items-center gap-4`}
                >
                   <Icon size={48} className="transition-transform group-hover:rotate-12" />
                   <div className="text-center">
                      <h3 className="font-ops text-2xl uppercase">{item.label}</h3>
                      <p className="font-mono text-xs opacity-70 mt-1">{item.desc}</p>
                   </div>
                </button>
              );
           })}
        </div>

        <div className="mt-12 flex justify-center">
           <button onClick={onGallery} className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group px-6 py-3 border border-slate-700 hover:border-yellow-500 rounded-full bg-black/50 backdrop-blur">
              <ImageIcon size={20} className="group-hover:text-yellow-500" />
              <span className="font-mono text-sm uppercase tracking-widest">Lihat Galeri Nusantara</span>
           </button>
        </div>
     </div>
  </div>
);

const CharacterSelectScreen = ({ onSelect }: { onSelect: (id: string) => void }) => (
  <div className="h-[100dvh] w-full bg-slate-950 flex flex-col items-center justify-center p-4 relative">
     <div className="text-center mb-8 z-10">
        <h2 className="text-3xl md:text-5xl font-ops text-white mb-2 uppercase">Pilih Karakter</h2>
        <p className="text-slate-400 font-mono text-sm">Identitas Agen Lapangan</p>
     </div>

     <div className="flex flex-wrap justify-center gap-6 z-10 max-w-6xl">
        {CHARACTERS.map((char) => (
           <div key={char.id} className="group relative w-40 md:w-56 aspect-[3/4] bg-slate-900 border-2 border-slate-700 hover:border-yellow-500 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                onClick={() => onSelect(char.id)}>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
              <img src={char.image} alt={char.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              
              <div className="absolute bottom-0 left-0 w-full p-3 z-20">
                 <h3 className="text-white font-ops text-xl uppercase group-hover:text-yellow-400 transition-colors">{char.name}</h3>
                 <p className="text-slate-400 text-xs font-mono mb-2">{char.role}</p>
                 <div className="flex items-center gap-1 text-[10px] text-yellow-500 bg-yellow-900/30 px-2 py-1 rounded w-fit border border-yellow-500/30">
                    <Star size={10} fill="currentColor" /> {char.perk}
                 </div>
              </div>

              {/* Selection Overlay */}
              <div className="absolute inset-0 bg-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity z-30 border-4 border-yellow-500 rounded-xl pointer-events-none"></div>
           </div>
        ))}
     </div>
  </div>
);

const MapScreen = ({ user, onLogout, onStartLevel, onGallery }: { user: UserProfile, onLogout: () => void, onStartLevel: (id: number) => void, onGallery: () => void }) => {
    const char = CHARACTERS.find(c => c.id === user.characterId) || CHARACTERS[0];
    const diffColor = user.difficulty === Difficulty.HARD ? 'text-red-500' : user.difficulty === Difficulty.MEDIUM ? 'text-yellow-500' : user.difficulty === Difficulty.ETHICS ? 'text-cyan-400' : 'text-green-500';

    return (
        <div className="h-[100dvh] w-full bg-slate-950 flex flex-col overflow-hidden relative">
            <div className="bg-black/90 px-4 py-2 border-b border-slate-700 flex justify-between items-center z-50 shadow-xl h-14 md:h-16 shrink-0 pt-safe">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-yellow-500 p-0.5 bg-slate-800">
                        <img src={char.image} alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h3 className="font-ops text-white text-sm md:text-base leading-none uppercase">{user.username}</h3>
                        <div className="flex gap-2 items-center">
                            <RankBadge rank={user.rank} />
                            <span className={`font-mono text-[8px] md:text-[10px] ${diffColor} font-bold`}>{user.difficulty}</span>
                        </div>
                    </div>
                </div>
                <button onClick={() => { sfx.click(); onLogout(); }} className="text-slate-500 hover:text-white transition-colors flex items-center gap-2">
                    <Radio size={14} className="animate-pulse" />
                    <span className="font-ops text-xs uppercase hidden md:inline">KELUAR</span>
                </button>
            </div>
            
            {/* SCROLLABLE GRID CONTAINER */}
            <div className="flex-grow relative w-full overflow-y-auto bg-slate-900 scrollbar-hide p-4 pb-20">
                <div className="absolute inset-0 bg-cover bg-center opacity-30 brightness-50 fixed pointer-events-none" style={{ backgroundImage: `url('${RANDOM_BACKGROUNDS[2]}')` }}></div>
                
                <div className="relative z-10 max-w-7xl mx-auto">
                    <h2 className="text-white font-ops text-xl md:text-3xl mb-4 text-center uppercase tracking-widest flex items-center justify-center gap-2">
                        <LayoutGrid /> Menu Pelajaran
                    </h2>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
                        {LEVEL_CONFIGS.map((level) => {
                            const isBonus = level.type === LevelType.BONUS;
                            // UNLOCKED: Players can select all levels freely now
                            const isLocked = false; 
                            
                            return (
                            <button 
                                key={level.id}
                                disabled={isLocked}
                                onClick={() => { 
                                    if (!isLocked) {
                                        sfx.click(); 
                                        if (isBonus) onGallery();
                                        else onStartLevel(level.id);
                                    } else {
                                        sfx.error();
                                    }
                                }} 
                                className={`group relative border-2 transition-all rounded-xl overflow-hidden flex flex-col shadow-lg text-left h-32 md:h-40
                                    ${isBonus ? 'border-yellow-500 bg-slate-900 hover:bg-slate-800' : 
                                      isLocked ? 'border-slate-800 bg-slate-950 opacity-60 cursor-not-allowed grayscale' : 
                                      'border-lime-600 bg-slate-800 hover:bg-slate-700 hover:scale-105 hover:shadow-lime-500/20'}
                                `}
                            >
                                <div className="absolute inset-0 bg-cover bg-center opacity-40 transition-opacity group-hover:opacity-60" style={{ backgroundImage: `url('${level.image}')` }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                                
                                {isLocked && (
                                    <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/50 backdrop-blur-[1px]">
                                        <Lock className="text-slate-500" size={32} />
                                    </div>
                                )}

                                <div className="relative z-10 p-3 flex flex-col h-full justify-between w-full">
                                    <div className="flex justify-between items-start">
                                        <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${isBonus ? 'bg-yellow-600 text-black' : isLocked ? 'bg-slate-700 text-slate-400' : 'bg-lime-600 text-black'}`}>
                                            LVL {level.id}
                                        </span>
                                        {!isLocked && !isBonus && <Play size={16} className={`text-lime-400 ${!isLocked ? 'group-hover:text-white' : ''}`} />}
                                        {isBonus && <Star size={16} className="text-yellow-400 animate-pulse" fill="currentColor" />}
                                    </div>
                                    
                                    <div>
                                        <h4 className={`font-ops text-sm md:text-lg leading-tight uppercase ${isBonus ? 'text-yellow-400' : isLocked ? 'text-slate-500' : 'text-white'}`}>
                                            {level.title}
                                        </h4>
                                        <p className="text-[9px] md:text-[10px] text-slate-300 font-mono truncate">{level.subtitle}</p>
                                    </div>
                                </div>
                            </button>
                            );
                        })}
                    </div>
                </div>
            </div>
            
            <GlobalFooter />
        </div>
    );
};

// --- GAMEPLAY WRAPPER ---

const GameplayScreen = ({ user, levelId, onComplete, onExit }: { user: UserProfile, levelId: number, onComplete: (result: any) => void, onExit: () => void }) => {
    const levelConfig = LEVEL_CONFIGS.find(l => l.id === levelId);
    // Use the difficulty selected by user to fetch data
    const levelData = GAME_DATA[user.difficulty][levelId];
    
    // Safety check
    if (!levelConfig || !levelData || levelData.length === 0) {
        return (
            <div className="h-full w-full flex items-center justify-center bg-black text-white flex-col gap-4">
                <p>Error loading level data.</p>
                <button onClick={onExit} className="text-red-500 underline">Return</button>
            </div>
        );
    }

    const [currentHp, setCurrentHp] = useState(100);
    const [showDamage, setShowDamage] = useState(false);

    const handleDamage = () => {
        // Damage logic: Easy -10, Medium -20, Hard -30
        const dmg = user.difficulty === Difficulty.EASY ? 10 : user.difficulty === Difficulty.MEDIUM ? 20 : 30;
        const nextHp = currentHp - dmg;
        
        // Prevent negative HP but DO NOT EXIT GAME. Just keep it at 0.
        setCurrentHp(Math.max(0, nextHp));
        
        setShowDamage(true);
        setTimeout(() => setShowDamage(false), 300);

        // REMOVED EARLY EXIT LOGIC so players can finish all 10 questions.
        // if (nextHp <= 0) { sfx.error(); onExit(); }
    };

    return (
        <div className="h-[100dvh] w-full bg-slate-900 relative overflow-hidden">
            {/* Damage Overlay */}
            <div className={`absolute inset-0 z-[60] bg-red-600/30 pointer-events-none transition-opacity duration-100 ${showDamage ? 'opacity-100' : 'opacity-0'}`}></div>

            <div className="absolute bottom-4 left-4 z-50">
                <HealthBar hp={currentHp} maxHp={100} />
            </div>

            <button onClick={() => { sfx.click(); onExit(); }} className="absolute top-4 left-4 z-50 bg-black/50 p-2 rounded-full text-slate-400 hover:text-white border border-slate-600 hover:border-red-500 transition-all">
                <RotateCcw size={20} />
            </button>

            <UniversalLevelEngine 
                data={levelData}
                user={user}
                levelId={levelId}
                levelType={levelConfig.type}
                onComplete={onComplete}
                onDamage={handleDamage}
            />
        </div>
    );
};


// --- MAIN APP COMPONENT ---

export default function App() {
  const [screen, setScreen] = useState<ScreenState>(ScreenState.TITLE);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [currentLevelId, setCurrentLevelId] = useState<number>(1);
  const [lastGameResult, setLastGameResult] = useState<{score: number, correct: number, wrong: number} | null>(null);

  // Initialize Audio Context on first interaction if needed
  useEffect(() => {
    const handleInteraction = () => {
        if (sfx.ctx?.state === 'suspended') {
            sfx.resume();
        }
    };
    window.addEventListener('click', handleInteraction);
    return () => window.removeEventListener('click', handleInteraction);
  }, []);

  const handleLogin = (username: string, school: string) => {
      setUser({
          username,
          school,
          rank: 'Calon Agen',
          score: 0,
          levelProgress: 1, // Start at level 1 unlocked
          difficulty: Difficulty.EASY // Default
      });
      setScreen(ScreenState.MISSION);
  };

  const handleDifficultySelect = (diff: Difficulty) => {
      if (user) {
          setUser({ ...user, difficulty: diff });
          setScreen(ScreenState.CHARACTER_SELECT);
      }
  };

  const handleCharacterSelect = (charId: string) => {
      if (user) {
          setUser({ ...user, characterId: charId });
          setScreen(ScreenState.MAP);
          sfx.playBGM(); // Start music on map
      }
  };

  const handleLevelComplete = (result: { score: number, correct: number, wrong: number }) => {
      if (user && currentLevelId) {
          const newScore = user.score + result.score;
          const nextLevel = currentLevelId + 1;
          
          setUser({
              ...user,
              score: newScore,
              lastScore: result.score,
              levelProgress: Math.max(user.levelProgress, nextLevel)
          });
          
          setLastGameResult(result);
          setScreen(ScreenState.REWARD);
      }
  };

  const renderScreen = () => {
    switch (screen) {
        case ScreenState.TITLE:
            return <TitleScreen onStart={() => setScreen(ScreenState.LOGIN)} />;
        case ScreenState.LOGIN:
            return <LoginScreen onLogin={handleLogin} />;
        case ScreenState.MISSION:
            return <MissionObjectiveScreen onNext={() => setScreen(ScreenState.TUTORIAL)} />;
        case ScreenState.TUTORIAL:
            return <GameTutorialScreen onNext={() => setScreen(ScreenState.DIFFICULTY_SELECT)} />;
        case ScreenState.DIFFICULTY_SELECT:
            return <DifficultySelectScreen onSelect={handleDifficultySelect} onGallery={() => setScreen(ScreenState.GALLERY)} />;
        case ScreenState.CHARACTER_SELECT:
            return <CharacterSelectScreen onSelect={handleCharacterSelect} />;
        case ScreenState.MAP:
            return user ? (
                <MapScreen 
                    user={user} 
                    onLogout={() => { sfx.stopBGM(); setScreen(ScreenState.TITLE); setUser(null); }}
                    onStartLevel={(id) => { setCurrentLevelId(id); setScreen(ScreenState.GAMEPLAY); }}
                    onGallery={() => setScreen(ScreenState.GALLERY)}
                />
            ) : null;
        case ScreenState.GAMEPLAY:
            return user ? (
                <GameplayScreen 
                    user={user} 
                    levelId={currentLevelId} 
                    onComplete={handleLevelComplete}
                    onExit={() => setScreen(ScreenState.MAP)}
                />
            ) : null;
        case ScreenState.REWARD:
            return <VictoryGate onContinue={() => setScreen(ScreenState.EVALUATION)} />;
        case ScreenState.EVALUATION:
            return lastGameResult ? (
                <ScoreReportScreen 
                    result={lastGameResult} 
                    onContinue={() => {
                        setScreen(ScreenState.MAP);
                        setLastGameResult(null);
                    }}
                    onRetry={() => {
                        setScreen(ScreenState.GAMEPLAY);
                        setLastGameResult(null);
                    }}
                /> 
            ) : <MapScreen user={user!} onLogout={() => {}} onStartLevel={() => {}} onGallery={() => {}} />;
        case ScreenState.GALLERY:
            return <GalleryScreen onBack={() => setScreen(user && user.characterId ? ScreenState.MAP : ScreenState.DIFFICULTY_SELECT)} />;
        default:
            return <TitleScreen onStart={() => setScreen(ScreenState.LOGIN)} />;
    }
  };

  return (
    <>
      <BackgroundPreloader />
      {renderScreen()}
    </>
  );
}