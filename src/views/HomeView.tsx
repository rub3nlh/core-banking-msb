import React from 'react';
import { BalanceCard } from '../components/Home/BalanceCard';
import { QuickActions } from '../components/Home/QuickActions';
import { ExpenseChart } from '../components/Home/ExpenseChart';
import { TransactionList } from '../components/Home/TransactionList';

interface Account {
  id: number;
  currency: string;
  balance: number;
  symbol: string;
  change: number;
  color: string;
}

interface HomeViewProps {
  accounts: Account[];
  selectedAccount: Account;
  onAccountChange: (account: Account) => void;
  showBalance: boolean;
  setShowBalance: (show: boolean) => void;
  onActionClick: (action: string) => void;
  chartData: Array<{ name: string; amount: number }>;
  transactions: Array<{
    id: number;
    description: string;
    amount: number;
    date: string;
    category: string;
  }>;
}

export const HomeView: React.FC<HomeViewProps> = ({
  accounts,
  selectedAccount,
  onAccountChange,
  showBalance,
  setShowBalance,
  onActionClick,
  chartData,
  transactions,
}) => {
  return (
    <>
      <BalanceCard
        accounts={accounts}
        selectedAccount={selectedAccount}
        onAccountChange={onAccountChange}
        showBalance={showBalance}
        setShowBalance={setShowBalance}
      />
      <QuickActions onActionClick={onActionClick} />
      <ExpenseChart data={chartData} />
      <TransactionList transactions={transactions} />
    </>
  );
};