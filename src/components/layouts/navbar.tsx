'use client'

import * as React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/cn'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Button } from '../ui/button'

export const menus = [
  {
    link: '/',
    label: 'Home',
  },
  {
    link: '/blogs',
    label: 'Blogs',
  },
]

export const Navbar = () => {
  return (
    <>
      <header className="top-0 bg-background/20 backdrop-blur-lg sticky p-3">
        <div className="container mx-auto px-3 flex items-center justify-between w-full">
          <Button variant={'ghost'} asChild>
            <Link href={'/'}>Nekonews</Link>
          </Button>

          <Navigations />
        </div>
      </header>
    </>
  )
}

export function Navigations() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menus.map((menu) => (
          <NavigationMenuItem key={menu.link}>
            <Link href={menu.link} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {menu.label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
