import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebaseConnection";

export function useAuth() {
  const [user, setUser] = useState(false);
  const [userDetail, setUserDetail] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("esta logado");
        setUser(true);
        setUserDetail({
          uid: user.uid,
          email: user.email,
        });
      } else {
        setUser(false);
        setUserDetail({});
      }
    });

    return () => unsubscribe();
  }, []);

  return { user, userDetail };
}