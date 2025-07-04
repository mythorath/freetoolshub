export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            About FreeToolsHub
          </h1>
          
          <div className="prose prose-gray dark:prose-invert max-w-none">
            
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              What This Is
            </h2>

            <p className="mb-6">
              FreeToolsHub is just me building useful web tools and sharing them for free. 
              I got tired of paying for simple tools or dealing with sketchy websites covered in ads, 
              so I decided to make my own.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              Why It Exists
            </h2>

            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>Most &ldquo;free&rdquo; tools are actually freemium with artificial limits</li>
              <li>Many sites are covered in invasive ads and trackers</li>
              <li>Simple tasks shouldn&apos;t require downloading software</li>
              <li>I wanted to learn how to build these tools anyway</li>
              <li>The internet needs more genuinely free stuff</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              How It Works
            </h2>

            <p className="mb-4">
              I build the tools with help from AI (mainly for the boring parts). The business model is simple:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>Tools are completely free to use</li>
              <li>Tasteful, non-intrusive ads help cover hosting costs</li>
              <li>No tracking, data mining, or selling your info</li>
              <li>No premium tiers or artificial limitations</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              What&apos;s Coming
            </h2>

            <p className="mb-4">
              I&apos;m working on these tools (in no particular order):
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>📄 PDF Converter - Convert files to/from PDF</li>
              <li>🖼️ Image Optimizer - Compress images without quality loss</li>
              <li>🎵 Audio Trimmer - Cut and edit audio files</li>
              <li>📊 JSON Formatter - Format and validate JSON</li>
              <li>📋 Resume Enhancer - Build professional resumes</li>
              <li>🎨 Color Picker - Pick colors and generate palettes</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              Technical Stuff
            </h2>

            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>Built with Next.js and TypeScript</li>
              <li>Most processing happens in your browser (privacy + speed)</li>
              <li>Hosted on Vercel for reliability</li>
              <li>Open to suggestions and feedback</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              Contact
            </h2>

            <p className="mb-6">
              Got questions, suggestions, or just want to say hi? I&apos;m always interested in 
              hearing what tools people actually need. Since it&apos;s just me, I might take a 
              while to respond, but I&apos;ll do my best.
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg mt-8">
              <h3 className="text-lg font-medium text-purple-900 dark:text-purple-300 mb-2">
                The Philosophy
              </h3>
              <p className="text-purple-800 dark:text-purple-200">
                Good tools should be free and accessible. The web is better when useful 
                things don&apos;t cost money. Sometimes the best projects come from someone 
                just scratching their own itch.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
