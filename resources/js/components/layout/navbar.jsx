import { Link } from '@inertiajs/react';
import { FaBars, FaSearch, FaShoppingBag, FaUser } from 'react-icons/fa';
const NavBar = () => {
    return (
        <>
            {/* <!-- Navbar start --> */}
            <div className="container-fluid fixed-top">
                {/* <!-- <div className="container topbar bg-secondary d-none d-lg-block">
        <div className="d-flex justify-content-between">
          <div className="top-info ps-2">
            <small className="me-3"
              ><i className="fas fa-map-marker-alt me-2 text-secondary"></i>
              <a href="#" className="text-white">Loje</a></small
            >
            <small className="me-3"
              ><i className="fas fa-envelope me-2 text-secondary"></i
              ><a href="#" className="text-white">joelnkondolo@loje.com</a></small
            >
          </div>
          <div className="top-link pe-2">
            <a href="#" className="text-white"
              ><small className="text-white mx-2">Privacy Policy</small>/</a
            >
            <a href="#" className="text-white"
              ><small className="text-white mx-2">Terms of Use</small>/</a
            >
            <a href="#" className="text-white"
              ><small className="text-white ms-2">Sales and Refunds</small></a
            >
          </div>
        </div>
      </div> --> */}
                <div className="px-0 pt-5 container">
                    <nav className="navbar navbar-light bg-white navbar-expand-xl">
                        <Link href="/" className="navbar-brand">
                            <h1 className="text-secondary display-6">Loje</h1>
                        </Link>
                        <button
                            className="navbar-toggler py-2 px-3 border-secondary"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse"
                        >
                            <FaBars className="text-secondary" />
                        </button>
                        <div className="navbar-collapse bg-white collapse" id="navbarCollapse">
                            <div className="navbar-nav mx-auto">
                                <Link href="/" className="nav-item nav-link">
                                    Home
                                </Link>
                                <Link href="shop.html" className="nav-item nav-link">
                                    Shop
                                </Link>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                        Pages
                                    </a>
                                    <div className="dropdown-menu m-0 bg-secondary rounded-0">
                                        <a href="cart.html" className="dropdown-item">
                                            Cart
                                        </a>
                                        <a href="chackout.html" className="dropdown-item">
                                            Chackout
                                        </a>
                                        <a href="testimonial.html" className="dropdown-item">
                                            Testimonial
                                        </a>
                                        <a href="404.html" className="dropdown-item">
                                            404 Page
                                        </a>
                                    </div>
                                </div>
                                <a href="#" className="nav-item nav-link">
                                    Contact
                                </a>
                            </div>
                            <div className="d-flex m-3 me-0">
                                <button
                                    className="btn-search btn border-secondary btn-md-square rounded-circle bg-white me-4 border"
                                    data-bs-toggle="modal"
                                    data-bs-target="#searchModal"
                                >
                                    <span className="text-secondary">
                                        <FaSearch />
                                    </span>
                                </button>
                                <a href="#" className="position-relative me-4 text-secondary my-auto">
                                    <FaShoppingBag className="fs-3" />
                                </a>
                                <a href="#" className="text-secondary my-auto">
                                    <FaUser className="fs-3" />
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* <!-- Navbar End -->; */}
        </>
    );
};
export default NavBar;
