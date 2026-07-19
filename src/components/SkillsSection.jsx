import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
    // Frontend
    { name: "HTML/CSS", category: "frontend" },
    { name: "Tailwind CSS", category: "frontend" },
    { name: "JavaScript", category: "frontend" },
    { name: "TypeScript", category: "frontend" },
    { name: "React", category: "frontend" },

    // Backend
    { name: "Node.js", category: "backend" },
    { name: "Express", category: "backend" },
    { name: "MongoDB", category: "backend" },
    { name: "MySQL", category: "backend" },

    // Tools
    { name: "Git/Github", category: "tools" },
    { name: "Postman", category: "tools" },
    { name: "Swagger", category: "tools" },
    { name: "SSLCommerz", category: "tools" },
    { name: "Stripe", category: "tools" },
    { name: "Socket.io", category: "tools" },
    { name: "VS code", category: "tools" },
    { name: "Colab", category: "tools" },
    { name: "Vercel", category: "tools" },
    { name: "Render", category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

    return (
        <section id="skills" className="py-24 px-2 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredSkills.map((skill, index) => (
                        <div key={index} className="px-4 py-4 rounded-lg bg-[#d3a3a313] shadow-sm card-hover text-center">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};