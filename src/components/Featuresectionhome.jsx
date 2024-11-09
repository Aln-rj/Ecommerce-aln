
import ProductCard from "./Productcard"

const data = [
    {
        id:0,
        name:"Cookware Combo",
        price:"1129",
        img:"/cookk.webp"
    },

    {
        id:0,
        name:"Bedsheet",
        price:"650",
        img:"/bedsheet.webp"
    },
    {
        id:0,
        name:"Decor",
        price:"550",
        img:"/decor.webp"
    },
    {
        id:0,
        name:"Bathroom Set",
        price:"750",
        img:"/bathr.jpg"
    }
];


const Featuresectionhome = () => {
  return (
    <div className="container pt-16">
        <div className="lg:flex justify-between items-center">
        <div>
            <h3 className="font-medium text-2xl">Home Essentials</h3>
            <p className="text-gray-700 mt-2">A comfortable home is a great source of happiness.</p>
        </div>
        <div className="space-x-4 mt-8 lg:mt-0">
            <button className="feature-btn">Home</button>
            <button className="text-gray-600 hover:text-accent">Decor</button>
            <button className="text-gray-600 hover:text-accent">Cookware</button>
        </div>
        </div>


<div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
    <div>
<img className="w-full h-full object-cover"
 src="homes.webp" alt="banner" />

    </div>

    {data.map((el) => (
        <ProductCard
        key={el.id}
                  img={el.img}
                   name={el.name}
                    count={el.count} 
                    />
    ))}
    </div>
    </div>
  )
}

export default Featuresectionhome