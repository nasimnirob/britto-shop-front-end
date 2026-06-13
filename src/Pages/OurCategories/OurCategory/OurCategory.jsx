import React from "react";
import OrderCard from "../../../Component/OrderCard/OrderCard";
import UseProducts from "../../../Hooks/UseProducts";
import { Link, NavLink, useParams } from "react-router-dom";
import PageCover from "../../../Component/Shared/PageCover";
import useCategory from "../../../Hooks/useCategory";
import { IoHomeOutline } from "react-icons/io5";
import { useSiteSettings } from "../../../Context/SiteSettingsContext";


const OurCategory = () => {
  const [data] = UseProducts();
  const MainCategory = useCategory();
  console.log(MainCategory);

  const { coverEnabled } = useSiteSettings();

  const { category } = useParams();

  if (!data || !category) return <div>Loading...</div>;

  const filteredProducts = data.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center text-gray-500">
        No products found in "{category}"
      </div>
    );
  }
  console.log(filteredProducts);
  // console.log(category);
  return (
    <div>
      {/* Breadcrumb - z-20 দিন */}
      <div className="w-full relative z-20 border-b dark:border-gray-600">
        <div className="flex items-center gap-1 max-w-[1524px] mx-auto py-2 px-3 text-gray-600 dark:text-gray-200 bg-gray-300/10 text-base ">
          <Link to='/' className="flex items-center justify-center gap-1 hover:text-black dark:hover:text-white"><IoHomeOutline className="text-base" /> Home</Link> / <span className="hover:text-black dark:hover:text-white">Category</span> / <span className="hover:text-orange-500 text-orange-400 font-thin">{filteredProducts[0].category}</span>
        </div>
      </div>

      <div className="relative">
        {/* PageCover - z-0 বা -z-10 */}
        <div className={`fixed inset-0 w-screen h-screen ${coverEnabled ? "" : "hidden"}`}>
          <PageCover
            img={filteredProducts[0].image}
            tittle={filteredProducts[0].category}
            description='বিভিন্ন ক্যাটাগরির পণ্য...'
          />
        </div>

        <div className="flex flex-row gap-4 mx-0.5 my-4">
          <div className={`lg:block md:block hidden w-96 z-20 flex-col
    ${coverEnabled ? "text-white" : "text-gray-700 dark:text-white"}`}>
            <div className="flex flex-col text-base font-poppins lg:border-r md:border-r dark:border-gray-700">
              {MainCategory.map((category, index) => (
                <span key={index} className="py-2 px-3"><NavLink className={({ isActive }) => isActive ? "hover:text-orange-400 text-orange-500" : "hover:text-orange-400"} to={`/category/${category.toLowerCase()}`}>{category}</NavLink></span>
              ))}
            </div>
          </div>
          <div className="w-full ">
            <OrderCard products={filteredProducts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCategory;
