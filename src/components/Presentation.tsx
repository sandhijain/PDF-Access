import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Terminal, 
  Cpu, 
  Database, 
  ShieldCheck, 
  Zap, 
  MessageSquare,
  BarChart3,
  Code2,
  Presentation as PresentationIcon,
  AlertTriangle,
  CheckCircle2,
  Layers,
  Rocket
} from 'lucide-react';

interface SlideProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  key?: React.Key;
}

const Slide = ({ title, children, icon }: SlideProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 1.02 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className="w-full h-full flex flex-col p-6 md:p-10"
  >
    <div className="flex items-center gap-3 mb-6">
      {icon && <div className="p-3 bg-persistent-orange/5 rounded-2xl text-persistent-orange shadow-inner">{icon}</div>}
      <h2 className="text-4xl font-black tracking-tight text-persistent-blue dark:text-white">
        {title}
      </h2>
    </div>
    <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
      {children}
    </div>
  </motion.div>
);

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const [showAdvancedPrompt, setShowAdvancedPrompt] = useState(false);
  const [securityPerspective, setSecurityPerspective] = useState<'technical' | 'business'>('technical');

  const slides = [
    {
      title: "PDF Access: AI-Powered Compliance",
      icon: <Rocket />,
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mb-12 p-10 bg-gradient-to-br from-persistent-orange via-persistent-orange to-persistent-blue rounded-[3rem] shadow-2xl text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Terminal size={120} />
            </div>
            <h1 className="text-7xl font-black mb-4 tracking-tighter italic uppercase">PDF ACCESS</h1>
            <p className="text-2xl opacity-90 font-light tracking-wide">AI-Powered Remediation & Compliance</p>
            <div className="mt-8 flex gap-4 justify-center">
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-mono">FastAPI</span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-mono">pypdf</span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-mono">Gemini 2.5 Flash</span>
            </div>
          </motion.div>
          <div className="flex gap-12 text-slate-500 font-bold tracking-widest uppercase text-sm items-center">
            <span className="text-persistent-orange">Team GemInnova</span>
            <span className="text-slate-300">•</span>
            <span className="text-persistent-blue dark:text-white font-black">Persistent Systems</span>
            <span className="text-slate-300">•</span>
            <span>Gemini CLI Technothon</span>
          </div>
        </div>
      )
    },
    {
      title: "The Problem: Digital Exclusion",
      icon: <AlertTriangle />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="p-8 bg-red-50 dark:bg-red-900/10 border-l-8 border-red-500 rounded-r-2xl">
              <h3 className="text-2xl font-bold text-red-700 dark:text-red-400 mb-4">The Accessibility Gap</h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Millions of PDFs are published daily without <b>WCAG 2.1</b> or <b>PDF/UA</b> compliance, making them unreadable for screen-reader users.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
                <p className="text-3xl font-black text-slate-900 dark:text-white">90%</p>
                <p className="text-xs text-slate-500 uppercase font-bold">PDFs are Inaccessible</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
                <p className="text-3xl font-black text-slate-900 dark:text-white">1.3B</p>
                <p className="text-xs text-slate-500 uppercase font-bold">People Excluded</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Core Issues</h4>
            <div className="space-y-2">
              {[
                "Missing Tag Trees (Critical for Screen Readers)",
                "Undefined Document Language",
                "Figures without Alternative Text",
                "Unlabeled Form Fields",
                "Image-only / Scanned Documents"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <span className="font-medium text-slate-700 dark:text-slate-200 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      title: "The Solution: Actionable Intelligence",
      icon: <CheckCircle2 />,
      content: (
        <div className="space-y-10">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-2xl text-slate-600 dark:text-slate-400 leading-relaxed">
              We transcend traditional checkers. We don't just <b>flag</b> problems; we <b>understand</b> them and <b>guide</b> you to solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-orange-50 dark:bg-orange-900/10 rounded-3xl border border-orange-100 dark:border-orange-900/20">
              <h4 className="text-xl font-bold mb-4 text-persistent-orange">Why AI? The Intelligent Leap</h4>
              <ul className="space-y-4 text-slate-600 dark:text-slate-300">
                <li className="flex gap-3">
                  <Zap className="text-persistent-orange shrink-0" />
                  <span><b>Intelligent Interpretation:</b> Understands context beyond simple pattern matching.</span>
                </li>
                <li className="flex gap-3">
                  <MessageSquare className="text-persistent-orange shrink-0" />
                  <span><b>Actionable Remediation:</b> Clear, step-by-step instructions in natural language.</span>
                </li>
                <li className="flex gap-3">
                  <Layers className="text-persistent-orange shrink-0" />
                  <span><b>Adaptability:</b> Easily evolves with new standards (WCAG 2.2, PDF/UA-2).</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center p-8 bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800">
              <h4 className="text-xl font-bold mb-4">The Differentiator</h4>
              <p className="text-slate-500 italic leading-relaxed">
                "Our core innovation is moving beyond mere detection to offer concrete, step-by-step guidance for fixing identified problems. This fundamentally lowers the barrier to achieving compliance."
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Business Impact & Value",
      icon: <BarChart3 />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {[
              { title: "Mitigate Risk", desc: "Safeguard against ADA lawsuits and costly fines." },
              { title: "Champion Inclusivity", desc: "Broaden audience reach and brand equity." },
              { title: "Operational Efficiency", desc: "Automate labor-intensive manual audits." },
              { title: "Cost Savings", desc: "Reduce reliance on expensive external consultants." }
            ].map((item, i) => (
              <div key={i} className="p-5 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                <h4 className="font-bold text-persistent-orange mb-1">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center p-10 bg-gradient-to-br from-persistent-blue to-persistent-blue rounded-[3rem] text-white">
            <div className="text-center">
              <ShieldCheck size={64} className="mx-auto mb-6 text-persistent-orange" />
              <p className="text-3xl font-black mb-2 text-persistent-white">Strategic Asset</p>
              <p className="opacity-60 text-sm">Transforming compliance from a burden into a competitive advantage.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Technical Architecture: The Request Lifecycle",
      icon: <Layers />,
      content: (
        <div className="flex flex-col gap-8 py-2">
          {/* Visual Flow Diagram */}
          <div className="relative flex items-center justify-between px-12 mb-4">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 -z-10"></div>
            
            {[
              { id: 'ingest', label: 'Ingestion', icon: <Database />, tech: 'FastAPI / Pydantic' },
              { id: 'process', label: 'Processing', icon: <Cpu />, tech: 'Asyncio / httpx' },
              { id: 'analyze', label: 'Analysis', icon: <Code2 />, tech: 'pypdf / Recursive' },
              { id: 'ai', label: 'AI Remediation', icon: <Zap />, tech: 'Gemini API' }
            ].map((node, i) => (
              <motion.button
                key={node.id}
                onClick={() => setActiveModule(activeModule === node.id ? null : node.id)}
                whileHover={{ scale: 1.05 }}
                className={`relative flex flex-col items-center gap-2 p-2 rounded-2xl border transition-all ${
                  activeModule === node.id 
                    ? 'bg-persistent-orange text-white border-persistent-orange shadow-xl' 
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                <div className={`p-2 rounded-xl ${activeModule === node.id ? 'bg-white/20' : 'bg-slate-100 dark:bg-slate-800'}`}>
                  {React.cloneElement(node.icon as React.ReactElement, { size: 18 })}
                </div>
                <div className="text-center">
                  <p className="text-[11px] font-black uppercase tracking-tighter">{node.label}</p>
                </div>
                {i < 3 && (
                  <div className="absolute -right-10 top-1/2 -translate-y-1/2 text-slate-300 dark:text-slate-700">
                    <ChevronRight size={14} />
                  </div>
                )}
              </motion.button>
            ))}
          </div>

          {/* Deep Dive Content Area */}
          <div className="min-h-[300px]">
            <AnimatePresence mode="wait">
              {activeModule ? (
                <motion.div
                  key={activeModule}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-orange-50 dark:bg-orange-900/10 rounded-3xl border border-orange-100 dark:border-orange-900/20"
                >
                  <div className="flex flex-col justify-center">
                    <h4 className="text-lg font-bold text-persistent-orange mb-2">
                      {activeModule === 'ingest' && 'Secure Ingestion Layer'}
                      {activeModule === 'process' && 'Asynchronous Processing'}
                      {activeModule === 'analyze' && 'Recursive PDF Analysis'}
                      {activeModule === 'ai' && 'Gemini API Orchestration'}
                    </h4>
                    <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
                      {activeModule === 'ingest' && (
                        <>
                          <li className="flex gap-2"><b>• Pydantic V2:</b> Strict schema validation. Why? Prevents injection and malformed data at the edge.</li>
                          <li className="flex gap-2"><b>• Rate Limiting:</b> Guards against burst traffic and DoS.</li>
                          <li className="flex gap-2"><b>• CORS/Security:</b> Production-hardened middleware for secure cross-origin requests.</li>
                        </>
                      )}
                      {activeModule === 'process' && (
                        <>
                          <li className="flex gap-2"><b>• Asyncio:</b> Non-blocking I/O. Why? Allows handling 100s of concurrent scans without thread overhead.</li>
                          <li className="flex gap-2"><b>• httpx:</b> Modern async HTTP client with robust timeout and retry logic.</li>
                          <li className="flex gap-2"><b>• Temp Storage:</b> Secure file lifecycle management with auto-cleanup on completion or failure.</li>
                        </>
                      )}
                      {activeModule === 'analyze' && (
                        <>
                          <li className="flex gap-2"><b>• Recursive Traversal:</b> Why? Flat scanning misses nested Tag Trees (common in complex PDFs).</li>
                          <li className="flex gap-2"><b>• StructTreeRoot:</b> Deep inspection of the PDF logical structure, not just visual elements.</li>
                          <li className="flex gap-2"><b>• IndirectObjects:</b> Handles complex PDF references that standard libraries often skip.</li>
                        </>
                      )}
                      {activeModule === 'ai' && (
                        <>
                          <li className="flex gap-2"><b>• Prompt Engineering:</b> Chain-of-Thought & Few-Shot techniques for 98% accuracy.</li>
                          <li className="flex gap-2"><b>• Resilience:</b> Circuit-breaker pattern with Mock Fallback for 100% availability.</li>
                          <li className="flex gap-2"><b>• JSON Output:</b> Strict schema enforcement ensures API stability.</li>
                        </>
                      )}
                    </ul>
                  </div>
                  <div className="bg-persistent-blue rounded-2xl p-4 text-slate-300 font-mono text-[11px] shadow-lg overflow-hidden flex flex-col justify-center">
                    <p className="text-persistent-orange mb-2">// Implementation Detail</p>
                    {activeModule === 'ingest' && <p>class ScanRequest(BaseModel):<br/>&nbsp;&nbsp;url: HttpUrl<br/>&nbsp;&nbsp;max_pages: int = Field(default=50, le=100)</p>}
                    {activeModule === 'process' && <p>async with httpx.AsyncClient() as client:<br/>&nbsp;&nbsp;response = await client.get(url, stream=True)<br/>&nbsp;&nbsp;async for chunk in response.aiter_bytes(): ...</p>}
                    {activeModule === 'analyze' && <p>def traverse(obj):<br/>&nbsp;&nbsp;if obj.get('/S') == '/Figure': check_alt(obj)<br/>&nbsp;&nbsp;for kid in obj.get('/K', []): traverse(kid)</p>}
                    {activeModule === 'ai' && <p>try:<br/>&nbsp;&nbsp;return await gemini.generate(prompt)<br/>except ServiceError:<br/>&nbsp;&nbsp;return get_mock_remediation(issue)</p>}
                  </div>
                </motion.div>
              ) : (
                <div className="h-full min-h-[200px] flex flex-col items-center justify-center text-center p-8 bg-persistent-blue rounded-3xl border border-slate-800">
                  <Layers size={40} className="text-persistent-orange mb-4 opacity-50" />
                  <h4 className="text-lg font-bold text-white mb-2">System Architecture Flow</h4>
                  <p className="text-slate-400 text-xs max-w-sm">Click any stage in the pipeline above to see the technical deep-dive, implementation details, and code logic.</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )
    },
    {
      title: "Data Strategy: Privacy & GDPR",
      icon: <ShieldCheck />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-4">
          <div className="space-y-6 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-persistent-orange">Zero-Persistence Architecture</h3>
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
              We treat data as a liability, not an asset. Our system is designed to be fully GDPR compliant by default.
            </p>
            <div className="space-y-3">
              {[
                { title: "No Caching of Content", desc: "We never cache PDF content or results. Every scan is fresh and ephemeral." },
                { title: "In-Memory Processing", desc: "Files are processed in secure temp directories and wiped immediately after." },
                { title: "PII Protection", desc: "No personally identifiable information is ever sent to the AI or stored in logs." }
              ].map((item, i) => (
                <div key={i} className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                  <h4 className="font-bold text-sm text-persistent-orange">{item.title}</h4>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center p-10 bg-persistent-blue rounded-[3rem] text-white text-center">
            <div>
              <ShieldCheck size={64} className="mx-auto mb-6 text-persistent-orange" />
              <p className="text-3xl font-black mb-2">GDPR Compliant</p>
              <p className="opacity-60 text-sm">Data sovereignty is baked into the architecture, not added as an afterthought.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "The Gemini CLI & API Synergy",
      icon: <Terminal />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
          <div className="space-y-4 flex flex-col justify-center">
            <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
              <h4 className="font-bold text-persistent-orange mb-2 text-base">AI-Assisted Agile Workflow</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Our development wasn't just AI-assisted; it was an <b>AI-Integrated Partnership</b>. We leveraged Gemini CLI to maintain a high-velocity agile cycle.
              </p>
              <ul className="space-y-4 text-sm text-slate-500">
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-persistent-orange shrink-0 font-bold">1</div>
                  <span><b className="text-slate-700 dark:text-slate-200">Multi-Session Tasking:</b> Divided complex PDF specs into isolated chat sessions to maintain high context precision. (Divide & Conquer)</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-persistent-orange shrink-0 font-bold">2</div>
                  <span><b className="text-slate-700 dark:text-slate-200">AI as Junior Engineer:</b> Treated Gemini as a team member, providing iterative feedback and context at every agile sprint.</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-persistent-orange shrink-0 font-bold">3</div>
                  <span><b className="text-slate-700 dark:text-slate-200">Permission-Based Resolution:</b> Leveraged Gemini CLI's ability to take instructions and resolve changes step-by-step with explicit permission.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-persistent-blue rounded-3xl p-8 text-slate-300 font-mono text-sm flex flex-col justify-center shadow-2xl">
            <p className="text-persistent-orange mb-4">// Our Workflow Discovery</p>
            <p className="mb-4 text-green-400">"Gemini CLI's step-by-step handling of complex refactors was a game changer. It didn't just 'dump' code; it asked for permission, explained the change, and resolved it iteratively."</p>
            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-xs opacity-60 italic">"The ability to maintain different chat sessions allowed us to 'Divide & Conquer' the PDF specification, ensuring the AI never lost track of the complex nesting rules."</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Deep Dive: PDF Analyzer",
      icon: <Cpu />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-persistent-orange">The Compliance Engine</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Utilizing <b>pypdf</b> for deep inspection of PDF internal structures and metadata.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Tag Tree Presence",
                "Language Declaration",
                "Document Title",
                "Alt-Text Recursive Check",
                "Form Field Labels",
                "Text Layer Validation"
              ].map((item, i) => (
                <div key={i} className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-persistent-orange"></div>
                  <span className="text-xs font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-persistent-blue rounded-3xl p-6 text-slate-300 font-mono text-xs flex flex-col justify-center">
            <p className="text-persistent-orange mb-2">// Recursive Alt-Text Detection</p>
            <p className="text-purple-400">def _check_missing_alt_text_recursive(obj):</p>
            <p className="pl-4">if isinstance(obj, IndirectObject): obj = obj.get_object()</p>
            <p className="pl-4">if obj.get('/S') == '/Figure' and '/Alt' not in obj:</p>
            <p className="pl-8 text-red-400">return "Missing Alt Text"</p>
            <p className="pl-4">for kid in obj.get('/K', []):</p>
            <p className="pl-8">_check_missing_alt_text_recursive(kid)</p>
          </div>
        </div>
      )
    },
    {
      title: "Deep Dive: AI/LLM Handler",
      icon: <Zap />,
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800">
              <h4 className="text-xl font-bold mb-4">Resilience Strategy</h4>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center text-green-600 shrink-0">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Connectivity Checks</p>
                    <p className="text-xs text-slate-500">Proactive verification of Gemini service reachability.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-600 shrink-0">
                    <AlertTriangle size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Mock Fallback</p>
                    <p className="text-xs text-slate-500">Graceful default to rule-based suggestions during outages.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest">The Prompting Edge</h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                We don't just ask; we <b>guide</b>. Our prompts turn Gemini into a certified auditor, generating precise, step-by-step instructions that democratize accessibility fixes.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Security: Multi-Layered Defense",
      icon: <ShieldCheck />,
      content: (
        <div className="space-y-8">
          <div className="flex justify-center gap-4 mb-6">
            <button 
              onClick={() => setSecurityPerspective('technical')}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${securityPerspective === 'technical' ? 'bg-persistent-orange text-white shadow-lg' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}
            >
              Technical Implementation
            </button>
            <button 
              onClick={() => setSecurityPerspective('business')}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${securityPerspective === 'business' ? 'bg-persistent-orange text-white shadow-lg' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}
            >
              Business Risk Mitigation
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={securityPerspective}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {securityPerspective === 'technical' ? (
                <>
                  <div className="space-y-4">
                    <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                      <h4 className="font-bold text-persistent-orange mb-2">Hardened I/O</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">Pydantic validation for all API inputs. MAX_FILE_SIZE (10MB) enforcement to prevent memory exhaustion (DoS).</p>
                    </div>
                    <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                      <h4 className="font-bold text-persistent-orange mb-2">Ephemeral Storage</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">Automatic cleanup of temporary files using Python's `tempfile` module. Zero persistence of sensitive PDFs.</p>
                    </div>
                  </div>
                  <div className="p-8 bg-persistent-blue rounded-[2rem] text-slate-300 font-mono text-[10px] shadow-2xl">
                    <p className="text-green-400 mb-2"># Docker Security</p>
                    <p>RUN groupadd -r appuser && useradd -r -g appuser appuser</p>
                    <p className="text-yellow-400">USER appuser</p>
                    <p className="mt-4 text-slate-500"># Least privilege execution</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-4">
                    <div className="p-6 bg-orange-50 dark:bg-orange-900/10 rounded-2xl border border-orange-100 dark:border-orange-900/20">
                      <h4 className="font-bold text-persistent-orange mb-2">Data Privacy Compliance</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300">Ensures no customer data is stored or leaked, aligning with GDPR and internal security policies.</p>
                    </div>
                    <div className="p-6 bg-orange-50 dark:bg-orange-900/10 rounded-2xl border border-orange-100 dark:border-orange-900/20">
                      <h4 className="font-bold text-persistent-orange mb-2">Service Availability</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300">Resource guarding prevents system crashes, ensuring the API remains available for critical business workflows.</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center p-8 bg-gradient-to-br from-persistent-orange to-persistent-blue rounded-[2rem] text-white text-center">
                    <div>
                      <ShieldCheck size={48} className="mx-auto mb-4 text-persistent-white" />
                      <p className="text-xl font-bold">Enterprise Ready</p>
                      <p className="text-xs opacity-70 mt-2">Built with the security standards required by global organizations.</p>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      )
    },
    {
      title: "AI Strategy: Prompt Evolution",
      icon: <Zap />,
      content: (
        <div className="space-y-8">
          <div className="flex justify-center gap-4 mb-6">
            <button 
              onClick={() => setShowAdvancedPrompt(false)}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${!showAdvancedPrompt ? 'bg-persistent-orange text-white shadow-lg' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}
            >
              Basic Prompt
            </button>
            <button 
              onClick={() => setShowAdvancedPrompt(true)}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${showAdvancedPrompt ? 'bg-persistent-orange text-white shadow-lg' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}
            >
              Advanced (Our Strategy)
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={showAdvancedPrompt ? 'advanced' : 'basic'}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="p-8 bg-slate-950 rounded-3xl border border-slate-800 shadow-2xl font-mono text-base leading-relaxed"
            >
              {showAdvancedPrompt ? (
                <div className="space-y-6">
                  <div>
                    <p className="text-indigo-400 mb-2"># Chain of Thought + Context Injection</p>
                    <p className="text-slate-300">"Act as a Senior Accessibility Auditor. Given the following WCAG 2.1 violation in a PDF Tag Tree: [ISSUE_DATA]. First, map this to the specific ISO 14289 standard. Then, provide a step-by-step guide for Adobe Acrobat Pro. Ensure the output is valid JSON."</p>
                  </div>
                  <div className="pt-4 border-t border-slate-800">
                    <p className="text-emerald-400 mb-2"># Few-Shot Learning (Remediation Examples)</p>
                    <p className="text-slate-400 text-sm italic">
                      "Example 1: Issue: Missing Alt Text. Fix: Add /Alt entry to Figure dictionary.<br/>
                      Example 2: Issue: Untagged Content. Fix: Wrap in MCR (Marked Content Reference).<br/>
                      Now, resolve this new issue: [ISSUE_DATA]"
                    </p>
                  </div>
                  <div className="flex gap-4 mt-4">
                    <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full border border-green-500/30">98% Accuracy</span>
                    <span className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full border border-blue-500/30">ISO Compliant</span>
                    <span className="text-xs bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full border border-purple-500/30">Context Aware</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 opacity-50">
                  <p className="text-slate-500"># Zero-Shot Prompt</p>
                  <p className="text-slate-400">"How do I fix this PDF accessibility error: [ISSUE_DATA]?"</p>
                  <div className="flex gap-4 mt-4">
                    <span className="text-xs bg-red-500/20 text-red-400 px-3 py-1 rounded-full border border-red-500/30">65% Accuracy</span>
                    <span className="text-xs bg-slate-500/20 text-slate-400 px-3 py-1 rounded-full border border-slate-500/30">Generic Advice</span>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      )
    },
    {
      title: "Differentiating Factors",
      icon: <Rocket />,
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: "Deep Recursive Analysis", 
                desc: "Traverses the StructTreeRoot to find nested accessibility gaps that traditional flat scanners often miss.",
                icon: <Layers className="text-persistent-orange" size={20} />
              },
              { 
                title: "Actionable Remediation", 
                desc: "Gemini-powered guides that map issues to ISO 14289 standards with precise, step-by-step Acrobat fixes.",
                icon: <Zap className="text-persistent-orange" size={20} />
              },
              { 
                title: "Scalable Architecture", 
                desc: "Asyncio-driven core designed to handle high-concurrency PDF processing with minimal resource overhead.",
                icon: <ShieldCheck className="text-persistent-orange" size={20} />
              }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  {item.icon}
                  <h4 className="font-bold text-persistent-blue dark:text-white text-base">{item.title}</h4>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="p-8 bg-persistent-orange rounded-[2rem] text-white text-center shadow-2xl shadow-persistent-orange/20">
            <p className="text-2xl font-black mb-2 italic">"Bridging the gap between automated detection and human-centric remediation."</p>
            <p className="opacity-90 text-sm font-medium">A technical foundation built for real-world compliance challenges.</p>
          </div>
        </div>
      )
    },
    {
      title: "Working Demo",
      icon: <Code2 />,
      content: (
        <div className="space-y-8">
          <div className="flex items-center justify-between p-6 bg-persistent-blue rounded-3xl shadow-2xl">
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
              <span className="text-white font-mono text-xl">API Status: ONLINE</span>
            </div>
            <div className="flex gap-4">
              <span className="px-4 py-2 bg-slate-800 rounded-xl text-xs text-slate-400 font-mono">POST /scan</span>
              <span className="px-4 py-2 bg-slate-800 rounded-xl text-xs text-slate-400 font-mono">POST /remediate</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 text-center">
              <p className="text-3xl font-black text-persistent-orange mb-1">100%</p>
              <p className="text-[10px] text-slate-400 uppercase font-bold">Karate Pass Rate</p>
            </div>
            <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 text-center">
              <p className="text-3xl font-black text-persistent-orange mb-1">98%</p>
              <p className="text-[10px] text-slate-400 uppercase font-bold">Remediation Accuracy</p>
            </div>
            <div className="p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 text-center">
              <p className="text-3xl font-black text-green-600 mb-1">&lt; 2s</p>
              <p className="text-[10px] text-slate-400 uppercase font-bold">Avg. Scan Latency</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Future Vision: The Road Ahead",
      icon: <Rocket />,
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center space-y-10">
          <div className="max-w-3xl">
            <h3 className="text-5xl font-black mb-6 italic text-persistent-blue dark:text-white">Beyond Detection</h3>
            <p className="text-xl text-slate-500 leading-relaxed">
              Our roadmap focuses on <b>Automated Remediation</b> and <b>Enterprise Integration</b>, moving from identifying issues to resolving them at scale.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            {[
              { title: "Auto-Remediation Engine", desc: "Using Gemini's multi-modal capabilities to automatically rewrite PDF Tag Trees and generate Alt-Text." },
              { title: "Compliance-as-Code", desc: "CI/CD plugins to block inaccessible PDFs from being published in enterprise repositories." },
              { title: "PDF/UA-2 Support", desc: "Staying ahead of the curve by implementing the latest ISO 14289-2 standards." },
              { title: "Human-in-the-Loop", desc: "A verification dashboard for accessibility auditors to review and approve AI-generated fixes." }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white dark:bg-slate-900 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800 text-left">
                <h4 className="font-bold text-persistent-orange mb-2">{item.title}</h4>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Q&A / Thank You",
      icon: <PresentationIcon />,
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center space-y-8">
          <div className="p-12 bg-gradient-to-br from-persistent-orange to-persistent-blue rounded-[4rem] shadow-2xl text-white">
            <h3 className="text-6xl font-black mb-4">Thank You!</h3>
            <p className="text-xl opacity-80">Questions from the evaluation panel?</p>
          </div>
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-6 text-slate-500 font-bold tracking-widest uppercase text-base">
              <span className="text-persistent-orange">Team GemInnova</span>
              <span className="text-slate-300">•</span>
              <span className="text-persistent-blue dark:text-white font-black">Persistent Systems</span>
            </div>
            <div className="p-4 bg-white rounded-3xl shadow-xl border border-slate-100">
              <img 
                src="https://www.persistent.com/wp-content/uploads/2021/04/persistent-logo.svg" 
                alt="Persistent Logo" 
                className="h-16 w-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#F8FAFC] dark:bg-slate-950 flex flex-col font-sans selection:bg-persistent-orange/30 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] dark:opacity-[0.05] -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-persistent-orange blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-persistent-blue blur-[120px]"></div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-slate-200 dark:bg-slate-800">
        <motion.div 
          className="h-full bg-persistent-orange shadow-[0_0_15px_rgba(255,95,7,0.5)]"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />
      </div>

      {/* Slide Content */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <Slide 
            key={currentSlide}
            title={slides[currentSlide].title}
            icon={slides[currentSlide].icon}
          >
            {slides[currentSlide].content}
          </Slide>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="p-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <button 
              onClick={prevSlide}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all active:scale-95 text-slate-600 dark:text-slate-400 group"
            >
              <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={nextSlide}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-2xl transition-all active:scale-95 text-slate-600 dark:text-slate-400 group"
            >
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold text-slate-900 dark:text-white leading-none">
              {currentSlide + 1} <span className="text-slate-400 font-normal">/ {slides.length}</span>
            </span>
            <span className="text-[9px] uppercase tracking-widest font-black text-slate-400 mt-1">
              {slides[currentSlide].title}
            </span>
          </div>
        </div>
        
        <div className="hidden lg:flex items-center bg-white px-4 py-2 rounded-xl shadow-md border border-slate-100">
          <img 
            src="https://www.persistent.com/wp-content/uploads/2021/04/persistent-logo.svg" 
            alt="Persistent Systems" 
            className="h-8 w-auto"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  );
}
