export function updateStatus({ request, response, database }) {
  const { id } = request.params;
  const { solution } = request.body;

  const ticket = database.update("tickets", id, { status: "closed", solution });

  if (!ticket) {
    return response.writeHead(404).end();
  }
  return response.end();
}
