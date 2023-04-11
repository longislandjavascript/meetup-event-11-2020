import React from 'react';
import { HamburgerMenuButton } from './HamburgerMenuButton';

export type HeaderProps = {
  children?: React.ReactNode;
};

export const Header = (props: HeaderProps) => {
  return (
    <header className="bg-gray-800 p-4 text-white">
      {props.children || 'Header'}
      <HamburgerMenuButton isExpanded={false} onClick={() => {}} />
    </header>
  );
};
