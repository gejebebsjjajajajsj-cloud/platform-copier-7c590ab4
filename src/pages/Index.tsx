import { useState } from 'react';
import PromoBanner from '@/components/PromoBanner';
import Header from '@/components/Header';
import ProfileSection from '@/components/ProfileSection';
import SubscriptionCard from '@/components/SubscriptionCard';
import ContentToggle from '@/components/ContentToggle';
import FeedCard from '@/components/FeedCard';
import FAQSection from '@/components/FAQSection';
import FooterCTA from '@/components/FooterCTA';
import NotificationToast from '@/components/NotificationToast';

// Import images
import coverImage from '@/assets/cover-image.jpg';
import avatarImage from '@/assets/avatar-image.jpg';
import feedImage1 from '@/assets/feed-image-1.jpg';
import feedImage2 from '@/assets/feed-image-2.jpg';
import feedImage3 from '@/assets/feed-image-3.jpg';

const Index = () => {
  const [activeTab, setActiveTab] = useState('videos');

  const profileData = {
    name: 'Kamylinha Santos',
    username: 'eukamylinhasantos',
    bio: 'Oi, meus amores! 🔥💦 Sou a Kamylinha Santos, a musa da dancinha do tiktok, e hoje vou revelar um lado meu que vai te deixar sem fôlego… Imagine vídeos exclusivos, momentos íntimos e conteúdos que vão te surpreender. 😏 Cada centímetro do meu corpo é pura tentação e minhas fotos são um convite exclusivo para você explorar seus desejos mais secretos – tudo sem censura! Se você tem coragem de se perder nessa paixão sem limites, vem comigo... Estou te esperando para uma experiência única e irresistível.😈💋',
    coverImage: coverImage,
    avatarImage: avatarImage,
    stats: {
      photos: 354,
      videos: 148,
      likes: '20.2K'
    }
  };

  const feedItems = [
    {
      mediaUrl: feedImage1,
      isVideo: false,
      likes: '67.4K',
      comments: '1.9K'
    },
    {
      mediaUrl: feedImage2,
      isVideo: false,
      likes: '89.6K',
      comments: '7.1K'
    },
    {
      mediaUrl: feedImage3,
      isVideo: false,
      likes: '55.3K',
      comments: '8.4K'
    }
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      <PromoBanner />
      <Header />
      
      <main className="container mx-auto px-4 py-6 max-w-lg">
        <div className="space-y-4">
          <ProfileSection {...profileData} />
          
          <SubscriptionCard />
          
          <ContentToggle activeTab={activeTab} onTabChange={setActiveTab} />
          
          {/* Feed Grid */}
          <div className="space-y-4">
            {feedItems.map((item, index) => (
              <FeedCard
                key={index}
                avatarImage={avatarImage}
                name={profileData.name}
                username={profileData.username}
                mediaUrl={item.mediaUrl}
                isVideo={item.isVideo}
                likes={item.likes}
                comments={item.comments}
                index={index}
              />
            ))}
          </div>
          
          <FAQSection />
          
          <FooterCTA />
        </div>
      </main>

      <NotificationToast />
    </div>
  );
};

export default Index;
