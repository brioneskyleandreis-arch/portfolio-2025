"use client";

import { motion } from "framer-motion";

const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
    "Tailwind CSS", "HTML5", "CSS3", "Git", "PostgreSQL",
    "GraphQL", "Docker"
];

export function Skills() {
    return (
        <section className="py-24 container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="px-6 py-3 bg-secondary rounded-full font-medium text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                        {skill}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
