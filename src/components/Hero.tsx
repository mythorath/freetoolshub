export default function Hero() {
  return (
    <section className="relative pt-20 pb-16 sm:pt-24 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="block">Powerful Tools.</span>
            <span className="block text-blue-600 dark:text-blue-400">Zero Cost.</span>
            <span className="block">Forever.</span>
          </h1>
          
          {/* Subtitle */}
          <p className="mt-6 text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Access professional-grade web tools without paying a dime. 
            No subscriptions, no hidden fees, no catch.
          </p>
          
          {/* Features */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm sm:text-base">
            <div className="flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full">
              <span className="text-green-600 dark:text-green-400 mr-2">✓</span>
              <span className="text-green-700 dark:text-green-300">100% Free</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
              <span className="text-blue-600 dark:text-blue-400 mr-2">🛡️</span>
              <span className="text-blue-700 dark:text-blue-300">Privacy First</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full">
              <span className="text-purple-600 dark:text-purple-400 mr-2">⚡</span>
              <span className="text-purple-700 dark:text-purple-300">Lightning Fast</span>
            </div>
          </div>
          
          {/* Call to action */}
          <div className="mt-10">
            <a
              href="#tools"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Explore Tools
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Free Tools</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">1M+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Happy Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">0€</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Forever Free</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
