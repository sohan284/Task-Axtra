import brand1 from '@/assets/brand1.png'
import brand2 from '@/assets/brand2.png'
import brand3 from '@/assets/brand3.png'
import brand4 from '@/assets/brand4.png'
import brand5 from '@/assets/brand5.png'
import brand6 from '@/assets/brand6.png'
function Brands() {
  return (
 <div className="my-16 container mx-auto">
      <h1 className="uppercase text-lg text-center text-gray-700">We worked with global largest brands</h1>

<div className='flex justify-center'>
<div className='mt-16 grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2  gap-20'>
        <img src={brand1} alt="" />
        <img src={brand2} alt="" />
        <img src={brand3} alt="" />
        <img src={brand4} alt="" />
        <img src={brand5} alt="" />
        <img src={brand6} alt="" />
      </div>
</div>
 </div>
  );
}
export default Brands;
