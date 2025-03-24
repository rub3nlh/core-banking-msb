import React from 'react';
import { Send, CreditCard, Wallet, Gift, Link } from 'lucide-react';

interface QuickActionsProps {
  onActionClick: (action: string) => void;
}

export const QuickActions: React.FC<QuickActionsProps> = ({ onActionClick }) => {
  return (
    <div className="grid grid-cols-5 gap-4 mb-8">
      <button
        onClick={() => onActionClick('send')}
        className="flex flex-col items-center justify-center card aspect-square hover:bg-dark-100 transition-colors"
      >
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mb-2">
          <Send className="w-6 h-6 text-white" />
        </div>
        <span className="text-sm font-medium text-white">Enviar</span>
      </button>
      <button
        onClick={() => onActionClick('cards')}
        className="flex flex-col items-center justify-center card aspect-square hover:bg-dark-100 transition-colors"
      >
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary-500 to-secondary-600 flex items-center justify-center mb-2">
          <CreditCard className="w-6 h-6 text-white" />
        </div>
        <span className="text-sm font-medium text-white">Tarjetas</span>
      </button>
      <button
        onClick={() => onActionClick('wallet')}
        className="flex flex-col items-center justify-center card aspect-square hover:bg-dark-100 transition-colors"
      >
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mb-2">
          <Wallet className="w-6 h-6 text-white" />
        </div>
        <span className="text-sm font-medium text-white">Billetera</span>
      </button>
      <button
        onClick={() => onActionClick('payment-link')}
        className="flex flex-col items-center justify-center card aspect-square hover:bg-dark-100 transition-colors"
      >
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center mb-2">
          <Link className="w-6 h-6 text-white" />
        </div>
        <span className="text-sm font-medium text-white text-center">Link de Pago</span>
      </button>
      <button
        onClick={() => onActionClick('rewards')}
        className="flex flex-col items-center justify-center card aspect-square hover:bg-dark-100 transition-colors"
      >
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center mb-2">
          <Gift className="w-6 h-6 text-white" />
        </div>
        <span className="text-sm font-medium text-white">Rewards</span>
      </button>
    </div>
  );
};