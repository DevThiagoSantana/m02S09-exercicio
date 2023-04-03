import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { mainTheme } from './styles'
import Navbar from './components/Navbar'
import PageWrapper from './components/PageWrapper'
import Footer from './components/Footer'
import { GlobalStateProvider } from './hooks/useGlobalState'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'
import CourseDetailsPage from './pages/CourseDetailsPage'
import CourseRegisterPage from './pages/CourseRegisterPage'

function App() {
  const [globalState, setGlobalState] = useState()
  return (
    <GlobalStateProvider value={[globalState, setGlobalState]}>
      <ThemeProvider theme={mainTheme}>
        <BrowserRouter>
          <Navbar />
          <PageWrapper>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/course/register" element={<CourseRegisterPage />} />
              <Route path="/course/:id" element={<CourseDetailsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </PageWrapper>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </GlobalStateProvider>
  )
}

export default App
