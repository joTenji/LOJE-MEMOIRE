const Auth_Head = ({ Titre, Body }) => {
    return (
        <div className="container-fluid">
            <div className="row vh-100 g-0">
                <Titre />
                <Body />
            </div>
        </div>
    );
};

export default Auth_Head;
