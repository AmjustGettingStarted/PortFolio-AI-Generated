import { useInViewAnimation } from '../hooks/useInViewAnimation';

const projects = [
  {
    name: 'evr',
    description: 'From idea to millions raised for a web3 AI product',
    image: 'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  },
  {
    name: 'Automation Machines',
    description: 'Streamlining industrial automation processes',
    image: 'https://motionsites.ai/assets/hero-automation-machines-preview-DlTveRIN.gif',
  },
  {
    name: 'xPortfolio',
    description: 'Modern portfolio management platform',
    image: 'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  },
];

function ProjectItem({ project }: { project: typeof projects[0] }) {
  const { ref, inView } = useInViewAnimation();

  return (
    <div ref={ref} className={`${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
      <div className="ml-20 md:ml-28 mb-6">
        <h3
          className="text-2xl md:text-3xl font-semibold mb-2"
          style={{ fontFamily: '"PP Mondwest", Georgia, serif', color: '#051A24' }}
        >
          {project.name}
        </h3>
        <p className="text-sm md:text-base" style={{ color: 'rgba(5,26,36,0.7)' }}>
          {project.description}
        </p>
      </div>
      <img
        src={project.image}
        alt={project.name}
        className="w-full rounded-2xl shadow-lg object-cover"
        style={{ maxHeight: '500px' }}
      />
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="work" className="max-w-[1200px] mx-auto px-6 py-12">
      <div className="flex flex-col gap-16 md:gap-20">
        {projects.map((p) => (
          <ProjectItem key={p.name} project={p} />
        ))}
      </div>
    </section>
  );
}
