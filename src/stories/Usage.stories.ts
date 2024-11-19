import type { Meta, StoryObj } from "@storybook/react";

import { converNumberSmNotFixed } from "../index";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

// WeCurrency tidak memiliki return element, dia hanya mereturn string bagaimana storeis nya, inputan yang diperlukan hanyalah angka
const meta = {
  title: "Utilities/Usage/ConvertNumber",
  component: converNumberSmNotFixed,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    number: {
      control: {
        type: "text",
      },
      description: "Number to be formatted",
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} as Meta<typeof converNumberSmNotFixed>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultNumberFormat: Story = {
  args: {
    number: "150000",
  },
};