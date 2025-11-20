// import { Outlet } from "react-router-dom";

// import Footer from "../Component/Shared/Footer";
// import Navbar from "../Component/Shared/Navbar";

// const MainLayout = () => {
//   return (
//     <div className="max-w-screen-3xl mx-auto">
//       <div className="">
//         <Navbar />
//       </div>
//       <div className="lg:flex lg:justify-center items-center mx-auto ">
//         <Outlet />
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default MainLayout;

import { Outlet } from "react-router-dom";
import Navbar from "../Component/Shared/Navbar";
import Footer from "../Component/Shared/Footer";
import { useState } from "react";

const MainLayout = () => {
  const [openCart, setOpenCart] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [open, setOpen] = useState(false);


  return (

    <div className="min-h-screen flex flex-col">

      {/* ✅ Navbar full width (no container limit) */}
      <div className="lg:mt-[105px] md:mt-[105px] mt-[106px]">
        <Navbar openCart={openCart} setOpenCart={setOpenCart} openProfile={openProfile} setOpenProfile={setOpenProfile} open={open} setOpen={setOpen} />
      </div>
      {(openCart || openProfile || open) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"></div>
      )}
      {/* ✅ Main content area */}
      <main className="flex-grow flex justify-center px-4">
        {/* এখানে Outlet max-w-2xl এর মধ্যে থাকবে */}
        <div className="w-full max-w-[1524px]">

          <Outlet />
        </div>
      </main>

      {/* ✅ Footer full width */}
      <div className="">
        <div className=" ">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

