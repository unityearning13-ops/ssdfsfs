import { useState, useEffect } from 'react';
import { 
  Sparkles, 
  User, 
  IdCard, 
  Award, 
  Download, 
  Check, 
  Layers, 
  Sliders, 
  FileText, 
  Info, 
  RefreshCw,
  Eye,
  Settings
} from 'lucide-react';

interface TemplatePreset {
  id: number;
  name: string;
  bengaliName: string;
  description: string;
  primaryColor: string;
  accentColor: string;
  textColor: string;
  badgeBgColor: string;
  mottoText: string;
  fontFamily: string;
  studentAccountLabel: string;
}

const TEMPLATES: TemplatePreset[] = [
  {
    id: 1,
    name: "Red & Black (Image 1)",
    bengaliName: "লাল ও কালো (১ম ছবি)",
    description: "লাল ও কালো থিম, সোজা ডিভাইডার লাইন এবং লাল তারকা খচিত ডিজাইন",
    primaryColor: "#0A1221", // deep navy black
    accentColor: "#D81B1B", // red
    textColor: "#FFFFFF",
    badgeBgColor: "#FFFFFF",
    mottoText: "",
    fontFamily: "Inter",
    studentAccountLabel: "STUDENT ACCOUNT"
  },
  {
    id: 2,
    name: "Green & Navy (Image 2)",
    bengaliName: "সবুজ ও নেভি ব্লু (২য় ছবি)",
    description: "সবুজ অ্যাকসেন্ট, ঢেউখেলানো ডিভাইডার এবং বিশেষ স্লোগান ডিজাইন",
    primaryColor: "#021526", // navy
    accentColor: "#2E7D32", // green
    textColor: "#FFFFFF",
    badgeBgColor: "#FFFFFF",
    mottoText: "LEARN • EARN • GROW TOGETHER",
    fontFamily: "Inter",
    studentAccountLabel: "STUDENT ACCOUNT"
  },
  {
    id: 3,
    name: "Gold & Navy (Image 3)",
    bengaliName: "সোনালী ও নেভি ব্লু (৩য় ছবি)",
    description: "আভিজাত্যপূর্ণ গোল্ডেন ও নেভি ব্লু থিম, সোনালী পাতা ও তারকা খচিত ডিজাইন",
    primaryColor: "#030F26", // royal navy
    accentColor: "#DCA134", // gold
    textColor: "#FFFFFF",
    badgeBgColor: "#FFFFFF",
    mottoText: "LEARN • EARN • GROW TOGETHER",
    fontFamily: "Inter",
    studentAccountLabel: "Student Account"
  },
  {
    id: 4,
    name: "Purple & Gold (Image 4)",
    bengaliName: "বেগুনি ও সোনালী (৪র্থ ছবি)",
    description: "বেগুনি এবং চমৎকার সোনালী থিম, দুই পাশে লরেল পাতা এবং কেন্দ্রে বিশেষ মেডেল",
    primaryColor: "#1E0A3C", // purple
    accentColor: "#F1A80A", // warm gold
    textColor: "#FFFFFF",
    badgeBgColor: "#FFFFFF",
    mottoText: "LEARN TODAY •   • EARN TOMORROW",
    fontFamily: "Inter",
    studentAccountLabel: "STUDENT ACCOUNT"
  },
  {
    id: 5,
    name: "Sky Blue & Navy (Template 5)",
    bengaliName: "আকাশী ও নেভি ব্লু (৫ম থিম)",
    description: "আকাশী নীল ও নেভি ব্লু থিম, আধুনিক প্রফেশনাল টেক ডিজাইন",
    primaryColor: "#0B192C", // deep navy
    accentColor: "#00B4D8", // sky blue
    textColor: "#FFFFFF",
    badgeBgColor: "#FFFFFF",
    mottoText: "LEARN • EARN • GROW TOGETHER",
    fontFamily: "Inter",
    studentAccountLabel: "STUDENT ACCOUNT"
  },
  {
    id: 6,
    name: "Vibrant Orange & Carbon (Template 6)",
    bengaliName: "কমলা ও কার্বন ব্ল্যাক (৬ষ্ঠ থিম)",
    description: "কমলা ও কার্বন ব্ল্যাক থিম, এনার্জেটিক স্পোর্ট ডিজাইন",
    primaryColor: "#151515", // carbon black
    accentColor: "#FF6B00", // orange
    textColor: "#FFFFFF",
    badgeBgColor: "#FFFFFF",
    mottoText: "LEARN • EARN • GROW TOGETHER",
    fontFamily: "Inter",
    studentAccountLabel: "STUDENT ACCOUNT"
  },
  {
    id: 7,
    name: "Rose Pink & Royal Violet (Template 7)",
    bengaliName: "গোলাপী ও ভায়োলেট (৭ম থিম)",
    description: "ম্যাজেন্টা গোলাপী ও ভায়োলেট থিম, চমৎকার গ্লোয়িং লাক্সারি ডিজাইন",
    primaryColor: "#1D0D2E", // royal violet
    accentColor: "#FF2E93", // rose pink
    textColor: "#FFFFFF",
    badgeBgColor: "#FFFFFF",
    mottoText: "LEARN TODAY •   • EARN TOMORROW",
    fontFamily: "Inter",
    studentAccountLabel: "STUDENT ACCOUNT"
  },
  {
    id: 8,
    name: "Deep Teal & Vibrant Coral (Template 8)",
    bengaliName: "ডিপ টিল ও কোরাল (৮ম থিম)",
    description: "আধুনিক ও নান্দনিক ডিপ টিল ও কোরাল কালার কম্বিনেশন",
    primaryColor: "#052C30", // deep ocean teal
    accentColor: "#FF6F59", // vibrant coral
    textColor: "#FFFFFF",
    badgeBgColor: "#FFFFFF",
    mottoText: "LEARN • EARN • GROW TOGETHER",
    fontFamily: "Inter",
    studentAccountLabel: "STUDENT ACCOUNT"
  },
  {
    id: 9,
    name: "Royal Emerald & Rich Gold (Template 9)",
    bengaliName: "রয়েল এমারেল্ড ও গোল্ড (৯ম থিম)",
    description: "প্রিমিয়াম ও আকর্ষনীয় রয়েল এমারেল্ড সবুজ এবং খাঁটি সোনালী রঙের থিম",
    primaryColor: "#042010", // deep emerald green
    accentColor: "#E2B13C", // premium rich gold
    textColor: "#FFFFFF",
    badgeBgColor: "#FFFFFF",
    mottoText: "LEARN • EARN • GROW TOGETHER",
    fontFamily: "Inter",
    studentAccountLabel: "STUDENT ACCOUNT"
  },
  {
    id: 10,
    name: "Deep Maroon & Warm Amber (Template 10)",
    bengaliName: "ম্যারুন ও ওয়ার্ম অ্যাম্বার (১০ম থিম)",
    description: "উষ্ণ অনুভূতি সম্পন্ন ম্যারুন ও উজ্জ্বল অ্যাম্বার কালার কম্বিনেশন",
    primaryColor: "#2E080E", // rich dark maroon
    accentColor: "#FFBF00", // warm amber
    textColor: "#FFFFFF",
    badgeBgColor: "#FFFFFF",
    mottoText: "LEARN TODAY •   • EARN TOMORROW",
    fontFamily: "Inter",
    studentAccountLabel: "STUDENT ACCOUNT"
  }
];

