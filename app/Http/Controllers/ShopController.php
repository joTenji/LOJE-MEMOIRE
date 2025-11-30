<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Http;

class ShopController extends Controller
{
    //
    public function index(Request $request){
        $results = session('results', null);
        $img_req = session('img_req', null);
        $page = $request->get('page', 1);

        return Inertia::render('shop/index',[
            'results' => $results,
            'img_req' => $img_req,
            'initialPage' => (int)$page
        ]);
    }

    public function dosearch(Request $request)
    {
        // 1. Validation Laravel
        $request->validate([
            'image' => 'required|image',
        ]);

        $file = $request->file('image');

        $base64 = base64_encode(file_get_contents($file));

        // 2. Appel à l'API Python
        $response = Http::attach(
            'file',          // Nom du champ attendu par Python
            file_get_contents($file),
            $file->getClientOriginalName()
        )->post('http://127.0.0.1:5000/search'); // URL API Python

        // 3. Gestion d’erreur si l’API Python n’est pas OK
        if (!$response->successful()) {
            return back()->withErrors([
                'image' => "L'analyse a échoué : API inaccessible"
            ]);
        }

        // 4. On récupère le JSON envoyé par Python
        $result = $response->json();

        
        return redirect()
            ->route('shop')
            ->with(['results' => $result, 'img_req' => $base64]);
    }

    public function detail($path)
    {
        // Générer des informations factices pour l'article
        $articleInfo = [
            'name' => $this->generateArticleName(),
            'description' => $this->generateDescription(),
            'price' => $this->generatePrice($path),
            'category' => $this->generateCategory(),
            'brand' => $this->generateBrand(),
            'size' => $this->generateSize(),
            'color' => $this->generateColor(),
            'material' => $this->generateMaterial(),
            'condition' => $this->generateCondition(),
            'stock' => rand(1, 50),
            'rating' => round((rand(30, 50) / 10), 1),
            'reviews' => rand(10, 500),
        ];

        // Générer des informations de contact de la boutique
        $shopName = $this->generateShopName();
        $shopInfo = [
            'name' => $shopName,
            'email' => $this->generateEmail($shopName),
            'phone' => $this->generatePhone(),
            'address' => $this->generateAddress(),
            'city' => $this->generateCity(),
            'postal_code' => $this->generatePostalCode(),
            'opening_hours' => $this->generateOpeningHours(),
            'rating' => round((rand(35, 50) / 10), 1),
            'reviews_count' => rand(50, 1000),
        ];

        return Inertia::render('shop/detail', [
            'path' => $path,
            'article' => $articleInfo,
            'shop' => $shopInfo,
        ]);
    }

    private function generateArticleName()
    {
        $names = [
            'Article Premium Élégant',
            'Produit de Qualité Supérieure',
            'Modèle Exclusif Design',
            'Collection Limitée',
            'Article Tendance Moderne',
            'Produit Haut de Gamme',
            'Design Unique et Raréfié',
            'Article de Luxe Authentique',
        ];
        return $names[array_rand($names)];
    }

    private function generateDescription()
    {
        $descriptions = [
            'Cet article exceptionnel allie élégance et fonctionnalité. Conçu avec soin et attention aux détails, il saura répondre à vos attentes les plus élevées. Matériaux de première qualité garantissant durabilité et confort.',
            'Un produit soigneusement sélectionné pour sa qualité et son design raffiné. Parfait pour ceux qui recherchent l\'excellence et l\'authenticité. Idéal pour un usage quotidien ou des occasions spéciales.',
            'Découvrez ce magnifique article qui combine style moderne et tradition. Fabriqué avec des matériaux sélectionnés, il offre un confort optimal et une résistance à toute épreuve.',
            'Cet article unique se distingue par son design innovant et sa qualité irréprochable. Un choix parfait pour ceux qui apprécient les produits de qualité supérieure.',
        ];
        return $descriptions[array_rand($descriptions)];
    }

    private function generatePrice($path)
    {
        // Générer un prix basé sur le hash du path pour avoir un prix cohérent
        $hash = crc32($path);
        $basePrice = 5 + ($hash % 45); // Prix entre 5 et 50
        $variation = (rand(-500, 500) / 100); // Variation de -5 à +5
        return round(max(5, min(50, $basePrice + $variation)), 2);
    }

    private function generateCategory()
    {
        $categories = ['Vêtements', 'Chaussures', 'Accessoires', 'Électronique', 'Maison & Décoration', 'Sport & Loisirs'];
        return $categories[array_rand($categories)];
    }

    private function generateBrand()
    {
        $brands = ['StyleCo', 'FashionPro', 'EliteBrand', 'PremiumStyle', 'DesignLab', 'LuxuryLine'];
        return $brands[array_rand($brands)];
    }

    private function generateSize()
    {
        $sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'Unique', 'Standard'];
        return $sizes[array_rand($sizes)];
    }

    private function generateColor()
    {
        $colors = ['Noir', 'Blanc', 'Bleu', 'Rouge', 'Vert', 'Gris', 'Beige', 'Marron', 'Rose', 'Violet'];
        return $colors[array_rand($colors)];
    }

    private function generateMaterial()
    {
        $materials = ['Coton', 'Polyester', 'Cuir', 'Laine', 'Soie', 'Lin', 'Cachemire', 'Denim', 'Synthétique'];
        return $materials[array_rand($materials)];
    }

    private function generateCondition()
    {
        $conditions = ['Neuf', 'Comme neuf', 'Très bon état', 'Excellent état'];
        return $conditions[array_rand($conditions)];
    }

    private function generateShopName()
    {
        $shops = [
            'Boutique Élégance',
            'Style & Co',
            'Fashion House',
            'Premium Shop',
            'Design Store',
            'Luxury Boutique',
            'Chic & Moderne',
            'Trendy Shop',
        ];
        return $shops[array_rand($shops)];
    }

    private function generateEmail($shopName = null)
    {
        $domains = ['gmail.com', 'outlook.com', 'yahoo.com', 'hotmail.com'];
        if (!$shopName) {
            $shopName = $this->generateShopName();
        }
        $shopName = strtolower(str_replace([' ', '&'], '', $shopName));
        return $shopName . '@' . $domains[array_rand($domains)];
    }

    private function generatePhone()
    {
        return '+33 ' . rand(1, 9) . ' ' . rand(10, 99) . ' ' . rand(10, 99) . ' ' . rand(10, 99) . ' ' . rand(10, 99);
    }

    private function generateAddress()
    {
        $streets = ['Rue de la Mode', 'Avenue du Style', 'Boulevard Fashion', 'Rue des Boutiques', 'Place du Commerce', 'Avenue Centrale'];
        return rand(1, 200) . ' ' . $streets[array_rand($streets)];
    }

    private function generateCity()
    {
        $cities = ['Paris', 'Lyon', 'Marseille', 'Toulouse', 'Nice', 'Nantes', 'Strasbourg', 'Montpellier', 'Bordeaux', 'Lille'];
        return $cities[array_rand($cities)];
    }

    private function generatePostalCode()
    {
        return str_pad(rand(1000, 99999), 5, '0', STR_PAD_LEFT);
    }

    private function generateOpeningHours()
    {
        return [
            'Lundi - Vendredi' => '9h00 - 19h00',
            'Samedi' => '10h00 - 18h00',
            'Dimanche' => 'Fermé',
        ];
    }
}
