
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  ChevronRight,
  Filter
} from "lucide-react";
import { challengesBySkill, getChallengesBySkill } from "@/data/challenges";
import ChallengeCard from "./ChallengeCard";

const skillIcons: Record<string, any> = {
  'python': Code,
  'java': Code,
  'web-dev': Palette,
  'ai-ml': Brain,
  'cybersecurity': Shield,
  'cloud': Cloud,
  'data-science': Database,
  'communication': MessageCircle,
  'teamwork': Users,
  'leadership': Crown,
  'time-management': Clock,
};

const skillNames: Record<string, string> = {
  'python': 'Python',
  'java': 'Java',
  'web-dev': 'Web Development',
  'ai-ml': 'AI/ML',
  'cybersecurity': 'Cybersecurity',
  'cloud': 'Cloud Computing',
  'data-science': 'Data Science',
  'communication': 'Communication',
  'teamwork': 'Teamwork',
  'leadership': 'Leadership',
  'time-management': 'Time Management',
};

interface SkillChallengesProps {
  selectedSkills?: string[];
}

const SkillChallenges = ({ selectedSkills = [] }: SkillChallengesProps) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  const availableSkills = selectedSkills.length > 0 
    ? selectedSkills.filter(skill => challengesBySkill[skill]) 
    : Object.keys(challengesBySkill);

  const handleStartChallenge = (challengeId: string) => {
    console.log(`Starting challenge: ${challengeId}`);
    // Here you would implement the challenge start logic
    // For now, we'll just log it
  };

  const filterChallenges = (challenges: any[]) => {
    return challenges.filter(challenge => {
      const difficultyMatch = selectedDifficulty === 'all' || challenge.difficulty === selectedDifficulty;
      const typeMatch = selectedType === 'all' || challenge.type === selectedType;
      return difficultyMatch && typeMatch;
    });
  };

  if (availableSkills.length === 0) {
    return (
      <Card className="bg-gradient-card border-border/50 shadow-card">
        <CardHeader>
          <CardTitle>No Skills Selected</CardTitle>
          <CardDescription>
            Complete your skill selection to see personalized challenges.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="bg-gradient-card border-border/50 shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Code className="h-5 w-5 text-primary" />
          Skill Challenges
        </CardTitle>
        <CardDescription>
          Master your skills through hands-on challenges and projects
        </CardDescription>
        
        {/* Filters */}
        <div className="flex gap-2 mt-4">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <Button
              variant={selectedDifficulty === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedDifficulty('all')}
            >
              All Levels
            </Button>
            <Button
              variant={selectedDifficulty === 'Beginner' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedDifficulty('Beginner')}
            >
              Beginner
            </Button>
            <Button
              variant={selectedDifficulty === 'Intermediate' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedDifficulty('Intermediate')}
            >
              Intermediate
            </Button>
            <Button
              variant={selectedDifficulty === 'Advanced' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedDifficulty('Advanced')}
            >
              Advanced
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <Tabs defaultValue={availableSkills[0]} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 gap-1">
            {availableSkills.slice(0, 4).map((skill) => {
              const Icon = skillIcons[skill] || Code;
              return (
                <TabsTrigger key={skill} value={skill} className="flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{skillNames[skill] || skill}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>
          
          {availableSkills.map((skill) => {
            const challenges = getChallengesBySkill(skill);
            const filteredChallenges = filterChallenges(challenges);
            const completedCount = challenges.filter(c => c.completed).length;
            
            return (
              <TabsContent key={skill} value={skill} className="mt-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">{skillNames[skill] || skill}</h3>
                    <p className="text-sm text-muted-foreground">
                      {completedCount} of {challenges.length} challenges completed
                    </p>
                  </div>
                  <Badge variant="outline">
                    {filteredChallenges.length} challenge{filteredChallenges.length !== 1 ? 's' : ''}
                  </Badge>
                </div>
                
                {filteredChallenges.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <Code className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>No challenges match your current filters.</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-2"
                      onClick={() => {
                        setSelectedDifficulty('all');
                        setSelectedType('all');
                      }}
                    >
                      Clear Filters
                    </Button>
                  </div>
                ) : (
                  <div className="grid gap-4 md:grid-cols-2">
                    {filteredChallenges.map((challenge) => (
                      <ChallengeCard
                        key={challenge.id}
                        challenge={challenge}
                        onStart={handleStartChallenge}
                      />
                    ))}
                  </div>
                )}
              </TabsContent>
            );
          })}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default SkillChallenges;
