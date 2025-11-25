import Auth_Body from '@/components/Auth/Auth_Body.jsx';
import Auth_Head from '@/components/Auth/Auth_Head.jsx';
import Auth_Title from '@/components/Auth/Auth_Title.jsx';
import Login_form from '@/components/Auth/Login_form.jsx';
import { Head } from '@inertiajs/react';

export default function Login() {
    return (
        <>
            <Head title="Se connecter" />
            <Auth_Head
                Titre={() => {
                    return (
                        <Auth_Title titre={'Welcome back!'} sous_titre={'Connectez-vous à votre compte pour continuer à accéder à nos services.'} />
                    );
                }}
                Body={() => {
                    return (
                        <Auth_Body>
                            <Login_form />
                        </Auth_Body>
                    );
                }}
            />
        </>
    );
}
