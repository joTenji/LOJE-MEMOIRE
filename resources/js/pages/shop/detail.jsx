import Footer from '@/components/layout/footer';
import NavBar from '@/components/layout/navbar';
import Head_shop from '@/components/shop/head_shop';
import { Head, router, usePage } from '@inertiajs/react';
import { FaStar, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaShoppingCart, FaArrowLeft } from 'react-icons/fa';

const Detail = ({ path, article, shop }) => {
    const { url } = usePage();
    
    const handleBack = () => {
        // Récupérer la page depuis l'URL
        const urlParams = new URLSearchParams(window.location.search);
        const fromPage = urlParams.get('fromPage') || '1';
        
        // Utiliser window.location pour forcer un rechargement complet de la page
        // Cela garantit que les résultats sont rechargés depuis la session Laravel
        window.location.href = `/loje/shop?page=${fromPage}`;
    };
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={i} className="text-warning" />);
        }
        if (hasHalfStar) {
            stars.push(<FaStar key="half" className="text-warning" style={{ opacity: 0.5 }} />);
        }
        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<FaStar key={`empty-${i}`} className="text-muted" />);
        }
        return stars;
    };

    return (
        <>
            <Head title={`${article.name} | Loje shop`} />
            <NavBar />
            <Head_shop title={article.name} />
            
            <div className="container-fluid fruite py-5">
                <div className="container py-5">
                    <button 
                        onClick={handleBack}
                        className="btn btn-secondary mb-4 d-inline-flex align-items-center"
                    >
                        <FaArrowLeft className="me-2" />
                        Retour à la recherche
                    </button>

                    <div className="row g-4">
                        {/* Image de l'article */}
                        <div className="col-lg-6">
                            <div className="rounded position-relative">
                                <img 
                                    src={`/image/${path}`} 
                                    className="img-fluid w-100 rounded border border-secondary" 
                                    alt={article.name}
                                    style={{ maxHeight: '600px', objectFit: 'contain' }}
                                />
                            </div>
                        </div>

                        {/* Informations de l'article */}
                        <div className="col-lg-6">
                            <div className="border-secondary border rounded p-4">
                                <h1 className="mb-3 text-secondary">{article.name}</h1>
                                
                                {/* Note et avis */}
                                <div className="d-flex align-items-center mb-3">
                                    <div className="me-3">
                                        {renderStars(article.rating)}
                                    </div>
                                    <span className="text-muted">
                                        {article.rating}/5 ({article.reviews} avis)
                                    </span>
                                </div>

                                {/* Prix */}
                                <div className="mb-4">
                                    <div className="d-flex align-items-baseline">
                                        <span className="text-secondary fs-1 fw-bold me-3">
                                            ${article.price.toFixed(2)}
                                        </span>
                                        {article.price > 30 && (
                                            <span className="badge bg-danger text-white fs-6">
                                                Premium
                                            </span>
                                        )}
                                    </div>
                                    {article.price < 15 && (
                                        <small className="text-success fw-semibold d-block mt-2">
                                            ✓ Meilleur prix garanti
                                        </small>
                                    )}
                                </div>

                                {/* Informations détaillées */}
                                <div className="mb-4">
                                    <h5 className="mb-3">Informations du produit</h5>
                                    <div className="row g-3">
                                        <div className="col-6">
                                            <strong>Marque:</strong> {article.brand}
                                        </div>
                                        <div className="col-6">
                                            <strong>Catégorie:</strong> {article.category}
                                        </div>
                                        <div className="col-6">
                                            <strong>Taille:</strong> {article.size}
                                        </div>
                                        <div className="col-6">
                                            <strong>Couleur:</strong> {article.color}
                                        </div>
                                        <div className="col-6">
                                            <strong>Matériau:</strong> {article.material}
                                        </div>
                                        <div className="col-6">
                                            <strong>État:</strong> {article.condition}
                                        </div>
                                        <div className="col-12">
                                            <strong>Stock disponible:</strong> {article.stock} unité(s)
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="mb-4">
                                    <h5 className="mb-3">Description</h5>
                                    <p className="text-muted">{article.description}</p>
                                </div>

                                {/* Bouton d'action */}
                                <button className="btn btn-secondary w-100 py-3 rounded-pill">
                                    <FaShoppingCart className="me-2" />
                                    Ajouter au panier
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Informations de la boutique */}
                    <div className="row g-4 mt-4">
                        <div className="col-12">
                            <div className="border-secondary border rounded p-4">
                                <h3 className="mb-4 text-secondary">
                                    <FaMapMarkerAlt className="me-2" />
                                    Informations de la boutique
                                </h3>
                                
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <h5 className="mb-3">{shop.name}</h5>
                                        
                                        {/* Note de la boutique */}
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="me-2">
                                                {renderStars(shop.rating)}
                                            </div>
                                            <span className="text-muted">
                                                {shop.rating}/5 ({shop.reviews_count} avis clients)
                                            </span>
                                        </div>

                                        {/* Coordonnées */}
                                        <div className="mb-3">
                                            <p className="mb-2">
                                                <FaMapMarkerAlt className="me-2 text-secondary" />
                                                {shop.address}<br />
                                                {shop.postal_code} {shop.city}
                                            </p>
                                            <p className="mb-2">
                                                <FaPhone className="me-2 text-secondary" />
                                                <a href={`tel:${shop.phone}`} className="text-decoration-none">
                                                    {shop.phone}
                                                </a>
                                            </p>
                                            <p className="mb-2">
                                                <FaEnvelope className="me-2 text-secondary" />
                                                <a href={`mailto:${shop.email}`} className="text-decoration-none">
                                                    {shop.email}
                                                </a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <h5 className="mb-3">
                                            <FaClock className="me-2" />
                                            Horaires d'ouverture
                                        </h5>
                                        <ul className="list-unstyled">
                                            {Object.entries(shop.opening_hours).map(([day, hours]) => (
                                                <li key={day} className="mb-2 d-flex justify-content-between">
                                                    <strong>{day}:</strong>
                                                    <span>{hours}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Detail;

