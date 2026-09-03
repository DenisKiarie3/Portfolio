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
                            Hi, I'm Denis — A Full-Stack Developer Building Secure, Production-Ready Web Applications
                        </h3>
                        <p className="text-muted-foreground">
                            I specialize in building scalable, production-grade applications 
                            end-to-end — React, Redux Toolkit, and Tailwind CSS on the frontend, 
                            paired with Django REST Framework, PostgreSQL, and JWT authentication 
                            on the backend. My approach combines clean architecture, real test 
                            coverage, and a security-first mindset to deliver applications that 
                            are not just functional, but genuinely ready for production and real 
                            users.
                        </p>
                        <p className="text-muted-foreground">
                            From full-stack platforms like KukujeshiStocker — a multi-tenant inventory 
                            and payments platform for small retailers — to Kenya-first fintech builds 
                            integrating Paystack and M-Pesa, I focus on solving real-world business 
                            problems with reliable, well-tested software. I'm passionate about writing 
                            maintainable code, following disciplined engineering workflows, and 
                            delivering solutions that are secure, scalable, and commercially viable 
                            from day one.
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
                                        I build scalable web applications using React, Redux Toolkit, and 
                                        Tailwind CSS on the frontend, paired with Django REST Framework and 
                                        PostgreSQL on the backend — with clean separation between UI and 
                                        business logic, and an API-first architecture throughout.
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
                                    <h4 className="font-semibold text-lg">Secure Auth & Fintech Integrations</h4>
                                    <p className="text-muted-foreground">
                                        I implement JWT-based authentication with security-first token 
                                        handling, and build Kenya-first payment flows using Paystack and 
                                        M-Pesa (Daraja) — so applications aren't just functional, but 
                                        production-secure and ready to handle real transactions.
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
                                        I manage the full development lifecycle — architecture, testing, 
                                        deployment, and beyond — using version control, automated test 
                                        suites, and structured workflows to ship reliable, maintainable, 
                                        production-grade applications.
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