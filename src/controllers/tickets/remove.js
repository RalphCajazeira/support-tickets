export function remove({ request, response, database }) {
  const { id } = request.params;

  const ticket = database.remove("tickets", id);

  if (!ticket) {
    return response.writeHead(404).end();
  }

  return response.writeHead(204).end();
}


