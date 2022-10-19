import { useForm } from "../hooks/useForm";
import { firebaseDB } from "../firebase/config";
import { doc, setDoc } from "firebase/firestore/lite";
import { checkCode } from "../helpers/checkCode";
import { getQrImage } from "../helpers/getQrImage";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const initialForm = {
  name: "",
  code: "",
  hasEnter: false,
};

export const RegisterPage = () => {

  const navigate = useNavigate();
  const { name, code, hasEnter, onInputChange } = useForm(initialForm);

  const onSubmitForm = async (event) => {
    event.preventDefault();
    const resp = await checkCode(code);
    if (resp.name == null)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Este código parece no existir!",
        footer:
          '<a href="https://wa.me/qr/E4BOZ5LSHIBBO1">Comprar mi entrada</a>',
      });

    if (resp.name != null) {
      const imgUrl = await getQrImage(code);
      const userToFirestore = {
        name,
        imgUrl,
        hasEnter,
      };
      const userRef = doc(firebaseDB, `codes/${code}/`);
      await setDoc(userRef, userToFirestore, { merge: true });
      navigate(`/${code}`);
    }
  };

  return (
    <>
      <div className="login">
        <div className="form-container">
          <div className="logo-container">
            <img
              src="./assets/logo.5bdb58ad.jpeg"
              alt="logo_Demo"
              className="logo"
            />
          </div>
          <div className="title-container">
            <h1 className="title">Registro </h1>
          </div>
          <form onSubmit={onSubmitForm} className="request-data">
            <label className="label">Nombre completo:</label>
            <input
              name="name"
              autoComplete="off"
              value={name}
              onChange={onInputChange}
              type="text"
              placeholder="Marcial Maciel"
              className="input-data"
              required
            />
            <label className="label">Código:</label>
            <input
              name="code"
              autoComplete="off"
              value={code}
              onChange={onInputChange}
              type="number"
              placeholder="67353"
              className="input-data"
              required
            />
            <button className="primary-button">Registrarme</button>
          </form>
        </div>
        <footer className="credits">
          <h2>Universidad Anahuac Querétaro</h2>
          <p>Taller de carpetas comercialess</p>
          <p>25 de Noviembre de 2022 - 19:00pm</p>
          <p>Auditorio - Edificio B</p>
        </footer>
      </div>
    </>
  );
};
