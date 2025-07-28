import { create } from "../controllers/tickets/create.js";
import { select } from "../controllers/tickets/index.js";

export const tickets = [
  {
    method: "POST",
    path: "/tickets",
    controller: create,
  },
  {
    method: "GET",
    path: "/tickets",
    controller: select,
  },
  {
    method: "PUT",
    path: "/tickets/:id",
    controller: (request, response) => {
      response.end("Ticket Atualizado");
    },
  },
];
