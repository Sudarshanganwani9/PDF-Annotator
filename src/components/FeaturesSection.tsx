import { FeatureCard } from "@/components/FeatureCard";
import { 
  Upload, 
  Eye, 
  Highlighter, 
  Save, 
  Search, 
  Users,
  Shield,
  Zap
} from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Upload,
      title: "Easy PDF Upload",
      description: "Drag and drop or browse to upload your PDF documents. Supports all standard PDF formats with lightning-fast processing.",
      gradient: true
    },
    {
      icon: Eye,
      title: "Advanced Viewer",
      description: "View your PDFs with smooth pagination, zoom controls, and crisp rendering. Navigate through documents effortlessly."
    },
    {
      icon: Highlighter,
      title: "Smart Highlighting",
      description: "Select and highlight text with precision. Choose from multiple colors and save your annotations permanently."
    },
    {
      icon: Save,
      title: "Auto-Save",
      description: "Your highlights and annotations are automatically saved as you work. Never lose your progress again.",
      gradient: true
    },
    {
      icon: Search,
      title: "Quick Search",
      description: "Find specific text or annotations instantly. Search across all your documents from one central location."
    },
    {
      icon: Users,
      title: "Personal Library",
      description: "Organize all your annotated PDFs in one place. Rename, delete, and manage your document collection."
    },
    {
      icon: Shield,
      title: "Secure Storage",
      description: "Your documents are stored securely with enterprise-grade encryption. Access them from anywhere safely.",
      gradient: true
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Built for performance with instant loading and real-time synchronization. Work at the speed of thought."
    }
  ];

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gradient">
            Powerful Features for
            <span className="block">Professional Annotation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to annotate, organize, and manage your PDF documents 
            with professional precision and ease.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};