import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Code, Lightbulb, Target } from "lucide-react";

interface ModeSelectionProps {
  onModeSelect: (mode: 'normal' | 'technical') => void;
}

const ModeSelection = ({ onModeSelect }: ModeSelectionProps) => {
  return (
    <div className="min-h-screen bg-gradient-primary flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Choose Your Learning Path</h1>
          <p className="text-primary-foreground/80 text-lg">
            Select the mode that best fits your learning goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Normal Path */}
          <Card 
            className="bg-gradient-card border-border/50 shadow-glow backdrop-blur-sm hover:shadow-card transition-all duration-300 cursor-pointer group"
            onClick={() => onModeSelect('normal')}
          >
            <CardHeader className="text-center pb-6">
              <div className="mx-auto mb-4 p-4 rounded-full bg-skill-communication/20 w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Brain className="h-10 w-10 text-skill-communication" />
              </div>
              <CardTitle className="text-2xl">Normal Path</CardTitle>
              <CardDescription className="text-base">
                Perfect for building foundational skills and personal development
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Lightbulb className="h-5 w-5 text-skill-creative" />
                  <span>Learn essential life skills</span>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-skill-leadership" />
                  <span>Interactive quizzes and challenges</span>
                </div>
                <div className="flex items-center gap-3">
                  <Brain className="h-5 w-5 text-skill-communication" />
                  <span>Communication & leadership training</span>
                </div>
              </div>
              <Button 
                className="w-full mt-6 bg-gradient-primary hover:opacity-90 group-hover:scale-105 transition-transform"
                onClick={(e) => {
                  e.stopPropagation();
                  onModeSelect('normal');
                }}
              >
                Start Normal Path
              </Button>
            </CardContent>
          </Card>

          {/* Technical Path */}
          <Card 
            className="bg-gradient-card border-border/50 shadow-glow backdrop-blur-sm hover:shadow-card transition-all duration-300 cursor-pointer group"
            onClick={() => onModeSelect('technical')}
          >
            <CardHeader className="text-center pb-6">
              <div className="mx-auto mb-4 p-4 rounded-full bg-skill-technical/20 w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Code className="h-10 w-10 text-skill-technical" />
              </div>
              <CardTitle className="text-2xl">Technical Path</CardTitle>
              <CardDescription className="text-base">
                Dive deep into programming and technical skills development
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Code className="h-5 w-5 text-skill-technical" />
                  <span>Coding challenges & projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-skill-leadership" />
                  <span>Hackathon-style competitions</span>
                </div>
                <div className="flex items-center gap-3">
                  <Brain className="h-5 w-5 text-skill-communication" />
                  <span>API integration & real projects</span>
                </div>
              </div>
              <Button 
                className="w-full mt-6 bg-gradient-primary hover:opacity-90 group-hover:scale-105 transition-transform"
                onClick={(e) => {
                  e.stopPropagation();
                  onModeSelect('technical');
                }}
              >
                Start Technical Path
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <p className="text-primary-foreground/60 text-sm">
            Don't worry - you can always switch paths later in your dashboard
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModeSelection;