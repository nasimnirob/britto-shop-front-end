import React from "react";
import OrderCard from "../../../Component/OrderCard/OrderCard";
import UseProducts from "../../../Hooks/UseProducts";
import { useParams } from "react-router-dom";
import PageCover from "../../../Component/Shared/PageCover";
import useCategory from "../../../Hooks/useCategory";

const OurCategory = () => {
  const [data] = UseProducts();
  const MainCategory = useCategory();
  console.log(MainCategory);

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
    <div className="w-full relative z-20 border-b">
      <div className="max-w-[1524px] mx-auto py-2 px-2 text-gray-600 bg-gray-300/10">
        Home / Category / {filteredProducts[0].category}
      </div>
    </div>

    <div className="relative">
      {/* PageCover - z-0 বা -z-10 */}
      {/* <div className="fixed inset-0 w-screen h-screen ">
        <PageCover
          img={filteredProducts[0].image}
          tittle={filteredProducts[0].category}
          description='বিভিন্ন ক্যাটাগরির পণ্য...'
        />
      </div> */}

      <div className="flex flex-row gap-4 mx-0.5">
        <div className="lg:block md:block hidden w-96 z-20 text-gray-700 dark:text-white flex-col py-2.5">
          <div className="flex flex-col text-lg font-poppins lg:border-r md:border-r">
            {MainCategory.map((category, index) => (
              <span key={index} className="py-2 px-4">{category}</span>
            ))}
          </div>
        </div>
        <div className="w-full my-5">
          <OrderCard products={filteredProducts} />
        </div>
      </div>
    </div>
  </div>
);
};

export default OurCategory;
