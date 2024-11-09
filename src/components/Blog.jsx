import BlogCard from "./Blogcard";

const data = [
    {
        title:"RelaxLegs: Ultimate Relief for Tired Legs",
        date:"11/08/2022",
        comment:"Good product",
        img:"/massager.webp"
    },

    {
        title:"Chef’s Choice: Reliable Gas Stove for Perfect Meals",
        date:"18/01/2023",
        comment:"Nice",
        img:"/dumbbell.webp"
    },
    {
        title:"EasyGlide: Travel Light, Travel Right",
        date:"01/08/2024",
        comment:"Easy to handle",
        img:"/troll.jpg"
    },
   
];

const Blog = () => {
  return (
    <div className="container pt-16">
        <h2 className="font-bold text-2xl">Latest News</h2>
        <p className="text-gray-500">
            Present posts in a best way to highlight interesting moments of your blog
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
        {data.map((el) => (
        <BlogCard
        key={el.date}
                  img={el.img}
                  title={el.title}
                  date={el.date}
                   comment={el.comment} 
                    />
        ))}
        </div>
    </div>
  )
}

export default Blog