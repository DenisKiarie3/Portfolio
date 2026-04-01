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
                            Hi, I'm Denis — A Full Stack & AI Developer Building Intelligent Digital Solutions
                        </h3>
                        <p className="text-muted-foreground">
                            I specialize in building scalable applications across both 
                            web development and data-driven systems. Using the 
                            MERN stack (MongoDB, Express.js, React, Node.js) alongside 
                            Python, I develop modern web applications while also 
                            working on machine learning models, data analysis, and 
                            intelligent systems. My approach combines clean code, 
                            efficient architecture, and practical problem-solving to 
                            deliver production-ready solutions.
                        </p>
                        <p className="text-muted-foreground">
                            From developing full-stack platforms like JAYS CLOSET to building Python-based 
                            data and machine learning projects, I focus on solving real-world problems 
                            with both software engineering and AI. I am passionate about writing 
                            maintainable code, exploring emerging technologies, and creating solutions 
                            that are not only functional, but also intelligent, scalable, and impactful.
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
                                        I build scalable web applications using React, Node.js, Express, and 
                                        MongoDB, ensuring seamless integration between frontend and backend 
                                        while maintaining performance, security, and clean architecture.
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
                                    <h4 className="font-semibold text-lg">AI & Machine Learning</h4>
                                    <p className="text-muted-foreground">
                                        I develop data-driven solutions using Python, working with tools 
                                        like Pandas, NumPy, and Scikit-learn to analyze data, build 
                                        models, and solve real-world problems through intelligent systems.
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
                                    <h4 className="font-semibold text-lg">Software Engineering & Delivery</h4>
                                    <p className="text-muted-foreground">
                                        I manage end-to-end development — from planning and building to deployment — using 
                                        modern tools, version control, and structured workflows to deliver reliable 
                                        and scalable applications.
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