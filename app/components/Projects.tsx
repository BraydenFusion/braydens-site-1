interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Upstate Services – AI Website & Lead System",
    description: "A fully‑custom AI website assistant built for a local seal coating and HVAC services company. It qualifies visitors, explains services in simple language, and captures all the details needed to book jobs without the owner manually replying to every message. The system turns the website into a 24/7 lead catcher for busy field crews.",
    image: "/projects/project-1.png",
  },
  {
    id: 2,
    title: "Upstate Services – AI Phone & Email Follow‑Ups",
    description: "An AI phone and email automation concept designed for small home‑service teams that live on the road. Incoming calls are answered, routed, and logged automatically while email follow‑ups keep past customers in the loop about seasonal work and new offers. The goal is a single, always‑on system that prevents missed calls, fills the schedule, and builds long‑term client relationships.",
    image: "/projects/project-2.png",
  },
];

export default function Projects(): React.JSX.Element {
  return (
    <section id="lab" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {featuredProjects.map((project) => {
          return (
            <div key={project.id} className="mb-20 last:mb-0">
              <div className="relative grid grid-cols-1 gap-8 lg:gap-12 items-center">
                {/* Text Content */}
                <div className="lg:max-w-3xl lg:mx-auto">
                  <p className="text-black text-lg lg:text-xl mb-2 font-medium">
                    Featured Project
                  </p>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                    {project.title}
                  </h3>
                  {/* Description Card */}
                  <div className="relative z-10 mb-6">
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-gray-200 shadow-lg">
                      <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  {/* Website link */}
                  {project.link && (
                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:text-black transition-colors duration-200"
                        aria-label="Visit project website"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-6 h-6"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="2" y1="12" x2="22" y2="12" />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

