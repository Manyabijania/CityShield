import React from 'react';

const features = [
  {
    title: "Predictive Analytics",
    desc: "Forecast environmental and traffic impacts with precision using our advanced AI models.",
    icon: "📊"
  },
  {
    title: "Geospatial Intelligence",
    desc: "Access real-time mapping data across North India to visualize urban development.",
    icon: "🌐"
  },
  {
    title: "Sustainable Solutions",
    desc: "Implement eco-friendly strategies to minimize the carbon footprint of construction.",
    icon: "🌿"
  }
];

const testimonials = [
  { 
    name: "Saloni Sagar", 
    role: "Urban Planner", 
    text: "CityShield revolutionized our approach to city planning with its insightful predictions.",
    icon: "👤"
  },
  { 
    name: "Arvind Sharma", 
    role: "Construction Manager", 
    text: "A game-changer for sustainable construction projects. Highly recommended!",
    icon: "👷‍♀️"
  },
  { 
    name: "Riddhima Khanna", 
    role: "Env. Consultant", 
    text: "The best tool out there for balancing development and environmental conservation.",
    icon: "🍃"
  }
];

const Features = () => {
  return (
    <section className="py-24 px-8 lg:px-16 bg-slate-950/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto">
        
        {/* Core Capabilities Section */}
        <h2 className="text-3xl font-bold mb-16 border-l-4 border-blue-600 pl-6 uppercase tracking-tight">
          Core Capabilities
        </h2>
        <div className="grid md:grid-cols-3 gap-10 mb-25">
          {features.map((f, i) => (
            <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-3xl hover:border-blue-500/50 transition-all group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">
                {f.icon}
              </div>
              {/* Increased Title Font to text-2xl */}
              <h3 className="text-xl font-bold mb-4 text-blue-400">{f.title}</h3>
              {/* Increased Description Font to text-lg */}
              <p className="text-gray-300 text-lg leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* What Our Users Say Section */}
        <h2 className="text-3xl font-bold mb-16 border-l-4 border-blue-600 pl-6 uppercase tracking-tight">
          What Our Users Say
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-3xl hover:border-blue-500/50 transition-all group flex flex-col">
              {/* Increased Testimonial Font to text-xl */}
              <p className="text-gray-200 text-lg leading-relaxed italic mb-8 font-medium">
                "{t.text}"
              </p>
              <div className="mt-auto border-t border-white/5 pt-6">
                {/* Increased Name/Role Font */}
                <p className="font-bold text-blue-400 text-lg">{t.name}</p>
                <p className="text-gray-500 text-xs uppercase tracking-[0.2em] mt-2 font-semibold">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;