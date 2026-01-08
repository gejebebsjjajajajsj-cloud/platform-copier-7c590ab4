import { motion } from 'framer-motion';

const PromoBanner = () => {
  const getExpirationDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + 3);
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
  };

  return (
    <motion.div 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-primary py-2"
    >
      <div className="container mx-auto px-4 flex items-center justify-center">
        <span className="bg-primary-foreground/15 px-4 py-1.5 rounded-full text-sm font-semibold text-primary-foreground tracking-wide">
          🔥 PROMOÇÃO VÁLIDA ATÉ {getExpirationDate()}
        </span>
      </div>
    </motion.div>
  );
};

export default PromoBanner;
