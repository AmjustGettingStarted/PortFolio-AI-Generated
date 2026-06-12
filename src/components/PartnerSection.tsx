import { useRef, useCallback } from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { Button } from './Button';

const gifImages = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif',
  'https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
];

export function PartnerSection() {
  const { ref, inView } = useInViewAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const lastSpawnRef = useRef(0);
  const gifIndexRef = useRef(0);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const now = Date.now();
    if (now - lastSpawnRef.current < 80) return;
    lastSpawnRef.current = now;

    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const img = document.createElement('img');
    img.src = gifImages[gifIndexRef.current % gifImages.length];
    gifIndexRef.current++;

    const rotation = Math.random() * 20 - 10;
    img.style.cssText = `
      position: absolute;
      left: ${x - 60}px;
      top: ${y - 45}px;
      width: 120px;
      height: 90px;
      object-fit: cover;
      border-radius: 12px;
      transform: rotate(${rotation}deg) scale(1);
      pointer-events: none;
      z-index: 10;
      transition: opacity 1000ms ease, transform 1000ms ease;
      opacity: 1;
      box-shadow: 0 4px 16px rgba(0,0,0,0.15);
    `;

    container.appendChild(img);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        img.style.opacity = '0';
        img.style.transform = `rotate(${rotation}deg) scale(0.8)`;
      });
    });

    setTimeout(() => {
      if (container.contains(img)) container.removeChild(img);
    }, 1100);
  }, []);

  return (
    <section className="w-full py-12 px-6" ref={ref}>
      <div
        ref={containerRef}
        className={`relative max-w-7xl mx-auto py-48 rounded-[40px] flex flex-col items-center justify-center overflow-hidden ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ boxShadow: '0 4px 40px rgba(0,0,0,0.06)', background: 'white', cursor: 'crosshair' }}
        onMouseMove={handleMouseMove}
      >
        <h2
          className="text-[48px] md:text-[64px] lg:text-[80px] leading-[1] tracking-tight mb-12 text-center relative z-20"
          style={{ fontFamily: '"PP Mondwest", Georgia, serif', color: '#0D212C' }}
        >
          Partner with us
        </h2>

        <div className="relative z-20">
          <Button variant="primary">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=1"
              alt="Viktor"
              className="w-10 h-10 rounded-full object-cover -ml-2"
            />
            Start chat with Viktor
          </Button>
        </div>
      </div>
    </section>
  );
}
