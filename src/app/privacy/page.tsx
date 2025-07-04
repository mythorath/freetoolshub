export default function Privacy() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Last updated: July 4, 2025
            </p>

            <p className="mb-6">
              This Privacy Policy describes how FreeToolsHub (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) collects, uses, and shares information when you use our website and tools.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              Information We Collect
            </h2>

            <h3 className="text-xl font-medium text-gray-900 dark:text-white mt-6 mb-3">
              Advertising Data:
            </h3>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Our website displays advertisements through third-party advertising networks</li>
              <li>These networks may collect device information, IP address, and usage data</li>
              <li>This data is used to show relevant advertisements</li>
              <li>No personal information is collected by our website directly</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 dark:text-white mt-6 mb-3">
              Usage Information:
            </h3>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Browser type and version</li>
              <li>Tool usage statistics (anonymous)</li>
              <li>Performance metrics (if errors occur)</li>
              <li>General geographic location (country/region level only)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              Information We Do NOT Collect
            </h2>

            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>Personal identification information (names, emails, phone numbers)</li>
              <li>Precise location data</li>
              <li>File contents processed by our tools</li>
              <li>Login credentials or account information</li>
              <li>Payment information (since everything is free)</li>
              <li>Cookies for tracking across websites</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              How We Use Information
            </h2>

            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>To display relevant advertisements that keep our tools free</li>
              <li>To improve tool performance and user experience</li>
              <li>To fix bugs and technical issues</li>
              <li>To understand which tools are most useful to users</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              Third-Party Services
            </h2>

            <h3 className="text-xl font-medium text-gray-900 dark:text-white mt-6 mb-3">
              Advertising Networks:
            </h3>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Our website uses third-party advertising networks to display ads</li>
              <li>These services have their own privacy policies</li>
              <li>You can usually opt out of personalized ads in your browser or device settings</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 dark:text-white mt-6 mb-3">
              Tool Processing:
            </h3>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>All file processing happens in your browser when possible</li>
              <li>Files are not uploaded to our servers unless absolutely necessary</li>
              <li>Any files processed on our servers are immediately deleted after processing</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              Data Security
            </h2>

            <p className="mb-6">
              We implement appropriate security measures to protect any information transmitted through our website. However, since we minimize data collection, there&apos;s not much to protect anyway.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              Children&apos;s Privacy
            </h2>

            <p className="mb-6">
              Our website does not knowingly collect personal information from children under 13 years of age. If we discover we have collected such information, we will delete it immediately.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              Your Rights
            </h2>

            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>You can use our tools without providing any personal information</li>
              <li>You can disable ads through browser ad blockers (though this hurts our ability to keep tools free)</li>
              <li>You can contact us with questions about this policy</li>
              <li>You can stop using our tools at any time</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              Changes to This Policy
            </h2>

            <p className="mb-6">
              We may update this privacy policy from time to time. Changes will be posted on this page with an updated date. We&apos;ll try to keep things simple and honest.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              Contact Us
            </h2>

            <p className="mb-6">
              If you have questions about this privacy policy, feel free to reach out. I&apos;m just one person building these tools, so I&apos;ll do my best to respond.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-8">
              <h3 className="text-lg font-medium text-blue-900 dark:text-blue-300 mb-2">
                TL;DR (Too Long; Didn&apos;t Read)
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                I don&apos;t collect your personal info. There are some ads to keep things free. 
                Your files are processed locally when possible. I&apos;m not trying to be creepy 
                or sell your data - I just want to build useful tools.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
