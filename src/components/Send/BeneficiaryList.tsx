import React from 'react';
import { User, Star, MoreVertical } from 'lucide-react';

interface Beneficiary {
  id: number;
  name: string;
  accountNumber: string;
  isFavorite: boolean;
  lastTransaction?: string;
}

interface BeneficiaryListProps {
  beneficiaries: Beneficiary[];
  onSelect: (beneficiary: Beneficiary) => void;
  onToggleFavorite: (id: number) => void;
}

export const BeneficiaryList: React.FC<BeneficiaryListProps> = ({
  beneficiaries,
  onSelect,
  onToggleFavorite,
}) => {
  return (
    <div className="space-y-4">
      {beneficiaries.map((beneficiary) => (
        <div
          key={beneficiary.id}
          className="card hover:bg-dark-100 transition-all cursor-pointer"
          onClick={() => onSelect(beneficiary)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-medium text-white">{beneficiary.name}</h3>
                <p className="text-sm text-gray-400">{beneficiary.accountNumber}</p>
                {beneficiary.lastTransaction && (
                  <p className="text-xs text-gray-500">
                    Última transferencia: {beneficiary.lastTransaction}
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleFavorite(beneficiary.id);
                }}
                className={`p-2 rounded-full hover:bg-dark-100 transition-colors ${
                  beneficiary.isFavorite ? 'text-amber-400' : 'text-gray-400'
                }`}
              >
                <Star className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-full hover:bg-dark-100 transition-colors text-gray-400"
              >
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};