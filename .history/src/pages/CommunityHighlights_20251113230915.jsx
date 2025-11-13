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
    import { motion } from "framer-motion";

const highlights = [
  {
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200",
    tag: "Featured Artist",
    title: "A Vision in Motion",
    desc: "Discover how our featured creator brings art to life with colors, rhythm, and soul.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?auto=format&fit=crop&q=80&w=1200",
    tag: "Art Battle",
    title: "Digital vs. Traditional",
    desc: "Watch artists merge technology and tradition in our weekly Artify showdown.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
 
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white overflow-hidden relative">
      {/* Animated glowing orbs background */}
      <motion.div
        className="absolute inset-0 opacity-30 blur-3xl"
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, rgba(255,0,150,0.5), transparent 70%)",
            "radial-gradient(circle at 80% 70%, rgba(0,255,255,0.5), transparent 70%)",
            "radial-gradient(circle at 40% 60%, rgba(255,255,0,0.4), transparent 70%)",
          ],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80 }}
          className="text-4xl md:text-5xl font-extrabold mb-14 bg-gradient-to-r from-pink-400 to-yellow-300 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
        >
          Community Highlights 🌟
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.08,
                rotateY: 8,
                rotateX: 5,
                boxShadow: "0px 0px 25px rgba(255,255,255,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transform-gpu"
            >
              {/* Image with subtle motion */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover rounded-t-2xl"
                />
              </motion.div>

              {/* Content */}
              <div className="p-6 text-left">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block bg-gradient-to-r from-pink-400 to-yellow-300 text-black text-xs px-3 py-1 rounded-full mb-4 font-semibold shadow-md"
                >
                  {item.tag}
                </motion.span>

                <motion.h3
                  whileHover={{ color: "#FFD700" }}
                  transition={{ duration: 0.3 }}
                  className="text-xl font-semibold text-white mb-3"
                >
                  {item.title}
                </motion.h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


};

export default CommunityHighlights;
