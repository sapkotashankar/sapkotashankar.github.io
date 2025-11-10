import { CheckCircle, Code, Palette, Zap, Globe, Download } from "lucide-react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ProjectCard from "@/components/ProjectCard";
import BlogPostPreview from "@/components/BlogPostPreview";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with payment integration and admin dashboard.",
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "MongoDB"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team features.",
      image: "/placeholder.svg",
      tags: ["TypeScript", "Firebase", "Tailwind"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather dashboard with forecasts and interactive maps.",
      image: "/placeholder.svg",
      tags: ["React", "API", "Charts"],
      githubUrl: "https://github.com",
    },
  ];

  const blogPosts = [
    {
      title: "Building Scalable React Applications",
      excerpt: "Learn best practices for structuring large-scale React applications with clean architecture.",
      date: "Jan 15, 2025",
      readTime: "5 min read",
      category: "Development",
    },
    {
      title: "The Art of Clean Code",
      excerpt: "Exploring principles and patterns that make code maintainable and elegant.",
      date: "Jan 10, 2025",
      readTime: "7 min read",
      category: "Best Practices",
    },
    {
      title: "Modern CSS Techniques",
      excerpt: "Discover the latest CSS features and how to use them in production applications.",
      date: "Jan 5, 2025",
      readTime: "6 min read",
      category: "CSS",
    },
  ];

  const features = [
    { icon: Code, text: "Clean, maintainable code with TypeScript" },
    { icon: Palette, text: "Modern, responsive design systems" },
    { icon: Zap, text: "Optimized for performance and speed" },
    { icon: Globe, text: "SEO-friendly and accessible" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <Sidebar />
          </div>

          {/* Main Content */}
          <main className="lg:col-span-9 space-y-16">
            {/* Hero Section */}
            <section id="home" className="py-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Hi, I'm John Doe
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                A full-stack developer crafting beautiful, functional web experiences.
              </p>
              <Button size="lg" className="gap-2">
                <Download className="h-5 w-5" />
                Download Resume
              </Button>
            </section>

            {/* About Section */}
            <section id="about" className="scroll-mt-20">
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <div className="prose max-w-none">
                <p className="text-muted-foreground mb-4">
                  I'm a passionate full-stack developer with over 5 years of experience building web applications.
                  I specialize in React, Node.js, and modern web technologies, with a focus on creating intuitive
                  user experiences and scalable architectures.
                </p>
                <p className="text-muted-foreground mb-4">
                  When I'm not coding, you can find me contributing to open-source projects, writing technical
                  articles, or exploring new technologies. I believe in continuous learning and sharing knowledge
                  with the developer community.
                </p>
              </div>
            </section>

            {/* Notable Features */}
            <section className="bg-muted/30 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Notable Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <p className="text-muted-foreground">{feature.text}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="scroll-mt-20">
              <h2 className="text-3xl font-bold mb-6">Projects</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
            </section>

            {/* Blog Section */}
            <section id="blog" className="scroll-mt-20">
              <h2 className="text-3xl font-bold mb-6">Latest Blog Posts</h2>
              <div className="space-y-6">
                {blogPosts.map((post, index) => (
                  <BlogPostPreview key={index} {...post} />
                ))}
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="scroll-mt-20">
              <div className="bg-muted/30 rounded-lg p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>
                <Button size="lg">Contact Me</Button>
              </div>
            </section>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
