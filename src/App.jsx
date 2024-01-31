import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";
import Products from "./Products";
import Header from "./Header";

function App() {
  return (
    <>
      <div className="container-fluid">
        <NavBar></NavBar>
        <Header></Header>
      </div>
      <div class="container px-4 px-lg-5 mt-5">
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <Products></Products>
        </div>
      </div>
    </>
  );
}

export default App;
