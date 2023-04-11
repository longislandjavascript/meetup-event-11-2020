import * as React from 'react';
import { HamburgerMenuButton } from './HamburgerMenuButton';
import { navItems } from '../../sample-data';
const { useState } = React;

export type HeaderProps = {
  children?: React.ReactNode;
};

export const Header = (props: HeaderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleIsOpen() {
    setIsOpen((v) => !v);
  }
  return (
    <header className="flex justify-between p-4 text-white bg-gray-800 md:block">
      <nav className="flex items-center justify-between">
        <a href="/">
          <h1 className="text-2xl font-bold text-blue-300">My Site</h1>
        </a>

        <ul className="items-center hidden md:flex">
          {navItems.map((item) => {
            return (
              <li key={item.label} className="px-2">
                <a
                  href={item.url}
                  className="p-2 text-white transition-colors duration-300 rounded-md hover:text-blue-300 hover:bg-gray-900 focus:bg-gray-900 focus:text-blue-300"
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <HamburgerMenuButton
        className="visible md:hidden"
        isExpanded={false}
        onClick={toggleIsOpen}
      />
    </header>
  );
};
