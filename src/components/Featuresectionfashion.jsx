
import ProductCard from "./Productcard"

const data = [
    {
        id:0,
        name:"Denim Jacket",
        price:"429",
        img:"/jacket.webp"
    },

    {
        id:0,
        name:"Anarkali",
        price:"650",
        img:"/anarkalii.webp"
    },
    {
        id:0,
        name:"Jeans",
        price:"550",
        img:"/jeans.jpg"
    },
    {
        id:0,
        name:"Dhawani",
        price:"950",
        img:"/dhaa.webp"
    }
];


const Featuresectionfashion = () => {
  return (
    <div className="container pt-16">
        <div className="lg:flex justify-between items-center">
        <div>
            <h3 className="font-medium text-2xl">Fashion</h3>
            <p className="text-gray-700 mt-2">Fashion is the armor to survive the reality of everyday life.</p>
        </div>
        <div className="space-x-4 mt-8 lg:mt-0">
            <button className="feature-btn">Fashion</button>
            <button className="text-gray-600 hover:text-accent">Dress</button>
            <button className="text-gray-600 hover:text-accent">Footwear</button>
        </div>
        </div>


<div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
    <div>
<img className="w-full h-full object-cover"
 src="saree.jpg" alt="banner" />

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

export default Featuresectionfashion