import { ArrowDown } from "lucide-react"
export const HeroSection = () => {
    return (
    <section id="hero" 
        className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1"> Denis</span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Kiarie</span>
                </h1>
                <p 
                    className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    Full-Stack Developer building production-grade web applications with React, 
                    Redux Toolkit, and Tailwind CSS on the frontend, and Django REST Framework, 
                    PostgreSQL, and JWT authentication on the backend. I specialize in Kenya-first 
                    fintech integrations — including Paystack and M-Pesa (Daraja) — and ship with 
                    real test coverage, secure auth flows, and a clear path to production deployment. 
                    I build software the way real products get built: scalable, secure, and 
                    commercially viable from day one.
                </p>
                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
            <ArrowDown className="h-5 w-5 text-primary"/>
        </div>
    </section>)
}