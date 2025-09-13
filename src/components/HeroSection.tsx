import { Button } from "@/components/ui/button";
import { FileText, Highlighter, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-pdf.jpg";

export const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Annotate PDFs
              <span className="block text-accent-glow">Like a Pro</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Upload, highlight, and annotate your PDF documents with precision. 
              Save your work and access it anywhere, anytime.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="accent" size="xl" className="group">
                <FileText className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Get Started Free
              </Button>
              <Button variant="outline" size="xl" className="border-white/20 text-white hover:bg-white/10">
                View Demo
              </Button>
            </div>

            {/* Feature highlights */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <Highlighter className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">Smart Highlighting</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">Secure Storage</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">Lightning Fast</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative z-10">
              <img 
                src={heroImage}
                alt="PDF Annotator Interface Preview"
                className="w-full h-auto rounded-2xl shadow-document transform hover:scale-105 transition-bounce"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent-glow/20 rounded-full blur-2xl animate-pulse delay-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
};