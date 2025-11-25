import Articles_Home from '@/components/home/Articles_home';
import Features_home from '@/components/home/features_home';
import Head_home from '@/components/home/head_home';
import Footer from '@/components/layout/footer';
import NavBar from '@/components/layout/navbar';
import { Head } from '@inertiajs/react';

const Home = () => {
    return (
        <>
            <Head title="Page d'accueil | Loje shop" />
            <NavBar />
            <Head_home />
            <Features_home />
            <Articles_Home />
            <Footer />
        </>
    );
};
export default Home;
