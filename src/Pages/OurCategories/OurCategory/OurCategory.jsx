import React from "react";
import OrderCard from "../../../Component/OrderCard/OrderCard";
import UseProducts from "../../../Hooks/UseProducts";
import { Link, NavLink, useParams } from "react-router-dom";
import PageCover from "../../../Component/Shared/PageCover";
import useCategory from "../../../Hooks/useCategory";
import { IoHomeOutline } from "react-icons/io5";
import { useSiteSettings } from "../../../Context/SiteSettingsContext";
import CategorySidebar from "../../../Component/CategorySidebar/CategorySidebar";
import useScrollDirection from "../../../Hooks/useScrollDirection";


const OurCategory = () => {
  const [data, loading] = UseProducts();
  const MainCategory = useCategory();
  const showHeader = useScrollDirection();
  console.log(MainCategory);

  const { coverEnabled } = useSiteSettings();

  const { category } = useParams();

  // if (!data || !category) return <div>Loading...</div>;

  // if (loading) {
  //   return (
  //     <div className="my-4">
  //       <OrderCard products={[]} loading={true} />
  //     </div>
  //   );
  // }

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
          <CategorySidebar
            coverEnabled={coverEnabled}
            MainCategory={MainCategory}
            filteredProducts={filteredProducts}
          />
          <div className="w-full ">
            <OrderCard
              products={filteredProducts}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className="flex flex-col h-[calc(100vh-105px)]">

  //     {/* Breadcrumb */}
  //     <div className={`
  //                     fixed
  //                     top-[105px]
  //                     left-0
  //                     right-0
  //                     z-40
  //                     transition-transform duration-300
  //                     ${showHeader ? "translate-y-0" : "-translate-y-full"}
  //                   `}>
  //       <div className="border-b dark:border-gray-600 px-3 py-2 shrink-0">
  //         <div className="flex items-center gap-1 max-w-[1524px] mx-auto py-2 px-3 text-gray-600 dark:text-gray-200 bg-gray-300/10 text-base">
  //           <Link
  //             to="/"
  //             className="flex items-center gap-1 hover:text-black dark:hover:text-white"
  //           >
  //             <IoHomeOutline />
  //             Home
  //           </Link>

  //           /

  //           <span>Category</span>

  //           /

  //           <span className="text-orange-500">
  //             {filteredProducts[0].category}
  //           </span>
  //         </div>
  //       </div>
  //     </div>

  //     {/* Content */}
  //     <div className="flex flex-1 overflow-hidden">

  //       <CategorySidebar
  //         coverEnabled={coverEnabled}
  //         MainCategory={MainCategory}
  //       />

  //       <div className="flex-1 overflow-y-auto scrollbar-hide ">
  //         <OrderCard
  //           products={filteredProducts}
  //           loading={loading}
  //         />
  //       </div>

  //     </div>

  //   </div>
  // );
};

export default OurCategory;
