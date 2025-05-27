"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Placeholder image components for projects
const ProjectImage = () => (
  <div className="w-full h-48 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 rounded-t-lg flex items-center justify-center">
    <span className="text-foreground/30">Project Screenshot</span>
  </div>
);

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  githubLink?: string;
  liveLink?: string;
  featured?: boolean;
}

const projects: ProjectProps[] = [
  {
    title: "AI-Powered E-commerce Platform",
    description: "A full-stack e-commerce solution with personalized product recommendations using machine learning algorithms. Built with React, Node.js, MongoDB, and TensorFlow.",
    tags: ["MERN", "TensorFlow", "Redux", "Stripe"],
    image: "/images/Benefits-of-Integrating-AI-Solutions-in-eCommerce.webp",
    featured: true,
  },
  {
    title: "Smart Financial Dashboard",
    description: "Interactive dashboard for financial analytics with predictive insights. Features real-time data visualization and machine learning forecasting models.",
    tags: ["React", "Python", "D3.js", "Scikit-learn"],
    image: "/images/seo-hero-financial-dashboards_ttulhs.png",
    featured: true,
  },
  {
    title: "Healthcare Appointment System",
    description: "A comprehensive healthcare platform that streamlines patient appointments and medical records management with secure authentication.",
    tags: ["Next.js", "Express", "MongoDB", "JWT"],
    image: "/images/Medical-Appointment-Scheduling-Software.png",
  },
  {
    title: "Natural Language Processing Tool",
    description: "Advanced NLP application that analyzes sentiment, extracts entities, and summarizes large text documents using deep learning techniques.",
    tags: ["Python", "PyTorch", "FastAPI", "React"],
    image: "/images/233-scaled.jpg",
    featured: true,
  },
  {
    title: "Real-time Collaboration Platform",
    description: "A collaborative workspace with real-time document editing, chat, and project management features built with WebSocket technology.",
    tags: ["MERN", "Socket.io", "Redis", "AWS"],
    image: "/images/67d0731a50881146d37ac482_Real-Time Collaboration Tools for Design Teams.png",
  },
  {
    title: "Computer Vision Image Analyzer",
    description: "Web application that applies computer vision algorithms to analyze and process images, including object detection and image classification.",
    tags: ["Python", "TensorFlow", "OpenCV", "Flask"],
    image: "/images/e-Diagram-of-computer-vision-system-and-image-analysis-methodology.png",
  },
];

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  tags,
  image,
  githubLink,
  liveLink,
  featured,
}) => {
  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
      featured ? "border-primary/30" : ""
    }`}>
      {image ? (
        <div className="relative w-full h-48">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      ) : (
        <ProjectImage />
      )}
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold">{title}</h3>
          {featured && (
            <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
              Featured
            </span>
          )}
        </div>
        <p className="text-foreground/70 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-secondary/50 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3 mt-4">
          <Button size="sm" variant="outline" className="gap-2">
            <Github className="h-4 w-4" />
            Code
          </Button>
          <Button size="sm" className="bg-primary text-white gap-2">
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export function Projects() {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-foreground/70 max-w-3xl mx-auto text-lg">
            Explore my recent work and personal projects that showcase my skills and expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 group">
            <Link href="https://github.com/mohsinghory" target="_blank" rel="noopener noreferrer">
              View More on GitHub
              <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
