const baseUrl = "http://localhost:3001/paletas";

export const api = {
  readAllPaletas: async () => {
    const response = await fetch(baseUrl + "/find-paletas");
    const allPaletas = await response.json();
    return allPaletas;
  },
  readByIdPaletas: async (paleta) => {
    fetch(baseUrl + "/find-paleta/:id", {
      method: GET,
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(paleta),
    });
  },
  createPaletas: async (paleta) => {
    const response = await fetch(baseUrl + "/create-paletas", {
      method: POST,
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(paleta),
    });
    const newPaleta = await response.json();
    return newPaleta;
  },
};
