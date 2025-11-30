const LoadingOverlay = ({ isVisible }) => {
    if (!isVisible) return null;

    return (
        <>
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                @keyframes pulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.6; transform: scale(1.05); }
                }
                @keyframes dotBounce {
                    0%, 80%, 100% { transform: translateY(0); opacity: 0.5; }
                    40% { transform: translateY(-10px); opacity: 1; }
                }
                .loading-overlay-custom {
                    animation: fadeIn 0.4s ease-in;
                }
                .loading-spinner-custom {
                    animation: spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
                }
                .loading-spinner-inner-custom {
                    animation: spin 0.8s linear infinite reverse;
                }
                .loading-text-custom {
                    animation: pulse 2s ease-in-out infinite;
                }
                .loading-dot-1 { animation: dotBounce 1.4s ease-in-out infinite; animation-delay: 0s; }
                .loading-dot-2 { animation: dotBounce 1.4s ease-in-out infinite; animation-delay: 0.2s; }
                .loading-dot-3 { animation: dotBounce 1.4s ease-in-out infinite; animation-delay: 0.4s; }
            `}</style>
            
            <div 
                className="loading-overlay-custom"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 223, 173, 0.1) 100%)',
                    backdropFilter: 'blur(5px)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 9999,
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '25px' }}>
                    <div style={{ position: 'relative', width: '80px', height: '80px' }}>
                        <div 
                            className="loading-spinner-custom"
                            style={{
                                width: '80px',
                                height: '80px',
                                border: '6px solid rgba(255, 181, 36, 0.15)',
                                borderTopColor: '#FFB524',
                                borderRightColor: '#FFB524',
                                borderRadius: '50%',
                                boxShadow: '0 0 20px rgba(255, 181, 36, 0.3)',
                            }}
                        ></div>
                        <div 
                            className="loading-spinner-inner-custom"
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '50px',
                                height: '50px',
                                border: '4px solid transparent',
                                borderTopColor: 'rgba(255, 181, 36, 0.5)',
                                borderRadius: '50%',
                            }}
                        ></div>
                    </div>
                    <div 
                        className="loading-text-custom"
                        style={{
                            color: '#FFB524',
                            fontSize: '20px',
                            fontWeight: 600,
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            textAlign: 'center',
                        }}
                    >
                        Recherche en cours
                        <span style={{ display: 'inline-flex', gap: '5px', marginLeft: '8px' }}>
                            <span 
                                className="loading-dot-1"
                                style={{
                                    display: 'inline-block',
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    backgroundColor: '#FFB524',
                                }}
                            ></span>
                            <span 
                                className="loading-dot-2"
                                style={{
                                    display: 'inline-block',
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    backgroundColor: '#FFB524',
                                }}
                            ></span>
                            <span 
                                className="loading-dot-3"
                                style={{
                                    display: 'inline-block',
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    backgroundColor: '#FFB524',
                                }}
                            ></span>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoadingOverlay;

