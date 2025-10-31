import type { Meta, StoryObj } from "@storybook/react";
import {Button} from "@/components/Button/Button";
import {ComponentProps} from "react";
import { fn } from '@storybook/test';

type StoryProps = ComponentProps<typeof Button> & {
    buttonText:string;
};

const meta: Meta<StoryProps> = {
    title: "Components/Button",
    component: Button,
    argTypes:{
        variant: {
            options:["primary","secondary"],
            control: {
                type:"select"
            }
        },
        size: {
            options:["sm","md","lg"],
            control: {
                type:"select"
            }
        }
    },
    args:{
        onClick:fn()
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Example: Story = {
    args: {
        buttonText:"test",
        variant: "primary",
        size: "sm"
    },
    render: ({buttonText,...args}) => <Button {...args} >{buttonText}</Button>
};


