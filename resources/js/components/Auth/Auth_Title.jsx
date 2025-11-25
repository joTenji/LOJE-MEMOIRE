const Auth_Title = ({ titre, sous_titre }) => {
    return (
        <div className="col-lg-6 d-none d-lg-flex bg-secondary align-items-center justify-content-center">
            <div className="p-5 text-center">
                <h1 className="display-4 fw-bold mb-3">{titre}</h1>
                <p className="lead">{sous_titre}</p>
            </div>
        </div>
    );
};
export default Auth_Title;
