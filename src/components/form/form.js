import { useState } from "react";
import { api } from "../../utils/api/api";

export function Form({ getAll, handleModal }) {
  const [newAnime, setNewAnime] = useState({ characters: [] });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    setLoading(true);
    event.preventDefault();

    await api.createAnime(newAnime);
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
              <span>Title:</span>
              <input
                type="text"
                name="title"
                onChange={(event) => {
                  setNewAnime({ ...newAnime, title: event.target.value });
                }}
              ></input>
            </section>
            <section>
              <span>Protagonist</span>
              <input
                type="text"
                name="protagonist"
                onChange={(event) => {
                  setNewAnime({ ...newAnime, protagonist: event.target.value });
                }}
              ></input>
            </section>
            <section>
              <span>Gender:</span>
              <input
                type="text"
                name="gender"
                onChange={(event) => {
                  setNewAnime({ ...newAnime, gender: event.target.value });
                }}
              ></input>
            </section>
            <section>
              <span>Year:</span>
              <input
                type="number"
                name="year"
                onChange={(event) => {
                  setNewAnime({ ...newAnime, year: event.target.value });
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

