import React, { useState, useEffect } from "react";

import Link from "next/link";
const categories = ["Web Development", "React"];
// import { getCategories } from '../services';

const Header = () => {
  // const [categories, setCategories] = useState([]);
  //
  // useEffect(() => {
  //   getCategories().then((newCategories) => {
  //     setCategories(newCategories);
  //   });
  // }, []);

  return (
    <div className="container mx-auto mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8 flex items-center justify-between">
        <Link href="/">
          <span className="cursor-pointer font-bold text-4xl text-white">
            My Blog Site
          </span>
        </Link>
        <div>
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span className="align-middle ml-4 text-white font-semibold cursor-pointer">
                {/*{category.name}*/}
                {category}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
