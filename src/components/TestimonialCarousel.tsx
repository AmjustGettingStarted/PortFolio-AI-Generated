import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const testimonials = [
  {
    quote: "With very little guidance the team delivered designs that were consistently spot on. Viktor has an almost telepathic sense for what a product needs before you can articulate it yourself.",
    name: "Marcus Anderson",
    role: "CEO, Data.storage",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=96&h=96&dpr=1",
  },
  {
    quote: "Viktor led the creation of our best fundraising deck to date! The work was sharp, strategic, and delivered faster than we expected. I'd work with this studio again without hesitation.",
    name: "alexwu",
    role: "Founder, Nexgate",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=96&h=96&dpr=1",
  },
  {
    quote: "Working with Viktor transformed our product vision. The design thinking went way beyond aesthetics — it helped us rethink how users move through the entire experience.",
    name: "James Mitchell",
    role: "VP Product, LaunchPad",
    avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=96&h=96&dpr=1",
  },
  {
    quote: "The design quality exceeded our expectations. Every screen felt considered and intentional. Rare to find a studio that brings this level of craft to early-stage products.",
    name: "Rachel Foster",
    role: "Co-founder, Nexus Labs",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=96&h=96&dpr=1",
  },
  {
    quote: "Incredible work from start to finish. Viktor's studio doesn't just execute briefs — they push back in the right ways and elevate the work to something you're actually proud to ship.",
    name: "David Zhang",
    role: "Head of Design, Paradigm Labs",
    avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=96&h=96&dpr=1",
  },
];

// Triple for infinite scroll
const all = [...testimonials, ...testimonials, ...testimonials];

export function TestimonialCarousel() {
  const { ref, inView } = useInViewAnimation();
  const [activeIndex, setActiveIndex] = useState(testimonials.length);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goNext = () => setActiveIndex(i => i + 1);
  const goPrev = () => setActiveIndex(i => i - 1);

  useEffect(() => {
    if (isHovered) return;
    intervalRef.current = setInterval(goNext, 3000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isHovered]);

  // Loop reset
  useEffect(() => {
    if (activeIndex >= testimonials.length * 2) {
      setTimeout(() => setActiveIndex(testimonials.length), 800);
    }
    if (activeIndex < testimonials.length) {
      setTimeout(() => setActiveIndex(testimonials.length * 2 - 1), 800);
    }
  }, [activeIndex]);

  return (
    <section className="w-full py-20" ref={ref}>
      {/* Header */}
      <div
        className={`px-6 md:max-w-4xl md:ml-auto flex items-center justify-between mb-10 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.1s' }}
      >
        <h2 className="text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] tracking-tight" style={{ color: '#0D212C' }}>
          What{' '}
          <span style={{ fontFamily: '"PP Mondwest", Georgia, serif' }}>builders</span>
          {' '}say
        </h2>
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-black text-black" />
            ))}
          </div>
          <span className="text-sm font-medium" style={{ color: '#051A24' }}>Clutch 5/5</span>
        </div>
      </div>

      {/* Carousel */}
      <div
        className={`relative overflow-hidden px-6 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: '0.2s' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="flex gap-6"
          style={{
            transform: `translateX(calc(-${activeIndex * (427.5 + 24)}px + 24px))`,
            transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            width: `${all.length * (427.5 + 24)}px`,
          }}
        >
          {all.map((t, i) => {
            const isActive = i === activeIndex;
            return (
              <div
                key={i}
                className="rounded-[32px] md:rounded-[40px] px-6 md:pl-10 md:pr-24 py-8 flex-shrink-0 bg-white"
                style={{
                  width: '427.5px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                  opacity: isActive ? 1 : 0.6,
                  transform: isActive ? 'scale(1)' : 'scale(0.97)',
                  transition: 'opacity 0.4s ease, transform 0.4s ease',
                }}
              >
                {/* Quote icon */}
                <svg className="mb-4" width="24" height="20" viewBox="0 0 24 20" fill="none">
                  <path d="M0 20V12.267C0 10.178 0.422 8.267 1.267 6.533 2.133 4.8 3.467 3.2 5.267 1.733L7.467 3.6C6.178 4.778 5.2 5.956 4.533 7.133 3.867 8.311 3.511 9.6 3.467 11H7.467V20H0ZM13.333 20V12.267C13.333 10.178 13.756 8.267 14.6 6.533 15.467 4.8 16.8 3.2 18.6 1.733L20.8 3.6C19.511 4.778 18.533 5.956 17.867 7.133 17.2 8.311 16.844 9.6 16.8 11H20.8V20H13.333Z" fill="#0D212C" opacity="0.15"/>
                </svg>

                <p className="text-base leading-relaxed mb-6" style={{ color: '#0D212C' }}>"{t.quote}"</p>

                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-sm" style={{ color: '#0D212C' }}>{t.name}</p>
                    <p className="text-xs" style={{ color: '#273C46' }}>→ {t.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-3 px-6 mt-6">
        <button
          onClick={goPrev}
          className="w-12 h-12 rounded-full flex items-center justify-center transition-opacity hover:opacity-60"
          style={{ border: '1px solid rgba(13,33,44,0.2)' }}
        >
          <ChevronLeft className="w-5 h-5" style={{ color: '#0D212C' }} />
        </button>
        <button
          onClick={goNext}
          className="w-12 h-12 rounded-full flex items-center justify-center transition-opacity hover:opacity-60"
          style={{ border: '1px solid rgba(13,33,44,0.2)' }}
        >
          <ChevronRight className="w-5 h-5" style={{ color: '#0D212C' }} />
        </button>
      </div>
    </section>
  );
}
