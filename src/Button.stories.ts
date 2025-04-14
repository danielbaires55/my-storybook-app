import type { Meta, StoryObj } from "@storybook/react";
import { within } from "@testing-library/react";
import { userEvent } from "@storybook/testing-library";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Base Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
    },
  },
};
export default meta;

//Modificare il componente button per supportare la disabilitazione
//Aggiungere una proprietà disabled al bottone
//Se la proprietà è null gestire all'onclick prima la disabilitazione
//Simulare l'operazione del click con setTimeout di 5 secondi
//Dopo 5 secondi rimuovere la proprietà disabled e riattivare il bottone

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Click Me",
    onClick: () => alert("Button clicked!"),
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Button",
    onClick: () => alert("Non cliccabile"),
    disabled: true,
  },
};

export const TemporarilyDisabled: Story = {
  args: {
    label: "Click (disabilita 5s)",
    onClick: async () => {
      alert("Operazione async in corso...");
      await new Promise((resolve) => setTimeout(resolve, 1000)); 
      alert("Operazione completata.");
    },
    disabled: null,
  },
};

export const WithInteraction: Story = {
  args: {
    label: "Click Me",
    onClick: () => alert("Button clicked!"),
  },
  play: async ({canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await userEvent.click(button);
  }
};
