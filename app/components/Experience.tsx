interface ExperienceCard {
  id: number;
  title: string;
  description: string;
}

const experienceCards: ExperienceCard[] = [
  {
    id: 1,
    title: "Upstate Services – AI Website Chat Assistant",
    description: "Built a website chat assistant for a local seal coating and HVAC services company. The assistant qualifies visitors, explains services in simple language, answers common questions, and books them directly into the job system so the owner does not have to stop what he's doing to answer every single inquiry.",
  },
  {
    id: 2,
    title: "Upstate Services – AI Phone Agent (In Progress)",
    description: "Designing an AI phone agent that picks up every call, routes callers, and has full conversations to capture all the details needed for a quote or booking. The goal is to make sure no lead goes to voicemail and no job is missed when the crew is on site or on the road.",
  },
  {
    id: 3,
    title: "Upstate Services – Email Follow‑Ups & Retention",
    description: "Building an email automation system that follows up with recurring clients, reminds them about seasonal services, and introduces upsell offers over time. This keeps customers in a steady cycle of work instead of one‑off jobs that are easily forgotten.",
  },
  {
    id: 4,
    title: "Photographer/Marketer – Lead‑Generating Portfolio Site",
    description: "Created a clean, focused website for a local photographer/marketer that showcases their work and directs visitors to a contact page that converts into real inquiries. The site acts as a permanent \"sales rep\" that keeps working even when they are away from their desk.",
  },
];

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-12 text-center">
          Work I&apos;ve Done
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceCards.map((card) => (
            <div
              key={card.id}
              className="bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 backdrop-blur-sm rounded-xl p-6 border-t-3 border-black hover:shadow-2xl hover:shadow-black/20"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

