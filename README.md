# Secrets Manager

A dummy secrets manager website built with React + shadcn/ui and deployed on GitHub Pages.

## Features

- **Dashboard**: Overview with statistics and quick actions
- **Secrets Management**: View, add, and delete secrets with masked values
- **Mask/Unmask**: Toggle visibility of secret values for security
- **Dark Mode**: Switch between light and dark themes
- **Responsive Design**: Mobile-friendly interface that works on all devices
- **Local Storage**: Secrets are stored locally in your browser (session-based)

## Technologies Used

- **React 19** with TypeScript
- **Vite** for build tooling
- **shadcn/ui** for UI components
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Lucide React** for icons

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/teamtapal/superquery.git
cd superquery
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173/superquery/](http://localhost:5173/superquery/) in your browser.

## Building for Production

To build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

This project is configured to automatically deploy to GitHub Pages via GitHub Actions. The deployment workflow runs on pushes to the `main` branch.

## Security Notice

⚠️ **This is a demo application for development purposes only.** 

- Secrets are stored locally in browser memory
- Data is cleared when you refresh or close the browser
- Do not use this for real secrets in production environments

## License

This project is open source and available under the [MIT License](LICENSE).
