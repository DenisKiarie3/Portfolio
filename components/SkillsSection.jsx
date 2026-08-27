import { useState } from "react"

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript (ES6+)", level: 90, category: "frontend" },
  { name: "React.js (Vite)", level: 90, category: "frontend" },
  { name: "Redux Toolkit", level: 85, category: "frontend" },
  { name: "Tailwind CSS v4", level: 90, category: "frontend" },
  { name: "React Router DOM", level: 90, category: "frontend" },
  { name: "Framer Motion", level: 85, category: "frontend" },

  // Backend
  { name: "Python", level: 90, category: "backend" },
  { name: "Django & Django REST Framework", level: 90, category: "backend" },
  { name: "RESTful API Design", level: 85, category: "backend" },
  { name: "JWT Authentication", level: 85, category: "backend" },
  { name: "API Security & CORS", level: 85, category: "backend" },

  // Databases
  { name: "PostgreSQL", level: 85, category: "database" },
  { name: "Django ORM", level: 85, category: "database" },
  { name: "SQLite", level: 85, category: "database" },

  // Payments & Fintech
  { name: "Paystack Integration", level: 90, category: "payments" },
  { name: "M-Pesa Daraja API", level: 85, category: "payments" },
  { name: "Webhook Verification & Security", level: 85, category: "payments" },

  // Tools & DevOps
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "VSCode", level: 95, category: "tools" },
  { name: "Postman", level: 85, category: "tools" },
  { name: "Netlify / Render", level: 90, category: "tools" },
  { name: "pytest & Vitest (Testing)", level: 90, category: "tools" }
]

const categories = ["all", "frontend", "backend", "database", "payments", "tools"]
export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all")
    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    )
    return (
        <section 
        id="skills" 
        className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>
                <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                    I work across the full stack — React and Django — building secure, 
                    production-grade web applications and Kenya-first fintech integrations. 
                    Below is a snapshot of the tools and technologies I use to design, build, 
                    test, and ship scalable, real-world applications.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button 
                        key={key} 
                        onClick={() => setActiveCategory(category)}
                        className={`px-5 py-2 rounded-full transition-colors duration-300 capitalize ${activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"}`}>
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                                <p className="text-sm text-muted-foreground group-hover:opacity-100 opacity-80 transition-opacity duration-300">
                                    {skill.category === "frontend" && "Frontend technology"}
                                    {skill.category === "backend" && "Backend technology"}
                                    {skill.category === "database" && "Database & integration layer"}
                                    {skill.category === "payments" && "Payments & fintech integration"}
                                    {skill.category === "tools" && "Development & deployment tool"}
                                </p>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" style={{width: skill.level + "%"}}>

                                </div>
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}