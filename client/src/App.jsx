import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PageWrapper from "./components/PageWrapper";
import Footer from "./components/Footer";
import { GlobalStateProvider } from "./hooks/useGlobalState";
import HomePage from "./pages/HomePage";
import CourseDetailsPage from "./pages/CourseDetailsPage";

function App() {
  const [globalState,setGlobalState] =useState({
    user:{
      nome:"thiago",
      isAdmin:true,
    }
  });
  return (
    <GlobalStateProvider value={[globalState,setGlobalState]}>
      <Navbar />

      <PageWrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path ="/course/:id" element={<CourseDetailsPage/>} />  
            <Route path="*" element={<div>Página não encontrada</div>} />       
          </Routes>
        </BrowserRouter>  
      </PageWrapper>

      <Footer />
    </GlobalStateProvider>
  );
}

export default App;
