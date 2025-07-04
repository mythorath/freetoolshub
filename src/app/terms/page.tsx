export default function Terms() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Last updated: July 4, 2025
            </p>

            <p className="mb-6">
              These are the terms for using FreeToolsHub. I tried to keep them simple and not too lawyery.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              What You Can Do
            </h2>

            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>Use all the tools for free (forever)</li>
              <li>Use them for personal or commercial projects</li>
              <li>Share links to the tools with others</li>
              <li>Give feedback or suggestions</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              What You Can&apos;t Do
            </h2>

            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>Try to break or hack the tools</li>
              <li>Use them for illegal stuff</li>
              <li>Spam the servers or abuse the service</li>
              <li>              Copy the entire website and claim it&apos;s yours</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              Disclaimers
            </h2>

            <p className="mb-4">
              I built these tools to be helpful, but I can&apos;t guarantee they&apos;re perfect:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>              Tools are provided &ldquo;as is&rdquo; - they might have bugs</li>
              <li>Always keep backups of important files</li>
              <li>              I&apos;m not responsible if something goes wrong</li>
              <li>The tools might be down sometimes for maintenance</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              Your Files
            </h2>

            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>You keep all rights to your files and data</li>
              <li>Most processing happens in your browser</li>
              <li>              If files are uploaded, they&apos;re deleted immediately after processing</li>
              <li>              I don&apos;t look at, store, or share your files</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              Changes
            </h2>

            <p className="mb-6">
              I might update these terms occasionally. If I do, I&apos;ll update the date at the top. 
              Nothing too dramatic - probably just clarifications or new tool features.
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mt-8">
              <h3 className="text-lg font-medium text-green-900 dark:text-green-300 mb-2">
                The Simple Version
              </h3>
              <p className="text-green-800 dark:text-green-200">
                Use the tools however you want (legally). Don&apos;t try to break them. 
                I&apos;m not responsible if they mess up. Your files are yours. 
                Everything is free. Be cool.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
