import type { Meta, StoryObj } from "@storybook/react";
import { UserCard } from "./UserCard";
import { within, userEvent } from "@storybook/testing-library";


/** 
  *Modifica del componente UserCard:
 
  * 1. Aggiungere nel componente un bottone (Button) con la label
  * "Conferma" che al click esegue una funzione asincrona
  * 2. La funzione asincrona onClick passata a Button via props
  * dovrà essere simulata con setTimeout e al completamento visualizzare
  * una scritta all'interno della UserCard con "Utente confermato"
  *
  * Creazione della storia:
  * 1. Creare le storie necessarie per testare il componente
  * 2. Solo dopo automatizzare con "play" alcune storie.
  *
  */


  const meta: Meta<typeof UserCard> = {
    title: "Base Components/UserCard",
    component: UserCard,
    tags: ["autodocs"],
    argTypes: {
      name: {
        control: "text",
      },
      email: {
        control: "text",
      },
    },
  };
  export default meta;
  
  type Story = StoryObj<typeof UserCard>;


export const Default: Story = {
  args: {
    name: "John Doe",
    email: "john@gmail.com",
  },
};

// export const NoName: Story = {
//   args: {},
// };

export const ConfermaAutomatica: Story = {
    args: {
      name: "Maria Rossi",
      email: "maria@example.com",
    },
    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);  
      const button = await canvas.findByRole('button', { name: /conferma/i });
      await userEvent.click(button);
      await canvas.findByText("Utente confermato");
    },
  };