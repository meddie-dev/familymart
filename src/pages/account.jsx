import StoreNav from "../components/store_nav"
import Footer from "../components/footer"
export default function Account() {
    return (
        <>
            <StoreNav />
            <div className="w-full h-full bg-slate-200 p-10">
                <div className="max-w-[70%] h-full mx-auto my-auto p-8 bg-white rounded-xl shadow-xl max-xl:max-w-[97%] max-lg:max-w-[97%] max-md:max-w-[97%] max-sm:max-w-[97%]">
                    <div>
                        <div className="flex flex-row justify-between">
                            <h1 className="text-lg font-bold">Account Information</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#969696" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>
                        </div>
                        <h3 className="text-md text-[#969696] py-2">Personal details and application.</h3>
                        <hr className="my-5 w-full"/>
                    </div>
                    <div className="w-[40%] flex flex-row justify-between max-xl:w-full max-lg:w-full max-md:w-full max-sm:w-full ">
                        <div className="text-right">
                            <h1 className="text-md font-semibold">Full Name</h1>
                        </div>
                        <div className="text-right">
                            <h1 className="text-md ">Margot Foster</h1>
                        </div>
                    </div>
                    <hr className="my-5 w-full "/>
                    <div className="w-[34%] flex flex-row justify-between max-xl:w-full max-lg:w-full max-md:w-full max-sm:w-full ">
                        <div className="text-right">
                            <h1 className="text-md font-semibold">Surname</h1>
                        </div>
                        <div className="text-right">
                            <h1 className="text-md ">Margot</h1>
                        </div>
                    </div>
                    <hr className="my-5 w-full"/>
                    <div className="w-[52%] flex flex-row justify-between max-xl:w-full max-lg:w-full max-md:w-full max-sm:w-full ">
                        <div className="text-right">
                            <h1 className="text-md font-semibold">Email address</h1>
                        </div>
                        <div className="text-right">
                            <h1 className="text-md ">margotfoster@example.com</h1>
                        </div>
                    </div>
                    <hr className="my-5 w-full"/>
                    <div className="w-[41%] flex flex-row justify-between max-xl:w-full max-lg:w-full max-md:w-full max-sm:w-full ">
                        <div className="text-right">
                            <h1 className="text-md font-semibold">Contact number</h1>
                        </div>
                        <div className="text-right">
                            <h1 className="text-md ">+1 123 456 789</h1>
                        </div>
                    </div>
                    <hr className="my-5 w-full"/>
                    <div className="w-[41%] flex flex-row justify-between max-xl:w-full max-lg:w-full max-md:w-full max-sm:w-full ">
                        <div className="text-right">
                            <h1 className="text-md font-semibold">Address</h1>
                        </div>
                        <div className="text-right">
                            <h1 className="text-md ">123 Main Street</h1>
                        </div>
                    </div>
                    <hr className="my-5 w-full"/>
                    <div className="w-[100%] flex flex-row justify-between max-xl:w-full max-lg:w-full max-md:w-full max-sm:w-full ">
                        <div className="w-[70%] text-left max-xl:w-full max-lg:w-full max-md:w-full max-sm:w-full ">
                            <h1 className="text-md font-semibold">About</h1>
                        </div>
                        <div className="text-left">
                            <h1 className="text-md ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati perspiciatis at esse optio repellat, incidunt magni quaerat quas sit, explicabo suscipit nesciunt, placeat qui voluptate corporis tempora quod! Facilis, officiis.</h1>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            <Footer/>
        </>
    )
}