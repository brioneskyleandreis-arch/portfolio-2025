"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
    {
        title: "E-Commerce Dashboard",
        description: "A comprehensive dashboard for managing products, orders, and customers with real-time analytics.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
        github: "#",
        demo: "#",
        image: "/hero-placeholder.svg" // Placeholder
    },
    {
        title: "Task Management App",
        description: "Collaborative task management tool with drag-and-drop kanban boards and team features.",
        tags: ["React", "Redux", "Node.js", "Socket.io"],
        github: "#",
        demo: "#",
        image: "/hero-placeholder.svg" // Placeholder
    },
    {
        title: "AI Content Generator",
        description: "SaaS application that uses AI to generate blog posts, social media captions, and more.",
        tags: ["Vue.js", "Python", "FastAPI", "OpenAI"],
        github: "#",
        demo: "#",
        image: "/hero-placeholder.svg" // Placeholder
    }
];

export function Projects() {
    return (
        <section id="projects" className="py-24 bg-muted/50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                                <div className="relative h-48 w-full overflow-hidden rounded-t-lg bg-secondary">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform hover:scale-105 duration-500"
                                    />
                                </div>
                                <CardHeader>
                                    <CardTitle>{project.title}</CardTitle>
                                    <CardDescription>{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="flex gap-2">
                                    <Button variant="outline" size="sm" asChild className="flex-1">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            <Github className="w-4 h-4 mr-2" /> Code
                                        </a>
                                    </Button>
                                    <Button size="sm" asChild className="flex-1">
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                                        </a>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
