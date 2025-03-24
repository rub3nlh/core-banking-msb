import React, { useState } from 'react';
import { Header } from './components/Layout/Header';
import { Navigation } from './components/Layout/Navigation';
import { HomeView } from './views/HomeView';
import { CardsView } from './views/CardsView';
import { SendView } from './views/SendView';
import { PaymentLinkView } from './views/PaymentLinkView';

const chartData = [
  { name: 'Ene', amount: 2400 },
  { name: 'Feb', amount: 1398 },
  { name: 'Mar', amount: 9800 },
  { name: 'Abr', amount: 3908 },
  { name: 'May', amount: 4800 },
  { name: 'Jun', amount: 3800 },
];

const transactions = [
  {
    id: 1,
    description: 'Supermercado El Corte Inglés',
    amount: -156.32,
    date: '2024-03-15',
    category: 'Compras',
  },
  {
    id: 2,
    description: 'Nómina Empresa SA',
    amount: 2500.00,
    date: '2024-03-14',
    category: 'Ingresos',
  },
  {
    id: 3,
    description: 'Netflix',
    amount: -12.99,
    date: '2024-03-13',
    category: 'Entretenimiento',
  },
];

const initialAccounts = [
  {
    id: 1,
    currency: 'EUR',
    balance: 3842.67,
    symbol: '€',
    change: 2.4,
    color: 'bg-gradient-to-br from-primary-500 to-primary-600',
  },
  {
    id: 2,
    currency: 'USD',
    balance: 5234.89,
    symbol: '$',
    change: 1.8,
    color: 'bg-gradient-to-br from-green-500 to-green-600',
  },
  {
    id: 3,
    currency: 'GBP',
    balance: 2156.45,
    symbol: '£',
    change: -0.5,
    color: 'bg-gradient-to-br from-purple-500 to-purple-600',
  },
];

function App() {
  const [showBalance, setShowBalance] = useState(true);
  const [currentView, setCurrentView] = useState('home');
  const [accounts, setAccounts] = useState(initialAccounts);
  const [selectedAccount, setSelectedAccount] = useState(accounts[0]);
  
  const [cards, setCards] = useState([
    {
      id: 1,
      type: 'Visa Débito',
      number: '4532 •••• •••• 9874',
      expiry: '12/25',
      cvv: '123',
      balance: 3842.67,
      frozen: false,
      color: 'bg-gradient-to-br from-primary-500 to-primary-600',
    },
    {
      id: 2,
      type: 'Mastercard Black',
      number: '5412 •••• •••• 7890',
      expiry: '09/26',
      cvv: '456',
      balance: 12500.00,
      frozen: true,
      color: 'bg-gradient-to-br from-secondary-500 to-secondary-600',
    },
  ]);

  const handleActionClick = (action: string) => {
    setCurrentView(action);
  };

  const toggleCardFreeze = (cardId: number) => {
    setCards(cards.map(card => 
      card.id === cardId ? { ...card, frozen: !card.frozen } : card
    ));
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return (
          <HomeView
            accounts={accounts}
            selectedAccount={selectedAccount}
            onAccountChange={setSelectedAccount}
            showBalance={showBalance}
            setShowBalance={setShowBalance}
            onActionClick={handleActionClick}
            chartData={chartData}
            transactions={transactions}
          />
        );
      case 'cards':
        return (
          <CardsView
            cards={cards}
            onToggleFreeze={toggleCardFreeze}
            onCopyToClipboard={copyToClipboard}
          />
        );
      case 'send':
        return <SendView />;
      case 'payment-link':
        return <PaymentLinkView />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-dark-300">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
        {renderCurrentView()}
      </main>
      <Navigation currentView={currentView} setCurrentView={setCurrentView} />
    </div>
  );
}

export default App;