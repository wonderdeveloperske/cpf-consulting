// components/Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import Button from "@/components/Button/Button";
import {fn} from "@vitest/spy";

const meta: Meta<typeof Button> = {
    title: "Components/Button", // how it appears in the sidebar
    component: Button,
    tags: ["autodocs"], // optional
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: { label: "Click Me" },
};

export const Secondary: Story = {
    args: { label: "Cancel" },
};
