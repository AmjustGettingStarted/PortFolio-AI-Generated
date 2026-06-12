import { Button } from './Button';

export function BottomNav() {
  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 bg-white rounded-full px-8 py-2"
      style={{
        boxShadow: '0 4px 24px rgba(5,26,36,0.12), 0 1px 4px rgba(5,26,36,0.08), inset 0 1px 0 rgba(255,255,255,0.8)',
      }}
    >
      <span
        className="text-2xl font-semibold"
        style={{ fontFamily: '"PP Mondwest", Georgia, serif', color: '#051A24' }}
      >
        V
      </span>
      <Button variant="primary" href="mailto:hello@viktoroddy.com" className="text-xs px-5 py-2">
        Start a chat
      </Button>
    </div>
  );
}
