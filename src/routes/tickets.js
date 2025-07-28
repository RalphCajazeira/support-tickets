export const tickets = [
  {
    method: "POST",
    path: "/tickets",
    controller: (request, response) => {
      response.end("Criado com sucesso!");
    },
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
