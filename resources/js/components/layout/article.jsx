import { Link } from '@inertiajs/react';
import { FaEye, FaShoppingCart } from 'react-icons/fa';
import { useMemo } from 'react';

const Article = ({ path, index = 0, currentPage = 1 }) => {
    // Générer un prix aléatoire basé sur le path pour avoir un prix cohérent
    // Utilise la même logique que le contrôleur PHP
    const price = useMemo(() => {
        // Créer un hash simple à partir du path
        let hash = 0;
        for (let i = 0; i < path.length; i++) {
            const char = path.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convertir en entier 32 bits
        }
        // Prix de base entre 5 et 50 basé sur le hash
        const basePrice = 5 + (Math.abs(hash) % 45);
        // Variation de -5 à +5 pour avoir des prix similaires mais pas identiques
        const variation = (Math.random() * 10 - 5);
        const finalPrice = Math.max(5, Math.min(50, basePrice + variation));
        return Math.round(finalPrice * 100) / 100; // Arrondir à 2 décimales
    }, [path]);

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
                        <div className="d-flex justify-content-between flex-lg-wrap align-items-center">
                            <div>
                                <div className="d-flex align-items-baseline">
                                    <span className="text-secondary fs-2 fw-bold me-2">${price.toFixed(2)}</span>
                                    {price > 30 && (
                                        <span className="badge bg-danger text-white" style={{ fontSize: '0.7rem' }}>
                                            Premium
                                        </span>
                                    )}
                                </div>
                                {price < 15 && (
                                    <small className="text-success fw-semibold">Meilleur prix</small>
                                )}
                            </div>
                            <Link 
                                href={`/loje/shop/detail/${encodeURIComponent(path)}?fromPage=${currentPage}`}
                                className="btn border-secondary rounded-pill px-3 text-secondary border"
                            >
                                <FaEye className="me-2 text-secondary" />
                                Voir
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Article;
