import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import React, { PropsWithChildren } from 'react';

const SiteLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex h-screen flex-col bg-gradient-to-br from-zinc-50 to-zinc-100">
      <Header />
      <main className="container mx-auto w-full max-w-screen-xl flex-1 grow px-4">{children}</main>
      <Footer />
    </div>
  );
};

export default SiteLayout;
