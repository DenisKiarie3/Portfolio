import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
    id: 1,
    title: "Jays-Closet",
    description: "A fullstack ecommerce web app for women's fashion. Features user authentication, product browsing, cart system, and admin dashboard. Built for real-world usability and scalability.",
    image: "/projects/Project1.png",
    tags: ["React", "Tailwind", "Express", "Node.js", "MySQL", "JWT", "Render", "Netlify"],
    demoUrl: "https://jays-closet-official1.netlify.app/",
    githubUrl: "https://github.com/DenisKiarie3/JAYS-CLOSET-OFFICIAL1.git",
  },

  {
    id: 2,
    title: "Recipe App",
    description: "A simple and responsive frontend app that displays delicious recipes with ingredients and steps. Users can explore meals by category and search functionality.",
    image: "/projects/Project2.png",
    tags: ["React", "Tailwind", "MealDB API", "Netlify"],
    demoUrl: "https://deniskiarierecipeapp.netlify.app/",
    githubUrl: "https://github.com/DenisKiarie3/RECIPE-APP.git",
  },

  {
    id: 3,
    title: "Meme Generator",
    description: "A fun app that allows users to create custom memes by adding top and bottom text to random meme templates. Real-time preview included.",
    image: "/projects/Project3.png",
    tags: ["React", "Tailwind", "Meme API", "Netlify"],
    demoUrl: "https://deniskiariememegenerator.netlify.app/",
    githubUrl: "https://github.com/DenisKiarie3/MEME-GENERATOR.git",
  },

  {
    id: 4,
    title: "Travel Journal",
    description: "A clean, card-based layout that displays memorable travel destinations with location, description, and date. Designed with focus on minimalism and responsive UI.",
    image: "/projects/Project4.png",
    tags: ["React", "Tailwind", "Static Content", "Netlify"],
    demoUrl: "https://deniskiarietraveljournal.netlify.app/",
    githubUrl: "https://github.com/DenisKiarie3/TRAVEL-JOURNAL.git",
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
                    Here are some of my featured projects. Each project was 
                    carefully crafted with attention to detail, performance, 
                    and user experience.
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