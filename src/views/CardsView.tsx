import React, { useState } from 'react';
import { CardItem } from '../components/Cards/CardItem';
import { Plus } from 'lucide-react';

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

interface CardsViewProps {
  cards: Card[];
  onToggleFreeze: (cardId: number) => void;
  onCopyToClipboard: (text: string) => void;
}

export const CardsView: React.FC<CardsViewProps> = ({
  cards,
  onToggleFreeze,
  onCopyToClipboard,
}) => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-white">Mis Tarjetas</h2>
        <button className="button-primary flex items-center">
          <Plus className="w-5 h-5 mr-2" />
          <span>Nueva Tarjeta</span>
        </button>
      </div>

      {cards.map((card) => (
        <CardItem
          key={card.id}
          card={card}
          isExpanded={expandedCard === card.id}
          onToggleExpand={() => setExpandedCard(expandedCard === card.id ? null : card.id)}
          onToggleFreeze={() => onToggleFreeze(card.id)}
          onCopyToClipboard={onCopyToClipboard}
        />
      ))}
    </div>
  );
};