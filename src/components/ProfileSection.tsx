import { useState } from 'react';
import { motion } from 'framer-motion';
import { Image, Video, Heart } from 'lucide-react';
import VerifiedBadge from './VerifiedBadge';

interface ProfileSectionProps {
  name: string;
  username: string;
  bio: string;
  coverImage: string;
  avatarImage: string;
  stats: {
    photos: number;
    videos: number;
    likes: string;
  };
}

const ProfileSection = ({ 
  name, 
  username, 
  bio, 
  coverImage, 
  avatarImage, 
  stats 
}: ProfileSectionProps) => {
  const [showFullBio, setShowFullBio] = useState(false);

  const truncatedBio = bio.length > 150 ? bio.slice(0, 150) + '...' : bio;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card rounded-xl overflow-hidden shadow-sm border border-border"
    >
      {/* Cover Image */}
      <div className="relative h-44 sm:h-52">
        <img 
          src={coverImage} 
          alt="Capa do perfil" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        {/* Stats on Cover */}
        <div className="absolute bottom-3 right-3 flex items-center gap-3 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-primary-foreground">
          <span className="flex items-center gap-1">
            <Image className="w-3.5 h-3.5" />
            {stats.photos}
          </span>
          <span className="flex items-center gap-1">
            <Video className="w-3.5 h-3.5" />
            {stats.videos}
          </span>
          <span className="flex items-center gap-1">
            <Heart className="w-3.5 h-3.5" />
            {stats.likes}
          </span>
        </div>
      </div>

      {/* Profile Info */}
      <div className="relative px-4 pb-4">
        {/* Avatar */}
        <div className="absolute -top-12 left-4">
          <div className="w-24 h-24 rounded-full border-4 border-card overflow-hidden shadow-lg">
            <img 
              src={avatarImage} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name & Username */}
        <div className="pt-14">
          <h1 className="text-xl font-bold text-foreground flex items-center gap-2">
            {name}
            <VerifiedBadge size={20} />
          </h1>
          <p className="text-muted-foreground text-sm">@{username}</p>
        </div>

        {/* Bio */}
        <div className="mt-4">
          <p className="text-sm text-foreground leading-relaxed">
            {showFullBio ? bio : truncatedBio}
          </p>
          {bio.length > 150 && (
            <button 
              onClick={() => setShowFullBio(!showFullBio)}
              className="text-primary text-sm font-semibold mt-2 hover:underline"
            >
              {showFullBio ? 'Mostrar menos' : 'Mostrar mais'}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileSection;
