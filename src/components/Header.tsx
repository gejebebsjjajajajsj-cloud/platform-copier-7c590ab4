import { Search, Plus, MessageCircle } from 'lucide-react';
import privacyLogo from '@/assets/privacy-logo.svg';

const Header = () => {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src={privacyLogo} 
            alt="Privacy Logo" 
            className="h-10 w-auto"
          />
        </div>

        {/* Search - Hidden on Mobile */}
        <div className="hidden md:flex items-center flex-1 max-w-sm mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Pesquise aqui..."
              className="w-full pl-10 pr-4 py-2 bg-muted rounded-full text-sm border-0 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Nav Icons - Hidden on Mobile */}
        <div className="hidden md:flex items-center gap-3">
          <button className="p-2 rounded-full hover:bg-muted transition-colors">
            <Plus className="w-5 h-5 text-muted-foreground" />
          </button>
          <button className="p-2 rounded-full hover:bg-muted transition-colors">
            <MessageCircle className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
