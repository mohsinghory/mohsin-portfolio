"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BarChartBig,
  Brain,
  ChevronRight,
  CheckCircle,
  Code2,
  FileCode,
  FlaskConical,
  LineChart,
  Network
} from "lucide-react";
import Link from "next/link";

interface MLServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const mlServices: MLServiceProps[] = [
  {
    title: "Predictive Analytics",
    description: "Building models that analyze historical data to make predictions about future events or behaviors.",
    icon: <LineChart className="h-12 w-12 text-primary" />,
  },
  {
    title: "Natural Language Processing",
    description: "Developing systems that can understand, interpret, and generate human language in useful ways.",
    icon: <Code2 className="h-12 w-12 text-primary" />,
  },
  {
    title: "Computer Vision",
    description: "Creating algorithms that can process, analyze, and extract information from visual data and images.",
    icon: <Network className="h-12 w-12 text-primary" />,
  },
  {
    title: "Data Visualization",
    description: "Transforming complex data into intuitive visual representations for better understanding and insights.",
    icon: <BarChartBig className="h-12 w-12 text-primary" />,
  },
  {
    title: "Machine Learning Integration",
    description: "Incorporating ML models into existing software systems and applications for enhanced functionality.",
    icon: <Brain className="h-12 w-12 text-primary" />,
  },
  {
    title: "Custom Python Solutions",
    description: "Developing specialized Python applications and scripts tailored to specific business needs.",
    icon: <FileCode className="h-12 w-12 text-primary" />,
  },
];

const MLServiceCard: React.FC<MLServiceProps> = ({ title, description, icon }) => {
  return (
    <Card className="group hover:border-primary transition-all duration-300 hover:-translate-y-2">
      <CardContent className="p-6">
        <div className="mb-5 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-foreground/70">{description}</p>
      </CardContent>
    </Card>
  );
};

export function MLExpertise() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(to right, hsl(var(--primary)/50%) 1px, transparent 1px),
                             linear-gradient(to bottom, hsl(var(--primary)/50%) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side: Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Python & <span className="gradient-text">Machine Learning</span> Expertise
            </h2>
            <p className="text-foreground/70 mb-6">
              As a specialized Python developer with a focus on Machine Learning, I bring innovative AI-powered solutions to complex problems. My expertise spans from data preprocessing and model development to deployment and integration.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Custom machine learning model development for specific business needs",
                "Integration of AI capabilities into existing software systems",
                "Data analysis and visualization for actionable insights",
                "Automation of repetitive tasks through intelligent algorithms",
                "Natural language processing for text analysis and chatbots",
                "Computer vision solutions for image and video processing"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{item}</span>
                </div>
              ))}
            </div>

            <Button asChild className="bg-primary hover:bg-primary/90 text-white group">
              <Link href="#contact">
                Discuss Your ML Project
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Right side: Animated illustration */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Circular orbit with dots */}
              <div className="absolute inset-0 rounded-full border border-dashed border-primary/40 animate-[spin_20s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent"></div>
              </div>

              {/* Inner orbit */}
              <div className="absolute inset-8 rounded-full border border-dashed border-accent/40 animate-[spin_15s_linear_infinite_reverse]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent"></div>
              </div>

              {/* Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center floating">
                  <FlaskConical className="h-12 w-12 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">
            Machine Learning <span className="gradient-text">Services</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mlServices.map((service, index) => (
              <MLServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
