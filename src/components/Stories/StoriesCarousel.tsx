import React from 'react';
import { PlusCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Story {
  id: number;
  username: string;
  imageUrl: string;
  isUser?: boolean;
}

// MANDATORY: Dummy data defined directly in the component
const storiesData: Story[] = [
  { id: 1, username: 'Your Story', imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop', isUser: true },
  { id: 2, username: 'TechGuru', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop' },
  { id: 3, username: 'Traveler', imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop' },
  { id: 4, username: 'Foodie', imageUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop' },
  { id: 5, username: 'Artist', imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop' },
  { id: 6, username: 'GamerX', imageUrl: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=1974&auto=format&fit=crop' },
  { id: 7, username: 'CoderLife', imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop' },
  { id: 8, username: 'Wanderer', imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1974&auto=format&fit=crop' },
];

const StoriesCarousel: React.FC = () => {
  return (
    <div className="w-full bg-card px-4 pt-3 pb-1 border-b border-border">
      <div className="flex items-start space-x-4 overflow-x-auto pb-2 -mb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {storiesData.map((story) => (
          <div key={story.id} className="flex flex-col items-center justify-center space-y-1.5 flex-shrink-0 w-20">
            <div className="relative">
              <div className={cn(
                "rounded-full p-0.5",
                !story.isUser && "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500"
              )}>
                <div className="bg-card p-0.5 rounded-full">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={story.imageUrl} alt={story.username} className="object-cover" />
                    <AvatarFallback>{story.username.substring(0, 1)}</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              {story.isUser && (
                <div className="absolute bottom-0 right-0 bg-card rounded-full p-0.5">
                   <PlusCircle className="h-5 w-5 text-primary-foreground stroke-card fill-primary" />
                </div>
              )}
            </div>
            <p className="text-xs font-medium text-foreground truncate w-full text-center">
              {story.username}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoriesCarousel;
