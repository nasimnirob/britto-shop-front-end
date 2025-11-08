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

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ✅ Navbar full width (no container limit) */}
      <div className="lg:mt-[105px] mt-[115px]">
        <Navbar />
      </div>

      {/* ✅ Main content area */}
      <main className="flex-grow flex justify-center px-4">
        {/* এখানে Outlet max-w-2xl এর মধ্যে থাকবে */}
        <div className="w-full max-w-[1524px]">
          <Outlet />
        </div>
      </main>

      {/* ✅ Footer full width */}
      <Footer />
    </div>
  );
};

export default MainLayout;

