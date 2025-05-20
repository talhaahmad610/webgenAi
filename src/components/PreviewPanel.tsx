import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Monitor, Smartphone, Tablet } from 'lucide-react';

interface PreviewPanelProps {
  is3D: boolean;
}

export const PreviewPanel: React.FC<PreviewPanelProps> = ({ is3D }) => {
  const [activePreview, setActivePreview] = useState(0);
  const [viewportSize, setViewportSize] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  
  const previewImages = [
    'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/8473237/pexels-photo-8473237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ];

  const next = () => {
    setActivePreview((activePreview + 1) % previewImages.length);
  };

  const prev = () => {
    setActivePreview((activePreview - 1 + previewImages.length) % previewImages.length);
  };

  // Auto rotate previews
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(interval);
  }, [activePreview]);

  return (
    <div className="space-y-4">
      <div className="flex justify-center space-x-4 mb-4">
        <button 
          onClick={() => setViewportSize('mobile')}
          className={`p-2 rounded ${viewportSize === 'mobile' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400'}`}
        >
          <Smartphone className="h-5 w-5" />
        </button>
        <button 
          onClick={() => setViewportSize('tablet')}
          className={`p-2 rounded ${viewportSize === 'tablet' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400'}`}
        >
          <Tablet className="h-5 w-5" />
        </button>
        <button 
          onClick={() => setViewportSize('desktop')}
          className={`p-2 rounded ${viewportSize === 'desktop' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400'}`}
        >
          <Monitor className="h-5 w-5" />
        </button>
      </div>
      
      <div className="relative rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-700 flex justify-center items-center">
        <div className={`
          relative overflow-hidden transition-all duration-300
          ${viewportSize === 'mobile' ? 'w-60 h-[420px]' : ''}
          ${viewportSize === 'tablet' ? 'w-[384px] h-[512px]' : ''}
          ${viewportSize === 'desktop' ? 'w-full h-[420px]' : ''}
        `}>
          <img 
            src={previewImages[activePreview]} 
            alt="Website preview" 
            className="w-full h-full object-cover rounded"
          />
          {is3D && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/20 backdrop-blur-sm text-white px-4 py-2 rounded">
                3D Visualization Enabled
              </div>
            </div>
          )}
        </div>
        
        <button 
          onClick={prev}
          className="absolute left-2 p-1 rounded-full bg-white/80 text-slate-700 hover:bg-white dark:bg-slate-800/80 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <button 
          onClick={next}
          className="absolute right-2 p-1 rounded-full bg-white/80 text-slate-700 hover:bg-white dark:bg-slate-800/80 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
        
        <div className="absolute bottom-2 flex space-x-1">
          {previewImages.map((_, index) => (
            <button 
              key={index}
              onClick={() => setActivePreview(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === activePreview 
                  ? 'bg-blue-600 dark:bg-blue-400' 
                  : 'bg-slate-300 dark:bg-slate-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};