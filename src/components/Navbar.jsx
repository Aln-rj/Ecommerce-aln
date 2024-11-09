import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";



const Navbar = () => {
  return (
    <div className='container hidden lg:block'>
        <div className="flex justify-between items-center pt-8">
            <h1 className="text-4xl font-lightbold"><img className="w-20" src="online.png" alt="" /></h1>
            <div className="relative w-full max-w-[500px]">
                <input className="bg-[teal] border-none outline-none px-6 py-3 rounded-[30px] w-full"  
                type="text" placeholder="Search Product...." />
               <IoIosSearch className="absolute top-0 right-0 mt-4 mr-5 text-white-600" size={20} />

            </div>
            <div className="flex gap-4">
                <div className="icon__wrapper  ">
                    <AiOutlineUser />
                </div>
                <div className="icon__wrapper relative">
                    <AiOutlineShoppingCart />
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar