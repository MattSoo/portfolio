'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import { ModeToggle } from './mode-toggle'
import userData from '@constants/data'
import { cn } from "components/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "components/ui/navigation-menu"

function Navbar() {
  const pathname = usePathname()

  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 shadow-md">
    <NavigationMenu>
      <NavigationMenuList> 
        {['About', 'Projects', 'Experience', 'Contact'].map((item) => {
          const href = `/${item.toLowerCase()}`
          return (
            <NavigationMenuItem key={item}>
              <Link href={href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
    <ModeToggle />
    </nav>
  )
}

export { Navbar };
