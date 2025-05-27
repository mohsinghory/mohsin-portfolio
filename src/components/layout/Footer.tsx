"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Column 1: Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold gradient-text mb-4 inline-block">
              Mohsin Ghory
            </Link>
            <p className="text-foreground/70 mt-3 mb-6 max-w-md">
              Full-stack developer specializing in MERN stack, Python, and Machine Learning,
              crafting innovative digital solutions for diverse industries.
            </p>
            <div className="flex gap-4">
              {["github", "linkedin", "twitter", "dribbble"].map((social) => (
                <a
                  key={social}
                  href={`https://${social}.com/mohsinghory`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-card border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" clipRule="evenodd" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-foreground/70">
                <span className="block">Email:</span>
                <a href="mailto:mohsinghory1234@gmail.com" className="hover:text-primary transition-colors">
                  mohsinghory1234@gmail.com
                </a>
              </li>
              <li className="text-foreground/70">
                <span className="block">Phone:</span>
                <a href="tel:+918279664802" className="hover:text-primary transition-colors">
                  8279664802
                </a>
              </li>
              <li className="text-foreground/70">
                <span className="block">Location:</span>
                <span>lig 755 sector 4 Agra</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm">
            © {new Date().getFullYear()} Mohsin Ghory. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 w-10 h-10 rounded-full border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
