import IntPage from './int_page';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
};

export const metadata = {
  title: 'Protein Structure Prediction & Docking | Jia Hao Ng',
  description: 'Bioinformatics project using Modeller, GROMACS and AutoDock',
};

export default function Project4Page() {
  return <IntPage />;
}