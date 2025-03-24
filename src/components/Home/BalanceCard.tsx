import React, { useState } from 'react';
import { Eye, EyeOff, TrendingUp, ChevronDown } from 'lucide-react';

interface Account {
  id: number;
  currency: string;
  balance: number;
  symbol: string;
  change: number;
  color: string;
}

interface BalanceCardProps {
  accounts: Account[];
  selectedAccount: Account;
  onAccountChange: (account: Account) => void;
  showBalance: boolean;
  setShowBalance: (show: boolean) => void;
}

export const BalanceCard: React.FC<BalanceCardProps> = ({
  accounts,
  selectedAccount,
  onAccountChange,
  showBalance,
  setShowBalance,
}) => {
  const [showAccountList, setShowAccountList] = useState(false);

  return (
    <div className="card-gradient mb-6 relative">
      <div className="flex justify-between items-start">
        <div>
          <button
            onClick={() => setShowAccountList(!showAccountList)}
            className="flex items-center space-x-2 text-gray-200 mb-2 hover:text-white transition-colors"
          >
            <span>Cuenta {selectedAccount.currency}</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${showAccountList ? 'rotate-180' : ''}`} />
          </button>
          <div className="flex items-baseline space-x-2">
            <h2 className="text-4xl font-bold text-white">
              {showBalance ? `${selectedAccount.balance.toFixed(2)} ${selectedAccount.symbol}` : '••••••'}
            </h2>
            <span className={`flex items-center ${selectedAccount.change >= 0 ? 'text-emerald-300' : 'text-red-400'} text-sm`}>
              <TrendingUp className="w-4 h-4 mr-1" />
              {selectedAccount.change >= 0 ? '+' : ''}{selectedAccount.change}%
            </span>
          </div>
        </div>
        <button
          onClick={() => setShowBalance(!showBalance)}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          {showBalance ? (
            <Eye className="w-5 h-5 text-white" />
          ) : (
            <EyeOff className="w-5 h-5 text-white" />
          )}
        </button>
      </div>

      {showAccountList && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-dark-200 rounded-2xl border border-gray-800 shadow-lg z-10">
          {accounts.map((account) => (
            <button
              key={account.id}
              onClick={() => {
                onAccountChange(account);
                setShowAccountList(false);
              }}
              className={`w-full flex items-center justify-between p-4 hover:bg-dark-100 transition-colors ${
                account.id === selectedAccount.id ? 'bg-dark-100' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-full ${account.color}`} />
                <div className="text-left">
                  <p className="text-white font-medium">Cuenta {account.currency}</p>
                  <p className="text-sm text-gray-400">
                    {showBalance ? `${account.balance.toFixed(2)} ${account.symbol}` : '••••••'}
                  </p>
                </div>
              </div>
              {account.id === selectedAccount.id && (
                <div className="w-2 h-2 rounded-full bg-primary-500" />
              )}
            </button>
          ))}
        </div>
      )}
      
      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="bg-white/10 rounded-2xl p-4">
          <p className="text-gray-300 text-sm mb-1">Ingresos</p>
          <p className="text-white font-semibold">+2,540.00 {selectedAccount.symbol}</p>
        </div>
        <div className="bg-white/10 rounded-2xl p-4">
          <p className="text-gray-300 text-sm mb-1">Gastos</p>
          <p className="text-white font-semibold">-1,250.00 {selectedAccount.symbol}</p>
        </div>
        <div className="bg-white/10 rounded-2xl p-4">
          <p className="text-gray-300 text-sm mb-1">Ahorro</p>
          <p className="text-white font-semibold">+1,290.00 {selectedAccount.symbol}</p>
        </div>
      </div>
    </div>
  );
};