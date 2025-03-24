import React, { useState } from 'react';
import { Plus, Search } from 'lucide-react';
import { BeneficiaryList } from '../components/Send/BeneficiaryList';
import { TransferForm } from '../components/Send/TransferForm';

interface Beneficiary {
  id: number;
  name: string;
  accountNumber: string;
  isFavorite: boolean;
  lastTransaction?: string;
}

const initialBeneficiaries: Beneficiary[] = [
  {
    id: 1,
    name: 'Ana García',
    accountNumber: 'ES91 2100 0418 4502 0005 1332',
    isFavorite: true,
    lastTransaction: 'Hace 2 días',
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    accountNumber: 'ES79 2100 0813 6101 2345 6789',
    isFavorite: false,
    lastTransaction: 'Hace 1 semana',
  },
  {
    id: 3,
    name: 'María Sánchez',
    accountNumber: 'ES65 2100 1234 5678 9012 3456',
    isFavorite: true,
  },
];

export const SendView: React.FC = () => {
  const [beneficiaries, setBeneficiaries] = useState(initialBeneficiaries);
  const [selectedBeneficiary, setSelectedBeneficiary] = useState<Beneficiary | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleToggleFavorite = (id: number) => {
    setBeneficiaries(
      beneficiaries.map((b) =>
        b.id === id ? { ...b, isFavorite: !b.isFavorite } : b
      )
    );
  };

  const handleTransferSubmit = (amount: number, concept: string) => {
    console.log('Transfer:', { beneficiary: selectedBeneficiary, amount, concept });
    // Aquí iría la lógica para procesar la transferencia
    setSelectedBeneficiary(null);
  };

  const filteredBeneficiaries = beneficiaries.filter((b) =>
    b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.accountNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (selectedBeneficiary) {
    return (
      <TransferForm
        beneficiary={selectedBeneficiary}
        onBack={() => setSelectedBeneficiary(null)}
        onSubmit={handleTransferSubmit}
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-white">Enviar dinero</h2>
        <button className="button-primary flex items-center">
          <Plus className="w-5 h-5 mr-2" />
          <span>Nuevo beneficiario</span>
        </button>
      </div>

      <div className="relative mb-6">
        <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
        <input
          type="text"
          placeholder="Buscar beneficiario"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input w-full pl-10"
        />
      </div>

      {filteredBeneficiaries.length > 0 ? (
        <BeneficiaryList
          beneficiaries={filteredBeneficiaries}
          onSelect={setSelectedBeneficiary}
          onToggleFavorite={handleToggleFavorite}
        />
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-400">No se encontraron beneficiarios</p>
        </div>
      )}
    </div>
  );
};