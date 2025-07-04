'use client';

import { useState, useEffect } from 'react';

interface Tool {
  id: string;
  title: string;
  icon: string;
  description: string;
  category: string;
  comingSoon?: boolean;
}

const tools: Tool[] = [
  {
    id: 'pdf-converter',
    title: 'PDF Converter',
    icon: '📄',
    description: 'Convert files to and from PDF format instantly. Supports Word, Excel, PowerPoint, and images.',
    category: 'Document'
  },
  {
    id: 'image-optimizer',
    title: 'Image Optimizer',
    icon: '🖼️',
    description: 'Compress and optimize images without losing quality. Supports JPG, PNG, WebP, and GIF.',
    category: 'Image'
  },
  {
    id: 'audio-trimmer',
    title: 'Audio Trimmer',
    icon: '🎵',
    description: 'Trim, cut, and edit audio files online. Perfect for creating ringtones and clips.',
    category: 'Audio'
  },
  {
    id: 'json-formatter',
    title: 'JSON Formatter',
    icon: '📊',
    description: 'Format, validate, and beautify JSON data. Includes syntax highlighting and error detection.',
    category: 'Developer'
  },
  {
    id: 'resume-enhancer',
    title: 'Resume Enhancer',
    icon: '📋',
    description: 'Create professional resumes with ATS-friendly templates and AI-powered suggestions.',
    category: 'Career'
  },
  {
    id: 'color-picker',
    title: 'Color Picker',
    icon: '🎨',
    description: 'Pick colors from images, generate palettes, and convert between color formats.',
    category: 'Design'
  }
];

export default function ToolsGrid() {
  const [usage, setUsage] = useState<Record<string, number>>({});
  const [dailyLimit] = useState(5); // Daily usage limit per tool

  useEffect(() => {
    // Load usage data from localStorage
    const today = new Date().toDateString();
    const savedUsage = localStorage.getItem(`toolUsage_${today}`);
    if (savedUsage) {
      setUsage(JSON.parse(savedUsage));
    }
  }, []);

  const updateUsage = (toolId: string) => {
    const today = new Date().toDateString();
    const newUsage = { ...usage, [toolId]: (usage[toolId] || 0) + 1 };
    setUsage(newUsage);
    localStorage.setItem(`toolUsage_${today}`, JSON.stringify(newUsage));
  };

  const canUseTool = (toolId: string) => {
    return (usage[toolId] || 0) < dailyLimit;
  };

  const handleToolClick = (toolId: string) => {
    if (canUseTool(toolId)) {
      updateUsage(toolId);
      // In a real app, this would navigate to the tool page
      alert(`Launching ${tools.find(t => t.id === toolId)?.title}...`);
    }
  };

  return (
    <section id="tools" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Popular Tools
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose from our collection of powerful, free tools designed to make your life easier.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool) => {
            const toolUsage = usage[tool.id] || 0;
            const isLocked = !canUseTool(tool.id);
            
            return (
              <div
                key={tool.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden group"
              >
                <div className="p-6">
                  {/* Tool Icon and Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{tool.icon}</div>
                    <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                      {tool.category}
                    </span>
                  </div>

                  {/* Tool Title */}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {tool.title}
                  </h3>

                  {/* Tool Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {tool.description}
                  </p>

                  {/* Usage Counter */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Daily usage: {toolUsage}/{dailyLimit}
                    </div>
                    <div className="flex space-x-1">
                      {Array.from({ length: dailyLimit }).map((_, i) => (
                        <div
                          key={`usage-${tool.id}-${i}`}
                          className={`w-2 h-2 rounded-full ${
                            i < toolUsage 
                              ? 'bg-blue-600 dark:bg-blue-400' 
                              : 'bg-gray-200 dark:bg-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Launch Button */}
                  <button
                    onClick={() => handleToolClick(tool.id)}
                    disabled={isLocked}
                    className={`w-full py-3 px-4 rounded-lg font-medium text-sm transition-all duration-200 ${
                      isLocked
                        ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transform hover:scale-105'
                    }`}
                  >
                    {isLocked ? (
                      <div className="flex items-center justify-center">
                        <span className="mr-2">🔒</span>
                        <span>Watch Ad to Unlock</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        Launch Tool
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    )}
                  </button>
                </div>

                {/* Hover Effect Border */}
                <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            );
          })}
        </div>

        {/* More Tools CTA */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg transition-colors duration-200">
            View All Tools
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
