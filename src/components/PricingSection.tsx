import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { Button } from './Button';

export function PricingSection() {
  const { ref, inView } = useInViewAnimation();

  return (
    <section className="w-full py-12 px-6" ref={ref}>
      <div className="max-w-4xl md:ml-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:justify-end">
        {/* Dark card */}
        <div
          className={`rounded-[40px] pl-10 pr-10 md:pr-24 pt-3 pb-10 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{
            backgroundColor: '#051A24',
            boxShadow: 'inset 0 2px 8px 0 rgba(255,255,255,0.05)',
            animationDelay: '0.1s',
          }}
        >
          <p className="text-xs font-mono mb-6 mt-6" style={{ color: '#E0EBF0', opacity: 0.6 }}>01</p>
          <h3 className="text-[22px] font-medium mb-3" style={{ color: '#F6FCFF' }}>Monthly Partnership</h3>
          <p className="text-sm leading-relaxed mb-6" style={{ color: '#E0EBF0' }}>
            A dedicated creative design team.<br />
            You work directly with Viktor.
          </p>
          <div className="mb-8">
            <span className="text-2xl font-medium" style={{ color: '#F6FCFF' }}>$5,000</span>
            <p className="text-xs mt-1" style={{ color: '#E0EBF0', opacity: 0.6 }}>Monthly</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="secondary" href="https://halaskastudio.com/./book">Start a chat</Button>
            <a
              href="https://halaskastudio.com/./book"
              className="inline-flex items-center px-7 py-3 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
              style={{ color: '#E0EBF0', border: '1px solid rgba(255,255,255,0.15)' }}
            >
              How it works
            </a>
          </div>
        </div>

        {/* Light card */}
        <div
          className={`rounded-[40px] pl-10 pr-10 md:pr-24 pt-3 pb-10 bg-white ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{
            boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
            animationDelay: '0.2s',
          }}
        >
          <p className="text-xs font-mono mb-6 mt-6" style={{ color: '#051A24', opacity: 0.4 }}>02</p>
          <h3 className="text-[22px] font-medium mb-3" style={{ color: '#0D212C' }}>Custom Project</h3>
          <p className="text-sm leading-relaxed mb-6" style={{ color: '#051A24' }}>
            Fixed scope, fixed timeline.<br />
            Same team, same standards.
          </p>
          <div className="mb-8">
            <span className="text-2xl font-medium" style={{ color: '#0D212C' }}>$5,000</span>
            <p className="text-xs mt-1" style={{ color: '#051A24', opacity: 0.5 }}>Minimum</p>
          </div>
          <Button variant="tertiary">
            Start a chat
          </Button>
        </div>
      </div>
    </section>
  );
}
