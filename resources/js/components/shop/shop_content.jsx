import Article from '@/components/layout/article';
import Categories from '@/components/shop/categories';
import LoadingOverlay from '@/components/layout/loading_overlay';
import { useForm, router } from '@inertiajs/react';
import { FaSearch, FaCloudUploadAlt, FaImage, FaTimes } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';

const Shop_content = ({ results, img_req, initialPage = 1 }) => {
    const { data, setData, post, processing } = useForm({
        image: null,
    });
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);
    
    // Mettre à jour la page quand initialPage change (venant de l'URL)
    useEffect(() => {
        setCurrentPage(initialPage);
    }, [initialPage]);
    
    // Réinitialiser à la page 1 quand de nouveaux résultats arrivent
    useEffect(() => {
        if (results && results.similar_images) {
            // Ne réinitialiser que si on n'a pas de page dans l'URL
            if (initialPage === 1) {
                setCurrentPage(1);
            }
        }
    }, [results, initialPage]);

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

    const handleFileChange = (file) => {
        if (file) {
            setSelectedFile(file);
            setData('image', file);
            
            // Créer une prévisualisation
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            handleFileChange(file);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            handleFileChange(file);
        }
    };

    const handleRemoveFile = () => {
        setSelectedFile(null);
        setPreview(null);
        setData('image', null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleSubmitSearch = (e) => {
        e.preventDefault();
        if (!data.image) {
            return;
        }
        setIsLoading(true);
        setCurrentPage(1); // Réinitialiser à la page 1 pour une nouvelle recherche
        // Appel de la méthode post() d'Inertia
        post('/loje/shop/dosearch');
    };

    // Calcul de la pagination
    const imagesPerPage = 10;
    const totalImages = results && results.similar_images ? results.similar_images.length : 0;
    const totalPages = Math.ceil(totalImages / imagesPerPage);
    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    const currentImages = results && results.similar_images ? results.similar_images.slice(startIndex, endIndex) : [];

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            // Mettre à jour l'URL avec la page actuelle sans recharger les données
            // Utiliser replace pour ne pas ajouter d'entrée dans l'historique
            window.history.replaceState({}, '', `/loje/shop?page=${page}`);
            // Scroll vers le haut de la section des résultats
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    return (
        <>
            <LoadingOverlay isVisible={isLoading} />
            {/* <!-- Fruits Shop Start--> */}
            <div className="container-fluid fruite py-3">
                <div className="py-5 container">
                    <h1 className="mb-4 text-center">Recherche d'articles</h1>
                    <div className="row g-4">
                        <div className="col-lg-12">
                            <div className="row g-4 mb-5">
                                <form onSubmit={handleSubmitSearch} className="w-100">
                                    <div 
                                        className={`modern-upload-container ${isDragging ? 'dragging' : ''} ${selectedFile ? 'has-file' : ''}`}
                                        onDragOver={handleDragOver}
                                        onDragLeave={handleDragLeave}
                                        onDrop={handleDrop}
                                        style={{
                                            position: 'relative',
                                            maxWidth: '800px',
                                            margin: '0 auto',
                                            borderRadius: '20px',
                                            border: `3px dashed ${isDragging ? 'var(--bs-secondary)' : '#ddd'}`,
                                            backgroundColor: isDragging ? 'rgba(255, 181, 36, 0.05)' : '#fff',
                                            transition: 'all 0.3s ease',
                                            padding: preview ? '0' : '40px',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        {preview ? (
                                            <div style={{ position: 'relative', width: '100%' }}>
                                                <img 
                                                    src={preview} 
                                                    alt="Preview" 
                                                    style={{
                                                        width: '100%',
                                                        height: '300px',
                                                        objectFit: 'cover',
                                                        display: 'block',
                                                    }}
                                                />
                                                <button
                                                    type="button"
                                                    onClick={handleRemoveFile}
                                                    className="btn btn-danger rounded-circle position-absolute"
                                                    style={{
                                                        top: '10px',
                                                        right: '10px',
                                                        width: '40px',
                                                        height: '40px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        zIndex: 10,
                                                    }}
                                                >
                                                    <FaTimes />
                                                </button>
                                                <div className="position-absolute bottom-0 start-0 end-0 p-3" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div className="text-white">
                                                            <FaImage className="me-2" />
                                                            <span>{selectedFile?.name}</span>
                                                        </div>
                                                        <button 
                                                            type="submit" 
                                                            className="btn btn-secondary rounded-pill px-4"
                                                            disabled={processing}
                                                        >
                                                            <FaSearch className="me-2" />
                                                            Rechercher
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <>
                                                <input
                                                    ref={fileInputRef}
                                                    type="file"
                                                    name="image"
                                                    onChange={handleFileInputChange}
                                                    accept=".jpg,.png,.jpeg,.webp"
                                                    style={{ display: 'none' }}
                                                    id="file-upload-shop"
                                                />
                                                <label 
                                                    htmlFor="file-upload-shop"
                                                    style={{
                                                        cursor: 'pointer',
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        textAlign: 'center',
                                                        width: '100%',
                                                    }}
                                                >
                                                    <FaCloudUploadAlt 
                                                        style={{
                                                            fontSize: '4rem',
                                                            color: 'var(--bs-secondary)',
                                                            marginBottom: '20px',
                                                            animation: isDragging ? 'bounce 0.5s infinite' : 'none',
                                                        }}
                                                    />
                                                    <h5 className="mb-2 text-secondary">
                                                        {isDragging ? 'Déposez votre image ici' : 'Glissez-déposez votre image'}
                                                    </h5>
                                                    <p className="text-muted mb-3">ou</p>
                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-secondary rounded-pill px-4 mb-3"
                                                        onClick={() => fileInputRef.current?.click()}
                                                    >
                                                        <FaImage className="me-2" />
                                                        Parcourir les fichiers
                                                    </button>
                                                    <small className="text-muted">Formats acceptés: JPG, PNG, JPEG, WEBP</small>
                                                </label>
                                            </>
                                        )}
                                    </div>
                                </form>
                            </div>
                            <div className="row g-4">
                                <Categories img_req={img_req} />
                                <div className="col-lg-9">
                                    {results && totalImages > 0 ? (
                                        <>
                                            <div className="row g-4 justify-content-center">
                                                {currentImages.map((result, index) => {
                                                    const globalIndex = startIndex + index;
                                                    return <Article path={`${result}`} index={globalIndex} currentPage={currentPage} key={`img-${globalIndex}`} />;
                                                })}
                                            </div>
                                            {totalPages > 1 && (
                                                <div className="col-12">
                                                    <div className="pagination d-flex justify-content-center mt-5">
                                                        <a
                                                            href="#"
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                handlePageChange(currentPage - 1);
                                                            }}
                                                            className={`rounded ${currentPage === 1 ? 'disabled' : ''}`}
                                                            style={{
                                                                pointerEvents: currentPage === 1 ? 'none' : 'auto',
                                                                opacity: currentPage === 1 ? 0.5 : 1,
                                                                cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                                                            }}
                                                        >
                                                            &laquo;
                                                        </a>
                                                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                                            <a
                                                                key={page}
                                                                href="#"
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    handlePageChange(page);
                                                                }}
                                                                className={`rounded ${currentPage === page ? 'active' : ''}`}
                                                            >
                                                                {page}
                                                            </a>
                                                        ))}
                                                        <a
                                                            href="#"
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                handlePageChange(currentPage + 1);
                                                            }}
                                                            className={`rounded ${currentPage === totalPages ? 'disabled' : ''}`}
                                                            style={{
                                                                pointerEvents: currentPage === totalPages ? 'none' : 'auto',
                                                                opacity: currentPage === totalPages ? 0.5 : 1,
                                                                cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                                                            }}
                                                        >
                                                            &raquo;
                                                        </a>
                                                    </div>
                                                    <p className="text-center mt-3 text-muted">
                                                        Page {currentPage} sur {totalPages} - Affichage des images {startIndex + 1} à {Math.min(endIndex, totalImages)} sur {totalImages} résultats
                                                    </p>
                                                </div>
                                            )}
                                        </>
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
