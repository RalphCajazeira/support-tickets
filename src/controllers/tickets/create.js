import { randomUUID } from "node:crypto";

export function create({ request, response }) {
  const { equipment, description, user_name } = request.body;

  const ticket = {
    id: randomUUID(),
    description,
    user_name,
  };

  return response.end(JSON.stringify(ticket));
}
