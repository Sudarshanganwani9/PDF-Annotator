import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { 
  ZoomIn, 
  ZoomOut, 
  RotateCw, 
  Download, 
  ChevronLeft, 
  ChevronRight,
  Highlighter,
  Palette,
  ArrowLeft,
  Save
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const PdfViewer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(15);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [selectedHighlightColor, setSelectedHighlightColor] = useState("yellow");
  
  const highlightColors = [
    { name: "yellow", color: "bg-yellow-300", label: "Yellow" },
    { name: "blue", color: "bg-blue-300", label: "Blue" },
    { name: "green", color: "bg-green-300", label: "Green" },
    { name: "pink", color: "bg-pink-300", label: "Pink" },
    { name: "orange", color: "bg-orange-300", label: "Orange" }
  ];

  const mockHighlights = [
    { id: 1, text: "Machine learning algorithms", page: 1, color: "yellow" },
    { id: 2, text: "Neural network architectures", page: 1, color: "blue" },
    { id: 3, text: "Deep learning frameworks", page: 2, color: "green" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="flex h-screen">
        {/* Sidebar - Highlights Panel */}
        <div className="w-80 border-r border-border bg-muted/30 flex flex-col">
          <div className="p-4 border-b border-border">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-foreground">Highlights</h2>
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Color Picker */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Highlight Color</label>
              <div className="flex space-x-2">
                {highlightColors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedHighlightColor(color.name)}
                    className={`w-8 h-8 rounded-full ${color.color} border-2 transition-all ${
                      selectedHighlightColor === color.name 
                        ? 'border-primary scale-110' 
                        : 'border-border hover:border-primary/50'
                    }`}
                    title={color.label}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Highlights List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {mockHighlights.map((highlight) => (
              <Card key={highlight.id} className="shadow-sm hover:shadow-card transition-smooth cursor-pointer">
                <CardContent className="p-3">
                  <div className="flex items-start space-x-3">
                    <div className={`w-4 h-4 rounded-sm ${
                      highlight.color === 'yellow' ? 'bg-yellow-300' :
                      highlight.color === 'blue' ? 'bg-blue-300' :
                      highlight.color === 'green' ? 'bg-green-300' :
                      highlight.color === 'pink' ? 'bg-pink-300' :
                      'bg-orange-300'
                    } mt-0.5`}></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">
                        {highlight.text}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Page {highlight.page}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="p-4 border-t border-border">
            <Button variant="professional" className="w-full">
              <Save className="w-4 h-4 mr-2" />
              Save Highlights
            </Button>
          </div>
        </div>

        {/* Main Content - PDF Viewer */}
        <div className="flex-1 flex flex-col">
          {/* Toolbar */}
          <div className="border-b border-border bg-background/80 backdrop-blur-sm p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <h1 className="font-semibold text-foreground">
                  Research Paper - AI in Healthcare.pdf
                </h1>
              </div>
              
              <div className="flex items-center space-x-2">
                {/* Page Navigation */}
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <span className="text-sm text-muted-foreground px-3">
                    {currentPage} of {totalPages}
                  </span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
                
                <Separator orientation="vertical" className="h-6" />
                
                {/* Zoom Controls */}
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setZoomLevel(Math.max(50, zoomLevel - 25))}
                  >
                    <ZoomOut className="w-4 h-4" />
                  </Button>
                  <span className="text-sm text-muted-foreground px-2 min-w-[4rem] text-center">
                    {zoomLevel}%
                  </span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setZoomLevel(Math.min(200, zoomLevel + 25))}
                  >
                    <ZoomIn className="w-4 h-4" />
                  </Button>
                </div>
                
                <Separator orientation="vertical" className="h-6" />
                
                {/* Tools */}
                <Button variant="outline" size="sm">
                  <RotateCw className="w-4 h-4" />
                </Button>
                <Button variant="accent" size="sm" className="group">
                  <Highlighter className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  Highlight
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* PDF Content Area */}
          <div className="flex-1 bg-muted/20 overflow-auto p-8">
            <div className="max-w-4xl mx-auto">
              {/* Mock PDF Page */}
              <Card className="shadow-document bg-gradient-document border-0 min-h-[1000px]">
                <CardContent className="p-12">
                  {/* Mock PDF Content */}
                  <div className="space-y-6">
                    <div className="text-center border-b border-border pb-6">
                      <h1 className="text-3xl font-bold text-foreground mb-4">
                        Artificial Intelligence in Healthcare
                      </h1>
                      <p className="text-lg text-muted-foreground">
                        A Comprehensive Research Analysis
                      </p>
                    </div>
                    
                    <div className="space-y-4 text-foreground">
                      <h2 className="text-xl font-semibold">Abstract</h2>
                      <p className="leading-relaxed">
                        This research paper explores the transformative potential of{" "}
                        <span className="bg-yellow-300/50 px-1 rounded">
                          machine learning algorithms
                        </span>{" "}
                        in modern healthcare systems. We examine how artificial intelligence 
                        technologies are revolutionizing diagnosis, treatment planning, and patient care.
                      </p>
                      
                      <h2 className="text-xl font-semibold mt-8">Introduction</h2>
                      <p className="leading-relaxed">
                        The integration of{" "}
                        <span className="bg-blue-300/50 px-1 rounded">
                          neural network architectures
                        </span>{" "}
                        into healthcare has opened unprecedented opportunities for improving 
                        patient outcomes and operational efficiency. This paper presents a 
                        systematic analysis of current applications and future prospects.
                      </p>
                      
                      <h2 className="text-xl font-semibold mt-8">Methodology</h2>
                      <p className="leading-relaxed">
                        Our research methodology encompasses a comprehensive review of existing 
                        literature, case studies from leading medical institutions, and analysis 
                        of emerging trends in AI-powered healthcare solutions.
                      </p>
                      
                      <div className="bg-muted/50 p-6 rounded-lg border border-border mt-8">
                        <h3 className="font-semibold mb-3">Key Research Areas</h3>
                        <ul className="space-y-2 text-sm">
                          <li>• Diagnostic imaging and pattern recognition</li>
                          <li>• Predictive analytics for patient monitoring</li>
                          <li>• Drug discovery and development acceleration</li>
                          <li>• Personalized treatment recommendations</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};