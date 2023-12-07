import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Movies from "./pages/MoviesList";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import React from "react";
import Layout from "../src/components/Layout";
function App() {
	return (
		<BrowserRouter>
			<Layout>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/Movies' element={<Movies />} />
        <Route path='/MovieDetails' element={<MovieDetails />} />
        </Routes>
      </Layout>
		</BrowserRouter>
	);
}

export default App;
