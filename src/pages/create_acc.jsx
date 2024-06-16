import { Link } from 'react-router-dom';
export default function SignIn() {
    return (
        <>
            <div>
                <div className="relative z-30 h-full mx-auto my-auto flex flex-col justify-center">
                    <div className="max-w-[50%] mx-auto pt-5 text-center max-md:max-w-[80%]">
                        <Link to="/">
                            <img className="w-[5rem] mx-auto" src="src/assets/shopping-bag-5-svgrepo-com.svg" alt="" />
                        </Link>
                        <h3 className="font-bold text-2xl py-2 ">
                            Let's get started
                        </h3>
                        <p className="max-md:text-sm max-sm:text-sm ">
                            Create an account to view and manage your orders.
                        </p>
                    </div>
                    <div className="max-w-[60%] mx-auto">
                        <form action="">
                            <div>
                                <label htmlFor="email"> Email address
                                    <input type="email" name="email" id="email" required />
                                </label>
                            </div>
                            <div>
                                <label htmlFor="surname"> Surname
                                    <input type="surname" name="surname" id="surname" required />
                                </label>
                            </div>
                            <div>
                                <label htmlFor="password">
                                    Password
                                    <input type="password" name="password" id="password" required />
                                </label>
                            </div>
                            <div>
                                <label htmlFor="password">
                                    Confirm Password
                                    <input type="password" name="password" id="password" required />
                                </label>
                            </div>
                            <button type="submit" className="w-full bg-indigo-400 text-white font-bold py-2 px-4 rounded-lg rounded-t-none ">Create your account</button>
                        </form>

                        <div className="text-center mt-5">
                            <p>If you already have an account <span className='text-[#637eb9]'><Link className='text-[#637eb9]' to="/sign_in">sign in</Link></span></p>

                        </div>

                        <hr className='my-5 border-[#637eb9]' />
                    </div>


                    <div className="text-center w-[27%] mx-auto pb-10 max-xl:w-[32%] max-lg:w-[42%] max-md:w-[50%] max-sm:w-[60%]">
                        <p>By creating an account, you agree to the <span className='text-indigo-500'>Terms of Service</span> and <span className='text-indigo-500'>Privacy Policy</span></p>
                    </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full z-0 blur-sm ">
                    <video className='w-full h-full object-cover' src="src/assets/Untitled design (1).mp4" autoPlay muted loop></video>
                </div>
            </div>
        </>
    )

}