import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Ayush
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Gupta
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I’m an aspiring{" "}
            <span className="font-semibold text-primary">Web Developer</span>{" "}
            passionate about creating clean, interactive, and modern web experiences. Currently learning
            {" "}
            <span className="font-semibold">React, Next.js, and APIs while building projects to strengthen my skills.
            </span>Exploring AI-powered features and practical web solutions to grow as a developer.
          </p>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Skilled in <span className="font-semibold">JavaScript, React,
            Tailwind CSS, and problem solving</span>. I enjoy working on
            real-world applications — from{" "}
            <span className="italic">to-do lists</span> to{" "}
            <span className="italic">larger projects</span> —
            and I’m constantly learning to become a stronger full-stack
            developer.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
