import React from 'react';
import { Lightbulb } from 'lucide-react';

interface PromptInputProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
}

export const PromptInput: React.FC<PromptInputProps> = ({ prompt, setPrompt }) => {
  const examplePrompts = [
    "Create a modern e-commerce site for selling handmade jewelry with a product catalog, cart, and checkout system",
    "Build a portfolio website for a photographer with a 3D gallery and contact form",
    "Make a SaaS dashboard with user authentication, data visualization, and settings page"
  ];

  const handleExampleClick = (example: string) => {
    setPrompt(example);
  };

  return (
    <div className="space-y-4">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe the website or app you want to create in detail. Include features, design preferences, and any specific requirements..."
        className="w-full h-40 p-4 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white resize-none"
      />
      
      <div className="bg-blue-50 dark:bg-slate-700/50 p-4 rounded-lg">
        <div className="flex items-center text-blue-600 dark:text-blue-400 mb-2">
          <Lightbulb className="h-5 w-5 mr-2" />
          <h3 className="font-medium">Example Prompts</h3>
        </div>
        <div className="space-y-2">
          {examplePrompts.map((example, index) => (
            <button
              key={index}
              onClick={() => handleExampleClick(example)}
              className="text-left w-full p-2 text-sm hover:bg-blue-100 dark:hover:bg-slate-600 rounded transition-colors"
            >
              {example}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};