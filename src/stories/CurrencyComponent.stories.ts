import type { Meta, StoryObj } from "@storybook/react";

import { rupiahCurrency } from "../lib";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

// WeCurrency tidak memiliki return element, dia hanya mereturn string bagaimana storeis nya, inputan yang diperlukan hanyalah angka
const meta = {
  title: "lib/RupiahCurrency",
  component: rupiahCurrency,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    space: {
      control: {
        type: "boolean",
      },
      description: "Add space between currency and value",
    },
    value: {
      control: {
        type: "number",
      },
      description: "Value to be formatted",
    },
    type: {
      control: {
        type: "text",
      },
      description: `"default" | "min" | "00" | "terbilang"`,
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} as Meta<typeof rupiahCurrency>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const RupiahCurrencyDefault: Story = {
  args: {
    value: 100000,
    type: "default",
  },
};

export const RupiahCurrencyMin: Story = {
  args: {
    value: 100000,
    type: "min",
  },
};

export const RupiahCurrency00: Story = {
  args: {
    value: 100000,
    type: "00",
  },
};

export const RupiahTerbilang: Story = {
  args: {
    value: 100000,
    type: "terbilang",
  },
};
