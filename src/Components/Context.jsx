import { createContext } from "react";

const GlobalContext = createContext({
  resume: null,
  theme: null,
})

export default GlobalContext;
