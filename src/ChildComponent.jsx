import React, { useContext, useState } from "react";
import Dummy1 from "./Dummy1";
import { PageNameContext, dummyContext } from "./PageNameContext";

const ChildComponent = () => {
  const { updatePageNo } = useContext(PageNameContext);
  const [popup, setPopUp] = useState("dskj");
  return (
    <>
      <p>
        This is a sub-component, <b>{updatePageNo}</b> nested in the page
      </p>
      <button
        onClick={() => {
          alert(`Here is the latest context: ${updatePageNo}`);
        }}
      >
        Click me
      </button>
      <dummyContext.Provider value={{ popup, setPopUp }}>
        <Dummy1 />
      </dummyContext.Provider>
    </>
    // <PageNameContext.Consumer>
    //   {({ updatePageNo }) => (
    //     <>
    //       <p>
    //         This is a sub-component,<b> {updatePageNo} </b> nested in the page
    //       </p>
    //       <button
    //         onClick={() => {
    //           alert(`here is the latest context :  ${updatePageNo}`);
    //         }}
    //       >
    //         click me
    //       </button>
    //       <Dummy1 />
    //     </>
    //   )}
    // </PageNameContext.Consumer>
  );
};

export default ChildComponent;
