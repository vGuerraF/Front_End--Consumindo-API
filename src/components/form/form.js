import { useState } from "react";
import { api } from "../../utils/api/api";

export function Form({ getAll, handleModal }) {
  const [newPaleta, setNewPaleta] = useState({ characters: [] });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    setLoading(true);
    event.preventDefault();

    await api.createPaleta(newPaleta);
    await getAll();
    setLoading(false);
    handleModal();
  }

  return (
    <>
      {loading ? (
        <div> loading...</div>
      ) : (
        <div className="form">
          <form onSubmit={handleSubmit} className="form-inputs">
            <section>
              <span>Sabor:</span>
              <input
                type="text"
                name="sabor"
                onChange={(event) => {
                  setNewPaleta({ ...newPaleta, sabor: event.target.value });
                }}
              ></input>
            </section>
            <section>
              <span>Descricao</span>
              <input
                type="text"
                name="descricao"
                onChange={(event) => {
                  setNewPaleta({ ...newPaleta, descricao: event.target.value });
                }}
              ></input>
            </section>
            <section>
              <span>Foto:</span>
              <input
                type="text"
                name="foto"
                onChange={(event) => {
                  setNewPaleta({ ...newPaleta, foto: event.target.value });
                }}
              ></input>
            </section>
            <section>
              <span>Preco:</span>
              <input
                type="number"
                name="preco"
                onChange={(event) => {
                  setNewPaleta({ ...newPaleta, preco: event.target.value });
                }}
              ></input>
            </section>
            <button type="submit" className="btn-submit">
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
}

