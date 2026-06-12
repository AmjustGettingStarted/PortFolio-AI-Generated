import { ArrowUpRight } from 'lucide-react';
import { Button } from './Button';

export function Footer() {
  return (
    <footer id="about" className="max-w-[1200px] mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <Button variant="primary" href="mailto:hello@viktoroddy.com">
          Start a chat
        </Button>

        <div className="flex items-start gap-8">
          <ArrowUpRight className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: '#051A24' }} />
          <div className="flex gap-12">
            <div className="flex flex-col gap-3">
              <a href="#services" className="text-base transition-opacity hover:opacity-70" style={{ color: '#051A24' }}>Services</a>
              <a href="#work" className="text-base transition-opacity hover:opacity-70" style={{ color: '#051A24' }}>Work</a>
              <a href="#about" className="text-base transition-opacity hover:opacity-70" style={{ color: '#051A24' }}>About</a>
            </div>
            <div className="flex flex-col gap-3">
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-base transition-opacity hover:opacity-70" style={{ color: '#051A24' }}>x.com</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-base transition-opacity hover:opacity-70" style={{ color: '#051A24' }}>LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