export default function App() {
  // Simple core states
  const [activeTemplate, setActiveTemplate] = useState<number>(1);
  const [studentName, setStudentName] = useState<string>("Jihadul Islam");
  const [studentId, setStudentId] = useState<string>("625352");
  const [teamLeader, setTeamLeader] = useState<string>("Jihadul Islam");

  // Advanced customization states (defaults are loaded automatically from activeTemplate, but can be fine-tuned)
  const [showAdvanced, setShowAdvanced] = useState<boolean>(false);
  const [companyName, setCompanyName] = useState<string>("Unity Earning E-learning Platform");
  const [studentAccountLabel, setStudentAccountLabel] = useState<string>("STUDENT ACCOUNT");
  const [mottoText, setMottoText] = useState<string>("");
  const [monogramLeft, setMonogramLeft] = useState<string>("U");
  const [monogramRight, setMonogramRight] = useState<string>("E");

  // Custom Colors
  const [primaryColor, setPrimaryColor] = useState<string>("#0A1221");
  const [accentColor, setAccentColor] = useState<string>("#D81B1B");
  const [badgeBgColor, setBadgeBgColor] = useState<string>("#FFFFFF");
  const [fontFamily, setFontFamily] = useState<string>("Inter");

  // App feedback
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>("");

  // Sync state values when template changes to keep things exactly "same to same"
  useEffect(() => {
    const t = TEMPLATES.find(x => x.id === activeTemplate);
    if (t) {
      setPrimaryColor(t.primaryColor);
      setAccentColor(t.accentColor);
      setBadgeBgColor(t.badgeBgColor);
      setFontFamily(t.fontFamily);
      setStudentAccountLabel(t.studentAccountLabel);
      setMottoText(t.mottoText);
      setCompanyName("Unity Earning E-learning Platform");
    }
  }, [activeTemplate]);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  // Safe reset back to exact defaults
  const handleReset = () => {
    setStudentName("Jihadul Islam");
    setStudentId("625352");
    setTeamLeader("Jihadul Islam");
    setMonogramLeft("U");
    setMonogramRight("E");
    
    const t = TEMPLATES.find(x => x.id === activeTemplate);
    if (t) {
      setPrimaryColor(t.primaryColor);
      setAccentColor(t.accentColor);
      setBadgeBgColor(t.badgeBgColor);
      setFontFamily(t.fontFamily);
      setStudentAccountLabel(t.studentAccountLabel);
      setMottoText(t.mottoText);
    }
    triggerToast("সকল তথ্য ডিফল্ট সেট করা হয়েছে!");
  };

  // High quality vector-to-PNG download
  const handleDownload = () => {
    setIsExporting(true);
    triggerToast("আপনার লোগো তৈরি হচ্ছে, অনুগ্রহ করে অপেক্ষা করুন...");

    setTimeout(() => {
      try {
        const svgElement = document.getElementById('emblemSvg');
        if (!svgElement) {
          setIsExporting(false);
          return;
        }

        // Clone SVG and set high-res size
        const svgClone = svgElement.cloneNode(true) as SVGElement;
        svgClone.setAttribute('width', '2000');
        svgClone.setAttribute('height', '2000');

        const serializer = new XMLSerializer();
        const svgString = serializer.serializeToString(svgClone);
        
        const canvas = document.createElement('canvas');
        canvas.width = 2000;
        canvas.height = 2000;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          setIsExporting(false);
          return;
        }

        // Fill background white
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, 2000, 2000);

        const img = new Image();
        const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
        const blobUrl = URL.createObjectURL(svgBlob);

        img.onload = () => {
          ctx.drawImage(img, 0, 0, 2000, 2000);
          
          const pngUrl = canvas.toDataURL('image/png');
          const downloadLink = document.createElement('a');
          const cleanFileName = studentName.trim().toLowerCase().replace(/[^a-z0-9]/g, '_');
          downloadLink.download = `unity_earning_logo_${cleanFileName || 'student'}.png`;
          downloadLink.href = pngUrl;
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
          
          URL.revokeObjectURL(blobUrl);
          setIsExporting(false);
          triggerToast("অভিনন্দন! লোগো সফলভাবে ডাউনলোড হয়েছে।");
        };

        img.onerror = () => {
          setIsExporting(false);
          triggerToast("লোগো এক্সপোর্ট করতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।");
        };

        img.src = blobUrl;
      } catch (err) {
        console.error(err);
        setIsExporting(false);
        triggerToast("লোগো এক্সপোর্ট করতে ত্রুটি হয়েছে।");
      }
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#070b13] flex flex-col font-sans text-slate-100 selection:bg-emerald-600 selection:text-white">
      
      {/* Styles & Custom Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;900&family=Inter:wght@400;500;600;700;800;900&family=Montserrat:wght@700;900&family=Space+Grotesk:wght@700&display=swap');
        
        .glow-accent {
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.2);
        }
        .neon-card {
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
      `}</style>

      {/* Main Header */}
      <header className="border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-md px-6 py-4 flex items-center justify-between z-20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-base md:text-lg font-black tracking-tight text-white flex items-center gap-2">
              Unity Earning <span className="text-emerald-400 text-xs px-2 py-0.5 bg-emerald-950/80 border border-emerald-800 rounded-full">লোগো স্টুডিও</span>
            </h1>
            <p className="text-[10.5px] text-slate-400 font-medium">
              আপনার শিক্ষার্থীর তথ্য দিয়ে সেম-টু-সেম প্রফেশনাল লোগো তৈরি করুন
            </p>
          </div>
        </div>

        <button 
          onClick={handleReset}
          className="px-3 py-1.5 text-xs font-bold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-850 rounded-lg border border-slate-800 transition flex items-center gap-1.5"
          title="রিসেট করুন"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">রিসেট (Reset)</span>
        </button>
      </header>

      {/* Main Grid View */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* LEFT COLUMN: Controls - Super Simplified UX */}
        <section className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Card 1: Step 1 Template Selector */}
          <div className="p-5 rounded-2xl neon-card">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xs font-bold">১</span>
              <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
                লোগো ডিজাইন সিলেক্ট করুন (Choose Template)
              </h2>
            </div>
            <p className="text-[11px] text-slate-400 mb-4">
              নিচের ১০টি চমৎকার ডিজাইনের যেকোনো ১টি সিলেক্ট করুন যা আপনার ছবির সাথে শতভাগ মিলবে:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {TEMPLATES.map((t) => {
                const isSelected = activeTemplate === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setActiveTemplate(t.id)}
                    className={`relative p-3.5 rounded-xl border text-left transition duration-200 flex flex-col justify-between overflow-hidden group ${
                      isSelected 
                        ? 'bg-gradient-to-b from-slate-900 to-slate-950 border-emerald-500 shadow-lg shadow-emerald-950/40 glow-accent' 
                        : 'bg-slate-950/40 border-slate-850 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-1.5">
                      <span className={`text-[9.5px] font-extrabold px-1.5 py-0.5 rounded ${
                        isSelected ? 'bg-emerald-950/80 text-emerald-400' : 'bg-slate-900 text-slate-400'
                      }`}>
                        ডিজাইন #{t.id}
                      </span>
                      <span 
                        className="w-4.5 h-4.5 rounded-full border border-white/20 shadow-inner flex items-center justify-center"
                        style={{ background: `linear-gradient(135deg, ${t.primaryColor} 50%, ${t.accentColor} 50%)` }}
                      />
                    </div>
                    
                    <div>
                      <h4 className="text-xs font-black text-white group-hover:text-emerald-400 transition-colors">
                        {t.bengaliName}
                      </h4>
                      <p className="text-[10px] text-slate-400 leading-relaxed mt-1">
                        {t.name}
                      </p>
                    </div>

                    {isSelected && (
                      <div className="absolute top-0 right-0 w-6 h-6 bg-emerald-500 rounded-bl-lg flex items-center justify-center text-white">
                        <Check className="w-3.5 h-3.5 font-bold" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Card 2: Step 2 Inputs */}
          <div className="p-5 rounded-2xl neon-card">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xs font-bold">২</span>
              <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
                শিক্ষার্থীর তথ্য দিন (Student Info)
              </h2>
            </div>
            <p className="text-[11px] text-slate-400 mb-4">
              নিচে আপনার শিক্ষার্থীর সঠিক নাম, আইডি এবং টিম লিডারের নাম লিখুন:
            </p>

            <div className="space-y-4">
              {/* Name */}
              <div className="space-y-1.5">
                <label htmlFor="stName" className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-emerald-500" />
                  <span>শিক্ষার্থীর নাম (Student Name)</span>
                </label>
                <input
                  id="stName"
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="যেমন: Jihadul Islam"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30 focus:outline-none text-slate-100 font-medium"
                />
              </div>

              {/* ID and TL in two columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="stId" className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
                    <IdCard className="w-3.5 h-3.5 text-emerald-500" />
                    <span>আইডি নাম্বার (Student ID)</span>
                  </label>
                  <input
                    id="stId"
                    type="text"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    placeholder="যেমন: 625352"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30 focus:outline-none text-slate-100 font-bold tracking-wider"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="stTL" className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-emerald-500" />
                    <span>টিম লিডার (TL Name)</span>
                  </label>
                  <input
                    id="stTL"
                    type="text"
                    value={teamLeader}
                    onChange={(e) => setTeamLeader(e.target.value)}
                    placeholder="যেমন: Lamia Bithi"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30 focus:outline-none text-slate-100 font-medium"
                  />
                </div>
              </div>
            </div>

            {/* Main Action Download Button */}
            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <button
                onClick={handleDownload}
                disabled={isExporting}
                className="w-full py-4 px-5 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 disabled:from-emerald-850 disabled:to-emerald-900 disabled:opacity-60 text-white text-sm font-black rounded-xl shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2 transform active:scale-[0.99] transition duration-150"
              >
                <Download className="w-4.5 h-4.5 animate-bounce" />
                <span>লোগো ডাউনলোড করুন (Download HQ PNG)</span>
              </button>
              <p className="text-[10px] text-slate-400 text-center mt-2.5">
                * ডাউনলোড করার পর আপনার গ্যালারিতে ২০০০x২০০০ পিক্সেলের প্রফেশনাল প্রিন্ট কোয়ালিটি লোগো পাবেন।
              </p>
            </div>
          </div>

          {/* Card 3: Collapsible Advanced Options */}
          <div className="rounded-2xl neon-card overflow-hidden">
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="w-full px-5 py-4 bg-slate-950/60 hover:bg-slate-950/90 border-b border-slate-850 flex items-center justify-between transition"
            >
              <div className="flex items-center gap-2">
                <Settings className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold text-slate-300">উন্নত এডিট অপশন (Advanced Fine-tuning)</span>
              </div>
              <span className="text-[10px] bg-slate-900 text-slate-400 px-2 py-1 rounded">
                {showAdvanced ? "হাইড করুন" : "দেখুন"}
              </span>
            </button>

            {showAdvanced && (
              <div className="p-5 space-y-4 bg-slate-950/20">
                <div className="space-y-1.5">
                  <label htmlFor="compName" className="text-[11px] font-bold text-slate-400">কোম্পানির নাম (Top Arched Title)</label>
                  <input
                    id="compName"
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-300 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label htmlFor="stAcc" className="text-[11px] font-bold text-slate-400">অ্যাকাউন্ট টাইপ (Pill Text)</label>
                    <input
                      id="stAcc"
                      type="text"
                      value={studentAccountLabel}
                      onChange={(e) => setStudentAccountLabel(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-300 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="motto" className="text-[11px] font-bold text-slate-400">স্লোগান / মটো (Motto Text)</label>
                    <input
                      id="motto"
                      type="text"
                      value={mottoText}
                      onChange={(e) => setMottoText(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-300 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label htmlFor="monoL" className="text-[11px] font-bold text-slate-400">মনোগ্রাম বাম (Left letter)</label>
                    <input
                      id="monoL"
                      type="text"
                      maxLength={1}
                      value={monogramLeft}
                      onChange={(e) => setMonogramLeft(e.target.value.toUpperCase())}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-center font-bold text-slate-300 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="monoR" className="text-[11px] font-bold text-slate-400">মনোগ্রাম ডান (Right letter)</label>
                    <input
                      id="monoR"
                      type="text"
                      maxLength={1}
                      value={monogramRight}
                      onChange={(e) => setMonogramRight(e.target.value.toUpperCase())}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-center font-bold text-slate-300 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400">মূল রঙ (Primary Color)</label>
                    <div className="flex gap-2">
                      <input 
                        type="color" 
                        value={primaryColor} 
                        onChange={(e) => setPrimaryColor(e.target.value)}
                        className="w-8 h-8 rounded border border-slate-700 bg-transparent cursor-pointer"
                      />
                      <input 
                        type="text" 
                        value={primaryColor.toUpperCase()}
                        onChange={(e) => setPrimaryColor(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded px-2 text-xs font-mono text-slate-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400">অ্যাকসেন্ট রঙ (Accent Color)</label>
                    <div className="flex gap-2">
                      <input 
                        type="color" 
                        value={accentColor} 
                        onChange={(e) => setAccentColor(e.target.value)}
                        className="w-8 h-8 rounded border border-slate-700 bg-transparent cursor-pointer"
                      />
                      <input 
                        type="text" 
                        value={accentColor.toUpperCase()}
                        onChange={(e) => setAccentColor(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded px-2 text-xs font-mono text-slate-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

        </section>

        {/* RIGHT COLUMN: Pixel-perfect circular live SVG vector logo preview */}
        <section className="lg:col-span-7 flex flex-col items-center justify-center">
          
          <div className="w-full max-w-lg">
            
            {/* Header info */}
            <div className="flex justify-between items-center mb-3 px-2">
              <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>লাইভ প্রিভিউ (Live Preview)</span>
              </span>
              <span className="text-[11.5px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 border border-emerald-800 rounded font-bold">
                HD VECTOR
              </span>
            </div>

            {/* Canvas Outer Frame with glass-morphism panel */}
            <div className="w-full p-4 md:p-8 rounded-[32px] bg-gradient-to-b from-[#0e172a] to-[#080d1a] border border-slate-800/80 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center">
              
              {/* Backglow decor */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-emerald-500/5 filter blur-3xl" />

              {/* Central Badge Box */}
              <div 
                id="preview-box" 
                className="w-full aspect-square relative max-w-[420px] mx-auto rounded-full overflow-hidden select-none"
                style={{ filter: `drop-shadow(0 20px 40px rgba(0,0,0,0.5))` }}
              >
                
                {/* Master SVG File mimicking all four original images with exact replication */}
                <svg 
                  id="emblemSvg" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 1000 1000" 
                  width="100%" 
                  height="100%"
                  className="block select-none"
                >
                  <defs>
                    <filter id="badgeGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="12" stdDeviation="15" floodColor="#000000" floodOpacity="0.4" />
                    </filter>
                    
                    <clipPath id="badgeCircleClip">
                      <circle cx="500" cy="500" r="442" />
                    </clipPath>
                    
                    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFF3A8" />
                      <stop offset="50%" stopColor="#C59B27" />
                      <stop offset="100%" stopColor="#84620D" />
                    </linearGradient>

                    <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1E3E62" />
                      <stop offset="100%" stopColor="#050C1B" />
                    </linearGradient>

                    <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#4C1D95" />
                    </linearGradient>
                    
                    <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#EF4444" />
                      <stop offset="100%" stopColor="#7F1D1D" />
                    </linearGradient>

                    <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="#064E3B" />
                    </linearGradient>

                    <linearGradient id="tealGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#14B8A6" />
                      <stop offset="100%" stopColor="#115E59" />
                    </linearGradient>
                  </defs>

                  {/* Outer Rings matched exactly to each image */}
                  <g filter="url(#badgeGlow)">
                    {/* Ring 1 (outermost border) */}
                    <circle cx="500" cy="500" r="475" fill="none" stroke={accentColor} strokeWidth="12" />
                    {/* Ring 2 (accent highlight) */}
                    <circle cx="500" cy="500" r="463" fill="none" stroke={primaryColor} strokeWidth="4" />
                    {/* Ring 3 (white divider ring) */}
                    <circle cx="500" cy="500" r="459" fill="none" stroke="#FFFFFF" strokeWidth="4" />
                    {/* Ring 4 (primary inner border) */}
                    <circle cx="500" cy="500" r="450" fill="none" stroke={accentColor} strokeWidth="10" />
                    {/* Ring 5 (thin divider) */}
                    <circle cx="500" cy="500" r="442" fill="none" stroke="#FFFFFF" strokeWidth="2" />
                  </g>

                  {/* Inside Clipped Circle Contents */}
                  <g clipPath="url(#badgeCircleClip)">
                    
                    {/* White Upper background */}
                    <rect x="50" y="50" width="900" height="900" fill={badgeBgColor} />

                    {/* ARCHED COMPASS HEADING TEXT PATH */}
                    <path id="textPathTop" d="M 140 500 A 360 360 0 0 1 860 500" fill="none" stroke="none" />
                    
                    {/* Symmetrical Flanking Stars/Icons in the white margin */}
                    <g fill={accentColor}>
                      <polygon points="120,455 123,464 132,464 125,469 127,478 120,472 113,478 115,469 108,464 117,464" />
                      <polygon points="880,455 883,464 892,464 885,469 887,478 880,472 873,478 875,469 868,464 877,464" />
                    </g>

                    {/* Symmetrical lines on side of arches like in original photos */}
                    {activeTemplate !== 4 && activeTemplate !== 7 && activeTemplate !== 10 && (
                      <g stroke={accentColor} strokeWidth="2.5" opacity="0.8">
                        <path d="M 100 425 Q 90 350 115 300" fill="none" />
                        <path d="M 900 425 Q 910 350 885 300" fill="none" />
                      </g>
                    )}

                    {/* Curved Top Headline styled with exact dual-tone matching original images */}
                    <text fontFamily={fontFamily} fontSize="44" fontWeight="900" letterSpacing="0.2">
                      <textPath href="#textPathTop" startOffset="50%" textAnchor="middle">
                        <tspan fill={accentColor}>Unity Earning </tspan>
                        <tspan fill={primaryColor}>E-learning Platform</tspan>
                      </textPath>
                    </text>

                    {/* === MIDDLE DIVIDERS & BOTTOM BACKGROUND === */}
                    
                    {(activeTemplate === 1 || activeTemplate === 5) && (
                      <>
                        {/* Straight divider matching Image 1 */}
                        <path d="M -50 535 L 1050 535 L 1050 1050 L -50 1050 Z" fill={primaryColor} />
                        <rect x="50" y="532" width="900" height="6" fill={accentColor} />
                        
                        {/* Side wings / diagonal speed stripes like in Image 1 */}
                        <path d="M 120 560 L 190 620 L 160 635 L 90 575 Z" fill={accentColor} opacity="0.8" />
                        <path d="M 140 590 L 210 650 L 180 665 L 110 605 Z" fill={accentColor} opacity="0.5" />
                        
                        <path d="M 880 560 L 810 620 L 840 635 L 910 575 Z" fill={accentColor} opacity="0.8" />
                        <path d="M 860 590 L 790 650 L 820 665 L 890 605 Z" fill={accentColor} opacity="0.5" />
                      </>
                    )}

                    {(activeTemplate === 2 || activeTemplate === 6 || activeTemplate === 8) && (
                      <>
                        {/* Wavy curve matching Image 2 */}
                        <path d="M -50 525 Q 250 575 500 520 T 1050 530 L 1050 1050 L -50 1050 Z" fill={primaryColor} />
                        <path d="M -50 525 Q 250 575 500 520 T 1050 530" fill="none" stroke={accentColor} strokeWidth="5" />
                        <path d="M -50 520 Q 250 570 500 515 T 1050 525" fill="none" stroke="#FFFFFF" strokeWidth="2.5" />

                        {/* Side wings matching the wavy style */}
                        <path d="M 120 570 Q 180 600 150 630 Q 110 600 120 570 Z" fill={accentColor} opacity="0.85" />
                        <path d="M 880 570 Q 820 600 850 630 Q 890 600 880 570 Z" fill={accentColor} opacity="0.85" />
                      </>
                    )}

                    {(activeTemplate === 3 || activeTemplate === 9) && (
                      <>
                        {/* Fancy split-level curve matching Image 3 */}
                        <path d="M -50 540 C 250 590 350 490 500 545 C 650 600 750 490 1050 540 L 1050 1050 L -50 1050 Z" fill={primaryColor} />
                        <path d="M -50 540 C 250 590 350 490 500 545 C 650 600 750 490 1050 540" fill="none" stroke={accentColor} strokeWidth="5" />
                        <path d="M -50 534 C 250 584 350 484 500 539 C 650 594 750 484 1050 534" fill="none" stroke="#FFFFFF" strokeWidth="2.5" />
                        
                        {/* Gold side stripes */}
                        <path d="M 110 565 L 180 625 L 150 640 L 80 580 Z" fill={accentColor} opacity="0.75" />
                        <path d="M 890 565 L 820 625 L 850 640 L 920 580 Z" fill={accentColor} opacity="0.75" />
                      </>
                    )}

                    {(activeTemplate === 4 || activeTemplate === 7 || activeTemplate === 10) && (
                      <>
                        {/* Elegant wave with side sports stripes matching Image 4 */}
                        <path d="M -50 525 C 200 485 400 555 500 535 C 600 515 800 565 1050 525 L 1050 1050 L -50 1050 Z" fill={primaryColor} />
                        <path d="M -50 525 C 200 485 400 555 500 535 C 600 515 800 565 1050 525" fill="none" stroke={accentColor} strokeWidth="8" />
                        
                        {/* Side diagonal speed stripes */}
                        <path d="M 120 560 L 190 620 L 160 635 L 90 575 Z" fill={accentColor} opacity="0.8" />
                        <path d="M 140 590 L 210 650 L 180 665 L 110 605 Z" fill={accentColor} opacity="0.5" />
                        
                        <path d="M 880 560 L 810 620 L 840 635 L 910 575 Z" fill={accentColor} opacity="0.8" />
                        <path d="M 860 590 L 790 650 L 820 665 L 890 605 Z" fill={accentColor} opacity="0.5" />
                      </>
                    )}


                    {/* === CENTRAL LOGO ELEMENT GRAPHICS === */}

                    {/* Ornate side vertical laurels for Template 4, 7, 9 & 10 */}
                    {(activeTemplate === 4 || activeTemplate === 7 || activeTemplate === 9 || activeTemplate === 10) && (
                      <g fill="none" stroke={accentColor} strokeWidth="1.5" opacity="0.9">
                        <path d="M 270 360 C 240 340 240 300 250 265" strokeWidth="3" />
                        <path d="M 245 330 Q 215 320 225 300 Q 255 310 245 330" fill={accentColor} />
                        <path d="M 240 290 Q 210 280 220 260 Q 250 270 240 290" fill={accentColor} />
                        
                        <path d="M 730 360 C 760 340 760 300 750 265" strokeWidth="3" />
                        <path d="M 755 330 Q 785 320 775 300 Q 745 310 755 330" fill={accentColor} />
                        <path d="M 760 290 Q 790 280 780 260 Q 750 270 760 290" fill={accentColor} />
                      </g>
                    )}

                    {/* 1. GRADUATION CAP */}
                    <g id="gradCap">
                      {/* Diamond top plate */}
                      <polygon points="500,155 680,210 500,265 320,210" fill={primaryColor} stroke={accentColor} strokeWidth="4.5" />
                      <polygon points="500,165 655,210 500,255 345,210" fill={(activeTemplate === 4 || activeTemplate === 7) ? "url(#purpleGradient)" : (activeTemplate === 9) ? "url(#greenGradient)" : (activeTemplate === 8) ? "url(#tealGradient)" : (activeTemplate === 10) ? "url(#redGradient)" : "url(#blueGradient)"} />
                      
                      {/* Cap headband base */}
                      <path d="M 405 238 L 405 272 Q 500 315 595 272 L 595 238 Q 500 272 405 238 Z" fill={primaryColor} stroke={accentColor} strokeWidth="3" />
                      <path d="M 412 242 L 412 265 Q 500 305 588 265 L 588 242 Q 500 268 412 242 Z" fill={(activeTemplate === 4 || activeTemplate === 7) ? "url(#purpleGradient)" : (activeTemplate === 9) ? "url(#greenGradient)" : (activeTemplate === 8) ? "url(#tealGradient)" : (activeTemplate === 10) ? "url(#redGradient)" : "url(#blueGradient)"} opacity="0.9" />
                      
                      {/* Tassel */}
                      <path d="M 500 210 Q 610 205 625 240 L 625 310" fill="none" stroke={accentColor} strokeWidth="4" strokeLinecap="round" />
                      <polygon points="618,310 632,310 635,330 625,340 615,330" fill={accentColor} />
                    </g>

                    {/* 2. THE MONOGRAM LETTERS 'U' & 'E' WITH RAPID CRESCENT SWOOSH */}
                    <g id="monogram">
                      {/* 'U' character in Primary Theme color */}
                      <text x="445" y="420" fontFamily="'Montserrat', 'Inter', sans-serif" fontSize="150" fontWeight="900" fill={activeTemplate === 1 ? "#0A1221" : primaryColor} textAnchor="middle">
                        {monogramLeft}
                      </text>
                      {/* 'E' character in Accent Theme color */}
                      <text x="555" y="420" fontFamily="'Montserrat', 'Inter', sans-serif" fontSize="150" fontWeight="900" fill={accentColor} textAnchor="middle">
                        {monogramRight}
                      </text>
                      
                      {/* Crescent wrapper dynamic swoosh ring - tightly centered */}
                      <path d="M 290 365 Q 310 475 495 475 Q 640 475 710 355 Q 610 435 495 435 Q 345 435 290 365 Z" fill={accentColor} />
                    </g>

                    {/* 3. STYLIZED OPEN BOOK (COMPACT & DESIGNER STYLE) */}
                    <g id="openBook">
                      {/* 3D-effect Outer Hardcover (Thick & Premium) */}
                      <path d="M 500 513 Q 420 470 335 487 L 335 523 Q 420 506 500 543 Z" fill={primaryColor} stroke={accentColor} strokeWidth="3" />
                      <path d="M 500 513 Q 580 470 665 487 L 665 523 Q 580 506 500 543 Z" fill={primaryColor} stroke={accentColor} strokeWidth="3" />
                      
                      {/* Stacked pages (Bottom layer - subtle grey-gold) */}
                      <path d="M 500 510 Q 420 472 342 489 L 342 519 Q 420 502 500 538 Z" fill="#E5E7EB" opacity="0.9" />
                      <path d="M 500 510 Q 580 472 658 489 L 658 519 Q 580 502 500 538 Z" fill="#E5E7EB" opacity="0.9" />
                      
                      {/* Top pages (Crisp white with thin premium stroke) */}
                      <path d="M 500 507 Q 420 469 346 486 L 346 515 Q 420 498 500 533 Z" fill="#FFFFFF" stroke={primaryColor} strokeWidth="1.2" strokeOpacity="0.25" />
                      <path d="M 500 507 Q 580 469 654 486 L 654 515 Q 580 498 500 533 Z" fill="#FFFFFF" stroke={primaryColor} strokeWidth="1.2" strokeOpacity="0.25" />
                      
                      {/* Stylized text/lines inside pages */}
                      <path d="M 370 498 Q 420 488 470 498" fill="none" stroke={primaryColor} strokeWidth="1.8" strokeOpacity="0.25" strokeDasharray="3 3" />
                      <path d="M 370 506 Q 420 496 470 506" fill="none" stroke={primaryColor} strokeWidth="1.8" strokeOpacity="0.25" strokeDasharray="3 3" />
                      
                      <path d="M 530 498 Q 580 488 630 498" fill="none" stroke={primaryColor} strokeWidth="1.8" strokeOpacity="0.25" strokeDasharray="3 3" />
                      <path d="M 530 506 Q 580 496 630 506" fill="none" stroke={primaryColor} strokeWidth="1.8" strokeOpacity="0.25" strokeDasharray="3 3" />
                      
                      {/* Beautifully curved center binding spine shadow */}
                      <path d="M 497 507 Q 500 505 503 507 L 503 533 Q 500 531 497 533 Z" fill={accentColor} opacity="0.5" />
                      
                      {/* Elegant central hanging ribbon bookmark */}
                      <path d="M 495 507 L 505 507 L 507 548 L 500 541 L 493 548 Z" fill={accentColor} />
                    </g>

                    {/* Motto Text Bar under book */}
                    {activeTemplate !== 1 && (
                      <g id="mottoGroup">
                        {(activeTemplate === 2 || activeTemplate === 5 || activeTemplate === 6) && (
                          <>
                            <line x1="160" y1="565" x2="270" y2="565" stroke={accentColor} strokeWidth="2.5" />
                            <text x="500" y="573" fontFamily="'Inter', sans-serif" fontSize="20" fontWeight="900" fill={primaryColor} letterSpacing="4" textAnchor="middle">
                              {mottoText}
                            </text>
                            <line x1="730" y1="565" x2="840" y2="565" stroke={accentColor} strokeWidth="2.5" />
                          </>
                        )}

                        {activeTemplate === 3 && (
                          <>
                            <line x1="140" y1="565" x2="270" y2="565" stroke={accentColor} strokeWidth="3" />
                            <text x="500" y="573" fontFamily="'Inter', sans-serif" fontSize="20" fontWeight="900" fill={primaryColor} letterSpacing="3" textAnchor="middle">
                              {mottoText}
                            </text>
                            <line x1="730" y1="565" x2="860" y2="565" stroke={accentColor} strokeWidth="3" />
                          </>
                        )}

                        {(activeTemplate === 4 || activeTemplate === 7) && (
                          <>
                            <line x1="120" y1="565" x2="290" y2="565" stroke={accentColor} strokeWidth="3" />
                            <line x1="710" y1="565" x2="880" y2="565" stroke={accentColor} strokeWidth="3" />
                            
                            <text x="500" y="572" fontFamily="'Inter', sans-serif" fontSize="20" fontWeight="900" fill={primaryColor} letterSpacing="3" textAnchor="middle">
                              {mottoText}
                            </text>

                            {/* Center fancy medal with open book & torch */}
                            <g>
                              <circle cx="500" cy="565" r="42" fill={primaryColor} stroke={accentColor} strokeWidth="3.5" />
                              <circle cx="500" cy="565" r="35" fill="#FFFFFF" />
                              {/* Torch base */}
                              <path d="M 495 572 L 505 572 L 502 585 L 498 585 Z" fill={primaryColor} />
                              {/* Open book */}
                              <path d="M 500 568 Q 485 558 475 561 L 475 572 Q 485 570 500 575 Z" fill={primaryColor} />
                              <path d="M 500 568 Q 515 558 525 561 L 525 572 Q 515 570 500 575 Z" fill={primaryColor} />
                              {/* Flame */}
                              <path d="M 500 544 Q 488 554 496 564 Q 500 568 500 568 Q 500 568 504 568 Q 512 554 500 544 Z" fill={accentColor} />
                              <path d="M 500 549 Q 492 557 497 564 Q 500 566 500 566 Q 500 566 503 566 Q 508 557 500 549 Z" fill="#EF4444" />
                            </g>
                          </>
                        )}
                      </g>
                    )}


                    {/* === STUDENT ACCOUNT PILL BADGE === */}
                    <g id="pillBadge">
                      {/* Left and right decor lines with dots (only for templates that do not use full edge-to-edge laurels) */}
                      {(activeTemplate !== 4 && activeTemplate !== 7) && (
                        <g>
                          <line x1="170" y1="625" x2="270" y2="625" stroke={accentColor} strokeWidth="3" />
                          <circle cx="160" cy="625" r="5" fill={accentColor} />
                          <circle cx="280" cy="625" r="4.5" fill="#FFFFFF" />

                          <line x1="730" y1="625" x2="830" y2="625" stroke={accentColor} strokeWidth="3" />
                          <circle cx="840" cy="625" r="5" fill={accentColor} />
                          <circle cx="720" cy="625" r="4.5" fill="#FFFFFF" />
                        </g>
                      )}

                      {/* Pill Background */}
                      <rect 
                        x="295" 
                        y="595" 
                        width="410" 
                        height="60" 
                        rx="30" 
                        fill={(activeTemplate === 4 || activeTemplate === 7) ? primaryColor : accentColor} 
                        stroke={(activeTemplate === 4 || activeTemplate === 7) ? accentColor : "#FFFFFF"} 
                        strokeWidth="3.5" 
                      />
                      
                      {/* Pill Text */}
                      <text 
                        x="500" 
                        y="637" 
                        fontFamily={fontFamily} 
                        fontSize="30" 
                        fontWeight="900" 
                        fill="#FFFFFF" 
                        textAnchor="middle" 
                        letterSpacing="1"
                      >
                        {studentAccountLabel}
                      </text>
                    </g>


                    {/* === PROFILE DATA ROWS === */}
                    <g id="profileData">
                      
                      {/* Row 1: Student Name */}
                      <g>
                        {/* Perfect White-filled circular background with accent border */}
                        <circle cx="280" cy="695" r="32" fill="#FFFFFF" stroke={accentColor} strokeWidth="3" />
                        {/* User Silhouette symbol inside */}
                        <circle cx="280" cy="685" r="11" fill={primaryColor} />
                        <path d="M 258 715 C 258 701, 268 698, 280 698 C 292 698, 302 701, 302 715 Z" fill={primaryColor} />
                        
                        <line x1="330" y1="675" x2="330" y2="715" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.8" />
                        
                        <text x="350" y="705" fontFamily="'Inter', sans-serif" fontSize="32" fontWeight="bold" fill="#FFFFFF">
                          Name : <tspan fill={accentColor} fontWeight="900">{studentName || "Jihadul Islam"}</tspan>
                        </text>

                        {/* Pixel-perfect Accent colored line with terminal solid circle/dot on the right */}
                        <line x1="330" y1="735" x2="740" y2="735" stroke={accentColor} strokeWidth="3.5" opacity="0.9" />
                        <circle cx="740" cy="735" r="7" fill={accentColor} />
                      </g>

                      {/* Row 2: Student ID */}
                      <g>
                        {/* Perfect White-filled circular background with accent border */}
                        <circle cx="280" cy="770" r="32" fill="#FFFFFF" stroke={accentColor} strokeWidth="3" />
                        {/* ID card symbol inside */}
                        <rect x="260" y="756" width="40" height="28" rx="4" fill={primaryColor} />
                        <rect x="264" y="760" width="10" height="10" fill="#FFFFFF" />
                        <line x1="278" y1="763" x2="294" y2="763" stroke="#FFFFFF" strokeWidth="2.5" />
                        <line x1="278" y1="769" x2="294" y2="769" stroke="#FFFFFF" strokeWidth="2.5" />
                        <line x1="264" y1="776" x2="294" y2="776" stroke="#FFFFFF" strokeWidth="2.5" />

                        <line x1="330" y1="750" x2="330" y2="790" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.8" />

                        <text x="350" y="780" fontFamily="'Inter', sans-serif" fontSize="32" fontWeight="bold" fill="#FFFFFF">
                          ID : <tspan fill={accentColor} fontWeight="900">{studentId || "625352"}</tspan>
                        </text>

                        {/* Pixel-perfect Accent colored line with terminal solid circle/dot on the right */}
                        <line x1="330" y1="810" x2="740" y2="810" stroke={accentColor} strokeWidth="3.5" opacity="0.9" />
                        <circle cx="740" cy="810" r="7" fill={accentColor} />
                      </g>

                      {/* Row 3: Team Leader */}
                      <g>
                        {/* Perfect White-filled circular background with accent border */}
                        <circle cx="280" cy="845" r="32" fill="#FFFFFF" stroke={accentColor} strokeWidth="3" />
                        {/* Leader silhouette & leader star inside */}
                        <circle cx="280" cy="835" r="10" fill={primaryColor} />
                        <path d="M 260 863 C 260 851, 269 847, 280 847 C 291 847, 300 851, 300 863 Z" fill={primaryColor} />
                        <polygon points="280,849 283,855 289,855 284,859 286,865 280,861 274,865 276,859 271,855 277,855" fill="#FFFFFF" />

                        <line x1="330" y1="825" x2="330" y2="865" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.8" />

                        <text x="350" y="855" fontFamily="'Inter', sans-serif" fontSize="32" fontWeight="bold" fill="#FFFFFF">
                          TL : <tspan fill={accentColor} fontWeight="900">{teamLeader || "Jihadul Islam"}</tspan>
                        </text>
                      </g>
                    </g>


                    {/* === BOTTOM DECORATIONS === */}
                    {(activeTemplate === 1 || activeTemplate === 5) && (
                      <g id="bottomDecorT1">
                        <polygon points="500,905 506,919 519,919 508,927 512,940 500,931 488,940 492,927 481,919 494,919" fill={accentColor} />
                        <circle cx="472" cy="927" r="4.5" fill={accentColor} />
                        <circle cx="528" cy="927" r="4.5" fill={accentColor} />

                        {/* White leaves curving up on bottom */}
                        <g fill={accentColor} opacity="0.95">
                          <path d="M 430 923 Q 395 913 360 928 Q 395 933 430 923 Z" />
                          <path d="M 405 913 Q 375 895 340 905 Q 370 915 405 913 Z" />
                          <path d="M 375 903 Q 350 881 315 885 Q 340 898 375 903 Z" />
                        </g>
                        <g fill={accentColor} opacity="0.95">
                          <path d="M 570 923 Q 605 913 640 928 Q 605 933 570 923 Z" />
                          <path d="M 595 913 Q 625 895 660 905 Q 630 915 595 913 Z" />
                          <path d="M 625 903 Q 650 881 685 885 Q 660 898 625 903 Z" />
                        </g>
                      </g>
                    )}

                    {(activeTemplate === 2 || activeTemplate === 6) && (
                      <g id="bottomDecorT2">
                        {/* Green star and emerald leaves matching Image 2 */}
                        <polygon points="500,905 506,919 519,919 508,927 512,940 500,931 488,940 492,927 481,919 494,919" fill={accentColor} />
                        <polygon points="450,920 452,927 459,927 453,931 455,938 450,933 445,938 447,931 441,927 448,927" fill="#FFFFFF" />
                        <polygon points="550,920 552,927 559,927 553,931 555,938 550,933 545,938 547,931 541,927 548,927" fill="#FFFFFF" />
                        
                        <g fill={accentColor}>
                          <path d="M 430 923 Q 395 913 360 928 Q 395 933 430 923 Z" />
                          <path d="M 405 913 Q 375 895 340 905 Q 370 915 405 913 Z" />
                        </g>
                        <g fill={accentColor}>
                          <path d="M 570 923 Q 605 913 640 928 Q 605 933 570 923 Z" />
                          <path d="M 595 913 Q 625 895 660 905 Q 630 915 595 913 Z" />
                        </g>
                      </g>
                    )}

                    {activeTemplate === 3 && (
                      <g id="bottomDecorT3">
                        {/* Gold star and gold leaf laurels matching Image 3 */}
                        <polygon points="500,905 506,919 519,919 508,927 512,940 500,931 488,940 492,927 481,919 494,919" fill={accentColor} />
                        
                        <g fill={accentColor}>
                          <path d="M 430 923 Q 395 913 360 928 Q 395 933 430 923 Z" />
                          <path d="M 405 913 Q 375 895 340 905 Q 370 915 405 913 Z" />
                          <path d="M 375 903 Q 350 881 315 885 Q 340 898 375 903 Z" />
                        </g>
                        <g fill={accentColor}>
                          <path d="M 570 923 Q 605 913 640 928 Q 605 933 570 923 Z" />
                          <path d="M 595 913 Q 625 895 660 905 Q 630 915 595 913 Z" />
                          <path d="M 625 903 Q 650 881 685 885 Q 660 898 625 903 Z" />
                        </g>
                      </g>
                    )}

                    {(activeTemplate === 4 || activeTemplate === 7) && (
                      <g id="bottomDecorT4">
                        {/* Center gold/purple shield with star & ornate scrolls matching Image 4 */}
                        <g>
                          <path d="M 500 890 C 522 890 535 905 535 922 C 535 940 500 955 500 955 C 500 955 465 940 465 922 C 465 905 478 890 500 890 Z" fill={accentColor} />
                          <path d="M 500 895 C 517 895 527 907 527 920 C 527 934 500 947 500 947 C 500 947 473 934 473 920 C 473 907 483 895 500 895 Z" fill={primaryColor} />
                          <polygon points="500,904 503,912 511,912 505,917 507,925 500,920 493,925 495,917 489,912 497,912" fill="#FFFFFF" />
                        </g>

                        {/* Golden scrolls flanking shield */}
                        <g stroke={accentColor} strokeWidth="3" fill="none">
                          <path d="M 450 935 Q 420 945 390 925 T 350 915" />
                          <path d="M 550 935 Q 580 945 610 925 T 650 915" />
                          {/* Curly scrolls */}
                          <path d="M 430 930 C 410 910 420 895 440 900" />
                          <path d="M 570 930 C 590 910 580 895 560 900" />
                        </g>
                      </g>
                    )}

                  </g>
                </svg>

              </div>

              {/* Tips for users */}
              <div className="mt-4 text-center">
                <span className="text-[10px] text-slate-400 font-medium leading-relaxed max-w-xs block mx-auto">
                  টিপস: উপরের ডিজাইনে পরিবর্তনের সাথে সাথে লাইভ প্রিভিউ অটোমেটিক আপডেট হয়ে যায়।
                </span>
              </div>

            </div>
          </div>

        </section>

      </main>

      {/* Realtime Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 p-4 rounded-xl border border-emerald-500/30 bg-slate-950/95 shadow-2xl flex items-center gap-3 max-w-sm z-50 animate-fade-in">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs font-bold text-white">{toastMessage}</p>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950/40 py-4 text-center text-xs text-slate-500 font-medium">
        © ২০২৬ Unity Earning E-learning Platform • All Rights Reserved.
      </footer>

    </div>
  );
}
