import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: boolean;
}

export const FeatureCard = ({ icon: Icon, title, description, gradient = false }: FeatureCardProps) => {
  return (
    <div className={`group p-6 rounded-xl transition-bounce hover:-translate-y-2 ${
      gradient 
        ? 'bg-gradient-accent shadow-document hover:shadow-xl' 
        : 'bg-card shadow-card hover:shadow-document border border-border'
    }`}>
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
        gradient 
          ? 'bg-white/20' 
          : 'bg-accent/10'
      }`}>
        <Icon className={`w-6 h-6 ${
          gradient 
            ? 'text-white' 
            : 'text-accent'
        }`} />
      </div>
      
      <h3 className={`text-lg font-semibold mb-2 ${
        gradient 
          ? 'text-white' 
          : 'text-foreground'
      }`}>
        {title}
      </h3>
      
      <p className={`text-sm leading-relaxed ${
        gradient 
          ? 'text-white/80' 
          : 'text-muted-foreground'
      }`}>
        {description}
      </p>
    </div>
  );
};