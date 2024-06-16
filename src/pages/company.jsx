import StoreNav from "../components/store_nav.jsx";
import Footer from "../components/footer.jsx";
import Hero from "../layouts/hero.jsx";
export default function Company() {
    return (
        <>
            <StoreNav />
            <div className=" relative z-40 max-w-[90%]  mx-auto my-5  p-10 rounded-xl bg-gray-50 shadow-lg">
                <div className=" text-gray-800 py-10 ">
                    <div className="container mx-auto px-4">
                        <section className="mb-10 ">
                            <h1 className="text-3xl font-bold text-center mb-6">About Our Pharmacy</h1>
                            <p className="text-center max-w-2xl mx-auto">
                                At FamilyMart, we are dedicated to providing the best pharmaceutical care and services.
                                Our mission is to enhance the health and well-being of our community through quality products and expert advice.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold mb-4">Our History</h2>
                            <p className="indent-10">
                                FamilyMart has grown from a small neighborhood pharmacy to a trusted healthcare provider.
                                Our commitment to excellence and our focus on patient care have been the cornerstones of our success.
                            </p>
                            <p className="py-3">
                                The website FamilyMart was created with the intention of helping people. Our team noticed that some people who require medication cannot visit stores due to transportation issues or other limitations, so we're creating a website to help people find their needed medication and items to boost courage. The website was designed to be quick and easy to use, making it less stressful for those who struggle to walk or for shy people to ask questions about necessary medication.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold mb-4">Mission and Vision</h2>
                            <p className="indent-10">
                                    Our mission is to enhance health, wellness, and beauty through accessible, high-quality products and personalized care, empowering individuals to lead confident lives.
                            </p>
                            <p className="py-3 indent-10">
                                    Our vission is to be a world-class healthcare provider. We aspire to be the top destination for comprehensive healthcare, needs and other essentials, setting industry standards through excellence, innovation, and customer satisfaction while making a lasting impact on communities and the environment.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
                            <ul className="list-disc list-inside">
                                <li>Customer Focus: We prioritize the needs and well-being of our customers above all.</li>
                                <li>Integrity: We conduct our business with honesty and transparency.</li>
                                <li>Innovation: We continuously seek new and improved ways to serve our community.</li>
                                <li>Excellence: We strive for the highest standards in all we do.</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold mb-4">Our Team</h2>
                            <p>
                                Our team of highly qualified pharmacists and healthcare professionals are here to provide personalized service
                                and expert advice. We believe in building lasting relationships with our customers based on trust and care.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                            <p>If you have any questions or need assistance, feel free to reach out to us:</p>
                            <ul className="list-inside">
                                <li>Phone: (123) 456-7890</li>
                                <li>Email: info@yourpharmacy.com</li>
                                <li>Address: 123 Pharmacy Lane, Healthtown, USA</li>
                            </ul>
                        </section>
                    </div> 
                    
                </div>
               <div className="absolute top-0 left-0 z-0 w-full h-full opacity-10 ">
                    <video className=" object-cover w-full h-full" src= {import.meta.env.BASE_URL + "src/assets/Untitled design (1).mp4"} autoPlay muted playsInline loop></video>
                </div>
            </div>
            <Footer />
        </>
    );
}