import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    // View a story’s source code to see how it works and paste into your app https://storybook.js.org/addons/@storybook/addon-storysource
    "@storybook/addon-storysource",
    // Storybook addon for embedding your design preview in addon panel https://storybook.js.org/addons/@storybook/addon-designs
    "@storybook/addon-designs",
    // Build responsive components by adjusting Storybook’s viewport size and orientation https://storybook.js.org/addons/@storybook/addon-viewport
    "@storybook/addon-viewport",
    "@storybook/addon-mdx-gfm"
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
export default config;
