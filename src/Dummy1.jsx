import React, { useContext } from "react";
import { PageNameContext, dummyContext } from "./PageNameContext";

const Dummy1 = () => {
  const { updatePageNo, setUpdatePageNo } = useContext(PageNameContext);
  const { popup, setPopUp } = useContext(dummyContext);

  return (
    <>
      <div>Here to test useContext: {popup}</div>
      <input
        type="text"
        value={updatePageNo}
        onChange={(e) => {
          setUpdatePageNo(e.target.value);
          setPopUp("user has changed in the field");
        }} // Use correct setter function
      />
    </>
  );
};

export default Dummy1;
