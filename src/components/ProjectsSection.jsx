import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Learning Management System",
        description: "Edemy LMS site with Clerk Auth, Quill, Stripe Sandbox, and Postman — Enrollments, Payments, API Management.",
        image: "/projects/project1.png",
        tags: ["React", "TailwindCSS", "Express", "MongoDB"],
        demoUrl: "https://lms-frontend-kohl-three.vercel.app/",
        githubUrl: "https://github.com/nahinhoque/LMS"
    },
    {
        id: 2,
        title: "Real-Time Chat-app",
        description: "A scalable, responsive chat solution featuring seamless real-time communication, robust authentication, and smooth data persistence.",
        image: "/projects/project2.png",
        tags: ["Socket.io", "TailwindCSS", "Express", "React", "MongoDB"],
        demoUrl: "https://chat-app-mu-smoky.vercel.app/",
        githubUrl: "https://github.com/nahinhoque/chat-app"
    },
    {
        id: 3,
        title: "Task Manager",
        description: "A smart, easy-to-use daily task manager with a clean interface for productivity.",
        image: "/projects/project3.png",
        tags: ["React", "TailwindCSS", "Js"],
        demoUrl: "https://webdev-project-react-4.vercel.app/",
        githubUrl: "https://github.com/nahinhoque/Webdev-Project-React--4"
    },
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary"> Projects </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects, each crafted with meticulous attention to detail, performance, and user experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border/50 flex flex-col">
                            {/* Increased height to 64 (16rem) and used object-top to focus on the top of the screenshot */}
                            <div className="h-64 overflow-hidden bg-muted">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 border text-xs font-medium rounded-full bg-secondary/50 text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-6 flex-grow">{project.description}</p>

                                <div className="flex justify-between items-center mt-auto pt-4 border-t border-border/40">
                                    <div className="flex space-x-4">
                                        <a href={project.demoUrl} target="_blank" rel="noreferrer" className="text-foreground hover:text-primary transition-colors">
                                            <ExternalLink size={20} />
                                        </a>
                                        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-foreground hover:text-primary transition-colors">
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/nahinhoque"
                    >
                        Explore My GitHub <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};