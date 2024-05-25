import React from "react";
import BookCard from "../components/BookCard";
import mch from "../../public/assets/mch.jpg";
import elc from "../../public/assets/elc.jpg";
import cvl from "../../public/assets/cvl.jpg";
import com from "../../public/assets/com.jpg";
import chm from "../../public/assets/chm.jpg";
import aer from "../../public/assets/aer.jpg";

const books = [
  {
    title: "Mechanical Engineering",
    description:
      "Learn the principles of mechanical engineering with these books.",
    image: mch,
  },
  {
    title: "Electrical Engineering",
    description: "Discover the world of electrical engineering.",
    image: elc,
  },
  {
    title: "Civil Engineering",
    description: "Explore civil engineering and infrastructure design.",
    image: cvl,
  },
  {
    title: "Computer Science Engineering",
    description: "Dive into the field of computer science and programming.",
    image: com,
  },
  {
    title: "Chemical Engineering",
    description: "Understand chemical processes and engineering principles.",
    image: chm,
  },
  {
    title: "Aerospace Engineering",
    description: "Explore the science and technology of aerospace engineering.",
    image: aer,
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mb-8">
        Online Engineering Library
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book, index) => (
          <BookCard
            key={index}
            title={book.title}
            description={book.description}
            image={book.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
