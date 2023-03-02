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
            Note that the current state is not final, and will be heavily
            modified.
          </h3>
          <p>
            This being said, functionality for most elements has{" "}
            <span
              style={{
                color: "red",
                fontSize: "1.25em",
                fontWeight: "900",
                textDecoration: "underline",
              }}
            >
              NOT
            </span>{" "}
            been implemented yet.
          </p>
        </div>
      </div>
      <Background />
    </>
  );
};

export default Home;
