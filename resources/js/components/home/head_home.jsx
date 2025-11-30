import { useForm } from '@inertiajs/react';
import LoadingOverlay from '@/components/layout/loading_overlay';
import { useState, useEffect } from 'react';

const Head_home = () => {
    const { data, setData, post, processing } = useForm({
        image: null,
    });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (processing) {
            setIsLoading(true);
        } else {
            // Délai pour laisser l'animation se terminer
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 300);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [processing]);

    const handleSubmitSearch = (e) => {
        e.preventDefault();
        if (!data.image) {
            return;
        }
        setIsLoading(true);
        // Appel de la méthode post() d'Inertia
        post('/loje/shop/dosearch');
    };
    return (
        <>
            <LoadingOverlay isVisible={isLoading} />
            {/* <!-- Hero Start --> */}
            <div className="container-fluid py-5 mb-5 hero-header">
                <div className="py-5 container">
                    <div className="row g-5 align-items-center">
                        <div className="col-md-12 col-lg-7">
                            <h4 className="mb-3 text-dark">Recherche par image</h4>
                            <h1 className="mb-5 display-3 text-secondary">Trouvez l'article de votre choix</h1>
                            <form className="position-relative mx-auto" onSubmit={handleSubmitSearch}>
                                <input
                                    className="form-control border-secondary w-75 py-3 px-4 rounded-pill border-2"
                                    type="file"
                                    name="image"
                                    onChange={(e) => {
                                        setData('image', e.target.files[0]);
                                    }}
                                    accept=".jpg,.png,.jpeg,.webp"
                                />
                                <button
                                    type="submit"
                                    className="btn btn-secondary border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100 border-2"
                                    style={{ top: 0, right: '25%' }}
                                >
                                    Rechercher
                                </button>
                            </form>
                        </div>
                        <div className="col-md-12 col-lg-5">
                            <div id="carouselId" className="carousel slide position-relative" data-bs-ride="carousel">
                                <div className="carousel-inner" role="listbox">
                                    <div className="carousel-item active rounded">
                                        <img
                                            src="template/img/slider-1.jpg"
                                            className="img-fluid w-100 h-100 bg-secondary rounded"
                                            alt="First slide"
                                        />
                                        <a href="#" className="btn px-4 py-2 text-white rounded">
                                            Vetements
                                        </a>
                                    </div>
                                    <div className="carousel-item rounded">
                                        <img src="template/img/slider-2.jpg" className="img-fluid w-100 h-100 rounded" alt="Second slide" />
                                        <a href="#" className="btn px-4 py-2 text-white rounded">
                                            Chaussures
                                        </a>
                                    </div>
                                    <div className="carousel-item rounded">
                                        <img src="template/img/slider-3.jpg" className="img-fluid w-100 h-100 rounded" alt="Second slide" />
                                        <a href="#" className="btn px-4 py-2 text-white rounded">
                                            Vestes
                                        </a>
                                    </div>
                                    <div className="carousel-item rounded">
                                        <img src="template/img/slider-4.jpg" className="img-fluid w-100 h-100 rounded" alt="Second slide" />
                                        <a href="#" className="btn px-4 py-2 text-white rounded">
                                            Maillots
                                        </a>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Hero End --> */}
        </>
    );
};
export default Head_home;
