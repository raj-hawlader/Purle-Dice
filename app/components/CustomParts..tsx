import Image from 'next/image';
import customImage from '../../app/assets/image.svg';

const CustomParts = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto max-w-[1440px]">
        <div className="flex flex-col md:flex-row items-center bg-white shadow-lg overflow-hidden h-auto md:h-[403px]">
          
          {/* Image */}
          <div className="w-full md:w-1/2 h-[250px] md:h-[403px] relative">
            <Image
              src={customImage}
              alt="Description of the image"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-[#256bbb] opacity-60"></div>
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 h-[250px] md:h-[403px] p-4 md:p-6 flex flex-col justify-center bg-[#0487E2]">
            <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-white font-exo text-center md:text-left">
              Get Exclusive Custom Parts
            </h2>
            <p className="text-sm md:text-base mb-6 text-white font-light font-exo text-center md:text-left">
              Sky Gears has been the supplier that aircraft builders, owners,
              <br className="hidden md:block" /> pilots, and aviation businesses have depended on since 1965. 
              <br className="hidden md:block" /> We carry a wide selection of aircraft parts.
            </p>
            <button className="bg-white text-black font-exo text-sm py-3 px-5 font-semibold rounded-md hover:bg-blue-600 hover:text-white self-center md:self-start">
              Apply Now
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CustomParts;
