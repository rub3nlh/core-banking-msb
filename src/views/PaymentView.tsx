import React, { useState } from 'react';
import { CreditCard, Wallet, Ban as Bank, QrCode } from 'lucide-react';

export const PaymentView: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<string>('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment processing
    console.log('Processing payment...');
  };

  return (
    <div className="min-h-screen bg-dark-300">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="card mb-6">
          <h1 className="text-2xl font-bold text-white mb-2">Pago Pendiente</h1>
          <div className="flex justify-between items-center py-4 border-b border-gray-800">
            <span className="text-gray-400">Monto a pagar</span>
            <span className="text-2xl font-bold text-white">150.00 €</span>
          </div>
          <div className="py-4">
            <p className="text-gray-400">Concepto</p>
            <p className="text-white">Factura #123 - Servicios profesionales</p>
          </div>
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold text-white mb-6">Método de pago</h2>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button
              className={`p-4 rounded-2xl border ${
                selectedMethod === 'card'
                  ? 'border-primary-500 bg-primary-500/10'
                  : 'border-gray-800 hover:border-gray-700'
              } transition-colors`}
              onClick={() => setSelectedMethod('card')}
            >
              <CreditCard className={`w-6 h-6 mb-2 ${
                selectedMethod === 'card' ? 'text-primary-500' : 'text-gray-400'
              }`} />
              <span className="text-white">Tarjeta</span>
            </button>
            
            <button
              className={`p-4 rounded-2xl border ${
                selectedMethod === 'bank'
                  ? 'border-primary-500 bg-primary-500/10'
                  : 'border-gray-800 hover:border-gray-700'
              } transition-colors`}
              onClick={() => setSelectedMethod('bank')}
            >
              <Bank className={`w-6 h-6 mb-2 ${
                selectedMethod === 'bank' ? 'text-primary-500' : 'text-gray-400'
              }`} />
              <span className="text-white">Transferencia</span>
            </button>
          </div>

          {selectedMethod === 'card' && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Número de tarjeta
                </label>
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="input w-full"
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Fecha de expiración
                  </label>
                  <input
                    type="text"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    className="input w-full"
                    placeholder="MM/YY"
                    maxLength={5}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    CVV
                  </label>
                  <input
                    type="text"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    className="input w-full"
                    placeholder="123"
                    maxLength={4}
                  />
                </div>
              </div>

              <button type="submit" className="button-primary w-full">
                Pagar 150.00 €
              </button>
            </form>
          )}

          {selectedMethod === 'bank' && (
            <div className="space-y-6">
              <div className="bg-dark-100 p-4 rounded-2xl">
                <p className="text-gray-400 mb-2">Datos bancarios para transferencia</p>
                <p className="text-white mb-1">IBAN: ES91 2100 0418 4502 0005 1332</p>
                <p className="text-white mb-1">BIC/SWIFT: CAIXESBBXXX</p>
                <p className="text-white">Beneficiario: Empresa S.L.</p>
              </div>
              <p className="text-sm text-gray-400">
                Una vez realizada la transferencia, el pago se procesará automáticamente
                en nuestro sistema.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};