// components/MissionSection.js
import Image from 'next/image';
import img2 from '../../assets/images/mission.png';
const MissionSection = () => {
    return (
        <div className="relative pt-10 pb-10 px-10">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/2">
                        <figure className="rounded overflow-hidden">
                            <Image
                                src={img2} 
                                alt="Marwarpay Mission"
                               
                                width={600} // specify the width
                                height={400} // specify the height
                                className="w-full h-auto" data-aos="flip-left"
                            />
                     </figure>
                    </div>
                    <div className="lg:w-1/2 lg:pl-12">
                        <div className="mb-6">
                            <div className="text-left pb-5">
                            <h2 className="text-3xl font-bold pb-2">Marwarpay Mission</h2>
                            <hr className="w-20  text-left  border-b-2 border-black" />
                            </div>
                            <h2 className="mt-4 text-2xl font-bold">
                                Complete assurance about quality &amp; timely execution
                            </h2>
                            <div className="mt-4 border-l-4 border-blue-500 pl-4">
                                <p>
                                    Our aim is to develop applications with the latest technology that meet best with the customer`s expectation and satisfaction at all levels. We provide complete assurance about the work quality, capital, and timely execution of the projects and services.
                                </p>
                            </div>
                        </div>
                        <ul className="list-disc list-inside">
                            <li className="mt-2">
                               5+ Years Experience in Telecom and Fintech Industry.
                            </li>
                            <li className="mt-2">
                               Round the Clock Support.
                            </li>
                            <li className="mt-2">
                               24/7 Billing Available for Recharge Bill Payment and Money Transfer Service.
                            </li>
                            <li className="mt-2">
                              Best Revenue Sharing of Industry.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MissionSection;
