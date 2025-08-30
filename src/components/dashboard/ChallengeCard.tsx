
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  BookOpen, 
  Trophy, 
  Users, 
  Clock,
  CheckCircle,
  Play
} from "lucide-react";
import { Challenge } from "@/data/challenges";

interface ChallengeCardProps {
  challenge: Challenge;
  onStart: (challengeId: string) => void;
}

const getTypeIcon = (type: Challenge['type']) => {
  switch (type) {
    case 'coding': return Code;
    case 'quiz': return Trophy;
    case 'project': return Users;
    case 'reading': return BookOpen;
    case 'practice': return Play;
    default: return Code;
  }
};

const getTypeColor = (type: Challenge['type']) => {
  switch (type) {
    case 'coding': return 'text-skill-technical';
    case 'quiz': return 'text-badge-gold';
    case 'project': return 'text-skill-creative';
    case 'reading': return 'text-skill-communication';
    case 'practice': return 'text-primary';
    default: return 'text-primary';
  }
};

const getDifficultyColor = (difficulty: Challenge['difficulty']) => {
  switch (difficulty) {
    case 'Beginner': return 'bg-green-500/20 text-green-700';
    case 'Intermediate': return 'bg-yellow-500/20 text-yellow-700';
    case 'Advanced': return 'bg-red-500/20 text-red-700';
    default: return 'bg-gray-500/20 text-gray-700';
  }
};

const ChallengeCard = ({ challenge, onStart }: ChallengeCardProps) => {
  const TypeIcon = getTypeIcon(challenge.type);
  const typeColor = getTypeColor(challenge.type);
  const difficultyColor = getDifficultyColor(challenge.difficulty);

  return (
    <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-lg">
              <TypeIcon className={`h-5 w-5 ${typeColor}`} />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-sm">{challenge.title}</h3>
              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                {challenge.description}
              </p>
            </div>
          </div>
          {challenge.completed && (
            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Badge className={`text-xs ${difficultyColor}`}>
              {challenge.difficulty}
            </Badge>
            <Badge variant="outline" className="text-xs capitalize">
              {challenge.type}
            </Badge>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            {challenge.estimatedTime}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Trophy className="h-4 w-4 text-badge-gold" />
            <span className="text-sm font-medium">{challenge.points} pts</span>
          </div>
          
          <Button 
            size="sm" 
            onClick={() => onStart(challenge.id)}
            disabled={challenge.completed}
            className={challenge.completed ? 'opacity-50' : 'bg-gradient-primary hover:opacity-90'}
          >
            {challenge.completed ? 'Completed' : 'Start'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChallengeCard;
