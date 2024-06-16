import { Link } from 'react-router-dom';
export default function SignIn() {
    return (
        <>
            <div className='max-w-[70%] h-screen mx-auto my-auto py-5  flex '>
                <div className="relative z-30 h-full mx-auto my-auto flex flex-col justify-center bg-slate-50 rounded-l-xl  max-lg:rounded-xl">
                    <div className="max-w-[90%] mx-auto pt-5 text-center max-md:max-w-[80%]">
                        <Link to="/">
                            <img className="w-[5rem] mx-auto" src="src/assets/shopping-bag-5-svgrepo-com.svg" alt="" />
                        </Link>
                        <h3 className="font-bold text-2xl py-5 ">
                            Sign in to your account
                        </h3>
                        <p className="mx-auto max-md:text-sm max-sm:text-sm ">
                            Create an account to view and manage your orders.
                        </p>
                    </div>
                    <div className="max-w-[90%] mx-auto">
                        <form action="">
                            <div>
                                <label htmlFor="email"> Email address
                                    <input type="email" name="email" id="email" required />
                                </label>
                            </div>
                            <div>
                                <label htmlFor="password">
                                    Password
                                    <input type="password" name="password" id="password" required />
                                </label>
                            </div>
                            <button type="submit" className="w-full bg-indigo-400 text-white font-bold py-2 px-4 rounded-lg rounded-t-none ">Sign in</button>
                        </form>
                        <hr className='my-5 border-[#637eb9]' />
                        <div className="text-center">
                            <p>Don't have an account?</p>
                            <Link className='text-[#637eb9]' to="/create">Sign up</Link>
                        </div>
                    </div>
                </div>
                <div className='max-w-[60%] h-full mx-auto max-lg:absolute max-lg:top-0 max-lg:left-0 max-lg:right-0 max-lg:blur-sm max-lg:rounded-xl max-sm:max-w-[90%]'>
                    <video className='w-full h-full object-cover rounded-r-xl' src="src/assets/Untitled design (2).mp4" autoPlay muted playsInline loop></video>
                </div>
            </div>
        </>
    );
}