import { Key } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

// EEEEDDDIIITTTAAABBLLEE
const skills = [
    // Frontend
    {name: "HTML/CSS", level: 95, category: "frontend"},
    {name: "Tailwind CSS", level: 80, category: "frontend"},
    {name: "JavaScript", level: 70, category: "frontend"},
    {name: "TypeScript", level: 60, category: "frontend"},
    {name: "React", level: 70, category: "frontend"},
    {name: "Redux", level: 65, category: "frontend"},
    {name: "Next.js", level: 65, category: "frontend"},


    // Backend
    {name: "Node.js", level: 70, category: "backend"},
    {name: "Express", level: 65, category: "backend"},
    {name: "MongoDB", level: 60, category: "backend"},
    {name: "PostgreSQL", level: 60, category: "backend"},
    {name: "MySQL", level: 65, category: "backend"},

    // Tools
    {name: "Git/Github", level: 70, category: "tools"},
    {name: "Figma", level: 60, category: "tools"},
    {name: "Postman", level: 70, category: "tools"},
    {name: "Stripe", level: 70, category: "tools"},
    {name: "Socket.io", level: 60, category: "tools"},
    {name: "VS code", level: 85, category: "tools"},
    {name: "Colab", level: 80, category: "tools"},
    {name: "Vercel", level: 70, category: "tools"},
    
];


const categories = ["all", "frontend", "backend","tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);
    return (
    <section id="skills"
    className="py-24 px-2 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>


                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {categories.map((category, Key) => (
                        <button key={Key} 
                        onClick={() => setActiveCategory(category)}
                        className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                        )}>
                            {category}
                        </button>
                    ))}
                </div>



                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {filteredSkills.map((skill, Key) =>(
                        <div key={Key} className="px-2 py-1 rounded-lg bg-[#d3a3a313] shadow-xs card-hover">
                            <div className="text-left mb-1 ">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>

                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" style={{width: skill.level + "%"}}/>
                            </div>

                            <div className="text-right mb-1">
                                <span className="text-sm  text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}

                </div>
        </div>
    </section>
    );
};