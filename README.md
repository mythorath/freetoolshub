# 🛠️ FreeToolsHub

**Powerful Tools. Zero Cost. Forever.**

FreeToolsHub is a modern web application that provides professional-grade tools completely free of charge. Built with Next.js 14+ and Tailwind CSS, it offers a responsive, accessible, and beautiful user experience.

## ✨ Features

- **100% Free Forever** - No subscriptions, no hidden fees, no catch
- **Dark Mode Support** - Seamless theme switching with localStorage persistence
- **Responsive Design** - Optimized for all screen sizes
- **Usage Tracking** - Local storage-based daily usage limits
- **Modern UI** - Clean, professional interface with smooth animations
- **Privacy First** - No tracking, no ads, no data collection

## � Managing Under Construction Status

All tools are currently marked as "Under Construction" with large overlay stickers. To enable tools as you build them:

### Quick Toggle Method
1. **Open Developer Tools** - Click the "🔧 Dev Tools" button in the bottom-right corner
2. **View Status** - See which tools are under construction vs. live
3. **Edit Configuration** - Modify `src/config/tools.ts` to change status

### Manual Configuration
Edit `src/config/tools.ts` and change `isUnderConstruction` from `true` to `false`:

```typescript
{
  id: 'pdf-converter',
  title: 'PDF Converter',
  // ... other properties
  isUnderConstruction: false, // Change this to enable the tool
}
```

### Construction Features
- **Large Overlay Stickers** - Animated construction overlays on each tool
- **"Under Construction" Buttons** - Yellow buttons with construction icons
- **Notification System** - Users get notified when clicking construction tools
- **Easy Toggle** - One-line change to enable/disable each tool
- **Developer Panel** - Quick status overview in development mode

## �🚀 Tools Available

- **PDF Converter** - Convert files to and from PDF format
- **Image Optimizer** - Compress images without quality loss
- **Audio Trimmer** - Trim and edit audio files
- **JSON Formatter** - Format and validate JSON data
- **Resume Enhancer** - Create professional resumes
- **Color Picker** - Pick colors and generate palettes

## 🛠️ Technology Stack

- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Font**: Geist Sans & Geist Mono
- **Icons**: Emoji-based with SVG fallbacks

## 🚀 Getting Started

1. **Clone the repository**:
```bash
git clone https://github.com/yourusername/freetoolshub.git
cd freetoolshub
```

2. **Install dependencies**:
```bash
npm install
```

3. **Run the development server**:
```bash
npm run dev
```

4. **Open your browser** and visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
freetoolshub/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout with metadata
│   │   ├── page.tsx          # Homepage
│   │   └── globals.css       # Global styles
│   └── components/
│       ├── Header.tsx        # Navigation with dark mode
│       ├── Hero.tsx          # Hero section
│       ├── BannerAd.tsx      # Ad placement
│       ├── ToolsGrid.tsx     # Tools grid with usage tracking
│       └── Footer.tsx        # Footer with trust badges
├── public/                   # Static assets
└── .github/
    └── copilot-instructions.md
```

## 🎨 Design Features

- **Sticky Navigation** - Always accessible header
- **Smooth Animations** - Hover effects and transitions
- **Trust Badges** - Security and privacy indicators
- **Usage Limits** - Daily tool usage tracking
- **CTA Buttons** - Clear call-to-action elements

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com/new)
3. Import your repository
4. Deploy automatically

### Other Platforms
```bash
npm run build
npm run start
```

## 📱 Mobile Responsiveness

- **Mobile-first approach** with Tailwind CSS
- **Responsive grid layouts** for all screen sizes
- **Touch-friendly buttons** and navigation
- **Optimized typography** for readability

## 🔒 Privacy & Security

- **No data collection** - All processing happens locally
- **No tracking** - We don't monitor user behavior
- **No ads** - Clean, distraction-free experience
- **Open source** - Complete transparency

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Icons and emojis for visual appeal
- Community feedback and suggestions

---

**Made with ❤️ for the community**
