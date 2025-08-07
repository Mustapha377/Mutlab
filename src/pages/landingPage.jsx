import { motion } from "framer-motion";
import { Rocket, Lightbulb, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../projectData";
import ProjectCard from "../component/projectcard";


export default function LandingPage() {
    const latestProjects = projects.slice(0, 3); // show latest 5
    const Cardproject = ProjectCard;
  return (
    <div className="bg-zinc-950 text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b
       border-zinc-800">
        <h1 className="text-2xl font-bold text-indigo-500">Mutlab</h1>
        
          <Link to="/login" className="text-sm text-zinc-300 hover:text-indigo-400">
          Login/Sign-up</Link>
          
      </nav>

      {/* Hero */}
      <section className="text-center py-20 px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Share Ideas. Collaborate. Build the Future.
        </motion.h2>
        <p className="text-zinc-400 max-w-xl mx-auto mb-8">
          Mutlab is where innovators meet builders. Post your project or idea to find collaborators or sell it.
        </p>
        <Link 
          to="/home" 
          className="bg-indigo-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-600 transition"
        >
          Dive in
        </Link>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 bg-zinc-900">
        <h3 className="text-2xl font-bold text-center mb-10">How It Works</h3>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <FeatureCard icon={<Lightbulb size={36} />} title="Post Your Idea" desc="Share your project or idea in minutes." />
          <FeatureCard icon={<Users size={36} />} title="Find Collaborators" desc="Connect with like-minded developers or designers." />
          <FeatureCard icon={<Rocket size={36} />} title="Build or Sell" desc="Get your idea built or sell it to the right people." />
        </div>
      </section>

      {/* Explore Projects */}
      <section className="py-16 px-6">
        <h3 className="text-2xl font-bold text-center mb-8">Explore Projects</h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {latestProjects.map((project) => (
            <Cardproject key={project.id} project={project} layout="horizontal" />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 bg-zinc-900">
        <h4 className="text-3xl font-bold mb-6">Ready to share your next big idea?</h4>
        <Link 
          to="/post"
          className="bg-indigo-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-600 transition"
        >
          Post a Project
        </Link>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-zinc-500 text-sm border-t border-zinc-800">
        &copy; {new Date().getFullYear()} Mutlab. Built by Mustapha Ado.
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <motion.div 
      className="bg-zinc-800 p-6 rounded-lg text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex justify-center mb-4 text-indigo-500">{icon}</div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-zinc-400 text-sm">{desc}</p>
    </motion.div>
  );
}
