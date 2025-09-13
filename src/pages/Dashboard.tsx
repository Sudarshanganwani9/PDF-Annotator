import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { 
  Upload, 
  FileText, 
  Eye, 
  Edit, 
  Trash2, 
  Plus,
  Search,
  Filter,
  MoreVertical
} from "lucide-react";
import { Input } from "@/components/ui/input";

export const Dashboard = () => {
  // Mock data for demonstration
  const recentDocuments = [
    {
      id: "1",
      name: "Research Paper - AI in Healthcare.pdf",
      size: "2.4 MB",
      highlights: 15,
      lastModified: "2 hours ago",
      thumbnail: "📄"
    },
    {
      id: "2", 
      name: "Technical Specification Document.pdf",
      size: "5.1 MB",
      highlights: 8,
      lastModified: "1 day ago",
      thumbnail: "📋"
    },
    {
      id: "3",
      name: "Project Requirements Analysis.pdf", 
      size: "1.8 MB",
      highlights: 23,
      lastModified: "3 days ago",
      thumbnail: "📊"
    },
    {
      id: "4",
      name: "User Interface Design Guidelines.pdf",
      size: "3.2 MB", 
      highlights: 12,
      lastModified: "1 week ago",
      thumbnail: "🎨"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              My PDF Library
            </h1>
            <p className="text-muted-foreground">
              Manage and organize your annotated documents
            </p>
          </div>
          
          <Button variant="hero" size="lg" className="group">
            <Plus className="w-5 h-5 mr-2 group-hover:rotate-90 transition-all duration-300" />
            Upload New PDF
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card hover:shadow-document transition-smooth">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Documents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">24</div>
              <p className="text-xs text-muted-foreground">
                +3 this week
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-card hover:shadow-document transition-smooth">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Highlights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">387</div>
              <p className="text-xs text-muted-foreground">
                +42 this week
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-card hover:shadow-document transition-smooth">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Storage Used
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">89.2 MB</div>
              <p className="text-xs text-muted-foreground">
                of 1 GB available
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-card hover:shadow-document transition-smooth">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Last Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">2h</div>
              <p className="text-xs text-muted-foreground">
                ago
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search documents..."
              className="pl-10 shadow-sm"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filter
          </Button>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {recentDocuments.map((doc, index) => (
            <Card 
              key={doc.id} 
              className="group shadow-card hover:shadow-document transition-bounce cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-document rounded-lg flex items-center justify-center text-2xl shadow-sm">
                      {doc.thumbnail}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm text-foreground truncate group-hover:text-primary transition-smooth">
                        {doc.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {doc.size} • {doc.lastModified}
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-smooth">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>{doc.highlights} highlights</span>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="professional" size="sm" className="flex-1">
                    <Eye className="w-4 h-4 mr-2" />
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State (shown when no documents) */}
        <div className="hidden">
          <Card className="shadow-card border-dashed border-2 p-12 text-center">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No documents yet</h3>
            <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
              Upload your first PDF to start annotating and highlighting your documents
            </p>
            <Button variant="hero" className="group">
              <Upload className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              Upload Your First PDF
            </Button>
          </Card>
        </div>
      </main>
    </div>
  );
};