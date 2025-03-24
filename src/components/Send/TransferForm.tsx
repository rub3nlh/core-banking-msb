import React, { useState } from 'react';
import { ArrowRight, AlertCircle, ArrowLeft } from 'lucide-react';

interface Beneficiary {
  id: number;
  name: string;
  accountNumber: string;
  isFavorite: boolean;
  lastTransaction?: string;
}

interface TransferFormProps {
  beneficiary: Beneficiary;
  onBack: () => void;
  onSubmit: (amount: number, concept: string) => void;
}

export const TransferForm: React.FC<TransferFormProps> = ({
  beneficiary,
  onBack,
  onSubmit,
}) => {
  const [amount, setAmount] = useState('');
  const [concept, setConcept] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(Number(amount), concept);
  };

  return (
    <div className="card">
      <div className="flex items-center mb-6">
        <button
          onClick={onBack}
          className="p-2 rounded-full hover:bg-dark-100 transition-colors text-gray-400 mr-4"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div>
          <h2 className="text-xl font-semibold text-white mb-1">
            Transferir a {beneficiary.name}
          </h2>
          <p className="text-sm text-gray-400">{beneficiary.accountNumber}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Cantidad
          </label>
          <div className="relative">
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="input w-full"
              placeholder="0.00"
              required
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              €
            </span>
          </div>
        </div>

        <div>
          <label
            htmlFor="concept"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Concepto
          </label>
          <input
            type="text"
            id="concept"
            value={concept}
            onChange={(e) => setConcept(e.target.value)}
            className="input w-full"
            placeholder="Añade un concepto"
          />
        </div>

        <div className="bg-dark-100 p-4 rounded-2xl flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-primary-400 mt-0.5" />
          <p className="text-sm text-gray-300">
            Las transferencias se procesan instantáneamente durante días laborables
            de 8:00 a 17:30.
          </p>
        </div>

        <div className="flex space-x-4 pt-4">
          <button
            type="button"
            onClick={onBack}
            className="button-secondary flex-1"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="button-primary flex-1 flex items-center justify-center"
          >
            <span>Continuar</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </form>
    </div>
  );
};