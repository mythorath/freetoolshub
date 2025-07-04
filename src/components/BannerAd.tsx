export default function BannerAd() {
  return (
    <section className="py-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            {/* Banner Ad Placeholder */}
            <div className="bg-white dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg h-24 flex items-center justify-center">
              <div className="text-center">
                <div className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                  📢 Tasteful Ad Space (728x90)
                </div>
                <div className="text-gray-400 dark:text-gray-500 text-xs mt-1">
                  Non-intrusive ads help keep the tools free
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
