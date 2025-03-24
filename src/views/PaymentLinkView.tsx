import React, { useState } from 'react';
import { ArrowLeft, Copy, QrCode } from 'lucide-react';
import QRCode from 'qrcode.react';

interface PaymentLinkFormData {
  amount: string;
  concept: string;
  dueDate: string;
  clientName: string;
  clientEmail: string;
}

export const PaymentLinkView: React.FC = () => {
  const [step, setStep] = useState<'form' | 'preview' | 'success'>('form');
  const [formData, setFormData] = useState<PaymentLinkFormData>({
    amount: '',
    concept: '',
    dueDate: '',
    clientName: '',
    clientEmail: '',
  });
  const [generatedLink, setGeneratedLink] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate a unique payment link (in a real app, this would call an API)
    const uniqueId = Math.random().toString(36).substring(2, 15);
    const link = `https://yourdomain.com/pay/${uniqueId}`;
    setGeneratedLink(link);
    setStep('preview');
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  if (step === 'preview') {
    return (
      <div className="space-y-6">
        <div className="flex items-center mb-6">
          <button
            onClick={() => setStep('form')}
            className="p-2 rounded-full hover:bg-dark-100 transition-colors text-gray-400 mr-4"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className="text-2xl font-semibold text-white">Link de Pago Generado</h2>
        </div>

        <div className="card space-y-6">
          <div className="text-center">
            <div className="mb-6">
              <QRCode
                value={generatedLink}
                size={200}
                level="H"
                includeMargin
                className="mx-auto bg-white p-4 rounded-2xl"
              />
            </div>
            <p className="text-gray-400 mb-2">Escanea el código QR para pagar</p>
          </div>

          <div className="space-y-4">
            <div className="bg-dark-100 p-4 rounded-2xl">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Link de pago:</span>
                <button
                  onClick={() => copyToClipboard(generatedLink)}
                  className="p-2 hover:bg-dark-200 rounded-lg transition-colors"
                >
                  <Copy className="w-4 h-4 text-primary-500" />
                </button>
              </div>
              <p className="text-sm text-white break-all mt-1">{generatedLink}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-dark-100 p-4 rounded-2xl">
                <p className="text-gray-400 mb-1">Monto</p>
                <p className="text-xl font-semibold text-white">{formData.amount} €</p>
              </div>
              <div className="bg-dark-100 p-4 rounded-2xl">
                <p className="text-gray-400 mb-1">Vencimiento</p>
                <p className="text-xl font-semibold text-white">{formData.dueDate}</p>
              </div>
            </div>

            <div className="bg-dark-100 p-4 rounded-2xl">
              <p className="text-gray-400 mb-1">Concepto</p>
              <p className="text-white">{formData.concept}</p>
            </div>

            <div className="bg-dark-100 p-4 rounded-2xl">
              <p className="text-gray-400 mb-1">Cliente</p>
              <p className="text-white">{formData.clientName}</p>
              <p className="text-gray-400 text-sm">{formData.clientEmail}</p>
            </div>
          </div>

          <div className="flex space-x-4 pt-4">
            <button
              onClick={() => setStep('form')}
              className="button-secondary flex-1"
            >
              Crear nuevo
            </button>
            <button
              onClick={() => copyToClipboard(generatedLink)}
              className="button-primary flex-1"
            >
              Copiar link
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-white mb-6">Generar Link de Pago</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="card space-y-6">
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-300 mb-2">
              Monto a cobrar
            </label>
            <div className="relative">
              <input
                type="number"
                id="amount"
                step="0.01"
                required
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                className="input w-full"
                placeholder="0.00"
              />
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                €
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="concept" className="block text-sm font-medium text-gray-300 mb-2">
              Concepto
            </label>
            <input
              type="text"
              id="concept"
              required
              value={formData.concept}
              onChange={(e) => setFormData({ ...formData, concept: e.target.value })}
              className="input w-full"
              placeholder="Ej: Factura #123"
            />
          </div>

          <div>
            <label htmlFor="dueDate" className="block text-sm font-medium text-gray-300 mb-2">
              Fecha de vencimiento
            </label>
            <input
              type="date"
              id="dueDate"
              required
              value={formData.dueDate}
              onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
              className="input w-full"
            />
          </div>
        </div>

        <div className="card space-y-6">
          <h3 className="text-lg font-medium text-white">Información del cliente</h3>
          
          <div>
            <label htmlFor="clientName" className="block text-sm font-medium text-gray-300 mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="clientName"
              required
              value={formData.clientName}
              onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
              className="input w-full"
              placeholder="Nombre del cliente"
            />
          </div>

          <div>
            <label htmlFor="clientEmail" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="clientEmail"
              required
              value={formData.clientEmail}
              onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
              className="input w-full"
              placeholder="email@ejemplo.com"
            />
          </div>
        </div>

        <button type="submit" className="button-primary w-full">
          Generar link de pago
        </button>
      </form>
    </div>
  );
};