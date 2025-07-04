// Tool configuration - easily toggle construction status
export interface ToolConfig {
  id: string;
  title: string;
  icon: string;
  description: string;
  category: string;
  isUnderConstruction: boolean;
  comingSoon?: boolean;
}

export const toolsConfig: ToolConfig[] = [
  {
    id: 'pdf-converter',
    title: 'PDF Converter',
    icon: '📄',
    description: 'Convert files to and from PDF format instantly. Supports Word, Excel, PowerPoint, and images.',
    category: 'Document',
    isUnderConstruction: true, // Set to false when ready
  },
  {
    id: 'image-optimizer',
    title: 'Image Optimizer',
    icon: '🖼️',
    description: 'Compress and optimize images without losing quality. Supports JPG, PNG, WebP, and GIF.',
    category: 'Image',
    isUnderConstruction: true, // Set to false when ready
  },
  {
    id: 'audio-trimmer',
    title: 'Audio Trimmer',
    icon: '🎵',
    description: 'Trim, cut, and edit audio files online. Perfect for creating ringtones and clips.',
    category: 'Audio',
    isUnderConstruction: true, // Set to false when ready
  },
  {
    id: 'json-formatter',
    title: 'JSON Formatter',
    icon: '📊',
    description: 'Format, validate, and beautify JSON data. Includes syntax highlighting and error detection.',
    category: 'Developer',
    isUnderConstruction: true, // Set to false when ready
  },
  {
    id: 'resume-enhancer',
    title: 'Resume Enhancer',
    icon: '📋',
    description: 'Create professional resumes with ATS-friendly templates and AI-powered suggestions.',
    category: 'Career',
    isUnderConstruction: true, // Set to false when ready
  },
  {
    id: 'color-picker',
    title: 'Color Picker',
    icon: '🎨',
    description: 'Pick colors from images, generate palettes, and convert between color formats.',
    category: 'Design',
    isUnderConstruction: true, // Set to false when ready
  }
];

// Helper function to check if a tool is under construction
export const isToolUnderConstruction = (toolId: string): boolean => {
  const tool = toolsConfig.find(t => t.id === toolId);
  return tool?.isUnderConstruction ?? false;
};

// Helper function to get all available tools (not under construction)
export const getAvailableTools = (): ToolConfig[] => {
  return toolsConfig.filter(tool => !tool.isUnderConstruction);
};

// Helper function to get all tools under construction
export const getToolsUnderConstruction = (): ToolConfig[] => {
  return toolsConfig.filter(tool => tool.isUnderConstruction);
};
