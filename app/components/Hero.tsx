import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { GoDotFill } from 'react-icons/go';
import Image from 'next/image';
import heroImage from '../../app/assets/image (1).png';

const Hero = () => {
  return (
    <div className='container mx-auto flex justify-center items-center h-full px-4 md:px-[38px] pt-5'>
      <div className='flex flex-col items-center w-full'>

        {/* hero image */}
        <div className='relative flex items-center w-full'>
          <Image
            src={heroImage}
            alt="Description of the image"
            className="w-full h-auto rounded-md"
          />

          {/* right arrow */}
          <button className='absolute right-2 sm:right-[-40px] text-3xl'>
            <MdOutlineKeyboardArrowRight className='opacity-25 hover:opacity-100'/>
          </button>
        </div>

        {/* dots */}
        <div className='flex mt-1'>
          <GoDotFill className='text-[#D9D9D9] text-2xl md:text-2xl lg:text-4xl cursor-pointer hover:text-[#4493FA]' />
          <GoDotFill className='text-[#4493FA] text-2xl md:text-2xl lg:text-4xl cursor-pointer hover:text-[#4493FA]' />
          <GoDotFill className='text-[#D9D9D9] text-2xl md:text-2xl lg:text-4xl cursor-pointer hover:text-[#4493FA]' />
          <GoDotFill className='text-[#D9D9D9] text-2xl md:text-2xl lg:text-4xl cursor-pointer hover:text-[#4493FA]' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
