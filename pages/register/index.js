import React from "react";
import { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import BookConsultant from "../../components/BookConsultant";

const register = () => {
  return <BookConsultant></BookConsultant>;
};

export default register;
