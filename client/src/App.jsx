import { GlobalStateProvider } from "./hooks/useGlobalState";
import Navbar from './components/Navbar';
import PageWrapper from './components/PageWrapper';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import { useState } from "react";

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
        <HomePage />
      </PageWrapper>

      <Footer />
    </GlobalStateProvider>
  );
}

export default App;
