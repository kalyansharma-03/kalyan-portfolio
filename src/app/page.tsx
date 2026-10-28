"use client";

import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowUpRight, ArrowRight, Menu, X, MapPin, MountainSnow, HeartPulse, Landmark, Workflow, Code2, Database, Layers, ExternalLink, Search, XCircle, Compass, Flag, Sparkles, Moon, Sun, Copy, Check, Volume2, VolumeX, FileText, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contact = {
  email: "sharmakalyan25@gmail.com",
  github: "https://github.com/kalyansharma-03",
  linkedin: "https://www.linkedin.com/in/kalyan-sharma/",
};
const skills = ["C# / .NET", "ASP.NET MVC", "React", "TypeScript", "SQL", "Entity Framework", "REST APIs", "Git", "Next.js"];
const skillDetails: Record<string, string> = {
  "C# / .NET": "Backend services, domain logic, and enterprise APIs.",
  "ASP.NET MVC": "Server-rendered workflows and maintainable web applications.",
  React: "Responsive interfaces and interactive product experiences.",
  TypeScript: "Safer front-end code and reliable component contracts.",
  SQL: "Queries, data models, and database-backed features.",
  "Entity Framework": "Data access and ORM-backed application development.",
  "REST APIs": "Service integration and HTTP API design.",
  Git: "Version control and collaborative code reviews.",
  "Next.js": "Modern React sites with strong performance and SEO foundations.",
};
const trailStops = [
  { title: "Base Camp", elevation: "01 / THE FOUNDATION", fact: "I build across the stack — from C# and .NET services to React interfaces.", detail: "A good expedition starts with solid foundations. So does good software." },
  { title: "The Ridge", elevation: "02 / THE CHALLENGE", fact: "My work spans healthcare, banking, and enterprise collaboration products.", detail: "Different terrain, same approach: thoughtful problem-solving." },
  { title: "The Summit", elevation: "03 / THE VIEW", fact: "I'm always learning new tools and ways to make software more reliable and useful.", detail: "The best part of reaching a summit? Discovering the next one." },
];
const quizQuestions = [
  { prompt: "Which technology is the backbone of my backend toolkit?", options: ["C# / .NET", "Ruby on Rails", "Go"], answer: "C# / .NET", note: "That's it — C# and .NET are a big part of my backend work." },
  { prompt: "Which library do I use to build interactive interfaces?", options: ["React", "jQuery", "Svelte"], answer: "React", note: "Correct — React is one of my go-to tools for user interfaces." },
  { prompt: "Where am I based?", options: ["Kathmandu, Nepal", "Toronto, Canada", "Oslo, Norway"], answer: "Kathmandu, Nepal", note: "You got it — I work from Kathmandu, Nepal." },
];
const projects = [
  { no: "01", icon: HeartPulse, name: "Healthcare management", type: "HEALTHCARE / ENTERPRISE", description: "Building reliable care-management workflows across backend services and responsive interfaces.", stack: [".NET", "MVC", "React"] },
  { no: "02", icon: Landmark, name: "Fintech & banking", type: "FINANCIAL TECHNOLOGY", description: "Developing customer-account services and features that make everyday banking simpler.", stack: ["C#", "REST APIs", "SQL"] },
  { no: "03", icon: Workflow, name: "Enterprise collaboration", type: "PRODUCTIVITY / WORKFLOWS", description: "Crafting agenda, decision and protocol experiences for complex team collaboration.", stack: ["React", "TypeScript", ".NET"] },
];

