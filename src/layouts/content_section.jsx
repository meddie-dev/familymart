export default function ContentSection() {
    return (
        <section className="container mx-auto p- min-h-[100vh] max-w-[90%] my-10 flex flex-row justify-evenly">

            <div className="relative max-h-[500px] max-w-[550px] m-5 p-5 flex flex-col justify-end  rounded-3xl max-md:hidden ">
                
                <div className="absolute inset-0 bg-[url('src/assets/task2.png')] bg-fill bg-center blur-[1px] opacity-95 rounded-3xl brightness-[0.5] "></div>
                <div className="absolute top-0 left-0 translate-y-52 translate-x-5 z-0 opacity-20">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-40 h-40">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
                    </svg>
                </div>
                <div className="relative z-10 text-white font-bold text-md p-3 m-3" >
                    <div className="flex flex-row">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-9 h-9">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                        <h3 className="font-bold text-white text-2xl">FamilyMart</h3>
                    </div>
                    <h3 className="py-5">
                        “Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu praesent at a. Ornare arcu gravida natoque erat et cursus tortor.”
                    </h3>
                    <span className="text-sm font-medium">Judith Rogers, <span className="text-gray-200 font-thin">CEO at Workcation</span></span>
                </div>

            </div>

            <div className="text-left max-w-xl max-sm:text-center">

                <div className="p-3 m-3">
                    <span className="text-[#4F46E5] text-xl font-bold max-sm:text-md ">Company values</span>
                    <h4 className="py-3 text-4xl font-bold max-sm:text-2xl">On a mission to empower remote teams</h4>
                    <p className="py-4 text-gray-500 text-lg max-sm:text-sm">
                        Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                    </p>
                    <p className="py-4 text-gray-500 text-lg max-sm:text-sm">
                        Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                    </p>
                    <p className="py-4 text-gray-500 text-lg max-sm:text-sm">
                        Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                    </p>
                </div>
                <hr className="border-1 border-gray-400 max-w-md mx-auto" />
                <br />
                <div className="flex flex-row justify-between">
                    <div className="p-3 m-3">
                        <h4 className="text-sm font-bold text-gray-600">Founded</h4>
                        <span className="text-3xl font-bold text-gray-800">2021</span>
                    </div>
                    <div className="p-3 m-3">
                        <h4 className="text-sm font-bold text-gray-600">Empoyees</h4>
                        <span className="text-3xl font-bold text-gray-800">37</span>
                    </div>
                    <div className="p-3 m-3">
                        <h4 className="text-sm font-bold text-gray-600">Country</h4>
                        <span className="text-3xl font-bold text-gray-800">12</span>
                    </div>
                    <div className="p-3 m-3">
                        <h4 className="text-sm font-bold text-gray-600">Raised</h4>
                        <span className="text-3xl font-bold text-gray-800">$25M</span>
                    </div>
                </div>
                <div className="flex flex-row p-3 m-3 align-center">
                    <h5 className="text-md font-bold text-indigo-600">Learn more about our company</h5>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" class="w-6 h-6 mx-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </div>

            </div>

        </section>
    )
}