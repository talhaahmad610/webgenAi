import React, { useEffect, useState } from 'react';
import { Code, Server, Cpu, Check, Brain } from 'lucide-react';

export const GeneratingAnimation: React.FC = () => {
  const [step, setStep] = useState(0);
  const steps = [
    { text: 'Analyzing prompt...', icon: <Brain className="h-6 w-6" /> },
    { text: 'Selecting tech stack...', icon: <Server className="h-6 w-6" /> },
    { text: 'Generating code...', icon: <Code className="h-6 w-6" /> },
    { text: 'Optimizing design...', icon: <Cpu className="h-6 w-6" /> },
    { text: 'Finalizing project...', icon: <Check className="h-6 w-6" /> },
  ];

  useEffect(() => {
    if (step < steps.length - 1) {
      const timer = setTimeout(() => {
        setStep(step + 1);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [step, steps.length]);

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="relative w-20 h-20 mb-8">
        <div className="absolute inset-0 border-4 border-blue-200 dark:border-blue-900/30 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-transparent border-t-blue-600 dark:border-t-blue-400 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center text-blue-600 dark:text-blue-400">
          {steps[step].icon}
        </div>
      </div>
      
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Generating Your Website</h2>
        <p className="text-slate-600 dark:text-slate-400">Our AI is building your website based on your requirements.</p>
      </div>
      
      <div className="w-full max-w-md bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
        <div className="space-y-4">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                i < step ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' : 
                i === step ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 animate-pulse' : 
                'bg-slate-100 text-slate-400 dark:bg-slate-700 dark:text-slate-500'
              }`}>
                {i < step ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <span>{i + 1}</span>
                )}
              </div>
              <div className={`${
                i < step ? 'text-green-600 dark:text-green-400' :
                i === step ? 'text-blue-600 dark:text-blue-400 font-medium' :
                'text-slate-500 dark:text-slate-500'
              }`}>
                {s.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};