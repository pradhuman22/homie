import Footer from '@/components/ui/shared/Footer';
import Header from '@/components/ui/shared/Header';
import React, { PropsWithChildren } from 'react';

const SiteLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 grow">{children}</main>
      <Footer />
    </div>
  );
};

export default SiteLayout;
