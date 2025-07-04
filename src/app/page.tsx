import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BannerAd from '@/components/BannerAd';
import ToolsGrid from '@/components/ToolsGrid';
import Footer from '@/components/Footer';
import DeveloperTools from '@/components/DeveloperTools';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Header />
      <main>
        <Hero />
        <BannerAd />
        <ToolsGrid />
      </main>
      <Footer />
      <DeveloperTools />
    </div>
  );
}
