import { ComponentStory, ComponentMeta } from '@storybook/react';
import ButtonAmazing, { IButtonAmazing } from './ButtonAmazing';
import { mockButtonAmazingProps } from './ButtonAmazing.mocks';

export default {
  title: 'buttons/ButtonAmazing',
  component: ButtonAmazing,
  argTypes: {}
} as ComponentMeta<typeof ButtonAmazing>;

const Template: ComponentStory<typeof ButtonAmazing> = args => (
  <ButtonAmazing {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  ...mockButtonAmazingProps.base,
  primary: true
} as IButtonAmazing;

export const Secondary = Template.bind({});
Secondary.args = {
  ...mockButtonAmazingProps.base
} as IButtonAmazing;
