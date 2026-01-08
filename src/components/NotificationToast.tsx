import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface Notification {
  id: number;
  name: string;
  plan: string;
  timeAgo: string;
}

const names = [
  "Alessandro Silva", "Carlos Eduardo", "João Pedro", "Rafael Santos",
  "Bruno Costa", "Felipe Oliveira", "Gustavo Lima", "Lucas Almeida",
  "Thiago Ferreira", "Diego Rocha", "Marcelo Souza", "André Pereira",
  "Roberto Martins", "Fernando Gomes", "Paulo Henrique", "Mateus Silva"
];

const plans = ["3 Meses", "1 Ano"];

const times = [
  "há 2 minutos", "há 5 minutos", "há 8 minutos", "há 1 minuto",
  "há 3 minutos", "há 7 minutos", "agora mesmo"
];

const NotificationToast = () => {
  const [notification, setNotification] = useState<Notification | null>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (isMuted) return;

    const showNotification = () => {
      const newNotification: Notification = {
        id: Date.now(),
        name: names[Math.floor(Math.random() * names.length)],
        plan: plans[Math.floor(Math.random() * plans.length)],
        timeAgo: times[Math.floor(Math.random() * times.length)]
      };
      setNotification(newNotification);

      // Hide after 3.5s
      setTimeout(() => {
        setNotification(null);
      }, 3500);
    };

    // First notification after 5-8s
    const firstTimeout = setTimeout(showNotification, 5000 + Math.random() * 3000);

    // Subsequent notifications every 18-28s
    const interval = setInterval(() => {
      if (!notification) {
        showNotification();
      }
    }, 18000 + Math.random() * 10000);

    return () => {
      clearTimeout(firstTimeout);
      clearInterval(interval);
    };
  }, [isMuted, notification]);

  const handleClose = () => {
    setIsMuted(true);
    setNotification(null);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 pointer-events-none">
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ x: 340, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 340, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-orange-50 border border-orange-200 rounded-xl p-3 shadow-lg min-w-[260px] max-w-[320px] pointer-events-auto cursor-pointer relative"
            onClick={handleClose}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleClose();
              }}
              className="absolute top-2 right-2 text-secondary-foreground hover:text-primary transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 pr-4">
              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-800">
                  <strong>{notification.name}</strong> assinou{' '}
                  <span className="inline-block px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground text-xs font-bold">
                    {notification.plan}
                  </span>
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">{notification.timeAgo}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NotificationToast;
