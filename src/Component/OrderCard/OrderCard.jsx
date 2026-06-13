import { Link } from "react-router-dom";
import ZoomImage from "../ZoomImage";
import { TbCurrencyTaka } from "react-icons/tb";


const OrderCard = ({ products }) => {
  console.log(products)
  return (
    <div className="mx-2 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 dark:bg-black bg-white text-black bg-base-100 dark:text-white ">
      {products.map((product) => (
        <Link
          to={`/product/${product._id}`}
          state={{ product }}
          key={product._id}
          className="card shadow-md">
          <figure className="relative">
            <ZoomImage src={product.image} alt={product.name} />
            <p className="font-poppins text-sm absolute right-0 top-0 bg-[#ff0066] text-white rounded-md p-1 flex items-center ">
              <TbCurrencyTaka className="text-xl" />{product.price}
              {/* TK {product.price}  */}
            </p>
          </figure>
          <div className="card-body text-center flex items-start">
            <h2 className="card-title text-md font-poppins flex w-full justify-center">{product.name}</h2>
            <h1>SKU {product._id}</h1>
            {/* <p className="text-start lg:py-1 py-1">{product.description}</p> */}
            <div className="card-actions justify-end w-full">
              <button className="btn bg-[#ff0066] text-black dark:text-white w-full text-lg dark:border-none">
                Order Now
              </button>

            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default OrderCard;


// import { Link } from "react-router-dom";
// import ZoomImage from "../ZoomImage";
// import { TbCurrencyTaka } from "react-icons/tb";

// const OrderCard = ({ products }) => {
//   return (
//     <div className="mx-2 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 dark:bg-black bg-white text-black bg-base-100 dark:text-white">
//       {products.map((product) => (
//         <Link
//           to={`/product/${product._id}`}
//           state={{ product }}
//           key={product._id}
//           className="card shadow-md hover:scale-105 transition-transform duration-200"
//         >
//           <figure className="relative">
//             <ZoomImage src={product.image} alt={product.name} />
//             <p className="font-poppins text-sm absolute right-0 top-0 bg-[#ff0066] text-white rounded-md p-1 flex items-center">
//               <TbCurrencyTaka className="text-xl" />{product.price}
//             </p>
//           </figure>
//           <div className="card-body text-center flex items-start">
//             <h2 className="card-title text-md font-poppins flex w-full justify-center">{product.name}</h2>
//             <h1>SKU {product._id}</h1>
//             <div className="card-actions justify-end w-full">
//               <button className="btn bg-[#ff0066] text-black dark:text-white w-full text-lg dark:border-none">
//                 Order Now
//               </button>
//             </div>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default OrderCard;
