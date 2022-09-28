import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore/lite";
import { firebaseDB } from "../firebase/config";
import { QrPage } from "./QrPage";

export const QrPageLogic = () => {
  const { code } = useParams();

  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState({
    name: null,
    imgUrl: null,
    hasEnter: null,
  });

  useEffect(() => {
    async function getUser() {
      const collectionRef = doc(firebaseDB, `codes/${code}/`);
      const resp = await getDoc(collectionRef);
      setUser({ ...resp.data() });
    }

    getUser();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading == false) {
    return user.name != null ? <QrPage user={user} /> : <Navigate to="/" />;
  } else {
    return (
      <>
        <h1>Buscando código...</h1>
        <br/>
        <p>Si tu código no es válido, se te redireccionará a la página principal.</p>
      </>
    );
  }
};
