export default function Contact() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Get in Touch
          </h1>
          
          <div className="prose prose-gray dark:prose-invert max-w-none">
            
            <p className="mb-6">
              Since this is just me building tools, I don't have a fancy contact system. 
              But I'm always interested in hearing from people who use the tools!
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              What You Can Reach Out About
            </h2>

            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>🐛 Bug reports - if something's broken</li>
              <li>💡 Tool suggestions - what would be useful?</li>
              <li>🎯 Feature requests - ways to improve existing tools</li>
              <li>❓ Questions about how something works</li>
              <li>👋 Just saying hi - always nice to hear from users!</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              Response Time
            </h2>

            <p className="mb-6">
              I'll try to respond within a few days. Keep in mind this is a side project, 
              so sometimes life gets in the way. If it's urgent, mention that in your message.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              What Helps
            </h2>

            <p className="mb-4">
              If you're reporting a bug or issue:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>What browser you're using</li>
              <li>What you were trying to do</li>
              <li>What happened vs. what you expected</li>
              <li>Screenshots if relevant</li>
            </ul>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-8">
              <h3 className="text-lg font-medium text-blue-900 dark:text-blue-300 mb-2">
                📧 Contact Information
              </h3>
              <p className="text-blue-800 dark:text-blue-200 mb-2">
                Email: [Your Email Here]
              </p>
              <p className="text-blue-700 dark:text-blue-300 text-sm">
                (I'll add the actual email address once I set one up for this project)
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mt-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-200 mb-2">
                No Contact Form?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                I could build a contact form, but honestly, email is simpler and 
                I don't want to deal with spam filtering and database management right now. 
                Maybe later if people really want it.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
