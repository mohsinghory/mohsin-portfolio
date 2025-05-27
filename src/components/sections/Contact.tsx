"use client";

import React from "react";
import {
  Card,
  CardContent
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Mail, MapPin, Phone, Send } from "lucide-react";

// Define a mock formSchema for TypeScript
// Real implementation would use zod
const mockFormSchema = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

type FormValues = typeof mockFormSchema;

export function Contact() {
  // Initialize form with basic validation
  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: FormValues) {
    // In a real application, you would send the form data to your server
    console.log(values);
    // You might show a success message or notification here
    alert("Message sent successfully! I'll get back to you soon.");
    form.reset();
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-foreground/70 max-w-3xl mx-auto text-lg">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Card */}
          <Card className="md:col-span-2 futuristic-border h-fit">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-foreground/70 mt-1">mohsinghory1234@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-foreground/70 mt-1">+91 8279664802</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-foreground/70 mt-1">Remote - Available Worldwide</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-semibold mb-4">Follow Me</h4>
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
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="md:col-span-3 futuristic-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

              <Form {...form}>
                {/* Move the form tag outside of Form for correct event handling */}
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <FormLabel>Your Name</FormLabel>
                      <Input
                        placeholder="John Doe"
                        {...form.register('name', { required: 'Name is required' })}
                      />
                      {form.formState.errors.name && (
                        <p className="text-sm text-red-500">{form.formState.errors.name.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <FormLabel>Your Email</FormLabel>
                      <Input
                        placeholder="john@example.com"
                        {...form.register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: 'Please enter a valid email'
                          }
                        })}
                      />
                      {form.formState.errors.email && (
                        <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <FormLabel>Subject</FormLabel>
                    <Input
                      placeholder="Project Inquiry"
                      {...form.register('subject', { required: 'Subject is required' })}
                    />
                    {form.formState.errors.subject && (
                      <p className="text-sm text-red-500">{form.formState.errors.subject.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <FormLabel>Message</FormLabel>
                    <Textarea
                      placeholder="Hello! I'd like to discuss a potential project..."
                      rows={5}
                      {...form.register('message', { required: 'Message is required' })}
                    />
                    {form.formState.errors.message && (
                      <p className="text-sm text-red-500">{form.formState.errors.message.message}</p>
                    )}
                  </div>

                  <Button type="submit" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
