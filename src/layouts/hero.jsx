
export default function Hero() {
    return (
        <>
            <div className="hero min-h-screen bg-base-200 mx-5 my-5 rounded-3xl relative">
                <div className="absolute inset-0 bg-[url('../assets/pic1.jpg')] bg-cover bg-center blur-sm opacity-85 rounded-3xl brightness-[0.7] "></div>
                <div className="hero-content py-[15%] text-center flex justify-center content-center relative z-10  ">
                    <div className="w-md max-md:max-w-md  max-sm:mt-20">
                        <div className="flex gap-2 justify-center bottom-4 border-2 border-white-100 p-2 opacity-50 rounded-full hover:opacity-100 hover:cursor-pointer hover:transition ease-in-out delay-200 text-white max-md:text-sm">Announcing out next round of funding.
                            <span className="flex flex-row gap-2 hover:text-sky-800">Read more
                                <svg color="white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </span>
                        </div>
                        <h1 className="text-sky-100 text-7xl font-bold py-5 max-md:text-5xl max-sm:text-4xl">Data to enrich your <br /> online business</h1>
                        <p className="text-white py-6 max-md:text-sm max-md:py-4 max-sm:text-xs max-sm:pb-5">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem <br />cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                        <div className="flex flex-row gap-2 justify-center">
                            <button className="btn btn-primary">Get Started</button>
                            <div className="flex flex-row gap-2 justify-center p-2 ">
                                <p className="text-white `text-sm font-semibold">Learn more</p>
                                <svg color="white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}