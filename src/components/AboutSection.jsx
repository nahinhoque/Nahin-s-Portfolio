

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-26 items-center">
                    <div className="space-y-6">


                        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight 
             bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
             bg-clip-text text-transparent dark:from-sky-300 dark:via-fuchsia-400 dark:to-pink-400">
                            Recent B.Sc. in CSE <br /> C, JS, Python - Exploring ML/DL
                        </h3>

                        <p className="text-muted-foreground text-xl font-bold">
                            Motivated self-starter, eager to grow in collaboration, ready to support teams with fresh ideas, reliability, and a growth mindset.
                        </p>

                        <p className="text-muted-foreground text-lg">
                            Over 16 months of self-directed study, I delivered 9 projects (2 full-stack)  that translate client requirements into robust, scalable web applications with excellent performance and user experience.
                        </p>

                        {/* **** */}


                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Reach Out Me
                            </a>



                            <a href="/Resume/NahinsResumee.pdf" download className="px-6 py-2 rounded-full border border-primary text-primary/150 hover:bg-primary/10 transition-colors duration-300">Download CV</a>

                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="flex justify-center md:justify-start p-4">
                            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-xl overflow-hidden border-2 border-indigo-500/70 shadow-2xl hover:shadow-indigo-500/40 transition-shadow duration-300">
                                <img src="/projects/profile0.jpg" alt="Profile" className="w-full h-full object-cover" />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <br />
            <br />
            <br />
            <br />
            <br />

        </section>

    );
};