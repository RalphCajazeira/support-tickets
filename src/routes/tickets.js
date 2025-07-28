import { create } from "../controllers/tickets/create.js";

export const tickets = [
  {
    method: "POST",
    path: "/tickets",
    controller: create,
  },
  {
    method: "GET",
    path: "/tickets",
    controller: (request, response) => {
      response.end("Lista de Tickets");
    },
  },
  {
    method: "PUT",
    path: "/tickets/:id",
    controller: (request, response) => {
      response.end("Ticket Atualizado");
    },
  },
];
