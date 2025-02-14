import '@mantine/core/styles.css';

import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { HeaderMegaMenu } from '@/components/Header/HeaderMegaMenu';
import { theme } from '../theme';

export const metadata = {
  title: 'Fin Seacrh',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <div>
            <HeaderMegaMenu />
            <main>{children}</main>
          </div>
        </MantineProvider>
      </body>
    </html>
  );
}
