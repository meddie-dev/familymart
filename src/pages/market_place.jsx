import StoreNav from "../components/store_nav";
import Footer from "../components/footer";

export default function Company() {
    const products = [
        {
            id: 1,
            name: 'Aspirin 500mg',
            description: 'Anti-inflammatory.',
            price: '₱5.00',
            image: 'src/assets/item.png'
        },
        {
            id: 2,
            name: 'Vitamin C 1000mg',
            description: 'Boosts immune system.',
            price: '₱12.00',
            image: 'src/assets/item.png'
        },
        {
            id: 3,
            name: 'Cough Syrup',
            description: 'Relieves cough.',
            price: '₱8.00',
            image: 'src/assets/item.png'
        },
        {
            id: 4,
            name: 'Aspirin 500mg',
            description: 'Anti-inflammatory.',
            price: '₱5.00',
            image: 'src/assets/item.png'
        },
        {
            id: 5,
            name: 'Vitamin C 1000mg',
            description: 'Boosts immune system.',
            price: '₱12.00',
            image: 'src/assets/item.png'
        },
        {
            id: 6,
            name: 'Cough Syrup',
            description: 'Relieves cough.',
            price: '₱8.00',
            image: 'src/assets/item.png'
        },
        {
            id: 7,
            name: 'Aspirin 500mg',
            description: 'Anti-inflammatory.',
            price: '₱5.00',
            image: 'src/assets/item.png'
        },
        {
            id: 8,
            name: 'Vitamin C 1000mg',
            description: 'Boosts immune system.',
            price: '₱12.00',
            image: 'src/assets/item.png'
        },
        {
            id: 9,
            name: 'Cough Syrup',
            description: 'Relieves cough.',
            price: '₱8.00',
            image: 'src/assets/item.png'
        },
        {
            id: 10,
            name: 'Aspirin 500mg',
            description: 'Anti-inflammatory.',
            price: '₱5.00',
            image: 'src/assets/item.png'
        },
        {
            id: 11,
            name: 'Vitamin C 1000mg',
            description: 'Boosts immune system.',
            price: '₱12.00',
            image: 'src/assets/item.png'
        },
        {
            id: 12,
            name: 'Cough Syrup',
            description: 'Relieves cough.',
            price: '₱8.00',
            image: 'src/assets/item.png'
        },
        {
            id: 13,
            name: 'Aspirin 500mg',
            description: 'Anti-inflammatory.',
            price: '₱5.00',
            image: 'src/assets/item.png'
        },
        {
            id: 14,
            name: 'Vitamin C 1000mg',
            description: 'Boosts immune system.',
            price: '₱12.00',
            image: 'src/assets/item.png'
        },
        {
            id: 15,
            name: 'Cough Syrup',
            description: 'Relieves cough.',
            price: '₱8.00',
            image: 'src/assets/item.png'
        },
        {
            id: 16,
            name: 'Aspirin 500mg',
            description: 'Anti-inflammatory.',
            price: '₱5.00',
            image: 'src/assets/item.png'
        },
        {
            id: 517,
            name: 'Vitamin C 1000mg',
            description: 'Boosts immune system.',
            price: '₱12.00',
            image: 'src/assets/item.png'
        },
        {
            id: 18,
            name: 'Cough Syrup',
            description: 'Relieves cough.',
            price: '₱8.00',
            image: 'src/assets/item.png'
        },
        {
            id: 19,
            name: 'Aspirin 500mg',
            description: 'Anti-inflammatory.',
            price: '₱5.00',
            image: 'src/assets/item.png'
        },
        {
            id: 20,
            name: 'Vitamin C 1000mg',
            description: 'Boosts immune system.',
            price: '₱12.00',
            image: 'src/assets/item.png'
        },
        {
            id: 21,
            name: 'Cough Syrup',
            description: 'Relieves cough.',
            price: '₱8.00',
            image: 'src/assets/item.png'
        },
        {
            id: 22,
            name: 'Aspirin 500mg',
            description: 'Anti-inflammatory.',
            price: '₱5.00',
            image: 'src/assets/item.png'
        },
        {
            id: 23,
            name: 'Vitamin C 1000mg',
            description: 'Boosts immune system.',
            price: '₱12.00',
            image: 'src/assets/item.png'
        },
        {
            id: 24,
            name: 'Cough Syrup',
            description: 'Relieves cough.',
            price: '₱8.00',
            image: 'src/assets/item.png'
        },

    ]; return (
        <>
            <StoreNav />
            <div className="relative z-40 bg-gray-100 text-gray-800 py-10">
                <div className=" container mx-auto px-4 z-50">
                    <section className="mb-10 z-50">
                        <h1 className="text-3xl font-bold text-center mb-6">Marketplace</h1>
                        <p className="text-center max-w-2xl mx-auto">
                            Welcome to our marketplace! Browse our selection of high-quality pharmacy products below.
                        </p>
                    </section>

                    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 z-50">
                        {products.map(product => (
                            <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden z-50">
                                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                                    <p className="text-gray-600 mb-4">{product.description}</p>
                                    <p className="text-lg font-semibold">{product.price}</p>
                                    <button className="w-full mt-4 px-4 py-2 ">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </section>
                    
                </div>
                <div className="absolute top-0 left-0 z-0 w-full h-full opacity-10 ">
                    <video className=" object-cover w-full h-full" src="src/assets/Untitled design (1).mp4" autoPlay muted playsInline loop></video>
                </div>
            </div>
            

            <Footer />
        </>
    );
}