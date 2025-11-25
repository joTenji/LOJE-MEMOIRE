import { FaEye, FaShoppingCart } from 'react-icons/fa';

const Article = ({ path }) => {
    return (
        <>
            <div className="col-md-6 col-lg-6 col-xl-4">
                <div className="rounded position-relative fruite-item">
                    <div className="fruite-img border-secondary border">
                        <img src={`/image/${path}`} className="img-fluid w-100 rounded-top" alt="" />
                    </div>
                    <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{ top: '10px', left: '10px' }}>
                        <FaShoppingCart />
                    </div>
                    <div className="p-4 border-secondary border-top-0 rounded-bottom border">
                        {/* <h4>Grapes</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p> */}
                        <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-3 fw-bold mb-0">$4.99</p>
                            <a href="#" className="btn border-secondary rounded-pill px-3 text-secondary border">
                                <FaEye className="me-2 text-secondary" />
                                Voir
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Article;
