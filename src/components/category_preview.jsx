
export default  function CategoryPreview({category}) {
    return (
        <>
            <div className="max-h-[100%] mx-auto mt-[-2rem] mb-10 p-5 bg-gradient-to-b from-gray-50 to-gray-100 max-lg:py-20 ">

                <div className="max-w-[97%] mx-auto my-[2rem] max-lg:my-3">
                    <h2 className="text-2xl font-bold text-gray-800 ">Shop by Collection</h2>
                    <p className="text-lg text-gray-400 font-semibold py-4 max-sm:text-md max-sm:font-normal">Each season, we collaborate with world-class designers to create a collection inspired by the latest advancements in pharmacy and healthcare.</p>
                </div>

                <div className="max-w-[97%] mx-auto flex flex-row gap-9  max-lg:flex-row max-lg:max-w-[97%] max-lg:mx-auto max-md:flex-col max-md:max-w-[90%] max-sm:max-w-[97%]">
                    <div >
                        <img className="rounded-xl brightness-75" src="src/assets/item.png" alt="" />
                        <h3 className="text-md font-bold text-gray-700 my-3">Handcrafted Collection</h3>
                        <p className="text-sm font-medium text-gray-400">Keep your phone, keys, and wallet together, so you can lose everything at once.</p>
                    </div>
                    <div>
                        <img className="rounded-xl brightness-75" src="src/assets/item.png" alt="" />
                        <h3 className="text-md font-bold text-gray-700 my-3">Handcrafted Collection</h3>
                        <p className="text-sm font-medium text-gray-400">Keep your phone, keys, and wallet together, so you can lose everything at once.</p>
                    </div>
                    <div>
                        <img className="rounded-xl brightness-75" src="src/assets/item.png" alt="" />
                        <h3 className="text-md font-bold text-gray-700 my-3">Handcrafted Collection</h3>
                        <p className="text-sm font-medium text-gray-400">Keep your phone, keys, and wallet together, so you can lose everything at once.</p>
                    </div>
                </div>
                
            </div>
        </>
    )
}