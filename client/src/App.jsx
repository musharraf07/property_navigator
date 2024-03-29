import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import RoutePrivate from "./components/RoutePrivate";
import AdminRoutePrivate from "./components/AdminRoutePrivate";
import CreateListing from "./pages/CreateListing";
import EditListing from "./pages/EditListing";
import Listing from "./pages/Listing";
import Search from "./pages/Search";
import Dashboard from "./pages/Dashboard";

import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import CreatePost from "./pages/CreatePost";
import UpdatePosts from "./pages/UpdatePosts";
import PostPage from "./pages/PostPage";

export default function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/listing/:listingId" element={<Listing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/post/:postSlug" element={<PostPage />} />
        <Route element={<RoutePrivate />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/update-listing/:listingId" element={<EditListing />} />
        </Route>
        <Route element={<AdminRoutePrivate />}>
          <Route path="/create-post" element={<CreatePost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
