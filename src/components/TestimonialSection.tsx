import { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

export function TestimonialSection() {
  const { ref, inView } = useInViewAnimation();
  const imgRef = useRef<HTMLDivElement>(null);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    let rafId: number;
    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        if (!imgRef.current) return;
        const rect = imgRef.current.getBoundingClientRect();
        const viewportH = window.innerHeight;
        const center = rect.top + rect.height / 2;
        const offset = (center - viewportH / 2) / viewportH;
        setParallaxY(offset * 200);
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.addEventListener('scroll', handleScroll, { passive: true });
        } else {
          window.removeEventListener('scroll', handleScroll);
        }
      },
      { threshold: 0 }
    );

    if (imgRef.current) observer.observe(imgRef.current);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="py-12 px-6 flex flex-col items-center" ref={ref}>
      <div className="max-w-2xl w-full mx-auto">
        <div
          className={inView ? 'animate-fade-in-up' : 'opacity-0'}
          style={{ animationDelay: '0.1s' }}
        >
          <Quote className="w-6 h-6 text-slate-900 mb-6" />
        </div>

        <h2
          className={`text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] tracking-tight mb-4 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ color: '#0D212C', animationDelay: '0.2s' }}
        >
          I left{' '}
          <span style={{ fontFamily: '"PP Mondwest", Georgia, serif' }}>Apple</span>
          {' '}to build the studio I always wanted to work with
        </h2>

        <p
          className={`text-sm italic mb-8 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ color: '#273C46', animationDelay: '0.3s' }}
        >
          Viktor Oddy
        </p>

        <div
          className={`flex items-center gap-8 mb-10 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.4s' }}
        >
          <span className="font-medium text-slate-900" style={{ fontSize: '24px', width: '80px' }}>Apple</span>
          <span className="font-medium text-slate-900" style={{ fontSize: '24px', width: '83px' }}>IDEO</span>
          <span className="font-medium text-slate-900" style={{ fontSize: '24px', width: '110px' }}>Polygon</span>
        </div>

        <div
          ref={imgRef}
          className={`relative overflow-hidden ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.5s' }}
        >
          <img
            src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260330_103804_7aa5494f-4d5b-432e-9dc7-20715275f143.png&w=1280&q=85"
            alt="Chris Halaska"
            className="w-full max-w-xs rounded-2xl shadow-lg"
            style={{ transform: `translateY(${parallaxY}px)`, transition: 'transform 0.1s linear' }}
          />
        </div>
      </div>
    </section>
  );
}
