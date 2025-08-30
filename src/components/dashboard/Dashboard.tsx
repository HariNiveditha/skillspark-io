import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Trophy, 
  Target, 
  Calendar, 
  Users, 
  MessageCircle, 
  Bell, 
  Share2,
  MapPin,
  Zap,
  Star,
  Award,
  TrendingUp,
  BookOpen,
  Code,
  Brain,
  Settings
} from "lucide-react";
import SkillChallenges from "./SkillChallenges";
import { getTodaysChallenges } from "@/data/challenges";
import ChallengeCard from "./ChallengeCard";

interface DashboardProps {
  userData: any;
  onBack?: () => void;
}

const Dashboard = ({ userData, onBack }: DashboardProps) => {
  const [selectedTab, setSelectedTab] = useState('overview');

  const [stats, setStats] = useState({
    totalScore: 0,
    completedChallenges: 0,
    currentStreak: 0,
    skillsLearned: 0,
    progressPercent: 0,
  });

  useEffect(() => {
    try {
      const saved = localStorage.getItem("skillspark-stats");
      if (saved) {
        const parsed = JSON.parse(saved);
        setStats({
          totalScore: parsed.totalScore ?? 0,
          completedChallenges: parsed.completedChallenges ?? 0,
          currentStreak: parsed.currentStreak ?? 0,
          skillsLearned: parsed.skillsLearned ?? 0,
          progressPercent: parsed.progressPercent ?? 0,
        });
      }
    } catch {}
  }, []);

  const mockBadges = [
    { id: 1, name: "First Steps", icon: "🌟", earned: true },
    { id: 2, name: "Code Warrior", icon: "⚔️", earned: true },
    { id: 3, name: "Team Player", icon: "🤝", earned: false },
    { id: 4, name: "Quick Learner", icon: "⚡", earned: true },
  ];

  const todaysChallenges = getTodaysChallenges();

  const mockTeams = [
    { id: 1, name: "Code Crushers", members: 4, project: "E-commerce App" },
    { id: 2, name: "AI Innovators", members: 3, project: "ChatBot System" },
  ];

  const handleStartChallenge = (challengeId: string) => {
    console.log(`Starting challenge: ${challengeId}`);
    // Here you would implement challenge start logic
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="" />
              <AvatarFallback className="bg-gradient-primary text-white text-lg">
                {userData.fullName?.charAt(0) || userData.role?.charAt(0)?.toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold">Welcome back, {userData.fullName || 'Learner'}!</h1>
              <p className="text-muted-foreground">
                {userData.role === 'student' && '🎓 Student'}
                {userData.role === 'professional' && '💼 Professional'}
                {userData.role === 'guest' && '👤 Guest'}
                {' • Ready to continue your learning journey?'}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            {onBack && (
              <Button 
                variant="outline" 
                onClick={onBack}
                className="bg-input/20 hover:bg-input/40 border-border"
              >
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            )}
            <Button className="bg-gradient-primary hover:opacity-90">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </Button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-2 mb-8">
          <Button
            variant={selectedTab === 'overview' ? 'default' : 'outline'}
            onClick={() => setSelectedTab('overview')}
          >
            Overview
          </Button>
          <Button
            variant={selectedTab === 'challenges' ? 'default' : 'outline'}
            onClick={() => setSelectedTab('challenges')}
          >
            All Challenges
          </Button>
        </div>

        {selectedTab === 'overview' && (
          <>
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="bg-gradient-card border-border/50 shadow-card">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Trophy className="h-8 w-8 text-badge-gold" />
                    <Badge variant="secondary">Total</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalScore}</div>
                  <p className="text-muted-foreground text-sm">Points Earned</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50 shadow-card">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Target className="h-8 w-8 text-skill-technical" />
                    <Badge variant="secondary">Progress</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.completedChallenges}</div>
                  <p className="text-muted-foreground text-sm">Challenges Done</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50 shadow-card">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Zap className="h-8 w-8 text-warning" />
                    <Badge variant="secondary">Streak</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.currentStreak}</div>
                  <p className="text-muted-foreground text-sm">Days in a Row</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50 shadow-card">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Brain className="h-8 w-8 text-skill-creative" />
                    <Badge variant="secondary">Skills</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.skillsLearned}</div>
                  <p className="text-muted-foreground text-sm">Skills Mastered</p>
                </CardContent>
              </Card>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-6">
                {/* Progress Tracker */}
                <Card className="bg-gradient-card border-border/50 shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      Learning Progress
                    </CardTitle>
                    <CardDescription>Your overall skill development journey</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <span>Overall Progress</span>
                        <span>{stats.progressPercent}%</span>
                      </div>
                      <Progress value={stats.progressPercent} className="h-3" />
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-lg font-semibold text-skill-technical">Python</div>
                          <Progress value={0} className="h-2 mt-1" />
                        </div>
                        <div>
                          <div className="text-lg font-semibold text-skill-creative">Web Dev</div>
                          <Progress value={0} className="h-2 mt-1" />
                        </div>
                        <div>
                          <div className="text-lg font-semibold text-skill-communication">Communication</div>
                          <Progress value={0} className="h-2 mt-1" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Today's Challenges */}
                <Card className="bg-gradient-card border-border/50 shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      Today's Challenges
                    </CardTitle>
                    <CardDescription>Complete these tasks to earn points and badges</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {todaysChallenges.length === 0 ? (
                      <div className="text-center py-8 text-muted-foreground">
                        <Target className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p>No challenges available today.</p>
                        <p className="text-sm">Complete your skill selection to get personalized challenges!</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {todaysChallenges.map((challenge) => (
                          <ChallengeCard
                            key={challenge.id}
                            challenge={challenge}
                            onStart={handleStartChallenge}
                          />
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Badges & Achievements */}
                <Card className="bg-gradient-card border-border/50 shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      Badges & Achievements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      {mockBadges.map((badge) => (
                        <div 
                          key={badge.id} 
                          className={`p-3 rounded-lg text-center ${
                            badge.earned ? 'bg-gradient-primary text-white' : 'bg-input/20 opacity-50'
                          }`}
                        >
                          <div className="text-2xl mb-1">{badge.icon}</div>
                          <div className="text-xs font-medium">{badge.name}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Team Collaboration */}
                <Card className="bg-gradient-card border-border/50 shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      My Teams
                    </CardTitle>
                    <CardDescription>Collaborate on exciting projects</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {mockTeams.map((team) => (
                        <div key={team.id} className="p-3 bg-input/20 rounded-lg">
                          <div className="font-medium">{team.name}</div>
                          <div className="text-sm text-muted-foreground">{team.project}</div>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs text-muted-foreground">{team.members} members</span>
                            <Button size="sm" variant="outline">Join</Button>
                          </div>
                        </div>
                      ))}
                      <Button className="w-full" variant="outline">
                        <Users className="h-4 w-4 mr-2" />
                        Find More Teams
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="bg-gradient-card border-border/50 shadow-card">
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Button className="w-full justify-start" variant="outline">
                        <Calendar className="h-4 w-4 mr-2" />
                        Add to Calendar
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <MapPin className="h-4 w-4 mr-2" />
                        Find Events Nearby
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share Progress
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Get AI Feedback
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </>
        )}

        {selectedTab === 'challenges' && (
          <SkillChallenges selectedSkills={userData.skills || []} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
