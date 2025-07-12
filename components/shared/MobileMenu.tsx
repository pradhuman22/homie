'use client';
import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import { Button } from '../ui/button';
import { LogInIcon, MenuIcon } from 'lucide-react';
import { menuItems } from '@/constant';
import Link from 'next/link';

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="cursor-pointer md:hidden">
        <Button size={'icon'} variant={'outline'}>
          <MenuIcon />
          <span className="sr-only">Mobile Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="md:hidden">
        <SheetHeader>
          <SheetTitle className="sr-only">Menu Header</SheetTitle>
          <SheetDescription className="sr-only">Menu Description</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-1.5">
          {menuItems.map(({ label, url, icon: Icon }, key) => (
            <Button key={key} asChild variant={'ghost'} className="w-full justify-start text-lg">
              <Link href={url}>
                <Icon />
                {label}
              </Link>
            </Button>
          ))}
        </div>
        <SheetFooter className="border-t">
          <Button asChild>
            <Link href={'/login'}>
              <LogInIcon /> Login
            </Link>
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
