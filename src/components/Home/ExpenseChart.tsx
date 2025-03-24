import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

interface ExpenseChartProps {
  data: Array<{
    name: string;
    amount: number;
  }>;
}

export const ExpenseChart: React.FC<ExpenseChartProps> = ({ data }) => {
  return (
    <div className="card mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-white">
          Evolución de gastos
        </h2>
        <div className="flex space-x-2">
          <button className="px-3 py-1 rounded-full bg-primary-500 text-white text-sm">
            1M
          </button>
          <button className="px-3 py-1 rounded-full bg-dark-100 text-gray-400 text-sm">
            3M
          </button>
          <button className="px-3 py-1 rounded-full bg-dark-100 text-gray-400 text-sm">
            1Y
          </button>
        </div>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9CA3AF' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9CA3AF' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#17181D',
                border: 'none',
                borderRadius: '0.5rem',
                color: '#fff',
              }}
            />
            <Area
              type="monotone"
              dataKey="amount"
              stroke="#0ea5e9"
              fillOpacity={1}
              fill="url(#colorAmount)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};