import { SpotifyRouter } from "./SpotifyRouter";
import { AuthProvider } from "./Auth/context/AuthProvider";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <SpotifyRouter />
      </AuthProvider>
    </div>
  );
}

export default App;
