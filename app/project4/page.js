import IntPage from './int_page';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
};

export const metadata = {
  title: 'Protein Structure Prediction & Docking | Jia Hao Ng',
  icons: {
    icon: '/images/DP.png',
    apple: '/images/DP.png',
    shortcut: '/images/DP.png',
  },
}

export default function Project4Page() {
  return <IntPage />;
}