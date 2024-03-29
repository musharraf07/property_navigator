import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";
import DashListings from "../components/DashListings";
import DashUsers from "../components/DashUsers";
import DashContact from "../components/DashContact";
import DashPosts from "../components/DashPosts";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    console.log(tabFromUrl);
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56 bg-slate-300">
        {/* Sidebar */}
        <DashSidebar />
      </div>
      {/* profile... */}
      {tab === "profile" && <DashProfile />}
      {/* lisitings... */}
      {tab === "listings" && <DashListings />}
      {/* posts... */}
      {tab === "posts" && <DashPosts />}
      {/* users... */}
      {tab === "users" && <DashUsers />}
      {/* contactdetails... */}
      {tab === "contactdetails" && <DashContact />}
    </div>
  );
}
