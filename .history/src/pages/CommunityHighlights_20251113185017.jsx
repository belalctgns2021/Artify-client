import React from "react";

const CommunityHighlights = () => {
  const highlights = [
    {
      title: "Art Exhibition in Dhaka ",
      image: "https://www.globaltimes.cn/Portals/0//attachment/2020/2020-12-03/ecc8081b-7980-4857-ba58-ddf558174c2e.jpeg",
      desc: "Local artists showcased 120+ incredible pieces celebrating creativity and culture.",
      tag: "Event",
    },
    {
      title: "Digital Art Collaboration ",
      image: "https://images.squarespace-cdn.com/content/v1/5995bf96be659416eaa8a4ad/1595439195903-8LZJ1AX6JCQPMT9VIU6I/Jasmin%2BPannu%2BShare%2BYour%2BHeart_Brampton%2BPop%2BUp%2BMurals-min.jpg",
      desc: "Over 50 digital creators teamed up to create a stunning community mural.",
      tag: "Collab",
    },
    {
      title: "Artist of the Month: Kanak Chanpa Chakma ",
      image: "https://dbfcollection.com/wp-content/uploads/2023/11/21-Kanak-Chanpa-min.jpg",
      desc: "Kanak’s vibrant paintings of hill-tribe women and landscapes bring a fresh voice to Bangladeshi contemporary art.",
      tag: "Spotlight",
    },
  ];

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-400 mb-10">
          Community Highlights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-5 text-left">
                <span className="inline-block bg-indigo-100 text-indigo-600 text-xs px-3 py-1 rounded-full mb-3 font-medium">
                  {item.tag}
                </span>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityHighlights;
