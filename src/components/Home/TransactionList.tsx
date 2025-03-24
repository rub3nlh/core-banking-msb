import React from 'react';
import { Search, ChevronRight, ShoppingBag, Briefcase, Film } from 'lucide-react';

interface Transaction {
  id: number;
  description: string;
  amount: number;
  date: string;
  category: string;
}

interface TransactionListProps {
  transactions: Transaction[];
}

const getCategoryIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case 'compras':
      return <ShoppingBag className="w-5 h-5 text-primary-500" />;
    case 'ingresos':
      return <Briefcase className="w-5 h-5 text-emerald-500" />;
    case 'entretenimiento':
      return <Film className="w-5 h-5 text-secondary-500" />;
    default:
      return <ShoppingBag className="w-5 h-5 text-primary-500" />;
  }
};

export const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <div className="card">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-white">
          Últimas transacciones
        </h2>
        <div className="relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar"
            className="input pl-10"
          />
        </div>
      </div>
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-4 hover:bg-dark-100 rounded-2xl transition-colors cursor-pointer group"
          >
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-2xl bg-dark-100 flex items-center justify-center">
                {getCategoryIcon(transaction.category)}
              </div>
              <div>
                <p className="font-medium text-white">
                  {transaction.description}
                </p>
                <p className="text-sm text-gray-400">{transaction.date}</p>
              </div>
            </div>
            <div className="flex items-center">
              <span
                className={`font-medium ${
                  transaction.amount >= 0
                    ? 'text-emerald-400'
                    : 'text-red-400'
                }`}
              >
                {transaction.amount.toFixed(2)} €
              </span>
              <ChevronRight className="w-5 h-5 text-gray-400 ml-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};