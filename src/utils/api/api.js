const baseUrl = "http://localhost:3001/paletas";

export const api = {
  createPaleta: async (paleta) => {
    const response = await fetch(baseUrl + "/create-paletas", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(paleta),
    });
    const newPaleta = await response.json();
    return newPaleta;
  },

  getAllPaletas: async () => {
    const response = await fetch(baseUrl + "/find-paletas");
    const allPaletas = await response.json();

    return allPaletas;
  },

  getPaletaById: async (paletaId) => {
    const response = await fetch(baseUrl + "/find-paleta/:" + paletaId);
    const paletaFinded = await response.json();
    return paletaFinded;
  },

  deletePaleta: async (paletaId) => {
    const response = await fetch(baseUrl + "/delete-paleta/:" + paletaId, {
      method: "DELETE",
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    const paletaDeleted = await response.json();
    return paletaDeleted;
  },
};
