import { Link } from 'react-router-dom';
export default function Product() {
    return (
        <section className="mt-20 mb-10 max-w-[90%] mx-auto">
            <div className="font-bold text-center text-4xl text-gray-700">
                <h1>New Products</h1>
            </div>
            <div>
                <div className="flex flex-wrap max-md:flex-col">
                    <div className="w-1/5 mx-auto text-center max-md:w-3/5 max-sm:w-4/5">
                        <img className="w-full" src= {import.meta.env.BASE_URL + "../assets/item.png"} alt="items" />
                        <h3 className="text-md  text-gray-600">
                            FamilyMart - Item Default
                        </h3>
                        <p className="text-md m-2 text-gray-600"> &#36; 9.99</p>
                        <button className="m-5 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 hover:bg-white hover:text-indigo-400 duration-300 bg-indigo-400 text-white font-bold py-2 px-4 rounded">
                            Add to cart
                        </button>
                    </div>
                    <div className="w-1/5 mx-auto text-center max-md:w-3/5 max-sm:w-4/5">
                        <img className="w-full" src= {import.meta.env.BASE_URL + "../assets/item.png"} alt="items" />
                        <h3 className="text-md  text-gray-600">
                            FamilyMart - Item Default
                        </h3>
                        <p className="text-md m-2 text-gray-600"> &#36; 9.99</p>
                        <button className="m-5 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 hover:bg-white hover:text-indigo-400 duration-300 bg-indigo-400 text-white font-bold py-2 px-4 rounded">
                            Add to cart
                        </button>
                    </div>
                    <div className="w-1/5 mx-auto text-center max-md:w-3/5 max-sm:w-4/5">
                        <img className="w-full" src= {import.meta.env.BASE_URL + "../assets/item.png"} alt="items" />
                        <h3 className="text-md  text-gray-600">
                            FamilyMart - Item Default
                        </h3>
                        <p className="text-md m-2 text-gray-600"> &#36; 9.99</p>
                        <button className="m-5 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 hover:bg-white hover:text-indigo-400 duration-300 bg-indigo-400 text-white font-bold py-2 px-4 rounded">
                            Add to cart
                        </button>
                    </div>
                    <div className="w-1/5 mx-auto text-center max-md:w-3/5 max-sm:w-4/5">
                        <img className="w-full" src= {import.meta.env.BASE_URL + "../assets/item.png"} alt="items" />
                        <h3 className="text-md  text-gray-600">
                            FamilyMart - Item Default
                        </h3>
                        <p className="text-md m-2 text-gray-600"> &#36; 9.99</p>
                        <button className="m-5 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 hover:bg-white hover:text-indigo-400 duration-300 bg-indigo-400 text-white font-bold py-2 px-4 rounded">
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
            <div className="font-bold text-center text-4xl text-gray-700 mt-10">
                <span className=" mb-10 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-120 hover:bg-white hover:text-indigo-400 duration-300 bg-white border border-indigo-400 text-indigo-300 text-[20px] py-1 px-4 rounded">
                    <Link to="/shop">View All</Link>
                </span>
            </div>
        </section>
    )
}