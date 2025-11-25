import { FaShop } from 'react-icons/fa6';

const Categories = ({ img_req }) => {
    return (
        <>
            <div className="col-lg-3">
                <div className="row g-4">
                    {img_req && (
                        <div className="col-lg-12 mb-4">
                            <h4>Image requete</h4>
                            <div className="fruite-img border-secondary border">
                                <img src={`data:image/jpeg;base64,${img_req}`} className="img-fluid w-100 rounded-top" alt="" />
                            </div>
                        </div>
                    )}

                    <div className="col-lg-12">
                        <div className="mb-3">
                            <h4>Categories</h4>
                            <ul className="list-unstyled fruite-categorie">
                                <li>
                                    <div className="d-flex justify-content-between fruite-name">
                                        <a href="#">
                                            <FaShop className="me-2" />
                                            Chemises
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex justify-content-between fruite-name">
                                        <a href="#">
                                            <FaShop className="me-2" />
                                            Robes
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex justify-content-between fruite-name">
                                        <a href="#">
                                            <FaShop className="me-2" />
                                            Vestes
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex justify-content-between fruite-name">
                                        <a href="#">
                                            <FaShop className="me-2" />
                                            Maillot de foot
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex justify-content-between fruite-name">
                                        <a href="#">
                                            <FaShop className="me-2" />
                                            Chaussures
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="mb-3">
                            <h4 className="mb-2">Price</h4>
                            <input
                                type="range"
                                className="form-range w-100"
                                id="rangeInput"
                                name="rangeInput"
                                min="0"
                                max="500"
                                value="0"
                                onInput={() => {
                                    amount.value = rangeInput.value;
                                }}
                            />
                            <output id="amount" name="amount" min-value="0" max-value="500" htmlFor="rangeInput">
                                0
                            </output>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Categories;
