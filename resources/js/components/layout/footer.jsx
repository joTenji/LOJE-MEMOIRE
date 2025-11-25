import { FaArrowUp, FaCopyright, FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
const Footer = () => {
    return (
        <>
            {/* <!-- Footer Start --> */}
            <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5">
                <div className="py-5 container">
                    <div className="pb-4 mb-4" style={{ borderBottom: '1px solid rgba(226, 175, 24, 0.5)' }}>
                        <div className="row g-4">
                            <div className="col-lg-3">
                                <a href="#">
                                    <h1 className="text-primary mb-0">Fruitables</h1>
                                    <p className="text-secondary mb-0">Fresh products</p>
                                </a>
                            </div>
                            <div className="col-lg-6">
                                <div className="position-relative mx-auto">
                                    <input className="form-control w-100 py-3 px-4 rounded-pill border-0" type="number" placeholder="Your Email" />
                                    <button
                                        type="submit"
                                        className="btn btn-primary border-secondary py-3 px-4 position-absolute rounded-pill text-white border-0"
                                        style={{ top: 0, right: 0 }}
                                    >
                                        Subscribe Now
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="d-flex justify-content-end pt-3">
                                    <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href="">
                                        <FaTwitter />
                                    </a>
                                    <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href="">
                                        <FaFacebook />
                                    </a>
                                    <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href="">
                                        <FaYoutube />
                                    </a>
                                    <a className="btn btn-outline-secondary btn-md-square rounded-circle" href="">
                                        <FaLinkedin />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Footer End --> */}

            {/* <!-- Copyright Start --> */}
            <div className="container-fluid copyright bg-dark py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-md-start mb-3 mb-md-0 text-center">
                            <span className="text-light">
                                <a href="#">
                                    <FaCopyright className="text-light me-2" /> Your Site Name
                                </a>
                                , All right reserved.
                            </span>
                        </div>
                        <div className="col-md-6 text-md-end text-white my-auto text-center">
                            Designed By
                            <a className="border-bottom" href="https://htmlcodex.com">
                                HTML Codex
                            </a>
                            Distributed By
                            <a className="border-bottom" href="https://themewagon.com">
                                ThemeWagon
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Copyright End --> */}

            {/* <!-- Back to Top --> */}
            <a href="#" className="btn btn-primary border-primary rounded-circle back-to-top border-3">
                <FaArrowUp />
            </a>
        </>
    );
};
export default Footer;
