interface UnderConstructionOverlayProps {
  readonly isVisible: boolean;
  readonly toolName?: string;
  readonly toolIcon?: string;
}

export default function UnderConstructionOverlay({ isVisible, toolName, toolIcon }: UnderConstructionOverlayProps) {
  if (!isVisible) return null;

  return (
    <div className="absolute inset-0 bg-black/85 backdrop-blur-sm rounded-xl flex items-center justify-center z-10">
      <div className="text-center p-6">
        {/* Tool Icon and Name */}
        {toolIcon && toolName && (
          <div className="mb-4">
            <div className="text-4xl mb-2">{toolIcon}</div>
            <div className="text-white text-lg font-semibold mb-1">{toolName}</div>
            <div className="text-gray-300 text-sm">is coming soon...</div>
          </div>
        )}
        
        {/* Construction Icon */}
        <div className="text-5xl mb-4 animate-bounce">🚧</div>
        
        {/* Under Construction Badge */}
        <div className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-bold text-base mb-4 transform rotate-12 shadow-lg">
          WORK IN PROGRESS
        </div>
        
        {/* Personal Message */}
        <div className="text-white text-sm font-medium mb-4 max-w-xs mx-auto">
          I'm working on this one right now! 
          <br />
          Should be done pretty soon 🤖
        </div>
        
        {/* Progress Indicator */}
        <div className="flex items-center justify-center space-x-1 mb-4">
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
        </div>
        
        {/* Call to Action */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          Tell Me When It's Done!
        </button>
      </div>
    </div>
  );
}
