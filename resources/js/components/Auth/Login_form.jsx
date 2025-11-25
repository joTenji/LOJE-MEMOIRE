import { Link, useForm, usePage } from '@inertiajs/react';
import { FaEnvelope, FaExclamationTriangle, FaLock } from 'react-icons/fa';
const Login_form = () => {
    const { errors } = usePage().props;
    const { data, setData, post } = useForm({
        email: '',
        password: '',
        remember: false, // Pour la case "Se souvenir de moi"
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Appel de la méthode post() d'Inertia
        // Le premier argument est la route Laravel à appeler : /login
        post('/dologin', {
            preserveState: true,
            onSuccess: () => console.log('Connexion réussie !'),
        });
    };
    return (
        <>
            <h2 className="card-title mb-5 fw-bold text-center">Connexion</h2>

            {errors.email && (
                <div className="alert alert-danger">
                    <FaExclamationTriangle />{' '}
                    <span className="ms-2">Informations de connexion incorrectes. Veuillez vérifier votre email et mot de passe.</span>
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="mb-4 input-group">
                    <span className="input-group-text bg-white border-end-0">
                        <FaEnvelope />
                    </span>
                    <input
                        type="email"
                        className="form-control border-start-0"
                        id="emailConnect"
                        placeholder="email@example.com"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3 input-group">
                    <span className="input-group-text bg-white border-end-0">
                        <FaLock />
                    </span>
                    <input
                        type="password"
                        className="form-control border-start-0"
                        id="passwordConnect"
                        placeholder="Mot de passe"
                        onChange={(e) => setData('password', e.target.value)}
                    />
                </div>

                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="form-check">
                        <input
                            name="remember"
                            className="form-check-input"
                            type="checkbox"
                            checked={data.remember}
                            id="rememberMe"
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <label className="form-check-label" htmlFor="rememberMe">
                            Rester connecté
                        </label>
                    </div>
                    <Link href="/resetpass" className="text-decoration-none text-secondary">
                        Mot de passe oublié ?
                    </Link>
                </div>

                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-secondary btn-lg">
                        Connexion
                    </button>
                </div>
            </form>

            <div className="mt-4 text-center">
                <small>Vous n'avez pas de compte ?</small>
                <Link href="/signup" className="text-decoration-none d-block fw-bold text-secondary">
                    Creer un compte
                </Link>
            </div>
        </>
    );
};

export default Login_form;
