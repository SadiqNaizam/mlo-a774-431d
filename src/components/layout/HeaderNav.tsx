import React from 'react';
import { Moon, Home, RectangleVertical } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const HeaderNav: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<'overview' | 'preview'>('overview');

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <span className="font-black text-2xl tracking-tight text-foreground">
            ASCENDION
          </span>
        </a>
        
        {/* Profile Actions */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Moon className="h-5 w-5 text-foreground" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Avatar className="h-9 w-9">
            <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop" alt="User Profile" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>
      
      <div className="container max-w-screen-2xl px-4 pb-3">
        <nav className="flex items-center space-x-1">
          <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground">
            <Home className="h-5 w-5" />
            <span className="sr-only">Home</span>
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground">
            <RectangleVertical className="h-5 w-5" />
            <span className="sr-only">Layouts</span>
          </Button>
           <Button
             onClick={() => setActiveTab('overview')}
             variant={activeTab === 'overview' ? 'secondary' : 'ghost'}
             className="h-9 rounded-lg px-4 text-sm font-medium"
           >
             Overview
           </Button>
           <Button
             onClick={() => setActiveTab('preview')}
             variant={activeTab === 'preview' ? 'secondary' : 'ghost'}
             className="h-9 rounded-lg px-4 text-sm font-medium"
           >
             Preview
           </Button>
        </nav>
      </div>
    </header>
  );
};

export default HeaderNav;
