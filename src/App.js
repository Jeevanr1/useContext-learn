import "./styles.css";
import { PageNameContext } from "./PageNameContext";
import ChildComponent from "./ChildComponent";
import React, { useContext, useState } from "react";
import Dummy1 from "./Dummy1";
export default function App() {
  const [updatePageNo, setUpdatePageNo] = useState("ParentPage");
  return (
    <>
      <PageNameContext.Provider value={{ updatePageNo, setUpdatePageNo }}>
        <h1>Parent page title</h1>
        <ChildComponent />
      </PageNameContext.Provider>
    </>
  );
}
