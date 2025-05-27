"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Download, GraduationCap, User } from "lucide-react";
import Link from "next/link";

export function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -z-10 inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-foreground/70 max-w-3xl mx-auto text-lg">
            Get to know more about me, my background, and what I do.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side: Image and Personal Info */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative w-80 h-80 mb-8 mx-auto md:mx-0">
              <div className="absolute inset-0 rounded-2xl overflow-hidden futuristic-border">
                {/* Replace with your actual profile image */}
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <User size={120} className="text-foreground/30" />
                </div>
              </div>
            </div>

            <Card className="w-full glass-effect">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Name:</span>
                    <span className="font-medium">Mohsin Ghory</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Position:</span>
                    <span className="font-medium">Fullstack Developer</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Specialization:</span>
                    <span className="font-medium">MERN, Python, ML</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Email:</span>
                    <span className="font-medium">contact@mohsinghory.com</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/70">Available for:</span>
                    <span className="font-medium">Freelance & Full-time</span>
                  </div>
                </div>

                <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-white">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right side: Biography and experience */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              I'm a <span className="gradient-text">Fullstack Developer</span> specialized in MERN stack with expertise in Python and Machine Learning
            </h3>
            <p className="text-foreground/70 mb-6">
              With a passion for building innovative digital solutions, I've dedicated my career to crafting clean, efficient, and user-centric applications. My journey in web development started with the MERN stack (MongoDB, Express, React, Node.js), and has expanded to include advanced skills in Python and Machine Learning.
            </p>
            <p className="text-foreground/70 mb-8">
              I believe in creating technology that solves real-world problems. Whether it's developing responsive web applications, building intelligent algorithms, or optimizing database performance, I approach each project with dedication and a commitment to excellence.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Professional Experience</h4>
                  <p className="text-foreground/70 mt-2">
                    Over 5 years of experience building scalable web applications and machine learning solutions for diverse industries, including fintech, e-commerce, and healthcare.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Education & Training</h4>
                  <p className="text-foreground/70 mt-2">
                    Bachelor's degree in Computer Science with specialized training in Machine Learning, Deep Learning, and modern web development technologies.
                  </p>
                </div>
              </div>
            </div>

            <Button asChild className="mt-8 bg-transparent hover:bg-primary/10 text-primary border border-primary px-0">
              <Link href="#skills" className="group flex items-center">
                View My Skills
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
