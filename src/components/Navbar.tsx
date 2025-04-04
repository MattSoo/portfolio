import Link from 'next/link'
import { ModeToggle } from './mode-toggle'
import { Logo } from './Logo'

import {
  NavigationMenu,
  // NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  // NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "components/ui/navigation-menu"

function Navbar() {

  return (
    <nav className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 shadow-md">
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Logo />
        </NavigationMenuItem> 
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
