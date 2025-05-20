import React, { useState } from 'react';
import { PromptInput } from '../components/PromptInput';
import { TechnologySelector } from '../components/TechnologySelector';
import { PreviewPanel } from '../components/PreviewPanel';
import { CodePanel } from '../components/CodePanel';
import { FeaturePanel } from '../components/FeaturePanel';
import { GeneratingAnimation } from '../components/GeneratingAnimation';

export const AIGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);
  const [is3DEnabled, setIs3DEnabled] = useState(false);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate AI generation process
    setTimeout(() => {
      setIsGenerating(false);
      setIsGenerated(true);
    }, 3000);
  };

  const resetGeneration = () => {
    setIsGenerated(false);
    setPrompt('');
    setSelectedTechs([]);
    setIs3DEnabled(false);
  };

  return (
    <div className="flex flex-col space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">Create Websites & Apps with AI</h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Describe what you want, select technologies, and watch as our AI generates beautiful, 
          functional websites and applications in seconds.
        </p>
      </div>

      {isGenerating ? (
        <GeneratingAnimation />
      ) : isGenerated ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Your Website</h2>
              <PreviewPanel is3D={is3DEnabled} />
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Features</h2>
              <FeaturePanel prompt={prompt} technologies={selectedTechs} />
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Generated Code</h2>
              <CodePanel technologies={selectedTechs} />
            </div>
            <div className="flex justify-between">
              <button 
                onClick={resetGeneration}
                className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-white px-6 py-3 rounded-lg transition-colors"
              >
                Start Over
              </button>
              <button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Download Code
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Describe Your Project</h2>
            <PromptInput 
              prompt={prompt} 
              setPrompt={setPrompt} 
            />
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Select Technologies</h2>
            <TechnologySelector 
              selectedTechs={selectedTechs}
              setSelectedTechs={setSelectedTechs}
              is3DEnabled={is3DEnabled}
              setIs3DEnabled={setIs3DEnabled}
            />
            <div className="mt-6">
              <button 
                onClick={handleGenerate}
                disabled={!prompt.trim()}
                className={`w-full py-3 px-4 rounded-lg text-white font-medium transition-colors ${
                  prompt.trim() ? 'bg-blue-600 hover:bg-blue-700' : 'bg-slate-400 cursor-not-allowed'
                }`}
              >
                Generate Website
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};