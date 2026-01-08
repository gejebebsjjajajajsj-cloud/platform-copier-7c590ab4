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
import coverImage from '@/assets/cover-image.png';
import avatarImage from '@/assets/avatar-image.jpg';
import perfil1 from '@/assets/perfil1.png';
import feedImage1 from '@/assets/feed-image-1.png';

const Index = () => {
  const [activeTab, setActiveTab] = useState('videos');

  const profileData = {
    name: 'Kamylinha Santos',
    username: 'eukamylinhasantos',
    bio: 'Oi, meus amores! 🔥💦 Sou a Kamylinha Santos, a musa da dancinha do tiktok, e hoje vou revelar um lado meu que vai te deixar sem fôlego… Imagine vídeos gozando com meus ficantes, trisal com amigas safadas e momentos íntimos onde me entrego de corpo e alma. 😏 Cada centímetro do meu corpo é pura tentação e minhas fotos peladas são um convite exclusivo para você explorar seus desejos mais secretos – tudo sem censura! Se você tem coragem de se perder nessa paixão sem limites, vem comigo... Estou te esperando para uma experiência única e irresistível.😈💋',
    coverImage: coverImage,
    avatarImage: perfil1,
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
      mediaUrl: feedImage1,
      isVideo: false,
      likes: '89.6K',
      comments: '7.1K'
    },
    {
      mediaUrl: feedImage1,
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
                avatarImage={perfil1}
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
