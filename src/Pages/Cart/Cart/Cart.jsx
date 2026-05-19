import { Helmet } from "react-helmet-async";
import PageCover from "../../../Component/Shared/PageCover";
import cartImg from '../../../assets/cart/CartBg.jpg'
import Cover from "../../../Component/Shared/Cover";
import Table from "../../../Component/Table";

const Cart = () => {
    return (
        <div className="border border-dashed  px-9">
            <Helmet>
                <title>Britto Shop | Cart</title>
            </Helmet>
            {/* <div className="">
                <PageCover img={cartImg} tittle='সমস্ত কার্ট প্রোডাক্ট' description='আপনার কার্টে থাকা সমস্ত পণ্যের তালিকা'></PageCover>
            </div>
            <Table></Table> */}
        </div>
    );
};

export default Cart;