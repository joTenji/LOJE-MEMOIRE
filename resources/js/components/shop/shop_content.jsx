import Article from '@/components/layout/article';
import Categories from '@/components/shop/categories';
import { useForm } from '@inertiajs/react';
import { FaSearch } from 'react-icons/fa';

const Shop_content = ({ results, img_req }) => {
    const { data, setData, post } = useForm({
        image: null,
    });

    const handleSubmitSearch = (e) => {
        e.preventDefault();

        // Appel de la méthode post() d'Inertia
        // Le premier argument est la route Laravel à appeler : /login
        post('/loje/shop/dosearch');
    };
    return (
        <>
            {/* <!-- Fruits Shop Start--> */}
            <div className="container-fluid fruite py-3">
                <div className="py-5 container">
                    <h1 className="mb-4 text-center">Recherche d'articles</h1>
                    <div className="row g-4">
                        <div className="col-lg-12">
                            <div className="row g-4 mb-5">
                                <form onSubmit={handleSubmitSearch}>
                                    <div className="input-group w-100 d-flex mx-auto">
                                        <input
                                            className="form-control p-3"
                                            type="file"
                                            name="image"
                                            onChange={(e) => {
                                                setData('image', e.target.files[0]);
                                            }}
                                            accept=".jpg,.png,.jpeg,.webp"
                                            aria-describedby="search-icon-1"
                                        />
                                        <button id="search-icon-1" className="input-group-text p-3" type="submit">
                                            <FaSearch />
                                        </button>
                                    </div>
                                </form>
                                <div className="col-6"></div>
                            </div>
                            <div className="row g-4">
                                <Categories img_req={img_req} />
                                <div className="col-lg-9">
                                    {results ? (
                                        <div className="row g-4 justify-content-center">
                                            {results.similar_images &&
                                                results.similar_images.map((result, index) => {
                                                    return <Article path={`${result}`} key={`img-${index}`} />;
                                                })}
                                            {/* <Article path={`images/${result[index]}`} /> */}
                                            <div className="col-12">
                                                <div className="pagination d-flex justify-content-center mt-5">
                                                    <a href="#" className="rounded">
                                                        &laquo;
                                                    </a>
                                                    <a href="#" className="active rounded">
                                                        1
                                                    </a>
                                                    <a href="#" className="rounded">
                                                        2
                                                    </a>
                                                    <a href="#" className="rounded">
                                                        3
                                                    </a>
                                                    <a href="#" className="rounded">
                                                        4
                                                    </a>
                                                    <a href="#" className="rounded">
                                                        5
                                                    </a>
                                                    <a href="#" className="rounded">
                                                        6
                                                    </a>
                                                    <a href="#" className="rounded">
                                                        &raquo;
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <p className="lead text-center">Aucun element a afficher</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Fruits Shop End--> */}
        </>
    );
};
export default Shop_content;
