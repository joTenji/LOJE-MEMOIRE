import Auth_Body from '@/components/Auth/Auth_Body.jsx';
import Auth_Head from '@/components/Auth/Auth_Head.jsx';
import Auth_Title from '@/components/Auth/Auth_Title.jsx';
import Signup_form from '@/components/Auth/Signup_form.jsx';
import { Head } from '@inertiajs/react';

export default function Signup() {
    return (
        <>
            <Head title="Nous rejoindre" />
            <Auth_Head
                Titre={() => {
                    return <Auth_Title titre={'Join Us!'} sous_titre={'Créez un compte pour profiter de nos services'} />;
                }}
                Body={() => {
                    return (
                        <Auth_Body>
                            <Signup_form />
                        </Auth_Body>
                    );
                }}
            />
        </>
    );
}
