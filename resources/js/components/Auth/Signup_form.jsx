import { Link, useForm, usePage } from '@inertiajs/react';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
const Signup_form = () => {
    const { errors, old } = usePage().props;
    const { data, setData, post, processing } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '', // Pour la case "Se souvenir de moi"
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Appel de la méthode post() d'Inertia
        // Le premier argument est la route Laravel à appeler : /login
        post('/dosignup', {
            // options ici, par exemple :
            onSuccess: () => console.log('Connexion réussie !'),
        });
    };
    // console.log(old);
    return (
        <>
            <h2 className="card-title mb-5 fw-bold text-center">Créer un compte</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <span className="input-group-text bg-white border-end-0">
                        <FaUser />
                    </span>
                    <input
                        type="text"
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        id="usernameRegister"
                        placeholder="Nom d'utilisateur"
                        name="name"
                        // value={old ? old.name : data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />
                </div>
                {errors.name && <div className="text-danger">{errors.name}</div>}

                <div className="mt-4 input-group">
                    <span className="input-group-text bg-white border-end-0">
                        <FaEnvelope />
                    </span>
                    <input
                        type="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        id="emailRegister"
                        placeholder="email@example.com"
                        name="email"
                        // value={old ? old.email : data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />
                </div>
                {errors.email && <div className="text-danger">{errors.email}</div>}

                <div className="mt-4 input-group">
                    <span className="input-group-text bg-white border-end-0">
                        <FaLock />
                    </span>
                    <input
                        type="password"
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        id="passwordRegister"
                        placeholder="Mot de passe"
                        name="password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />
                </div>
                {errors.password && <div className="text-danger">{errors.password}</div>}

                <div className="mt-4 input-group">
                    <span className="input-group-text bg-white border-end-0">
                        <FaLock />
                    </span>
                    <input
                        type="password"
                        className="form-control"
                        id="confirmPasswordRegister"
                        placeholder="Confirmer votre mot de passe"
                        name="password_confirmation"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />
                </div>

                <div className="d-grid gap-2 mt-4">
                    <button type="submit" className="btn btn-secondary btn-lg">
                        S'inscrire
                    </button>
                </div>
            </form>

            <div className="mt-4 text-center">
                <small>Vous avez déjà un compte ?</small>
                <Link href="/" className="text-decoration-none d-block fw-bold text-secondary">
                    Se connecter
                </Link>
            </div>
        </>
    );
};

export default Signup_form;
