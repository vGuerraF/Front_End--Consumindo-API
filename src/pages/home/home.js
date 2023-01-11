import { Card } from "../../components/card/card";
import { Header } from "../../header/header";
import { api } from "../../utils/api/api";
import { useState, useEffect } from "react";
import { CgClose } from "react-icons/cg";
import Modal from "react-modal";
import "./home.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "40rem",
    height: "50rem",
    transform: "translate(-50%, -50%)",
    backgroundColor: " rgba(0, 0, 0, 0.8)",
    borderRadius: "15px",
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.4)",
  },
};

Modal.setAppElement("#root");
export function Home() {
  const [paletaList, setPaletaList] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [uniquePaleta, setUniquePaleta] = useState({});
  const [editPaleta, setEditPaleta] = useState(false);

  async function getPaleta() {
    const paletas = await api.getAllPaletas();
    setPaletaList(paletas);
  }

  function deletePaleta(paletaId) {
    api.deletePaleta(paletaId);
    const newPaletaList = paletaList;
    newPaletaList.map((paleta, index) => {
      if (paleta.id === paletaId) {
        newPaletaList.splice(index, 1);
        setPaletaList(newPaletaList);
        handleModal();
      }
    });
  }

  function handleModal() {
    setModalIsOpen(!modalIsOpen);
  }

  function changePaleta(event) {
    event.preventDefault();

    const updatedPaleta = {
      id: uniquePaleta.id,
      sabor: event.target.sabor.value,
      descricao: event.target.descricao.value,
      foto: event.target.foto.value,
      preco: event.target.preco.value,
      characters: [],
    };

    const newPaletaList = paletaList;
    newPaletaList.map((item, index) => {
      if (item.id === updatedPaleta.id) {
        newPaletaList.splice(index, 1, updatedPaleta);
        setPaletaList(newPaletaList);
        handleModal();
      }
    });
    setEditPaleta(false);
    api.updatePaleta(updatedPaleta);
  }

  useEffect(() => {
    getPaleta();
  }, []);

  return (
    <section className="home-page">
      <Header getAll={getPaleta} />
      <div className="card-list">
        {paletaList.map((item, index) => {
          return (
            <button
              className="button-card"
              onClick={() => {
                setUniquePaleta(item);
                handleModal();
              }}
              key={index}
            >
              <Card
                sabor={item.sabor}
                foto={item.foto}
                descricao={item.descricao}
                preco={item.preco}
              />
            </button>
          );
        })}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModal}
        style={customStyles}
        contentLabel="Card details"
      >
        {editPaleta ? (
          <>
            <div className="form">
              <form onSubmit={changePaleta} className="form-inputs">
                <section>
                  <span>Sabor:</span>
                  <input
                    type="text"
                    name="sabor"
                    defaultValue={uniquePaleta.sabor}
                  ></input>
                </section>
                <section>
                  <span>Descricao</span>
                  <input
                    type="text"
                    name="descricao"
                    defaultValue={uniquePaleta.descricao}
                  ></input>
                </section>
                <section>
                  <span>Foto:</span>
                  <input
                    type="text"
                    name="foto"
                    defaultValue={uniquePaleta.foto}
                  ></input>
                </section>
                <section>
                  <span>Preco:</span>
                  <input
                    type="number"
                    name="preco"
                    defaultValue={uniquePaleta.preco}
                  ></input>
                </section>
                <button type="submit" className="btn-submit">
                  Submit
                </button>
              </form>
            </div>
          </>
        ) : (
          <>
            <section>
              <section
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <button
                  style={{
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    border: "none",
                  }}
                  onClick={handleModal}
                >
                  <CgClose size={28} color="red" />
                </button>
              </section>
              <h2>{uniquePaleta.sabor}</h2>
              <h3>{uniquePaleta.foto}</h3>
              <h3>{uniquePaleta.descricao}</h3>
              <h3>{uniquePaleta.preco}</h3>
            </section>
            <button
              onClick={() => {
                setEditPaleta(true);
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                deletePaleta(uniquePaleta.id);
              }}
            >
              Delete
            </button>
          </>
        )}
      </Modal>
    </section>
  );
}
