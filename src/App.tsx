import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "@/components/auth/AuthPage";
import ModeSelection from "@/components/onboarding/ModeSelection";
import SkillSelection from "@/components/onboarding/SkillSelection";
import UserPreferences from "@/components/onboarding/UserPreferences";
import Dashboard from "@/components/dashboard/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

type AppStep = 'auth' | 'mode' | 'skills' | 'preferences' | 'dashboard';

const App = () => {
  const [currentStep, setCurrentStep] = useState<AppStep>('auth');
  const [userData, setUserData] = useState<any>({});
  const [selectedMode, setSelectedMode] = useState<'normal' | 'technical'>('normal');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const handleAuthComplete = (data: any) => {
    setUserData(data);
    if (data.role === 'guest') {
      // Skip onboarding for guests, go straight to dashboard
      setCurrentStep('dashboard');
    } else {
      setCurrentStep('mode');
    }
  };

  const handleModeSelect = (mode: 'normal' | 'technical') => {
    setSelectedMode(mode);
    setCurrentStep('skills');
  };

  const handleSkillsSelect = (skills: string[]) => {
    setSelectedSkills(skills);
    setCurrentStep('preferences');
  };

  const handlePreferencesComplete = (preferences: any) => {
    setUserData(prev => ({ ...prev, mode: selectedMode, skills: selectedSkills, preferences }));
    setCurrentStep('dashboard');
  };

  const handleBack = () => {
    switch (currentStep) {
      case 'mode':
        setCurrentStep('auth');
        break;
      case 'skills':
        setCurrentStep('mode');
        break;
      case 'preferences':
        setCurrentStep('skills');
        break;
      case 'dashboard':
        // Reset to preferences to allow changes
        setCurrentStep('preferences');
        break;
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'auth':
        return <AuthPage onAuthComplete={handleAuthComplete} />;
      case 'mode':
        return <ModeSelection onModeSelect={handleModeSelect} onBack={handleBack} />;
      case 'skills':
        return <SkillSelection mode={selectedMode} onSkillsSelect={handleSkillsSelect} onBack={handleBack} />;
      case 'preferences':
        return <UserPreferences onPreferencesComplete={handlePreferencesComplete} onBack={handleBack} />;
      case 'dashboard':
        return <Dashboard userData={userData} onBack={handleBack} />;
      default:
        return <AuthPage onAuthComplete={handleAuthComplete} />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={renderCurrentStep()} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
