'use client';
import React from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '../ui/navigation-menu';
import { menuItems } from '@/constant';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();
  const isActive = (url: string) => {
    return pathname.split('/')[1] == url.split('/')[1];
  };
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {menuItems.map(({ label, url }) => (
          <NavigationMenuItem key={url}>
            <NavigationMenuLink
              href={url}
              className={cn(
                navigationMenuTriggerStyle(),
                'text-foreground/70 hover:text-foreground bg-transparent text-base hover:bg-transparent',
                {
                  'text-foreground font-semibold': isActive(url),
                },
              )}
            >
              {label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;
