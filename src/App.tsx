import { useInViewAnimation } from './hooks/useInViewAnimation';
import { Button } from './components/Button';
import { TestimonialSection } from './components/TestimonialSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialCarousel } from './components/TestimonialCarousel';
import { ProjectsSection } from './components/ProjectsSection';
import { PartnerSection } from './components/PartnerSection';
import { Footer } from './components/Footer';
import { CopyrightBar } from './components/CopyrightBar';
import { BottomNav } from './components/BottomNav';

const marqueeImages = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif',
  'https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
];

function HeroSection() {
  const { ref, inView } = useInViewAnimation();

  return (
    <section className="flex flex-col items-center px-6 pt-12 md:pt-16 pb-4" ref={ref}>
      <div className="max-w-[440px] w-full">
        {/* Logo */}
        <h1
          className={`text-[32px] md:text-[40px] lg:text-[44px] font-semibold tracking-tight mb-4 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{
            fontFamily: '"PP Mondwest", Georgia, serif',
            color: '#051A24',
            animationDelay: '0.1s',
          }}
        >
          Viktor Oddy
        </h1>

        {/* Tagline */}
        <p
          className={`font-mono text-xs md:text-sm mb-2 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ color: '#051A24', animationDelay: '0.2s' }}
        >
          The creative studio of Viktor Oddy
        </p>

        {/* Main heading */}
        <div
          className={`${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.3s' }}
        >
          <h2
            className="text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] tracking-tight whitespace-nowrap"
            style={{ color: '#0D212C' }}
          >
            Build the{' '}
            <span style={{ fontFamily: '"PP Mondwest", Georgia, serif' }}>next wave</span>
            ,
          </h2>
          <h2
            className="text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] tracking-tight whitespace-nowrap"
            style={{ color: '#0D212C' }}
          >
            the{' '}
            <span style={{ fontFamily: '"PP Mondwest", Georgia, serif' }}>bold way.</span>
          </h2>
        </div>

        {/* Description */}
        <div
          className={`flex flex-col gap-6 mt-5 md:mt-6 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.4s' }}
        >
          <p className="text-sm md:text-base leading-relaxed" style={{ color: '#051A24' }}>
            I spent seven years at Apple crafting products used by over a billion people. I founded Vortex Studio to bring that same level of thinking to innovators shaping what comes next.
          </p>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: '#051A24' }}>
            The studio is deliberately small. I guide the creative vision on every project, backed by a veteran design crew that moves fast without cutting corners.
          </p>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: '#051A24' }}>
            Projects start at $5,000 per month.
          </p>
        </div>

        {/* Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-3 md:gap-4 mt-5 md:mt-6 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.5s' }}
        >
          <Button variant="primary" href="mailto:hello@viktoroddy.com">
            Start a chat
          </Button>
          <Button variant="secondary" href="#work">
            View projects
          </Button>
        </div>
      </div>
    </section>
  );
}

function MarqueeSection() {
  const doubled = [...marqueeImages, ...marqueeImages];

  return (
    <div className="overflow-hidden mt-16 md:mt-20 mb-16">
      <div className="flex animate-marquee" style={{ width: `${doubled.length * (320 + 24)}px` }}>
        {doubled.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Project ${(i % marqueeImages.length) + 1}`}
            className="h-[280px] md:h-[500px] object-cover mx-3 rounded-2xl shadow-lg flex-shrink-0"
            style={{ width: '320px', minWidth: '320px' }}
          />
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="bg-white min-h-screen pb-24">
      <HeroSection />
      <MarqueeSection />
      <TestimonialSection />
      <PricingSection />
      <TestimonialCarousel />
      <ProjectsSection />
      <PartnerSection />
      <Footer />
      <CopyrightBar />
      <BottomNav />
    </div>
  );
}

export default App;
