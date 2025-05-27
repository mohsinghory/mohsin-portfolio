"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Github, Server } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background"></div>

        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translateX(${mousePosition.x * 20}px) translateY(${mousePosition.y * 20}px)`,
            transition: 'transform 0.2s ease-out'
          }}
        />

        {/* Animated blobs */}
        <div className="absolute -top-[200px] -left-[200px] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] animate-[pulse_8s_ease-in-out_infinite] opacity-50" />
        <div className="absolute -bottom-[200px] -right-[200px] w-[600px] h-[600px] rounded-full bg-accent/20 blur-[120px] animate-[pulse_10s_ease-in-out_infinite_1s] opacity-60" />
      </div>

      {/* Floating icons */}
      <div className="absolute top-1/4 left-1/6 w-12 h-12 text-primary/30 animate-[floating_6s_ease-in-out_infinite]">
        <Code size={48} />
      </div>
      <div className="absolute bottom-1/4 right-1/4 w-12 h-12 text-accent/30 animate-[floating_8s_ease-in-out_infinite_1s]">
        <Database size={48} />
      </div>
      <div className="absolute top-1/3 right-1/6 w-12 h-12 text-primary/30 animate-[floating_7s_ease-in-out_infinite_0.5s]">
        <Server size={48} />
      </div>
      <div className="absolute bottom-1/3 left-1/5 w-12 h-12 text-accent/30 animate-[floating_9s_ease-in-out_infinite_1.5s]">
        <Github size={48} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 [text-wrap:balance]">
          <span className="gradient-text">Mohsin Ghory</span>
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 [text-wrap:balance]">
          Fullstack Developer & ML Engineer
        </h2>
        <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto mb-8 [text-wrap:balance]">
          Building innovative digital experiences with the MERN stack, Python, and Machine Learning.
          Transforming ideas into elegant, scalable solutions.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
            <Link href="#projects">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
            <Link href="#contact">
              Contact Me
            </Link>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-foreground/50 mb-2">Scroll Down</span>
        <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex justify-center p-1">
          <div className="w-1 h-2 bg-foreground/50 rounded-full animate-[floating_1.5s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </div>
  );
}
