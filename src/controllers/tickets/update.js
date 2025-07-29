export function update({ request, response, database }) {
  const { id } = request.params;
  const { equipment, description, user_name } = request.body;

  const data = {
    equipment,
    description,
    user_name,
    updated_at: new Date(),
  };

  const ticket = database.update("tickets", id, data);

  if (!ticket) {
    return response.writeHead(404).end("Ticket não encontrado");
  }

  return response.end(JSON.stringify(ticket));
}
