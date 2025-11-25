import Footer from '@/components/layout/footer';
import NavBar from '@/components/layout/navbar';
import Head_shop from '@/components/shop/head_shop';
import Shop_content from '@/components/shop/shop_content';
import { Head } from '@inertiajs/react';
const Index = ({ results, img_req }) => {
    return (
        <>
            <Head title="Recherche d'articles | Loje shop" />
            <NavBar />
            <Head_shop title={'Recherche'} />
            <Shop_content results={results} img_req={img_req} />
            <Footer />
        </>
    );
};
export default Index;
