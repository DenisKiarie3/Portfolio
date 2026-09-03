import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "KukujeshiStocker",
    description: "A full-stack, multi-tenant inventory, POS, and payment collection platform for small retailers in Kenya. Store owners manage stock levels, process sales, and accept real Paystack payments, with role-based staff access and full data isolation between stores. Built solo end-to-end with JWT authentication, webhook-verified payments, and 65+ automated backend tests.",
    image: "/projects/Project1.png",
    tags: ["React", "Redux Toolkit", "React Query", "Tailwind CSS", "Django REST Framework", "PostgreSQL", "JWT", "Paystack"],
    demoUrl: "https://kukujeshistocker.netlify.app",
    githubUrl: "https://github.com/DenisKiarie3/KukujeshiStocker",
  },

  {
    id: 2,
    title: "ClientFlow",
    description: "A freelancer invoicing and client management platform built around a deliberate service-layer architecture — every data operation is isolated behind a services layer, so a real Django REST backend can be integrated later with zero component rewrites. Features dynamic invoicing with live-calculated totals, a stats dashboard, and an accessible, keyboard-navigable UI built in from the start.",
    image: "/projects/Project2.png",
    tags: ["React", "Redux Toolkit", "Tailwind CSS v4", "Framer Motion", "React Router", "Zod", "Netlify"],
    demoUrl: "https://clientflow-invoice.netlify.app/",
    githubUrl: "https://github.com/DenisKiarie3/clientflow.git",
  },

  {
    id: 3,
    title: "Python Data Analysis Projects",
    description: "Collection of Python projects including word frequency analysis, log file processing, and dataset exploration, using Pandas, NumPy, and Matplotlib.",
    image: "/projects/Project3.jpg",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Jupyter Notebook", "Data Analysis"],
    demoUrl: "",
    githubUrl: "https://github.com/DenisKiarie3/python-portfolio",
  },
]

export const ProjectsSection = () => {
    return (
        <section 
        id="projects"
        className="py-24 px-4 relative"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 
                className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary"> Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my featured projects — full-stack, production-grade 
                    applications spanning inventory management, payments, and client 
                    billing, alongside independent Python data analysis work. Each project 
                    is built with a focus on security, real-world usability, and clean 
                    architecture, from Django REST Framework backends with fintech 
                    integrations to thoughtfully structured React frontends.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div 
                        key={key} 
                        className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                           

                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a 
                                        href={project.demoUrl} 
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink size={20}/>
                                        </a>
                                        <a 
                                        href={project.githubUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20}/>
                                        </a>
                                    </div>
                            </div>
                            </div>

                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a 
                    href="https://github.com/DenisKiarie3"
                    target="_blank"
                    className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    >
                        Check My Github <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    )
}