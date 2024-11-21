import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { DynamicTables } from "../index";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI Components/Data Entry/DynamicTables",
  component: DynamicTables,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    dataSource: {
      control: {
        type: "object",
      },
      description: "Data Source",
    },
    className: {
      control: {
        type: "text",
      },
      description: "Class Name",
    },
    exportFileName: {
      control: {
        type: "text",
      },
      description: "Export File Name",
    },
    loading: {
      control: {
        type: "boolean",
      },
      description: "Loading",
    },
    style: {
      control: {
        type: "object",
      },
      description: "Style",
    },
    withExport: {
      control: {
        type: "boolean",
      },
      description: "With Export",
    },
    withFilter: {
      control: {
        type: "boolean",
      },
      description: "With Filter",
    },
    withSort: {
      control: {
        type: "boolean",
      },
      description: "With Sort",
    },
    bordered: {
      control: {
        type: "boolean",
      },
      description: "Bordered",
    },
    showHeader: {
      control: {
        type: "boolean",
      },
      description: "Show Header",
    },
    sticky: {
      control: {
        type: "boolean",
      },
      description: "Sticky",
    },
    emptyElement: {
      control: {
        type: "object",
      },
      description: "Empty Element",
    },
    size: {
      control: {
        type: "select",
        options: ["small", "middle", "large"],
      },
      description: "Size",
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    dataSource: [
      {
        "Nama Tenant": "9084391103",
        Address:
          "Jl. PERUM GRAND BATAVIA CLUSTER FIERA Blok/Gang GBF-X No. 06 RT 000 RW 000 SINDANG SARI PASAR KEMIS",
        Deveui: "080000007001601e",
        "Meter Id": "AAT20Ci000059",
      },
      {
        "Nama Tenant": "0725220952",
        Address:
          "Jl. PERUM GRAND BATAVIA CLUSTER AMORE Blok/Gang GBA-IX No. 09 RT 000 RW 000 SINDANG SARI PASAR KEMIS",
        Deveui: "0800000070016605",
        "Meter Id": "AAT22Ci118224",
      },
      {
        "Nama Tenant": "3426503858",
        Address:
          "Jl. PERUM GRAND BATAVIA CLUSTER AMORE Blok/Gang GBA-IX No. 12 RT 000 RW 000 SINDANG SARI PASAR KEMIS",
        Deveui: "0800000070016598",
        "Meter Id": "AAT23Ci003170",
      },
      {
        "Nama Tenant": "0866636523",
        Address:
          "Jl. PERUM GRAND BATAVIA CLUSTER BERYL Blok/Gang GBB-II No. 06 RT 000 RW 000 SINDANG SARI PASAR KEMIS",
        Deveui: "08000000700164f0",
        "Meter Id": "ATT18Ci07311",
      },
      {
        "Nama Tenant": "0553497561",
        Address:
          "Jl. PERUM GRAND BATAVIA CLUSTER BERYL Blok/Gang GBB-II No. 25 RT 000 RW 000 SINDANG SARI PASAR KEMIS",
        Deveui: "0800000070016644",
        "Meter Id": "AAT22Ci016527",
      },
      {
        "Nama Tenant": "4672524419",
        Address:
          "Jl. PERUM GRAND BATAVIA CLUSTER BERYL Blok/Gang GBB-III No. 03 C RT  RW  SINDANG SARI PASAR KEMIS",
        Deveui: "08000000700167ae",
        "Meter Id": "ATT18Ci009526",
      },
      {
        "Nama Tenant": "9636527575",
        Address:
          "Jl. PERUM GRAND BATAVIA CLUSTER BERYL Blok/Gang GBB-VI No. 27 RT  RW  SINDANG SARI PASAR KEMIS",
        Deveui: "0800000070016372",
        "Meter Id": "AAT19Ci008118",
      },
      {
        "Nama Tenant": "5812062868",
        Address:
          "Jl. PERUM GRAND BATAVIA CLUSTER BERYL Blok/Gang GBB-VII No. 10 RT  RW  SINDANG SARI PASAR KEMIS",
        Deveui: "0800000070016343",
        "Meter Id": "ATT18Ci009779",
      },
      {
        "Nama Tenant": "0930727404",
        Address:
          "Jl. PERUM GRAND BATAVIA CLUSTER BREEZE Blok/Gang GBB-V No. 16 RT  RW  SINDANG SARI PASAR KEMIS",
        Deveui: "0800000070016352",
        "Meter Id": "AAT18Ci000140",
      },
      {
        "Nama Tenant": "7960775529",
        Address:
          "Jl. PERUM GRAND BATAVIA CLUSTER BREEZE Blok/Gang GBB-II No. 10 RT  RW  SINDANG SARI PASAR KEMIS",
        Deveui: "080000007001627b",
        "Meter Id": "AAT18Ci002035",
      },
    ],
    loading: false,
    withExport: false,
    withFilter: false,
    withSort: false,
    exportFileName: "export",
    className: "",
    style: {},
    emptyElement: null,
    size: "middle",
    bordered: false,
    showHeader: true,
    sticky: false,
  },
} satisfies Meta<typeof DynamicTables>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example: Story = {
  args: {
    withSort: true,
  },
};

export const NoData: Story = {
  args: {
    dataSource: [],
  },
};
