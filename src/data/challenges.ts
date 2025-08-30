
export interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  points: number;
  estimatedTime: string;
  skill: string;
  type: 'quiz' | 'coding' | 'project' | 'practice' | 'reading';
  completed: boolean;
}

export const challengesBySkill: Record<string, Challenge[]> = {
  // Technical Skills
  'python': [
    {
      id: 'py-001',
      title: 'Variables and Data Types',
      description: 'Learn about Python variables, strings, numbers, and basic operations',
      difficulty: 'Beginner',
      points: 50,
      estimatedTime: '15 min',
      skill: 'python',
      type: 'quiz',
      completed: false
    },
    {
      id: 'py-002',
      title: 'Build a Calculator',
      description: 'Create a simple calculator using Python functions',
      difficulty: 'Beginner',
      points: 100,
      estimatedTime: '30 min',
      skill: 'python',
      type: 'coding',
      completed: false
    },
    {
      id: 'py-003',
      title: 'Lists and Loops',
      description: 'Master Python lists, for loops, and list comprehensions',
      difficulty: 'Intermediate',
      points: 150,
      estimatedTime: '45 min',
      skill: 'python',
      type: 'practice',
      completed: false
    },
    {
      id: 'py-004',
      title: 'Web Scraper Project',
      description: 'Build a web scraper using BeautifulSoup and requests',
      difficulty: 'Advanced',
      points: 300,
      estimatedTime: '2 hours',
      skill: 'python',
      type: 'project',
      completed: false
    }
  ],
  'web-dev': [
    {
      id: 'web-001',
      title: 'HTML Basics Quiz',
      description: 'Test your knowledge of HTML tags, attributes, and structure',
      difficulty: 'Beginner',
      points: 50,
      estimatedTime: '10 min',
      skill: 'web-dev',
      type: 'quiz',
      completed: false
    },
    {
      id: 'web-002',
      title: 'CSS Flexbox Layout',
      description: 'Create responsive layouts using CSS Flexbox',
      difficulty: 'Intermediate',
      points: 120,
      estimatedTime: '30 min',
      skill: 'web-dev',
      type: 'practice',
      completed: false
    },
    {
      id: 'web-003',
      title: 'Portfolio Website',
      description: 'Build a personal portfolio website with HTML, CSS, and JavaScript',
      difficulty: 'Intermediate',
      points: 250,
      estimatedTime: '3 hours',
      skill: 'web-dev',
      type: 'project',
      completed: false
    },
    {
      id: 'web-004',
      title: 'React Component Library',
      description: 'Create reusable React components with TypeScript',
      difficulty: 'Advanced',
      points: 400,
      estimatedTime: '4 hours',
      skill: 'web-dev',
      type: 'project',
      completed: false
    }
  ],
  'java': [
    {
      id: 'java-001',
      title: 'Object-Oriented Basics',
      description: 'Learn classes, objects, inheritance, and polymorphism',
      difficulty: 'Beginner',
      points: 80,
      estimatedTime: '20 min',
      skill: 'java',
      type: 'quiz',
      completed: false
    },
    {
      id: 'java-002',
      title: 'Banking System',
      description: 'Create a simple banking system with account management',
      difficulty: 'Intermediate',
      points: 200,
      estimatedTime: '1 hour',
      skill: 'java',
      type: 'coding',
      completed: false
    },
    {
      id: 'java-003',
      title: 'Spring Boot API',
      description: 'Build a REST API using Spring Boot framework',
      difficulty: 'Advanced',
      points: 350,
      estimatedTime: '3 hours',
      skill: 'java',
      type: 'project',
      completed: false
    }
  ],
  'ai-ml': [
    {
      id: 'ml-001',
      title: 'Machine Learning Fundamentals',
      description: 'Understanding supervised vs unsupervised learning concepts',
      difficulty: 'Beginner',
      points: 70,
      estimatedTime: '25 min',
      skill: 'ai-ml',
      type: 'reading',
      completed: false
    },
    {
      id: 'ml-002',
      title: 'Linear Regression Model',
      description: 'Build your first ML model to predict house prices',
      difficulty: 'Intermediate',
      points: 180,
      estimatedTime: '1 hour',
      skill: 'ai-ml',
      type: 'coding',
      completed: false
    },
    {
      id: 'ml-003',
      title: 'Image Classification with CNN',
      description: 'Create a convolutional neural network for image recognition',
      difficulty: 'Advanced',
      points: 400,
      estimatedTime: '4 hours',
      skill: 'ai-ml',
      type: 'project',
      completed: false
    }
  ],
  // Non-Technical Skills
  'communication': [
    {
      id: 'comm-001',
      title: 'Active Listening Exercise',
      description: 'Practice active listening techniques in conversations',
      difficulty: 'Beginner',
      points: 40,
      estimatedTime: '15 min',
      skill: 'communication',
      type: 'practice',
      completed: false
    },
    {
      id: 'comm-002',
      title: 'Email Writing Workshop',
      description: 'Learn to write professional and effective emails',
      difficulty: 'Beginner',
      points: 60,
      estimatedTime: '20 min',
      skill: 'communication',
      type: 'practice',
      completed: false
    },
    {
      id: 'comm-003',
      title: 'Presentation Skills',
      description: 'Deliver a 5-minute presentation on any topic',
      difficulty: 'Intermediate',
      points: 120,
      estimatedTime: '30 min',
      skill: 'communication',
      type: 'practice',
      completed: false
    }
  ],
  'leadership': [
    {
      id: 'lead-001',
      title: 'Leadership Styles Quiz',
      description: 'Discover your leadership style and strengths',
      difficulty: 'Beginner',
      points: 50,
      estimatedTime: '10 min',
      skill: 'leadership',
      type: 'quiz',
      completed: false
    },
    {
      id: 'lead-002',
      title: 'Team Building Activity',
      description: 'Plan and execute a team building exercise',
      difficulty: 'Intermediate',
      points: 150,
      estimatedTime: '45 min',
      skill: 'leadership',
      type: 'practice',
      completed: false
    },
    {
      id: 'lead-003',
      title: 'Conflict Resolution',
      description: 'Handle a workplace conflict scenario effectively',
      difficulty: 'Advanced',
      points: 200,
      estimatedTime: '1 hour',
      skill: 'leadership',
      type: 'practice',
      completed: false
    }
  ],
  'teamwork': [
    {
      id: 'team-001',
      title: 'Collaboration Tools',
      description: 'Learn to use Slack, Trello, and Google Workspace effectively',
      difficulty: 'Beginner',
      points: 60,
      estimatedTime: '20 min',
      skill: 'teamwork',
      type: 'practice',
      completed: false
    },
    {
      id: 'team-002',
      title: 'Group Project Planning',
      description: 'Create a project timeline and delegate tasks effectively',
      difficulty: 'Intermediate',
      points: 130,
      estimatedTime: '40 min',
      skill: 'teamwork',
      type: 'practice',
      completed: false
    }
  ]
};

export const getAllChallenges = (): Challenge[] => {
  return Object.values(challengesBySkill).flat();
};

export const getChallengesBySkill = (skill: string): Challenge[] => {
  return challengesBySkill[skill] || [];
};

export const getTodaysChallenges = (): Challenge[] => {
  const allChallenges = getAllChallenges();
  // Return a mix of different difficulty levels and types
  return allChallenges
    .filter(challenge => !challenge.completed)
    .slice(0, 3);
};
