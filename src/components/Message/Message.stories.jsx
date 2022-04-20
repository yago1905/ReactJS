import React from 'react';

import { Message } from './Message';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Message',
  component: Message,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Message {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Message',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Message',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Message',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Message',
};
