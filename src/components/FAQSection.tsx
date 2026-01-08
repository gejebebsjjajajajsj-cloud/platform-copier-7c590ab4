import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'É sigiloso? Vai aparecer na fatura?',
    answer: 'Sim, é sigiloso. Cobrança discreta, sem nomes chamativos. Seus dados ficam criptografados.'
  },
  {
    question: 'Quando tenho acesso depois do pagamento?',
    answer: 'Imediato. Pagamento aprovado = liberação em até 10s e e-mail contendo o login de acesso.'
  },
  {
    question: 'Posso cancelar quando quiser? A assinatura renova?',
    answer: 'Sim. Você pode cancelar a renovação automática pela área do assinante a qualquer momento.'
  },
  {
    question: 'Tem reembolso?',
    answer: 'Sim. Reembolso de 7 dias sem burocracia. Se não curtir, devolvemos 100%.'
  },
  {
    question: 'Como funciona a "chamada de vídeo"?',
    answer: 'Basta mandar uma mensagem no chat do produtor e combinar.'
  },
  {
    question: 'Posso pedir conteúdo personalizado?',
    answer: 'Sim! Solicitações podem ser feitas no chat do produtor, com o conteúdo desejado.'
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-card border border-border rounded-xl p-4"
    >
      <h2 className="text-lg font-bold text-foreground mb-4">Perguntas Frequentes</h2>
      
      <div className="space-y-2">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-border last:border-0">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between py-3 text-left"
            >
              <span className="text-sm font-medium text-foreground pr-4">{item.question}</span>
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                {openIndex === index ? (
                  <Minus className="w-3.5 h-3.5 text-primary" />
                ) : (
                  <Plus className="w-3.5 h-3.5 text-muted-foreground" />
                )}
              </span>
            </button>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <p className="text-sm text-muted-foreground pb-3">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default FAQSection;
