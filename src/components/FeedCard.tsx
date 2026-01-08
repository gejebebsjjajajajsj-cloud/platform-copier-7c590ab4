import { motion } from 'framer-motion';
import { Lock, Heart, MessageCircle, Bookmark } from 'lucide-react';
import VerifiedBadge from './VerifiedBadge';

interface FeedCardProps {
  avatarImage: string;
  name: string;
  username: string;
  mediaUrl: string;
  isVideo?: boolean;
  likes: string;
  comments: string;
  index?: number;
}

const FeedCard = ({ 
  avatarImage, 
  name, 
  username, 
  mediaUrl, 
  isVideo = false, 
  likes, 
  comments,
  index = 0 
}: FeedCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-card border border-border rounded-xl overflow-hidden shadow-sm"
    >
      {/* Header */}
      <header className="flex items-center gap-3 p-3">
        <img 
          src={avatarImage} 
          alt={`Avatar de ${name}`} 
          className="w-8 h-8 rounded-full object-cover"
        />
        <div className="flex flex-col leading-tight">
          <span className="font-bold text-foreground text-sm flex items-center gap-1">
            {name}
            <VerifiedBadge size={14} />
          </span>
          <span className="text-muted-foreground text-xs">@{username}</span>
        </div>
      </header>

      {/* Media */}
      <div className="relative aspect-[9/16] bg-muted">
        {isVideo ? (
          <video
            src={mediaUrl}
            className="w-full h-full object-cover"
            muted
            playsInline
            autoPlay
            loop
          />
        ) : (
          <img 
            src={mediaUrl} 
            alt="Conteúdo" 
            className="w-full h-full object-cover"
          />
        )}
        
        {/* Lock Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
        
        {/* Lock Bubble */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
          <Lock className="w-6 h-6 text-muted-foreground" />
        </div>

        {/* Stats Pill */}
        <div className="absolute bottom-3 left-3 flex items-center gap-4 bg-gray-900/70 backdrop-blur-sm text-primary-foreground px-3 py-2 rounded-full text-xs font-bold">
          <span className="flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5" />
            {likes}
          </span>
          <span className="flex items-center gap-1.5">
            <MessageCircle className="w-3.5 h-3.5" />
            {comments}
          </span>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex items-center justify-around py-3 text-muted-foreground">
        <Heart className="w-5 h-5 hover:text-primary cursor-pointer transition-colors" />
        <MessageCircle className="w-5 h-5 hover:text-primary cursor-pointer transition-colors" />
        <Bookmark className="w-5 h-5 hover:text-primary cursor-pointer transition-colors" />
      </footer>
    </motion.article>
  );
};

export default FeedCard;
