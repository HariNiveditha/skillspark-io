import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Code, 
  Brain, 
  Shield, 
  Cloud, 
  Database, 
  Palette,
  MessageCircle,
  Users,
  Crown,
  Clock,
  Mic,
  ChefHat,
  Heart,
  Brush,
  Monitor,
  Server,
  Presentation,
  Search,
  CheckCircle
} from "lucide-react";

interface SkillSelectionProps {
  mode: 'normal' | 'technical';
  onSkillsSelect: (skills: string[]) => void;
  onBack?: () => void;
}

const technicalSkills = [
  { id: 'c-cpp', name: 'C/C++', icon: Code, category: 'Programming' },
  { id: 'java', name: 'Java', icon: Code, category: 'Programming' },
  { id: 'python', name: 'Python', icon: Code, category: 'Programming' },
  { id: 'web-dev', name: 'Web Development', icon: Monitor, category: 'Frontend' },
  { id: 'ai-ml', name: 'AI/ML', icon: Brain, category: 'AI' },
  { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, category: 'Security' },
  { id: 'cloud', name: 'Cloud Computing', icon: Cloud, category: 'Infrastructure' },
  { id: 'data-science', name: 'Data Science', icon: Database, category: 'Data' },
];

const nonTechnicalSkills = [
  { id: 'communication', name: 'Communication', icon: MessageCircle, category: 'Soft Skills' },
  { id: 'teamwork', name: 'Teamwork', icon: Users, category: 'Soft Skills' },
  { id: 'leadership', name: 'Leadership', icon: Crown, category: 'Soft Skills' },
  { id: 'time-management', name: 'Time Management', icon: Clock, category: 'Soft Skills' },
  { id: 'public-speaking', name: 'Public Speaking', icon: Mic, category: 'Soft Skills' },
  { id: 'cooking', name: 'Cooking', icon: ChefHat, category: 'Life Skills' },
  { id: 'yoga', name: 'Yoga & Wellness', icon: Heart, category: 'Life Skills' },
  { id: 'drawing', name: 'Drawing & Art', icon: Brush, category: 'Creative' },
];

const hackathonRoles = [
  { id: 'frontend', name: 'Frontend Developer', icon: Monitor, category: 'Development' },
  { id: 'backend', name: 'Backend Developer', icon: Server, category: 'Development' },
  { id: 'designer', name: 'UI/UX Designer', icon: Palette, category: 'Design' },
  { id: 'presenter', name: 'Presenter/Pitcher', icon: Presentation, category: 'Communication' },
  { id: 'researcher', name: 'Researcher', icon: Search, category: 'Research' },
];

const SkillSelection = ({ mode, onSkillsSelect, onBack }: SkillSelectionProps) => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState(0);

  const skillSets = mode === 'technical' 
    ? [technicalSkills, hackathonRoles]
    : [nonTechnicalSkills];

  const stepTitles = mode === 'technical'
    ? ['Select Technical Skills', 'Choose Hackathon Role']
    : ['Select Your Skills'];

  const currentSkills = skillSets[currentStep] || [];

  const toggleSkill = (skillId: string) => {
    setSelectedSkills(prev => 
      prev.includes(skillId) 
        ? prev.filter(id => id !== skillId)
        : [...prev, skillId]
    );
  };

  const handleNext = () => {
    if (currentStep < stepTitles.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onSkillsSelect(selectedSkills);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else if (onBack) {
      onBack();
    }
  };

  const progress = ((currentStep + 1) / stepTitles.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-primary p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">{stepTitles[currentStep]}</h1>
          <p className="text-primary-foreground/80 text-lg">
            {mode === 'technical' 
              ? 'Choose the skills and roles that match your interests'
              : 'Select the skills you want to develop and improve'
            }
          </p>
          <div className="mt-6 max-w-md mx-auto">
            <div className="flex justify-between text-sm text-primary-foreground/60 mb-2">
              <span>Step {currentStep + 1} of {stepTitles.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
          {currentSkills.map((skill) => {
            const Icon = skill.icon;
            const isSelected = selectedSkills.includes(skill.id);
            
            return (
              <Card
                key={skill.id}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                  isSelected 
                    ? 'bg-gradient-primary border-primary shadow-glow' 
                    : 'bg-gradient-card border-border/50 hover:border-primary/50'
                }`}
                onClick={() => toggleSkill(skill.id)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-lg ${
                      isSelected ? 'bg-white/20' : 'bg-primary/20'
                    }`}>
                      <Icon className={`h-6 w-6 ${
                        isSelected ? 'text-white' : 'text-primary'
                      }`} />
                    </div>
                    {isSelected && (
                      <CheckCircle className="h-5 w-5 text-white" />
                    )}
                  </div>
                  <CardTitle className={`text-lg ${
                    isSelected ? 'text-white' : 'text-foreground'
                  }`}>
                    {skill.name}
                  </CardTitle>
                  <Badge 
                    variant="secondary" 
                    className={isSelected ? 'bg-white/20 text-white' : ''}
                  >
                    {skill.category}
                  </Badge>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        <div className="flex justify-center gap-4">
          {(currentStep > 0 || onBack) && (
            <Button 
              variant="outline" 
              onClick={handleBack}
              className="bg-input/20 hover:bg-input/40 border-border"
            >
              Back
            </Button>
          )}
          <Button 
            onClick={handleNext}
            disabled={selectedSkills.length === 0}
            className="bg-gradient-primary hover:opacity-90 min-w-[120px]"
          >
            {currentStep < stepTitles.length - 1 ? 'Next Step' : 'Complete Setup'}
          </Button>
        </div>

        <div className="text-center mt-6">
          <p className="text-primary-foreground/60 text-sm">
            Selected: {selectedSkills.length} skill{selectedSkills.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillSelection;