import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Globe, Target, BookOpen, Zap, ArrowLeft } from "lucide-react";

interface UserPreferencesProps {
  onPreferencesComplete: (preferences: any) => void;
  onBack?: () => void;
}

const UserPreferences = ({ onPreferencesComplete, onBack }: UserPreferencesProps) => {
  const [preferences, setPreferences] = useState({
    language: "",
    skillLevel: "",
    timePerDay: "",
    goal: "",
    startDate: "",
    targetDate: "",
    learningMode: "",
    resources: ""
  });

  const handleSubmit = () => {
    onPreferencesComplete(preferences);
  };

  const isFormValid = preferences.language && preferences.skillLevel && 
                     preferences.timePerDay && preferences.goal;

  return (
    <div className="min-h-screen bg-gradient-primary p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Customize Your Learning Experience</h1>
          <p className="text-primary-foreground/80 text-lg">
            Help us personalize your journey to achieve your goals faster
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Language & Level */}
          <Card className="bg-gradient-card border-border/50 shadow-glow backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                Language & Experience
              </CardTitle>
              <CardDescription>Tell us about your background</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Preferred Language</Label>
                <Select value={preferences.language} onValueChange={(value) => 
                  setPreferences({...preferences, language: value})
                }>
                  <SelectTrigger className="bg-input/50">
                    <SelectValue placeholder="Choose language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">🇺🇸 English</SelectItem>
                    <SelectItem value="hindi">🇮🇳 Hindi</SelectItem>
                    <SelectItem value="telugu">🇮🇳 Telugu</SelectItem>
                    <SelectItem value="other">🌍 Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Current Skill Level</Label>
                <Select value={preferences.skillLevel} onValueChange={(value) => 
                  setPreferences({...preferences, skillLevel: value})
                }>
                  <SelectTrigger className="bg-input/50">
                    <SelectValue placeholder="Select your level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">
                      <div className="flex items-center gap-2">
                        🌱 Beginner
                      </div>
                    </SelectItem>
                    <SelectItem value="intermediate">
                      <div className="flex items-center gap-2">
                        🚀 Intermediate
                      </div>
                    </SelectItem>
                    <SelectItem value="advanced">
                      <div className="flex items-center gap-2">
                        ⭐ Advanced
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Time & Goals */}
          <Card className="bg-gradient-card border-border/50 shadow-glow backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Time & Goals
              </CardTitle>
              <CardDescription>Set your learning schedule and objectives</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Time Available Per Day</Label>
                <Select value={preferences.timePerDay} onValueChange={(value) => 
                  setPreferences({...preferences, timePerDay: value})
                }>
                  <SelectTrigger className="bg-input/50">
                    <SelectValue placeholder="Choose time commitment" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30min">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        30 minutes
                      </div>
                    </SelectItem>
                    <SelectItem value="1hr">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        1 hour
                      </div>
                    </SelectItem>
                    <SelectItem value="2hr">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        2+ hours
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Primary Goal</Label>
                <Select value={preferences.goal} onValueChange={(value) => 
                  setPreferences({...preferences, goal: value})
                }>
                  <SelectTrigger className="bg-input/50">
                    <SelectValue placeholder="What's your main goal?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basics">Learn Basics</SelectItem>
                    <SelectItem value="interview">Crack Coding Interview</SelectItem>
                    <SelectItem value="projects">Build Projects</SelectItem>
                    <SelectItem value="confidence">Improve Confidence & Personality</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Timeline */}
          <Card className="bg-gradient-card border-border/50 shadow-glow backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Timeline
              </CardTitle>
              <CardDescription>Set your learning timeline (optional)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Start Date</Label>
                  <input
                    type="date"
                    value={preferences.startDate}
                    onChange={(e) => setPreferences({...preferences, startDate: e.target.value})}
                    className="w-full px-3 py-2 bg-input/50 border border-border rounded-md text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Target Date</Label>
                  <input
                    type="date"
                    value={preferences.targetDate}
                    onChange={(e) => setPreferences({...preferences, targetDate: e.target.value})}
                    className="w-full px-3 py-2 bg-input/50 border border-border rounded-md text-sm"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Learning Mode */}
          <Card className="bg-gradient-card border-border/50 shadow-glow backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Learning Mode
              </CardTitle>
              <CardDescription>How do you prefer to learn?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Mode of Learning</Label>
                <Select value={preferences.learningMode} onValueChange={(value) => 
                  setPreferences({...preferences, learningMode: value})
                }>
                  <SelectTrigger className="bg-input/50">
                    <SelectValue placeholder="Choose learning style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="self-study">📚 Self-study</SelectItem>
                    <SelectItem value="mentor">👨‍🏫 With Mentor</SelectItem>
                    <SelectItem value="online-course">💻 Online Course</SelectItem>
                    <SelectItem value="workshop">🏢 Offline Workshop</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Additional Resources (Optional)</Label>
                <Textarea
                  placeholder="Links to books, YouTube channels, Udemy courses, etc."
                  value={preferences.resources}
                  onChange={(e) => setPreferences({...preferences, resources: e.target.value})}
                  className="bg-input/50 border-border min-h-[80px]"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          {onBack && (
            <Button 
              variant="outline" 
              onClick={onBack}
              className="bg-white/10 hover:bg-white/20 border-white/20 text-white"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          )}
          <Button 
            onClick={handleSubmit}
            disabled={!isFormValid}
            className="bg-gradient-primary hover:opacity-90 px-8 py-3 text-lg"
            size="lg"
          >
            <Zap className="h-5 w-5 mr-2" />
            Complete Setup & Start Learning
          </Button>
        </div>
          
        {!isFormValid && (
          <p className="text-primary-foreground/60 text-sm mt-3 text-center">
            Please fill in the required fields to continue
          </p>
        )}
      </div>
    </div>
  );
};

export default UserPreferences;