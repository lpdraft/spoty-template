import { Routes, Route } from "react-router-dom";
// import Main from "./pages/Main";

// import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import AudioPlayer from "./components/AudioPlayer";
import Playlist from "./pages/Playlist";
import Search from "./pages/Search";
import LikedSongs from "./pages/LikedSongs";
import Profile from "./pages/Profile";

export const SpotifyRouter = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <AudioPlayer />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/playlists" element={<Playlist />} />
        <Route path="/playlist/:id" element={<Library />} />
        <Route path="/tracks" element={<LikedSongs />} />
        <Route path="/search" element={<Search />} />
        <Route path="/me" element={<Profile />} />
      </Routes>
    </div>
  );
};
