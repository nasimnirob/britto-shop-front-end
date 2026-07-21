import { useParams } from "react-router-dom";
import UseProducts from "../../Hooks/UseProducts";
import { useState } from "react";


const VariableProduct = () => {
    const { id } = useParams();
    const [data, loading] = UseProducts();
    const product = data.find(p => p._id == id);
    console.log(product)


    const [selectedImage, setSelectedImage] = useState(0);


    const [quantity, setQuantity] = useState(1);
    const increase = () => {
        setQuantity((i) => (i + 1))
    };
    const decrease = () => {
        if (quantity > 1) {
            setQuantity((i) => i - 1);
        }
    };


    if (loading) return <p className="text-black">Loading..........</p>;
    if (!product) return <p className="text-black">Product not found!</p>;

    return (
        <div className="text-black dark:text-[#E2E5E9] my-2 w-full">
            {/* <h1>Variable Product</h1> */}
            <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 w-full">
                <div className="lg:col-span-3 col-span-5 flex flex-col ">
                    <div className="flex lg:flex-row-reverse md:flex-row-reverse flex-col justify-center">

                        {/* Main Image */}
                        <div className="lg:w-[770px] lg:h-[770px] md:w-[700px] md:h-[700px] w-full h-[500px]  md:pl-0 p- lg:pl-0 flex items-center justify-center">
                            <img
                                src={product?.images?.[selectedImage] || product?.image}
                                alt={product?.name}
                                className="w-full h-full object-cover border rounded-[4px] border-[#E1E4E7] dark:border-[#202020]"
                            />
                        </div>

                        <div className="lg:visible md:visible flex p-2 lg:pt-0 gap-2 lg:flex-col md:flex-col lg:justify-start lg:items-start md:justify-start md:items-start items-center justify-center">
                            {product?.images?.slice(0, 4).map((img, i) => (
                                <img
                                    key={i}
                                    onClick={() => setSelectedImage(i)}
                                    className={`lg:w-[95px] lg:h-[110px] md:w-[95px] md:h-[110px] w-[70px] h-[70px] object-cover cursor-pointer border hover:border-black ${selectedImage === i ? "border-black  border-[0.0001px]" : "border-transparent"
                                        }`}
                                    src={img}
                                    alt=""
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2 col-span-2 p-3 font-poppins ">

                    <h1 className="text-3xl font-normal font-poppins lg:text-start md:text-start text-center">{product?.name}</h1>
                    <span className="text-sm border border-green-300 px-1 py-0.5 bg-green-200 text-rose-600  rounded-sm">In Stock : Stock Out</span>
                    <div className="flex items-center gap-2 py-2">
                        <p className="font-poppins text-gray-600 text-lg line-through decoration-gray-600 decoration-solid decoration-3">{product?.price}</p>
                        <p className="font-poppins text-2xl font-bold">{product?.price} <span className="font-semibold">TK</span></p>
                    </div>
                    <div className="flex flex-col gap-1 py-2">
                        <h1 className="text-[15px]">Select Size:</h1>
                        <div className="flex gap-1.5 text-sm">
                            <span className="bg-white border border-[#65686c] dark:border-none dark:bg-[#252728] px-3 py-1 w-10 h-10 text-center flex justify-center items-center hover:bg-black dark:hover:bg-[#3B3D3E] hover:text-white lg:hover:animate-pulse">M</span>
                            <span className="bg-white border border-[#65686c] dark:border-none dark:bg-[#252728] px-3 py-1 w-10 h-10 text-center flex justify-center items-center hover:bg-black dark:hover:bg-[#3B3D3E] hover:text-white lg:hover:animate-pulse">L</span>
                            <span className="bg-white border border-[#65686c] dark:border-none dark:bg-[#252728] px-3 py-1 w-10 h-10 text-center flex justify-center items-center hover:bg-black dark:hover:bg-[#3B3D3E] hover:text-white lg:hover:animate-pulse">XL</span>
                            <span className="bg-white border border-[#65686c] dark:border-none dark:bg-[#252728] px-3 py-1 w-10 h-10 text-center flex justify-center items-center hover:bg-black dark:hover:bg-[#3B3D3E] hover:text-white lg:hover:animate-pulse">XXL</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1 py-2">
                        <h1 className="text-[15px]">Quantity:</h1>
                        <div className="md:flex md:gap-2">
                            <div className="flex h-10 w-28 items-center justify-between border px-1 border-[#65686c] bg-white dark:border-none dark:bg-[#252728]">
                                <button
                                    onClick={decrease}
                                    className="text-lg px-2 hover:text-red-500"
                                >
                                    −
                                </button>

                                <input
                                    type="text"
                                    inputMode="numeric"
                                    value={quantity}
                                    onFocus={(e) => e.target.select()}
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/\D/g, "");

                                        if (value === "") {
                                            setQuantity("");
                                        } else {
                                            setQuantity(Number(value));
                                        }
                                    }}
                                    onBlur={() => {
                                        if (quantity === "" || Number(quantity) < 1) {
                                            setQuantity(1);
                                        }
                                    }}
                                    className="w-10 text-base bg-transparent text-center outline-none"
                                />

                                <button
                                    onClick={increase}
                                    className="text-lg px-2 hover:text-blue-500"
                                >
                                    +
                                </button>
                            </div>
                            <button
                                className="md:flex-1 lg:hidden md:block hidden border bg-white py-1
                                    hover:bg-black hover:text-white
                                    dark:bg-[#252728] dark:hover:bg-[#3B3D3E]
                                    border-[#65686c] dark:border-none"
                            >
                                Add To Cart
                            </button>
                        </div>
                    </div>

                    <div className="flex w-full lg:max-w-[460px] max-w-[460px] md:max-w-[1000px] gap-[10px] py-4">
                        <button
                            className="md:hidden lg:block lg:flex-1 flex-1 border bg-white py-1
                                    hover:bg-black hover:text-white
                                    dark:bg-[#252728] dark:hover:bg-[#3B3D3E]
                                    border-[#65686c] dark:border-none"
                        >
                            Add To Cart
                        </button>

                        <button
                            className="md:w-full flex-1 border bg-white py-1
                                    hover:bg-black hover:text-white
                                    dark:bg-[#252728] dark:hover:bg-[#3B3D3E]
                                    border-[#65686c] dark:border-none"
                        >
                            Buy Now
                        </button>
                    </div>

                </div>

                <div className="col-span-5 bg-white dark:bg-[#252728] px-2 my-3">
                    <h1 className="py-3 underline text-2xl ">DesCripTion</h1>
                    <p className="text-[12px]">SKU: {product?._id}</p>
                    <h2 className="whitespace-pre-line py-2">{product?.description}</h2>
                </div>
            </div>
        </div>
    );
};

export default VariableProduct;