import React from 'react';
import { Lock, Unlock, Copy, ChevronUp, ChevronDown } from 'lucide-react';

interface Card {
  id: number;
  type: string;
  number: string;
  expiry: string;
  cvv: string;
  balance: number;
  frozen: boolean;
  color: string;
}

interface CardItemProps {
  card: Card;
  isExpanded: boolean;
  onToggleExpand: () => void;
  onToggleFreeze: () => void;
  onCopyToClipboard: (text: string) => void;
}

export const CardItem: React.FC<CardItemProps> = ({
  card,
  isExpanded,
  onToggleExpand,
  onToggleFreeze,
  onCopyToClipboard,
}) => {
  return (
    <div className="overflow-hidden rounded-3xl">
      <div className={`${card.color} p-6 relative`}>
        <div className="flex justify-between items-start">
          <div>
            <p className="text-white/80 text-sm mb-4">{card.type}</p>
            <p className="text-white text-xl font-medium mb-4">{card.number}</p>
            <p className="text-white/80 text-sm">Válida hasta: {card.expiry}</p>
          </div>
          <button
            onClick={onToggleFreeze}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            {card.frozen ? (
              <Lock className="w-5 h-5 text-white" />
            ) : (
              <Unlock className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </div>

      <div className="bg-dark-200 p-4">
        <button
          onClick={onToggleExpand}
          className="w-full flex items-center justify-between text-gray-400 hover:text-white transition-colors"
        >
          <span>Detalles de la tarjeta</span>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </button>

        {isExpanded && (
          <div className="mt-4 space-y-4 border-t border-gray-800 pt-4">
            <div>
              <p className="text-sm text-gray-400 mb-1">Número de tarjeta</p>
              <div className="flex items-center">
                <p className="font-medium text-white">{card.number}</p>
                <button
                  onClick={() => onCopyToClipboard(card.number.replace(/\s/g, ''))}
                  className="ml-2 p-1 hover:bg-dark-100 rounded-lg transition-colors"
                >
                  <Copy className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-400 mb-1">CVV</p>
              <div className="flex items-center">
                <p className="font-medium text-white">•••</p>
                <button
                  onClick={() => onCopyToClipboard(card.cvv)}
                  className="ml-2 p-1 hover:bg-dark-100 rounded-lg transition-colors"
                >
                  <Copy className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-400 mb-1">Estado</p>
              <p className={`font-medium ${card.frozen ? 'text-red-400' : 'text-emerald-400'}`}>
                {card.frozen ? 'Bloqueada' : 'Activa'}
              </p>
            </div>

            <div className="pt-4 flex space-x-4">
              <button className="button-secondary flex-1">
                Configurar límites
              </button>
              <button className="button-secondary flex-1">
                Ver movimientos
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};