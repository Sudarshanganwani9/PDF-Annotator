import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileText, User, LogOut, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gradient">PDF Annotator</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/dashboard" 
              className={`text-sm font-medium transition-smooth hover:text-primary ${
                isActive('/dashboard') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Dashboard
            </Link>
            <Link 
              to="/viewer" 
              className={`text-sm font-medium transition-smooth hover:text-primary ${
                isActive('/viewer') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              PDF Viewer
            </Link>
            <div className="flex items-center space-x-2">
              {user ? (
                <>
                  <Button variant="ghost" size="icon" title="Profile">
                    <User className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={signOut} title="Sign Out">
                    <LogOut className="w-4 h-4" />
                  </Button>
                </>
              ) : (
                <Link to="/auth">
                  <Button variant="professional">Sign In</Button>
                </Link>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/dashboard" 
                className={`text-sm font-medium transition-smooth hover:text-primary px-2 py-1 ${
                  isActive('/dashboard') ? 'text-primary' : 'text-muted-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link 
                to="/viewer" 
                className={`text-sm font-medium transition-smooth hover:text-primary px-2 py-1 ${
                  isActive('/viewer') ? 'text-primary' : 'text-muted-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                PDF Viewer
              </Link>
              <div className="flex items-center space-x-2 px-2">
                {user ? (
                  <>
                    <Button variant="ghost" size="sm">
                      <User className="w-4 h-4 mr-2" />
                      Profile
                    </Button>
                    <Button variant="ghost" size="sm" onClick={signOut}>
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="professional" size="sm">Sign In</Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};