function MountainScene({ night }: { night: boolean }) {
  return <div className={`landscape ${night ? "night" : "day"}`} aria-hidden="true">
    <div className="stars" />
    <div className="sun-disc" />
    <svg className="mountain-svg" viewBox="0 0 1440 620" preserveAspectRatio="xMidYMax slice" role="presentation">
      <defs><linearGradient id="far" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#5c8178"/><stop offset="1" stopColor="#203d39"/></linearGradient><linearGradient id="near" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#294f48"/><stop offset="1" stopColor="#0c1c1a"/></linearGradient></defs>
      <path d="M0 450 L110 355 190 395 340 205 445 318 570 180 710 340 850 140 980 322 1105 210 1245 380 1360 285 1440 355 V620 H0Z" fill="url(#far)" opacity=".65"/>
      <path d="M110 380 L190 270 L260 380 L205 350 L164 368 L130 341 Z M480 370 L570 180 L660 370 L600 330 L540 355 L500 326 Z M790 390 L850 140 L910 390 L860 360 L835 372 L810 347 Z M1075 385 L1105 210 L1170 385 L1125 350 L1092 366 L1080 338 Z" fill="#dfece3" opacity=".78"/>
      <path d="M0 515 L130 405 275 510 430 350 590 485 735 310 870 430 1030 290 1190 455 1340 345 1440 420 V620 H0Z" fill="url(#near)"/>
      <path d="M0 570 L180 495 320 540 505 440 650 555 835 450 1000 535 1190 435 1440 525 V620 H0Z" fill="#0a1817"/>
      <path d="M0 595 Q360 550 720 590 T1440 575" stroke="#9dca9d" strokeOpacity=".22" strokeWidth="1" fill="none"/>
    </svg>
    <div className="landscape-label">27°59′ N — THE HIMALAYAS</div>
  </div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [night, setNight] = useState(false);
  const [motionEnabled, setMotionEnabled] = useState(true);
  const [copied, setCopied] = useState(false);
  const [trailOpen, setTrailOpen] = useState(false);
  const [activeStop, setActiveStop] = useState(0);
  const [visitedStops, setVisitedStops] = useState<number[]>([]);
  const visitStop = (index: number) => {
    setActiveStop(index);
    setVisitedStops(previous => previous.includes(index) ? previous : [...previous, index]);
    setTrailOpen(true);
  };
  const [progress, setProgress] = useState(0);
  const [commandOpen, setCommandOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("C# / .NET");
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizAnswer, setQuizAnswer] = useState<string | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [currentYear, setCurrentYear] = useState(2026);
  const [mountainShift, setMountainShift] = useState({ x: 0, y: 0 });
  const destinations = [
    { label: "About me", id: "about" },
    { label: "Field notes", id: "field-notes" },
    { label: "Selected work", id: "work" },
    { label: "Tech stack", id: "stack" },
    { label: "Experience", id: "experience" },
    { label: "Resume", id: "resume" },
    { label: "Play", id: "playground" },
    { label: "Contact", id: "contact" },
  ];
  const filteredDestinations = destinations.filter(item => item.label.toLowerCase().includes(query.toLowerCase()));
  const navigate = (id: string) => {
    setCommandOpen(false);
    setQuery("");
    document.getElementById(id)?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  };
  useEffect(() => {
    const storedTheme = window.localStorage.getItem("kalyan-theme");
    const storedMotion = window.localStorage.getItem("kalyan-motion");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (storedTheme === "night") {
      setNight(true);
    } else if (storedTheme === "day") {
      setNight(false);
    } else {
      setNight(prefersDark);
    }

    if (storedMotion === "off") {
      setMotionEnabled(false);
    } else {
      setMotionEnabled(!reducedMotion);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("kalyan-theme", night ? "night" : "day");
  }, [night]);

  useEffect(() => {
    window.localStorage.setItem("kalyan-motion", motionEnabled ? "on" : "off");
  }, [motionEnabled]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch { window.location.href = `mailto:${contact.email}`; }
  };
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setCommandOpen(open => !open);
      }
      if (event.key === "Escape") { setCommandOpen(false); setTrailOpen(false); }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    update(); window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return <>
    <a href="#main-content" className="skip-link">Skip to content</a>
    <main id="top">
    <div className="progress" style={{ width: `${progress}%` }} />
    <div className="summit-meter" aria-label={`Expedition progress ${Math.round(progress)} percent`}>
      <MountainSnow size={15} aria-hidden="true" /> <span>SUMMIT {Math.round(progress)}%</span>
    </div>
    <header className="site-header"><div className="shell nav">
      <a href="#top" className="logo" aria-label="Kalyan Sharma home"><MountainSnow size={25} strokeWidth={1.7}/> kalyan<span className="logo-dot">.</span></a>
      <nav className={`navlinks ${menuOpen ? "open" : ""}`} aria-label="Main navigation">
        {[ ["About", "#about"], ["Field notes", "#field-notes"], ["Work", "#work"], ["Experience", "#experience"], ["Resume", "#resume"], ["Play", "#playground"] ].map(([label, url]) => <a key={url} href={url} onClick={() => setMenuOpen(false)}>{label}</a>)}
      </nav>
      <div className="nav-tools"><button type="button" className="scene-toggle" onClick={() => setNight(value => !value)} aria-label={night ? "Switch to sunset scene" : "Switch to night scene"} aria-pressed={night} title={night ? "Sunset mode" : "Night mode"}>{night ? <Sun size={17}/> : <Moon size={17}/>}<span>{night ? "Sunset" : "Night"}</span></button>
      <button type="button" className="command-trigger" onClick={() => setCommandOpen(true)} aria-label="Open quick navigation"> <Search size={15}/> <span>Quick jump</span> <kbd>Ctrl K</kbd></button>
      </div><a href="#contact" className="nav-contact">Let&apos;s talk <ArrowUpRight size={15}/></a>
      <button className="menu" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
    </div></header>
    <section className={`hero ${night ? "hero-night" : ""}`} id="main-content" onPointerMove={event => {
      if (!motionEnabled || event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const r = event.currentTarget.getBoundingClientRect();
      setMountainShift({ x: ((event.clientX - r.left) / r.width - 0.5) * 16, y: ((event.clientY - r.top) / r.height - 0.5) * 10 });
    }} onPointerLeave={() => setMountainShift({ x: 0, y: 0 })}>
      <div className="mountain-motion" style={{ transform: `translate3d(${mountainShift.x}px, ${mountainShift.y}px, 0)` }}><MountainScene night={night}/></div><button type="button" className="trail-marker" onClick={() => visitStop(0)} aria-label="Discover the hidden mountain trail" title="A little secret is waiting on the trail">
        <Flag size={17} aria-hidden="true" /> <span>DISCOVER THE TRAIL</span><span className="trail-marker-ping" aria-hidden="true" />
      </button><div className="shell hero-content">
      <div className="availability"><span className="pulse"/> SOFTWARE ENGINEER · KATHMANDU, NEPAL</div>
      <div className="scene-caption">{night ? "AFTER DARK / THE STARS ARE OUT" : "GOLDEN HOUR / HIMALAYAN HORIZON"}</div>
      <p className="overline">HELLO, I&apos;M KALYAN SHARMA</p>
      <h1>Code with<br/><span className="accent">perspective.</span></h1>
      <p className="intro">I build thoughtful digital products with <strong>.NET, React, and a curiosity for what&apos;s next.</strong> Grounded in engineering. Inspired by the mountains.</p>
      <div className="actions"><a className="button primary" href="#work">Explore my work <ArrowUpRight size={17}/></a><a className="button secondary" href="#contact">Get in touch <ArrowRight size={17}/></a></div>
      <div className="hero-footer"><span>FULL-STACK DEVELOPMENT / 2026</span><a href="#about">SCROLL TO EXPLORE <ArrowDownRight size={17}/></a></div>
      <div className="hero-controls"><button type="button" onClick={() => setMotionEnabled(v => !v)} aria-pressed={!motionEnabled}>{motionEnabled ? <Volume2 size={15}/> : <VolumeX size={15}/>} {motionEnabled ? "Motion on" : "Motion off"}</button><span>TRY THE FLAG ON THE MOUNTAIN ↗</span></div>
    </div></section>
    <section className="section shell about-grid" id="about"><div><div className="eyebrow"><span>01 /</span> THE PERSON BEHIND THE CODE</div><h2>Building with<br/><span>intention.</span></h2></div><div className="about-copy"><p>I&apos;m a full-stack software engineer who enjoys solving complex problems with simple, maintainable solutions.</p><p>From healthcare systems to fintech and enterprise collaboration, I work across APIs, data, and user interfaces to build software people can rely on.</p><div className="location"><MapPin size={17}/> Based in Kathmandu, Nepal</div></div></section>
    <section className="section field-notes" id="field-notes"><div className="shell"><div className="eyebrow"><span>02 /</span> A FEW FIELD NOTES</div><div className="section-top"><h2>Beyond the<br/><span>keyboard.</span></h2><p>A little more about how I think, what I value, and the perspective I bring to the work.</p></div><div className="field-note-grid">
      <article className="field-note-card"><div className="field-note-top"><span>01 / STAY CURIOUS</span><Compass size={21}/></div><h3>Follow the interesting problem.</h3><p>I like learning how the whole product fits together, from the data underneath it to the details people interact with.</p><span className="field-note-tag">ASK WHY · KEEP EXPLORING</span></article>
      <article className="field-note-card"><div className="field-note-top"><span>02 / TAKE THE LONG VIEW</span><MountainSnow size={21}/></div><h3>Good work is a steady climb.</h3><p>Mountains are a reminder that meaningful progress comes from patience, preparation, and taking one thoughtful step at a time.</p><span className="field-note-tag">PERSPECTIVE · PATIENCE</span></article>
      <article className="field-note-card"><div className="field-note-top"><span>03 / MAKE IT USEFUL</span><Workflow size={21}/></div><h3>Technology should help people.</h3><p>I care about building software that feels dependable and makes complicated everyday work a little simpler.</p><span className="field-note-tag">CRAFT · REAL-WORLD IMPACT</span></article>
    </div></div></section>
    <section className="section work" id="work"><div className="shell"><div className="eyebrow"><span>03 /</span> SELECTED EXPERIENCE</div><div className="section-top"><h2>Work that<br/><span>matters.</span></h2><p>Selected product domains I&apos;ve contributed to. Details are kept high-level to respect confidentiality.</p></div><div className="work-grid">{projects.map(p => { const Icon = p.icon; return <article className="work-card" key={p.no}><div className="work-meta"><span>{p.no} / {p.type}</span><Icon size={31} strokeWidth={1.4}/></div><div><h3>{p.name}</h3><p>{p.description}</p><div className="chips">{p.stack.map(s => <span key={s}>{s}</span>)}</div></div></article>; })}</div></div></section>
    <section className="section shell stack-grid" id="stack"><div><div className="eyebrow"><span>04 /</span> MY TOOLKIT</div><h2>Tools for<br/><span>the climb.</span></h2><p>A practical mix of technologies for designing, developing, and delivering dependable products.</p></div><div><div className="skill-grid">{skills.map((skill, i) => <button type="button" aria-pressed={selectedSkill === skill} onClick={() => setSelectedSkill(skill)} className={`skill ${selectedSkill === skill ? "selected" : ""}`} key={skill}><span>{String(i + 1).padStart(2, "0")}</span><strong>{skill}</strong>{i % 3 === 0 ? <Code2 size={18}/> : i % 3 === 1 ? <Layers size={18}/> : <Database size={18}/>}</button>)}</div><div className="skill-detail" aria-live="polite"><span>FIELD NOTES / {selectedSkill}</span><p>{skillDetails[selectedSkill]}</p></div></div></section>
    <section className="section journey" id="experience"><div className="shell"><div className="eyebrow"><span>05 /</span> THE JOURNEY</div><h2>Still climbing<span>.</span></h2><div className="journey-list"><div className="journey-row"><span>2026 — NOW</span><div><h3>Software Engineer</h3><p>IQVIA / Cedar Gate Technologies</p><small>Healthcare management · .NET · MVC · React</small></div><ArrowUpRight size={21}/></div><div className="journey-row"><span>PREVIOUSLY</span><div><h3>Software Developer</h3><p>Enterprise software &amp; fintech</p><small>Full-stack development · C# · React · TypeScript</small></div><ArrowUpRight size={21}/></div></div></div></section>
    <section className="section resume-section" id="resume"><div className="shell resume-card"><div className="resume-copy"><div className="eyebrow"><span>06 /</span> THE SHORT VERSION</div><h2>Want the<br/><span>full story?</span></h2><p>Download my resume for a concise overview of my experience, skills, and the work I&apos;ve contributed to.</p><a className="button primary" href="/KalyanSharma.pdf" download="KalyanSharma.pdf">Download my resume <Download size={17}/></a></div><div className="resume-preview" aria-hidden="true"><div className="resume-sheet"><span className="resume-sheet-label">KALYAN SHARMA / SOFTWARE ENGINEER</span><div className="resume-sheet-line resume-sheet-heading"/><div className="resume-sheet-line resume-sheet-heading short"/><div className="resume-sheet-accent"/><div className="resume-sheet-line"/><div className="resume-sheet-line medium"/><div className="resume-sheet-line"/><div className="resume-sheet-line short"/><div className="resume-sheet-bottom"><span>EXPERIENCE</span><span>SKILLS</span><span>EDUCATION</span></div></div><span className="resume-stamp"><FileText size={17}/> RESUME / PDF</span></div></div></section>
    <section className="section playground" id="playground"><div className="shell playground-grid"><div className="playground-copy"><div className="eyebrow"><span>07 /</span> A QUICK TRAIL BREAK</div><h2>Stack<br/><span>knowledge?</span></h2><p>Three quick questions about my toolkit and where I work. See how many you can get right.</p><div className="playground-score"><Sparkles size={16}/> SCORE <strong>{quizScore} / {quizQuestions.length}</strong></div></div><div className="quiz-card" aria-live="polite">
      {quizIndex < quizQuestions.length ? <>
        <div className="quiz-card-top"><span>QUESTION {String(quizIndex + 1).padStart(2, "0")} / {String(quizQuestions.length).padStart(2, "0")}</span><span>{quizScore} POINT{quizScore === 1 ? "" : "S"}</span></div>
        <h3>{quizQuestions[quizIndex].prompt}</h3>
        <div className="quiz-options">{quizQuestions[quizIndex].options.map(option => <button key={option} type="button" className={`quiz-option ${quizAnswer === option ? option === quizQuestions[quizIndex].answer ? "correct" : "incorrect" : ""}`} onClick={() => { if (quizAnswer !== null) return; setQuizAnswer(option); if (option === quizQuestions[quizIndex].answer) setQuizScore(score => score + 1); }} disabled={quizAnswer !== null} aria-pressed={quizAnswer === option}>{option}{quizAnswer === option && (option === quizQuestions[quizIndex].answer ? <Check size={16}/> : <X size={16}/>)}</button>)}</div>
        {quizAnswer !== null && <div className="quiz-feedback"><p>{quizAnswer === quizQuestions[quizIndex].answer ? quizQuestions[quizIndex].note : `Not quite — ${quizQuestions[quizIndex].note}`}</p><button type="button" className="button secondary" onClick={() => { setQuizIndex(index => index + 1); setQuizAnswer(null); }}>{quizIndex === quizQuestions.length - 1 ? "See my score" : "Next question"} <ArrowRight size={16}/></button></div>}
      </> : <div className="quiz-result"><Sparkles size={28}/><span>TRAIL BREAK COMPLETE</span><h3>{quizScore === quizQuestions.length ? "Perfect climb!" : quizScore > 0 ? "Nice work!" : "Good warm-up!"}</h3><p>You scored {quizScore} out of {quizQuestions.length}. Thanks for exploring a little more about me.</p><button type="button" className="button primary" onClick={() => { setQuizIndex(0); setQuizAnswer(null); setQuizScore(0); }}>Play again <ArrowRight size={16}/></button></div>}
    </div></div></section>
    <section className="contact" id="contact"><div className="shell contact-inner"><div className="eyebrow"><span>08 /</span> SAY HELLO</div><h2>Let&apos;s make<br/><em>something good.</em></h2><p>Have a project, an idea, or just want to talk tech? My inbox is open.</p><div className="contact-actions"><a className="button primary" href={`mailto:${contact.email}`}>Start a conversation <ArrowUpRight size={18}/></a><button type="button" className="copy-email" onClick={copyEmail} aria-label={copied ? "Email copied to clipboard" : "Copy email address"} title={copied ? "Email copied" : "Copy email address"}>{copied ? <><Check size={17}/><span className="copy-status">Copied</span></> : <Copy size={17}/>}</button></div><div className="socials"><a href={contact.github} target="_blank" rel="noopener noreferrer"><FaGithub size={19}/> GitHub <ExternalLink size={13}/></a><a href={contact.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin size={19}/> LinkedIn <ExternalLink size={13}/></a><a href={`mailto:${contact.email}`}>Email <ArrowUpRight size={15}/></a></div></div></section>
    {trailOpen && <div className="trail-backdrop" onMouseDown={event => { if (event.target === event.currentTarget) setTrailOpen(false); }}>
      <section className="trail-dialog" role="dialog" aria-modal="true" aria-labelledby="trail-title" aria-describedby="trail-description">
        <div className="trail-dialog-top"><span><MountainSnow size={17}/> THE DEVELOPER&apos;S EXPEDITION</span><button type="button" onClick={() => setTrailOpen(false)} aria-label="Close expedition"><X size={20}/></button></div>
        <div className="trail-map" aria-label="Three trail stops">
          <svg viewBox="0 0 400 96" aria-hidden="true" preserveAspectRatio="none"><path d="M30 73 Q110 18 198 52 T370 22" fill="none" stroke="#86ac83" strokeWidth="2" strokeDasharray="5 7"/></svg>
          {trailStops.map((stop, index) => <button key={stop.title} type="button" className={`trail-stop trail-stop-${index} ${activeStop === index ? "active" : ""} ${visitedStops.includes(index) ? "visited" : ""}`} onClick={() => visitStop(index)} aria-label={`Visit ${stop.title}`} aria-pressed={activeStop === index}><Flag size={15}/><span>{index + 1}</span></button>)}
        </div>
        <div className="trail-story" aria-live="polite"><div className="eyebrow"><span>{trailStops[activeStop].elevation}</span></div><h3 id="trail-title">{trailStops[activeStop].title}</h3><p id="trail-description">{trailStops[activeStop].fact}</p><small>{trailStops[activeStop].detail}</small></div>
        <div className="trail-dialog-bottom"><span>{visitedStops.length} / 3 STOPS DISCOVERED</span>{visitedStops.length === 3 ? <strong className="trail-achievement"><Sparkles size={16}/> Achievement unlocked: Summit Explorer!</strong> : <button type="button" onClick={() => visitStop((activeStop + 1) % trailStops.length)}>Next stop <ArrowRight size={16}/></button>}</div>
      </section>
    </div>}
    {commandOpen && <div className="command-backdrop" onMouseDown={event => { if (event.target === event.currentTarget) setCommandOpen(false); }}>
      <div className="command-dialog" role="dialog" aria-modal="true" aria-label="Quick navigation">
        <div className="command-search"><Search size={19}/><input autoFocus placeholder="Where to? Try projects, stack, contact..." value={query} onChange={event => setQuery(event.target.value)} onKeyDown={event => { if (event.key === "Enter" && filteredDestinations[0]) navigate(filteredDestinations[0].id); }}/><button type="button" onClick={() => setCommandOpen(false)} aria-label="Close quick navigation"><XCircle size={20}/></button></div>
        <div className="command-results">{filteredDestinations.length ? filteredDestinations.map(item => <button type="button" key={item.id} onClick={() => navigate(item.id)}><Compass size={17}/>{item.label}<ArrowUpRight size={16}/></button>) : <p>No matching stops on this trail.</p>}</div>
        <div className="command-hint">Press Enter to jump · Esc to close</div>
      </div>
    </div>}
    <div className="sr-only" aria-live="polite" aria-atomic="true">{copied ? "Email address copied to clipboard." : ""}</div>
    <footer className="shell footer"><span>© {currentYear} Kalyan Sharma</span><span>Built with care · Kathmandu, Nepal</span><a href="#top">Back to top ↑</a></footer>
  </main>
  </>;
}
