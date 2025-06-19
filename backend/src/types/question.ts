export interface QuestionRequest {
    jobTitle: string;
    requiredExperience: string;
    skills: { name: string; years: string }[];
    experienceLevel: string;
    fullJobDescription: string
  }
  
  export interface QuestionItem {
    skillArea: string;
    question: string;
    difficulty: string;
    evaluationCriteria: string[];
  }
  
  export interface QuestionResponse {
    questions: QuestionItem[];
  }
  