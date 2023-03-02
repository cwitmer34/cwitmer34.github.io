import Background from "./Background";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="content-container">
        <Sidebar />
        <div className="content soft">
          <h1>This website is currently in development.</h1>
          <h3>
            Note that the current state is not final, and will be heavily modified.
          </h3>
          <p>
            This is meant to be a personal "hub" for everything Connor Witmer.
          </p>
        </div>
      </div>
      <Background />
    </>
  );
};

export default Home;
