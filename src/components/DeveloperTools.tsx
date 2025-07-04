'use client';

import { useState } from 'react';
import { toolsConfig } from '@/config/tools';

export default function DeveloperTools() {
  const [isVisible, setIsVisible] = useState(false);

  // This would normally be protected by authentication
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  if (!isVisible) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={toggleVisibility}
          className="bg-gray-800 text-white px-3 py-2 rounded-lg text-xs hover:bg-gray-700 transition-colors"
        >
          🔧 Dev Tools
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 max-w-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">🔧 Developer Tools</h3>
        <button
          onClick={toggleVisibility}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          ✕
        </button>
      </div>
      
      <div className="space-y-2">
        <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">
          Construction Status:
        </div>
        
        {toolsConfig.map((tool) => (
          <div key={tool.id} className="flex items-center justify-between text-xs">
            <span className="text-gray-700 dark:text-gray-300 truncate mr-2">
              {tool.icon} {tool.title}
            </span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              tool.isUnderConstruction
                ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'
                : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
            }`}>
              {tool.isUnderConstruction ? '🚧 Building' : '✅ Live'}
            </span>
          </div>
        ))}
        
        <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-600">
          <div className="text-xs text-gray-500 dark:text-gray-400">
            Edit <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">src/config/tools.ts</code> to toggle construction status
          </div>
        </div>
      </div>
    </div>
  );
}
