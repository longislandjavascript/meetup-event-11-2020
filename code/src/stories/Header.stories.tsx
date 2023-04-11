import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import type { Story, Meta } from '@storybook/react/types-6-0';

import { Header, HeaderProps } from '../components/Header/HeaderDone';

export default {
  title: 'Example/Header',
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
