import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useEffect } from "react";

// Default Layout
import Default from "./layouts/Default";

// Pages Import
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";

// Error component for quote detail page
import Error from "./components/Error";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import Quote from "./pages/quote/Quote";
import QuoteDetail, { fetchSingleQuote } from "./pages/quote/[slug]";

//  Importing firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, orderBy } from "firebase/firestore";

const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_API_KEY}`,
  authDomain: `${import.meta.env.VITE_AUTH_DOMAIN}`,
  projectId: `${import.meta.env.VITE_PROJECT_ID}`,
  storageBucket: `${import.meta.env.VITE_STORAGE_BUCKET}`,
  messagingSenderId: `${import.meta.env.VITE_MESSAGING_SENDER_ID}`,
  appId: `${import.meta.env.VITE_APP_ID}`,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Services
export const db = getFirestore(app);

// Collection Reference
export const colRef = collection(db, `${import.meta.env.VITE_COLLECTION}`);

// Query Collection by createdAt and descending
export const q = query(colRef, orderBy("createdAt", "desc"));

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements([
      <Route element={<Default />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="*" element={<NotFound/>} />
        <Route
          path="/quote/:slug"
          loader={fetchSingleQuote}
          element={<QuoteDetail />}
          errorElement={<Error />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>,
    ])
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
