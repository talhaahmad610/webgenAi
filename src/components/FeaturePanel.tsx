import React from 'react';
import { Check, Zap, Layout, Users, ShoppingCart, Globe, PieChart } from 'lucide-react';

interface FeaturePanelProps {
  prompt: string;
  technologies: string[];
}

export const FeaturePanel: React.FC<FeaturePanelProps> = ({ prompt, technologies }) => {
  // Analyze prompt to determine likely features
  const hasEcommerce = prompt.toLowerCase().includes('ecommerce') || 
                      prompt.toLowerCase().includes('shop') || 
                      prompt.toLowerCase().includes('store');
  
  const hasAuthentication = prompt.toLowerCase().includes('login') || 
                           prompt.toLowerCase().includes('auth') || 
                           prompt.toLowerCase().includes('user');
  
  const hasAnalytics = prompt.toLowerCase().includes('analytics') || 
                      prompt.toLowerCase().includes('dashboard') || 
                      prompt.toLowerCase().includes('report');
  
  const hasResponsive = true; // Always include responsive design

  // Generate features based on prompt analysis
  const features = [
    {
      name: 'Responsive Design',
      icon: <Layout className="h-5 w-5" />,
      included: hasResponsive,
    },
    {
      name: 'User Authentication',
      icon: <Users className="h-5 w-5" />,
      included: hasAuthentication,
    },
    {
      name: 'E-commerce Functionality',
      icon: <ShoppingCart className="h-5 w-5" />,
      included: hasEcommerce,
    },
    {
      name: 'SEO Optimization',
      icon: <Globe className="h-5 w-5" />,
      included: true,
    },
    {
      name: 'Analytics Dashboard',
      icon: <PieChart className="h-5 w-5" />,
      included: hasAnalytics,
    },
    {
      name: 'Fast Performance',
      icon: <Zap className="h-5 w-5" />,
      included: true,
    },
  ];

  return (
    <div className="space-y-2">
      {features.map((feature, index) => (
        <div 
          key={index}
          className={`flex items-center p-3 rounded-lg ${
            feature.included 
              ? 'bg-green-50 dark:bg-green-900/10' 
              : 'bg-slate-50 dark:bg-slate-700/30 opacity-50'
          }`}
        >
          <div className={`p-2 rounded-full mr-3 ${
            feature.included 
              ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' 
              : 'bg-slate-200 text-slate-500 dark:bg-slate-700 dark:text-slate-400'
          }`}>
            {feature.icon}
          </div>
          <div className="flex-grow">
            <h3 className="font-medium">{feature.name}</h3>
          </div>
          <div>
            {feature.included ? (
              <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
            ) : (
              <span className="text-xs bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">
                Not Included
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};