import { useState } from "react";
import { api } from "../../utils/api/api.js"

export function Form() {
  const [NewPaleta, setNewPaleta] = useState();

  api.createPaletas(NewPaleta)

  function handleSubmit(event) {
    event.preventDefault();

    setNewPaleta({ ...NewPaleta, character: [] });
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit} className="form-inputs">
        <section>
          <span>sabor:</span>
          <input
            type="text"
            name="sabor"
            onChange={(event) => {
              setNewPaleta({ ...NewPaleta, sabor: event.target.value });
            }}
          ></input>
        </section>
        <section>
          <span>descricao:</span>
          <input
            type="text"
            name="descricao"
            onChange={(event) => {
              setNewPaleta({ ...NewPaleta, descricao: event.target.value });
            }}
          ></input>
        </section>
        <section>
          <span>foto:</span>
          <input
            type="text"
            name="foto"
            onChange={(event) => {
              setNewPaleta({ ...NewPaleta, foto: event.target.value });
            }}
          ></input>
        </section>
        <section>
          <span>preco:</span>
          <input
            type="number"
            name="preco"
            onChange={(event) => {
              setNewPaleta({ ...NewPaleta, preco: event.target.value });
            }}
          ></input>
        </section>
        <button type="submit" className="btn-submit">
          Submit
        </button>
      </form>
    </div>
  );
}
