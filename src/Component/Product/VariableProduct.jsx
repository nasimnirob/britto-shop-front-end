import { useParams } from "react-router-dom";
import UseProducts from "../../Hooks/UseProducts";


const VariableProduct = () => {
    const { id } = useParams();
    const [data, loading] = UseProducts();

    const product = data.find(p => p._id == id);

    if (loading) return <p className="text-black">Loading..........</p>;
    if (!product) return <p className="text-black">Product not found!</p>;

    return (
        <div className="text-black my-5">
            {/* <h1>Variable Product</h1> */}
            <div className="lg:grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
                <div className=" border flex  ">
                    <div className="border object-cover  p-2">
                        <img className="w-[128px] h-[128px] pb-2 pr-0 object-cover" src={product?.image} alt="" />
                        <img className="w-[128px] h-[128px] pb-2 pr-0 object-cover" src={product?.image} alt="" />
                        <img className="w-[128px] h-[128px] pb-2 pr-0 object-cover" src={product?.image} alt="" />
                        <img className="w-[128px] h-[128px] pb-2 pr-0 object-cover" src={product?.image} alt="" />
                        <img className="w-[128px] h-[128px] pb-2 pr-0 object-cover" src={product?.image} alt="" />
                        <img className="w-[128px] h-[128px] pb-2 pr-0 object-cover" src={product?.image} alt="" />
                        <img className="w-[128px] h-[128px] pb-2 pr-0 object-cover" src={product?.image} alt="" />
                        <img className="w-[128px] h-[128px] pb-2 pr-0 object-cover" src={product?.image} alt="" />
                        <img className="w-[128px] h-[128px] pb-2 pr-0 object-cover" src={product?.image} alt="" />
                        <img className="w-[128px] h-[128px] pb-2 pr-0 object-cover" src={product?.image} alt="" />
                        <img className="w-[128px] h-[128px] pb-2 pr-0 object-cover" src={product?.image} alt="" />
                      
               
                   

                    </div>
                    <div className="  w-[650px] h-[650px]">
                        <img src={product?.image} alt={product?.name} className="w-full h-full object-cover p-2 pl-0 " />
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