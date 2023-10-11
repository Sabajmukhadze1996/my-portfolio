import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import MySkills from "./components/MySkills";
import Footer from "./components/Footer";
import MyProjects from "./components/MyProjects";
import TranslationContextProvider from "./components/TranslationContextProvider";
import LoadingText from "./components/LoadingText";
// import sigmaVideo from "./videos/sigma-male.mp4";
// import { AiTwotoneHeart } from "react-icons/ai";
// import CustomCursor from "./components/CustomCursor"

// import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "330px",
  width: "95%",
  minHeight: "380px",
  bgcolor: "#000",
  boxShadow: 24,
  outline: "none",
  borderRadius: "5px",
  padding: "0px",
  paddingBottom: "1rem",
  border: "4px solid #4200b5",
  cursor: "pointer",
};

const App = () => {
  const [loading, setLoading] = useState(true);
  // const disableLoading = () => setLoading(false);

  // const [open, setOpen] = useState(false);

  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // useEffect(() => {
  //   const handleKeyDown = (event) => {
  //     const isInputForm =
  //       event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA";

  //     if (
  //       !isInputForm &&
  //       (event.key === "F12" ||
  //         event.key === "I" ||
  //         event.key === "i" ||
  //         event.key === "C" ||
  //         event.key === "c" ||
  //         event.key === "J" ||
  //         event.key === "j")
  //     ) {
  //       event.preventDefault();
  //       handleOpen();
  //     }
  //   };

  //   const handleContextMenu = (event) => {
  //     event.preventDefault();
  //     handleOpen();
  //   };

  //   document.addEventListener("keydown", handleKeyDown);
  //   document.addEventListener("contextmenu", handleContextMenu);

  //   return () => {
  //     document.removeEventListener("keydown", handleKeyDown);
  //     document.removeEventListener("contextmenu", handleContextMenu);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (open) {
  //     const timeoutId = setTimeout(() => {
  //       handleClose();
  //     }, 4000);
  //     return () => {
  //       clearTimeout(timeoutId);
  //     };
  //   }
  // }, [open]);

  // const isTouchDevice = () => {
  //   return (
  //     "ontouchstart" in window ||
  //     navigator.maxTouchPoints > 0 ||
  //     navigator.msMaxTouchPoints > 0
  //   );
  // };

  // const handleTouchStart = () => {
  //   if (!isTouchDevice()) {
  //     handleOpen();
  //     const timeoutId = setTimeout(() => {
  //       handleClose();
  //     }, 4000);
  //     return () => {
  //       clearTimeout(timeoutId);
  //     };
  //   }
  // };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1800);
  }, []);

  return (
    <>
      {loading ? (
        // <LoadingText disableLoading={disableLoading} />
        <LoadingText />
      ) : (
        <TranslationContextProvider>
          <BrowserRouter>
            <div className="app">
              <Navbar />
              <main id="main">
                <Routes>
                  <Route path="/*" element={<HomePage />} />
                  <Route path="/coding-career" element={<AboutMe />} />
                  <Route path="/my-skills" element={<MySkills />} />
                  <Route path="/my-projects" element={<MyProjects />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </BrowserRouter>
          {/* <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleClose}
            onTouchCancel={handleClose}
          >
            {!isTouchDevice() && (
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style} onClick={handleClose}>
                  <video
                    style={{ width: "100%" }}
                    src={sigmaVideo}
                    autoPlay
                    loop
                  >
                    Your browser does not support the video tag.
                  </video>
                  <h4
                    style={{
                      textAlign: "center",
                      paddingTop: "17px",
                      color: "#fff",
                      letterSpacing: "0.4px",
                    }}
                  >
                    Want to see the source <br /> code ?
                  </h4>
                  <h5
                    style={{
                      textAlign: "center",
                      paddingTop: "7px",
                      color: "#fff",
                      letterSpacing: "0.6px",
                    }}
                  >
                    Check your heart <br /> first <AiTwotoneHeart fill="red" />
                  </h5>
                </Box>
              </Modal>
            )}
          </div> */}
        </TranslationContextProvider>
      )}
      {/* <CustomCursor /> */}
    </>
  );
};

export default App;
