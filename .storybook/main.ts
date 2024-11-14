import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-storysource", // View a story’s source code to see how it works and paste into your app https://storybook.js.org/addons/@storybook/addon-storysource
    "@storybook/addon-designs", // Storybook addon for embedding your design preview in addon panel https://storybook.js.org/addons/@storybook/addon-designs
    "@storybook/addon-viewport", // Build responsive components by adjusting Storybook’s viewport size and orientation https://storybook.js.org/addons/@storybook/addon-viewport
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
