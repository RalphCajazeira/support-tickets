// Middleware para tratar o body da requisição
export async function jsonHandler(request, response) {
  const buffers = [];

  // Lê o body da requisição em partes e armazena em um array
  for await (const chunk of request) {
    buffers.push(chunk);
  }

  // Toda requisição que chegar, terá um body
  try {
    // Converte o body da requisição em um objeto JSON
    request.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch (error) {
    // Se der erro, a requisição não terá um body
    request.body = null;
  }

  // Define o header da resposta como JSON
  response.setHeader("Content-type", "application/json");
}
