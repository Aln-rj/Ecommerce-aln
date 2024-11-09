import CategoryCard from "./Categorycard"

const data = [
    {
        id:0,
        name:"Fashion",
        count:"99 products",
        img:"/cat1.avif"
    },
    {
        id:1,
        name:"Mobiles",
        count:"58 products",
        img:"/cat2.avif"
    },
    {
        id:3,
        name:"Home Essentials",
        count:"53 products",
        img:"/cat3.webp"
    },
    {
        id:4,
        name:"Gadgets",
        count:"75 products",
        img:"/cat4.webp"
    },
    {
        id:5,
        name:"Beauty",
        count:"143 products",
        img:"/cat5.webp"
    },
    {
        id:6,
        name:"Electronics",
        count:"91 products",
        img:"/cat6.jpg"
    },
    {
        id:7,
        name:"Tv & Appliances",
        count:"33 products",
        img:"/cat7.webp"
    },
    {
        id:8,
        name:"Furniture",
        count:"45 products",
        img:"/cat8.jpg"
    }
]

const category = () => {
    return (
      <div className="container pt-16">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map((el) => (
                <CategoryCard
                 key={el.id}
                  img={el.img}
                   name={el.name}
                    count={el.count} 
                    /> 
                ))}
          </div>
      </div>
    );
  };
  
  export default category;