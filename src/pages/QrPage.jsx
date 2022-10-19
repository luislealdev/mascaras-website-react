import { doc, setDoc } from "firebase/firestore/lite";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { firebaseDB } from "../firebase/config";

export const QrPage = ({ user }) => {
  const navigate = useNavigate();
  const { name, imgUrl, hasEnter } = user;
  const { code } = useParams();

  const handleHasEnter = async () => {
    const userToFirestore = {
      name,
      imgUrl,
      hasEnter: true,
    };
    const userRef = doc(firebaseDB, `codes/${code}/`);
    await setDoc(userRef, userToFirestore, { merge: true });
  };

  return (
    <div className="main-container">
      <div className="logo-container">
        <img src="src/assets/img/logo.jpeg" alt="logo_Demo" className="logo" />
      </div>
      <div className="title-container">
        <h1>
          {name}
          {!hasEnter &&
            ", en la entrada te pedirán este código para darte acceso al evento"}
          <br />
        </h1>
      </div>
      {hasEnter ? (
        <>
          <br />
          <h1>Ya has entrado a la función :P</h1>
          <br />
        </>
      ) : (
        <img
          className="QR-image"
          src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${imgUrl}`}
          alt="Código QR"
        />
      )}
      <div className="bottom-line"></div>
      <footer className="credits">
        <h2>Universidad Anahuac Querétaro</h2>
        <p>Taller de carpetas comercialess</p>
        <p>25 de Noviembre de 2022 - 19:00pm</p>
        <p>Auditorio - Edificio B</p>
      </footer>
      {!hasEnter && (
        <>
          <br /> <br /> <br /> <br /> <br />
          <button className="primary-button" onClick={handleHasEnter}>
            Marcar entrada
          </button>
          <br />
          <p>
            Si eres usuario, no marques está casilla sino no podrás entrar al
            evento
          </p>
        </>
      )}
    </div>
  );
};
