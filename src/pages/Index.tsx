import React from 'react';
import HeaderNav from '../components/layout/HeaderNav';
import StoriesCarousel from '../components/Stories/StoriesCarousel';
import FeedCard from '../components/Feed/FeedCard';
import BottomNavigation from '../components/layout/BottomNavigation';

/**
 * The main page component for the Ascension Social Media App Clone.
 * This component structures the main feed view, composing the header,
 * stories carousel, a list of feed cards, and the bottom navigation bar.
 */
const IndexPage: React.FC = () => {
  // A simple array to simulate a list of posts in the feed.
  // The FeedCard component itself contains static dummy data, so we just
  // need to render it multiple times to create a scrollable feed.
  const feedPostIds = [1, 2, 3] as const;

  return (
    <div className="bg-background min-h-screen">
      <HeaderNav />
      
      {/* 
        The main content area for the feed.
        - `max-w-xl` and `mx-auto` center the content on larger screens for a better reading experience.
        - `pb-20` provides padding at the bottom to ensure the fixed BottomNavigation
          does not overlap the last feed item when scrolled to the end.
      */}
      <main className="max-w-xl mx-auto pb-20">
        <StoriesCarousel />
        
        <div className="flex flex-col">
          {feedPostIds.map((id) => (
            // Each FeedCard is separated by a bottom border for visual clarity,
            // consistent with the border below the StoriesCarousel.
            <div key={id} className="border-b border-border">
              <FeedCard />
            </div>
          ))}
        </div>
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default IndexPage;
