import { Briefcase, Code, User } from "lucide-react"

export const AboutSection = () => {
    return (
        <section 
            id="about"
            className="py-24 px-4 relative"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Hi, I'm Denis — A Full Stack Developer Driving Impactful Web Experiences
                        </h3>
                        <p className="text-muted-foreground">
                            I specialize in crafting high-performance, full stack web 
                            applications using the MERN stack (MongoDB, Express.js, React, 
                            Node.js) and Tailwind CSS. With every project, I blend 
                            clean code, intuitive interfaces, and scalable architecture 
                            to transform ideas into modern, production-ready digital products.
                        </p>
                        <p className="text-muted-foreground">
                            Whether it's building a sleek landing page or a fully-featured 
                            e-commerce platform like JAYS CLOSET, I focus on 
                            delivering real-world solutions that are fast, secure, 
                            and responsive. I'm passionate about writing maintainable code, 
                            learning emerging technologies, and creating digital experiences 
                            that matter.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a 
                            href="#contact" 
                            className="cosmic-button">
                                Get In Touch
                            </a>

                            <a 
                            href="/Denis-Kiarie-CV.pdf" 
                            download
                            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Full Stack Development</h4>
                                    <p className="text-muted-foreground">
                                        I architect scalable applications using React, Node.js, 
                                        Express, and MongoDB — ensuring seamless integration between frontend and backend.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                    <p className="text-muted-foreground">
                                        I prioritize user-first design by crafting clean, 
                                        responsive, and intuitive interfaces that offer clarity, 
                                        accessibility, and performance.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Project Management</h4>
                                    <p className="text-muted-foreground">
                                        I manage full project lifecycles — from planning and development 
                                        to deployment — using agile workflows, Git version control, and 
                                        transparent communication.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}