import React from 'react';
import { Home, Search, PlusSquare, Clapperboard } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type NavItemId = 'home' | 'search' | 'add' | 'reels' | 'profile';

const navItems: { id: NavItemId; label: string; icon: React.ElementType | null }[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'search', label: 'Search', icon: Search },
  { id: 'add', label: 'Add Post', icon: PlusSquare },
  { id: 'reels', label: 'Reels', icon: Clapperboard },
  { id: 'profile', label: 'Profile', icon: null },
];

const BottomNavigation: React.FC = () => {
  const [activeItem, setActiveItem] = React.useState<NavItemId>('home');

  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full border-t border-border bg-card">
      <div className="flex h-16 items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;

          if (item.id === 'profile') {
            return (
              <Button
                key={item.id}
                variant="ghost"
                className="h-full flex-1 rounded-none p-0"
                onClick={() => setActiveItem(item.id)}
              >
                <Avatar className="h-7 w-7">
                  <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop" alt="User Profile" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <span className="sr-only">{item.label}</span>
              </Button>
            );
          }
          
          if (!Icon) return null;

          return (
            <Button
              key={item.id}
              variant="ghost"
              className="h-full flex-1 rounded-none"
              onClick={() => setActiveItem(item.id)}
            >
              <Icon
                className="h-7 w-7 text-foreground"
                fill={isActive ? 'currentColor' : 'none'}
              />
              <span className="sr-only">{item.label}</span>
            </Button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
