import { useParams } from "react-router-dom";
import UseProducts from "../../Hooks/UseProducts";
import { useState } from "react";


const VariableProduct = () => {
    const { id } = useParams();
    const [data, loading] = UseProducts();

    const product = data.find(p => p._id == id);
     const [selectedImage, setSelectedImage] = useState(0);

    if (loading) return <p className="text-black">Loading..........</p>;
    if (!product) return <p className="text-black">Product not found!</p>;

    return (
        <div className="text-black my-5">
            {/* <h1>Variable Product</h1> */}
            <div className="lg:grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
                <div className="border flex flex-col">
                    {/* Top: thumbnails (left) + main image (right) */}
                    <div className="flex">
                        {/* বামদিকে প্রথম ৫টা - column */}
                        {/* <div className=" p-2 pb-0 flex flex-col gap-2">
                            {product?.images?.slice(5, 10).map((img, i) => (
                                <img
                                    key={i}
                                    onClick={() => setSelectedImage(i + 5)}
                                    className={`w-[120px] h-[120px] object-cover cursor-pointer border-2 ${selectedImage === i ? "border-black" : "border-transparent"
                                        }`}
                                    src={img}
                                    alt=""
                                />
                            ))}
                        </div> */}

                        {/* Main Image */}
                        <div className="w-[650px] h-[650px]">
                            <img
                                src={product?.images?.[selectedImage] || product?.image}
                                alt={product?.name}
                                className="w-full h-full object-cover p-2 pl-0"
                            />
                        </div>
                    </div>

                    {/* Bottom: বাকি thumbnails - row */}
                    <div className="flex flex-row flex-wrap gap-2 p-2 pt-0">
                        {product?.images?.slice(0, 5,).map((img, i) => (
                            <img
                                key={i}
                                onClick={() => setSelectedImage(i)}
                                className={`w-[120px] h-[120px] object-cover cursor-pointer border-2 ${selectedImage === i + 5 ? "border-black" : "border-transparent"
                                    }`}
                                src={img}
                                alt=""
                            />
                        ))}
                    </div>
                </div>
                <div className="border p-2">
                    <h1 className="text-2xl font-bold">{product?.name}</h1>
                    <p>Price: {product?.price}</p>
                    <p>SKU: {product?._id}</p>
                </div>
                <div className="border col-span-2 bg-gray-50 p-2 my-4">
                    <h1 className="py-3 underline text-2xl">DesCripTion</h1>
                    <h2 className="whitespace-pre-line py-2">{product?.description}</h2>
                </div>
            </div>
        </div>
    );
};

export default VariableProduct;