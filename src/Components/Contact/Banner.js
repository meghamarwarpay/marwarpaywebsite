import Image from 'next/image';
import img from '../../assets/images/6.jpg';
export default function Banner() {
  return (
    <div className="relative h-80">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
      <Image
          src={img} 
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
        />
      </div>

      {/* Centered Text */}
      <div className="relative z-10 flex items-center justify-center h-full pt-10">
        <h1 className="text-5xl font-bold text-black ">Contact Us</h1>
      </div>
    </div>
  );
}
