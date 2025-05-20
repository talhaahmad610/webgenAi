import React from 'react';
import { Layers, Code, Database, Globe, Cuboid as Cube } from 'lucide-react';

interface TechnologySelectorProps {
  selectedTechs: string[];
  setSelectedTechs: (techs: string[]) => void;
  is3DEnabled: boolean;
  setIs3DEnabled: (enabled: boolean) => void;
}

export const TechnologySelector: React.FC<TechnologySelectorProps> = ({
  selectedTechs,
  setSelectedTechs,
  is3DEnabled,
  setIs3DEnabled
}) => {
  const technologies = [
    { id: 'js', name: 'JavaScript', icon: <Code className="h-5 w-5" /> },
    { id: 'react', name: 'React', icon: <Code className="h-5 w-5" /> },
    { id: 'mern', name: 'MERN Stack', icon: <Layers className="h-5 w-5" /> },
    { id: 'mean', name: 'MEAN Stack', icon: <Layers className="h-5 w-5" /> },
    { id: 'laravel', name: 'Laravel', icon: <Globe className="h-5 w-5" /> },
    { id: 'php', name: 'PHP', icon: <Code className="h-5 w-5" /> },
  ];

  const handleTechSelect = (techId: string) => {
    if (selectedTechs.includes(techId)) {
      setSelectedTechs(selectedTechs.filter(id => id !== techId));
    } else {
      setSelectedTechs([...selectedTechs, techId]);
    }
  };

  const toggle3D = () => {
    setIs3DEnabled(!is3DEnabled);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {technologies.map((tech) => (
          <button
            key={tech.id}
            onClick={() => handleTechSelect(tech.id)}
            className={`p-3 rounded-lg border flex items-center justify-center transition-colors ${
              selectedTechs.includes(tech.id)
                ? 'bg-blue-100 border-blue-500 text-blue-700 dark:bg-blue-900/30 dark:border-blue-500 dark:text-blue-400'
                : 'border-slate-300 hover:border-blue-400 dark:border-slate-600 dark:hover:border-blue-500'
            }`}
          >
            <div className="flex flex-col items-center">
              {tech.icon}
              <span className="mt-1 text-sm">{tech.name}</span>
            </div>
          </button>
        ))}
      </div>
      
      <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
        <h3 className="font-medium mb-3">Special Features</h3>
        <button
          onClick={toggle3D}
          className={`p-3 rounded-lg border flex items-center justify-center transition-colors ${
            is3DEnabled
              ? 'bg-purple-100 border-purple-500 text-purple-700 dark:bg-purple-900/30 dark:border-purple-500 dark:text-purple-400'
              : 'border-slate-300 hover:border-purple-400 dark:border-slate-600 dark:hover:border-purple-500'
          }`}
        >
          <div className="flex flex-col items-center">
            <Cube className="h-5 w-5" />
            <span className="mt-1 text-sm">3D Website (Three.js)</span>
          </div>
        </button>
      </div>
    </div>
  );
};