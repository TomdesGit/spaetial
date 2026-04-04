import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Spaetial Landing',
  description: 'Landing page avec vidéo en fond, logo et contact us',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
