import { motion } from 'framer-motion';

const FooterCTA = () => {
  return (
    <div className="py-6">
      <motion.button
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="relative w-full gradient-primary-vertical text-primary-foreground rounded-xl p-4 flex items-center justify-between shadow-primary hover:shadow-primary-hover transition-shadow overflow-hidden animate-pulse-glow"
      >
        {/* Shimmer Effect */}
        <div className="absolute top-0 -left-[60%] w-[40%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] animate-shimmer pointer-events-none" />
        
        <span className="text-base font-bold z-10">Veja tudo por apenas</span>
        <span className="text-xl font-extrabold z-10 flex items-center gap-1">
          R$ 9,90 <span className="font-black">→</span>
        </span>
      </motion.button>

      {/* Legal Links */}
      <div className="flex items-center justify-center gap-2 mt-4 text-xs text-muted-foreground">
        <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
        <span>•</span>
        <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
      </div>
    </div>
  );
};

export default FooterCTA;
