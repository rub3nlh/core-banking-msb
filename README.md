# Modern Banking Platform

A modern, feature-rich banking platform built with React and TypeScript, featuring a beautiful dark-themed UI, multi-currency support, and comprehensive financial management tools.

![Modern Banking Platform](https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200)

## Features

- 🏦 Multi-currency account management
- 💳 Virtual card management with freeze/unfreeze capabilities
- 💸 Money transfer system
- 🔗 Payment link generation with QR codes
- 📊 Expense tracking and analytics
- 🎨 Beautiful dark-themed UI with gradients
- 📱 Responsive design for all devices
- 🔒 Secure card information handling

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Recharts
- Lucide React Icons
- QRCode.react

## Prerequisites

Before you begin, ensure you have installed:

- Node.js (v18 or higher)
- npm (v9 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/modern-banking-platform.git
cd modern-banking-platform
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── Cards/           # Card management components
│   ├── Home/            # Home view components
│   ├── Layout/          # Layout components
│   └── Send/            # Money transfer components
├── views/               # Main view components
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## Key Components

### Multi-currency Accounts
- Support for multiple currency accounts (EUR, USD, GBP, etc.)
- Real-time balance display
- Account-specific statistics
- Easy account switching

### Virtual Cards
- Card management interface
- Freeze/unfreeze functionality
- Secure card information display
- Copy card details feature

### Payment Links
- Generate payment links for clients
- QR code generation
- Due date setting
- Client information management

### Money Transfer
- Send money to beneficiaries
- Favorite recipients management
- Transaction history
- Multiple payment methods

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Styling

The project uses Tailwind CSS with a custom configuration:

- Custom color scheme
- Dark theme optimization
- Custom component classes
- Responsive design utilities

### Adding New Features

1. Create new components in the appropriate directory
2. Update the main App.tsx file to include new routes/features
3. Add any new dependencies to package.json
4. Update types as needed
5. Test thoroughly before committing

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.