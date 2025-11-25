import { FaCarSide, FaExchangeAlt, FaPhoneAlt, FaUserShield } from 'react-icons/fa';

const Features_home = () => {
    return (
        <>
            {/* <!-- Featurs Section Start --> */}
            <div className="container-fluid featurs py-5">
                <div className="py-5 container">
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-3">
                            <div className="featurs-item rounded bg-light p-4 text-center">
                                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                                    <FaCarSide className="text-white fs-1 lead" />
                                </div>
                                <div className="featurs-content text-center">
                                    <h5>Free Shipping</h5>
                                    <p className="mb-0">Free on order over $300</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="featurs-item rounded bg-light p-4 text-center">
                                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                                    <FaUserShield className="text-white fs-1 lead" />
                                </div>
                                <div className="featurs-content text-center">
                                    <h5>Security Payment</h5>
                                    <p className="mb-0">100% security payment</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="featurs-item rounded bg-light p-4 text-center">
                                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                                    <FaExchangeAlt className="text-white fs-1 lead" />
                                </div>
                                <div className="featurs-content text-center">
                                    <h5>30 Day Return</h5>
                                    <p className="mb-0">30 day money guarantee</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="featurs-item rounded bg-light p-4 text-center">
                                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                                    <FaPhoneAlt className="text-white fs-1 lead" />
                                </div>
                                <div className="featurs-content text-center">
                                    <h5>24/7 Support</h5>
                                    <p className="mb-0">Support every time fast</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Featurs Section End --> */}
        </>
    );
};
export default Features_home;
