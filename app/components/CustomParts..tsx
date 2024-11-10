import Image from 'next/image';
import customImage from '../../app/assets/image.svg';

const CustomParts = () => {
  return (
    <div className=" py-8">
      <div className=" flex flex-col md:flex-row items-center bg-white shadow-lg overflow-hidden">
        {/* Image */}
        <div className="w-full md:w-1/2 md:h-[403px] relative">
            <Image
                src={customImage}
                alt="Description of the image"
                className="object-cover w-full h-full "
            />
            <div className="absolute inset-0 bg-[#256bbb] opacity-60"></div>
        </div>


        {/* text */}
        <div className="w-full h-[403px] md:w-1/2 p-6 flex flex-col justify-center bg-[#0487E2]">
          <h2 className="text-4xl font-semibold mb-4 text-white font-exo">Get Exclusive Custom Parts</h2>
          <p className="text-base mb-6 text-white font-light font-exo">
            Sky Gears has been the supplier that aircraft builders, owners, <br /> pilots, and aviation businesses have depended on since 1965. <br /> We carry a wide selection of aircraft parts.
          </p>
          <button className="bg-white text-black font-exo text-sm py-3 px-5 font-semibold rounded-md hover:bg-blue-600 hover:text-white self-start">
            Apply Now
          </button>
        </div>
        </div>
    </div>
  );
};

export default CustomParts;
