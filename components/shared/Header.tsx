import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';
import { Button } from '../ui/button';
import Link from 'next/link';
import { LogInIcon } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-background fixed top-0 z-50 w-full border-b">
      <nav className="container mx-auto flex h-16 w-full max-w-screen-xl items-center justify-between px-4">
        {/* left section */}
        <div className="flex items-center gap-1.5">
          <MobileMenu />
          <Link href={'/'}>
            <Logo />
          </Link>
        </div>
        {/* middle section */}
        <Navigation />
        {/* right section */}
        <div>
          {' '}
          <Button variant={'outline'} className="cursor-pointer text-base" asChild>
            <Link href={'/login'}>
              <LogInIcon />
              Login
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
