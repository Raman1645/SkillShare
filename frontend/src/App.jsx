import { Toaster } from "react-hot-toast"
import { Route, Routes, Navigate } from "react-router"
import SignUpPage from "./pages/SignUpPage"
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"
import NotificationsPage from "./pages/NotificationsPage"
import ChatPage from "./pages/ChatPage"
import CallPage from "./pages/CallPage"
import OnboardingPage from "./pages/OnboardingPage"
import useAuthUser from "./hooks/useAuthUser"
import PageLoader from "./components/PageLoader";
import Layout from "./components/Layout"
import { useThemeStore } from "./store/useThemeStore"
import { useEffect } from "react";


function App() {

  const {isLoading, authUser} = useAuthUser();
  const {theme} = useThemeStore();
  const isAuthenticated = Boolean(authUser);
  const isOnboarded = authUser?.isOnboarded;

   useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  if (isLoading) return <PageLoader />

  return (
    <div data-theme = {theme}>
      <Routes>
        <Route path="/signup" element={!isAuthenticated ? <SignUpPage /> : <Navigate to={
          isOnboarded ? "/" : "/onboard"
        } />}></Route>

        <Route
          path="/onboard"
          element={isAuthenticated ? (
            !isOnboarded ? (
              <OnboardingPage />
            ) : (
              <Navigate to='/' />
            )
          ) : <Navigate to="/login" />}>
        </Route>

        <Route
          path="/"
          element={isAuthenticated && isOnboarded ? (
            <Layout showSidebar={true}>
              <HomePage />
            </Layout>

          ) : (
            <Navigate to={!isAuthenticated ? "/login" : "/onboard"} />
          )}>
        </Route>

        <Route path="/login" element={!isAuthenticated ? <LoginPage /> : <Navigate to={
          isOnboarded ? "/" : "/onboard"
        } />}></Route>

        <Route path="/notifications" element={isAuthenticated && isOnboarded ? (
          <Layout showSidebar={true}>
            <NotificationsPage />
          </Layout>
        ) : (
          <Navigate to={!isAuthenticated ? "/login" : "/onboard"} />)}></Route>

          <Route path="/chat/:id" element=
        {isAuthenticated && isOnboarded ? (
          <Layout showSidebar={false}>
            <ChatPage />
          </Layout>
        ) : (
          <Navigate to={!isAuthenticated ? "/login" : "/onboard"} />
          )}></Route>

          <Route path="/call/:id" element={isAuthenticated && isOnboarded ? (
          <Layout showSidebar={false}>
            <CallPage />
          </Layout>
        ) : (
          <Navigate to={!isAuthenticated ? "/login" : "/onboard"} />
          )}></Route>

      </Routes>


      <Toaster />
    </div>
  )
}

export default App
