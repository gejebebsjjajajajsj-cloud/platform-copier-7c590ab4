import { motion } from 'framer-motion';

interface ContentToggleProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const ContentToggle = ({ activeTab, onTabChange }: ContentToggleProps) => {
  const tabs = [
    { id: 'posts', label: 'Posts', count: 502, disabled: true },
    { id: 'videos', label: 'Videos', count: 148 },
    { id: 'photos', label: 'Fotos', count: 354 },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex items-center justify-center gap-2 text-sm py-4"
    >
      {tabs.map((tab, index) => (
        <div key={tab.id} className="flex items-center gap-2">
          <button
            onClick={() => !tab.disabled && onTabChange(tab.id)}
            disabled={tab.disabled}
            className={`flex items-center gap-1.5 px-2 py-1 rounded-md transition-all ${
              tab.disabled 
                ? 'text-muted-foreground/50 cursor-not-allowed' 
                : activeTab === tab.id
                  ? 'text-primary font-semibold'
                  : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <span className="font-bold">{tab.count}</span>
            <span>{tab.label}</span>
          </button>
          {index < tabs.length - 1 && (
            <span className="text-muted-foreground">•</span>
          )}
        </div>
      ))}
    </motion.div>
  );
};

export default ContentToggle;
