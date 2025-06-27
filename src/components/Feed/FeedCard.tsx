import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';

interface PostData {
  user: {
    name: string;
    avatarUrl: string;
  };
  location: string;
  imageUrl: string;
  likes: number;
  caption: string;
  fullCaption: string;
  hashtags: string[];
}

// MANDATORY: Dummy data defined directly in the component
const postData: PostData = {
  user: {
    name: 'NatureLover',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
  },
  location: 'Alpine Meadows',
  imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop',
  likes: 1256,
  caption: 'Breathtaking views from the top!',
  fullCaption: 'Absolutely worth the hike.',
  hashtags: ['#nature', '#mountains', '#adventure'],
};


const FeedCard: React.FC = () => {
  const [isLiked, setIsLiked] = React.useState<boolean>(false);
  const [isBookmarked, setIsBookmarked] = React.useState<boolean>(false);

  const toggleLike = React.useCallback(() => {
    setIsLiked(prev => !prev);
  }, []);

  const toggleBookmark = React.useCallback(() => {
    setIsBookmarked(prev => !prev);
  }, []);


  return (
    <div className="w-full bg-card">
      {/* Post Header */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center space-x-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src={postData.user.avatarUrl} alt={postData.user.name} />
            <AvatarFallback>{postData.user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="text-sm">
            <p className="font-bold text-foreground cursor-pointer">{postData.user.name}</p>
            <p className="text-xs text-muted-foreground cursor-pointer">{postData.location}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </div>

      {/* Post Image */}
      <img src={postData.imageUrl} alt={`Post by ${postData.user.name}`} className="w-full h-auto object-cover" />

      {/* Post Actions */}
      <div className="flex items-center justify-between px-2 py-1">
        <div className="flex items-center space-x-1">
          <Button variant="ghost" size="icon" onClick={toggleLike}>
            <Heart className={cn(
              "h-6 w-6 transition-colors",
              isLiked ? 'fill-red-500 text-red-500' : 'text-foreground'
            )} />
            <span className="sr-only">Like</span>
          </Button>
          <Button variant="ghost" size="icon">
            <MessageCircle className="h-6 w-6 text-foreground" />
            <span className="sr-only">Comment</span>
          </Button>
          <Button variant="ghost" size="icon">
            <Send className="h-6 w-6 text-foreground" />
            <span className="sr-only">Send</span>
          </Button>
        </div>
        <Button variant="ghost" size="icon" onClick={toggleBookmark}>
          <Bookmark className={cn(
            "h-6 w-6 transition-colors",
            isBookmarked ? 'fill-foreground text-foreground' : 'text-foreground'
          )} />
          <span className="sr-only">Bookmark</span>
        </Button>
      </div>

      {/* Post Meta */}
      <div className="px-3 pb-4 space-y-1">
        <p className="font-bold text-sm text-foreground">
          {postData.likes.toLocaleString()} likes
        </p>
        <p className="text-sm text-foreground">
          <span className="font-bold cursor-pointer hover:underline">{postData.user.name}</span>
          {' '}{postData.caption}{' '}{postData.fullCaption}
        </p>
         <p className="text-sm text-foreground">
            {postData.hashtags.map(tag => (
              <span key={tag} className="text-primary cursor-pointer hover:underline mr-1">{tag}</span>
            ))}
          </p>
      </div>
    </div>
  );
};

export default FeedCard;
