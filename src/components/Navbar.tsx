import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-2 bg-[#1f1301] shadow-lg text-[#bcb08a] text-lg font-bold relative">
      <div className="flex gap-12">
        <Link href="/" className="hover:text-[#aa660d] transition-all">
          Home
        </Link>

        {/* Services Dropdown */}
        <div className="relative group">
          <div className="flex items-center gap-1 hover:text-[#aa660d] transition-all cursor-pointer">
            <Link href="/services">Services</Link>
            <span className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#bcb08a] transition-all group-hover:border-t-[#aa660d] ml-1"></span>
          </div>
          <div className="hidden group-hover:flex absolute top-8 left-0 bg-[#2a1b0a] shadow-md rounded-md z-10">
            <ul className="flex flex-col text-left p-4 gap-2 text-base font-normal">
              <li className="hover:text-[#aa660d]">
                <Link href="/services/hair-styling">Hair Styling</Link>
              </li>
              <li className="hover:text-[#aa660d]">
                <Link href="/services/hair-coloring">Hair Coloring</Link>
              </li>
              <li className="hover:text-[#aa660d]">
                <Link href="/services/hair-treatments">Hair Treatments</Link>
              </li>
              <li className="hover:text-[#aa660d]">
                <Link href="/services/facial-skin-care">Facial & Skin Care</Link>
              </li>
              <li className="hover:text-[#aa660d]">
                <Link href="/services/makeup">Makeup</Link>
              </li>
              <li className="hover:text-[#aa660d]">
                <Link href="/services/mani-pedi">Manicure & Pedicure</Link>
              </li>
              <li className="hover:text-[#aa660d]">
                <Link href="/services/waxing-threading">Waxing & Threading</Link>
              </li>
              <li className="hover:text-[#aa660d]">
                <Link href="/services/bridal-packages">Bridal Packages</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Products Dropdown */}
        <div className="relative group">
          <div className="flex items-center gap-1 hover:text-[#aa660d] transition-all cursor-pointer">
            <Link href="/products">Products</Link>
            <span className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#bcb08a] transition-all group-hover:border-t-[#aa660d] ml-1"></span>
          </div>
          <div className="hidden group-hover:flex absolute top-8 left-0 bg-[#2a1b0a] shadow-md rounded-md z-10">
            <ul className="flex flex-col text-left p-4 gap-2 text-base font-normal">
              <li className="hover:text-[#aa660d]">
                <Link href="/products/hair-care">Premium Hair Care Products</Link>
              </li>
              <li className="hover:text-[#aa660d]">
                <Link href="/products/hair-tools">Professional Hair Styling Tools</Link>
              </li>
              <li className="hover:text-[#aa660d]">
                <Link href="/products/skin-care">Skin Care Essentials</Link>
              </li>
              <li className="hover:text-[#aa660d]">
                <Link href="/products/makeup">Makeup Products</Link>
              </li>
              <li className="hover:text-[#aa660d]">
                <Link href="/products/nail-care">Nail Care Kits</Link>
              </li>
              <li className="hover:text-[#aa660d]">
                <Link href="/products/body-care">Body Care Products</Link>
              </li>
              <li className="hover:text-[#aa660d]">
                <Link href="/products/fragrances">Fragrances</Link>
              </li>
            </ul>
          </div>
        </div>

        <Link href="/about" className="hover:text-[#aa660d] transition-all">
          About
        </Link>
        <Link href="/contact" className="hover:text-[#aa660d] transition-all">
          Contact
        </Link>
        <Link href="/deals" className="hover:text-[#aa660d] transition-all">
          Deals
        </Link>
      </div>

 
      <div className="flex justify-end w-full mr-10">
  <div className="flex items-center relative">
    <input
      type="text"
      placeholder="Search..."
      className="px-7 py-1 mr-2 rounded-md text-black border bg-[#FFF8F0] opacity-50 border-gray-300 focus:outline-none focus:ring focus:ring-[#aa660d] transition duration-200"
    />
    <button className="flex items-center">
      {/* Search Image */}
      <img
        src="/images/search.webp" // Path to your image
        alt="Search"
        className="h-8 w-8 opacity-80" // Adjust size as needed
      />
    </button>
  </div>
</div>



      <div className="cursor-pointer transition-transform transform hover:scale-110">
        <Image
          src="/images/wkk.png"
          alt="WK Beauty Salon Logo"
          width={100}
          height={100}
          className="rounded-full shadow-md"
        />
      </div>
    </div>
  );
}
