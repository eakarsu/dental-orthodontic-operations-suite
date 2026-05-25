import './globals.css';
import { AuthProvider } from '@/components/providers/AuthProvider';

export const metadata = {
  title: 'Dental Orthodontic Operations Suite',
  description: 'Merged dental orthodontic operations suite with one login, one dashboard, and feature-first navigation.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
