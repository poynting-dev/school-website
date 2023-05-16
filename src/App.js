import ImageCorousal from "./components/ImageCorousal";
import BottomNavBar from "./components/NavBar/BottomNavBar";
import TopNavBar from "./components/NavBar/TopNavBar";
import Sidebar from "./components/NavBar/SideBar";
import { useEffect, useState } from "react";
import { useBreakpointValue } from "@chakra-ui/react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Router } from "react-router-dom";
import WhatWeDo from "./components/WhatWeDo";

const smVariant = { navigation: "drawer", navigationButton: false };
const mdVariant = { navigation: "sidebar", navigationButton: false };

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const variants = useBreakpointValue({ base: smVariant, md: mdVariant });

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    console.log(isSidebarOpen);
  }, [isSidebarOpen]);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="bg-blue-500 relative z-10">
          <TopNavBar
            showSidebarButton={variants?.navigationButton}
            onShowSidebar={toggleSidebar}
          />
          <Sidebar
            variant={variants?.navigation}
            isOpen={isSidebarOpen}
            onClose={toggleSidebar}
          />
          <div className="backdrop-blur-lg bg-white bg-opacity-25 shadow-lg m-2 md:m-6 rounded-md p-4 block lg:flex gap-4 md:mx-16">
            <div className="relative">
              <p className="text-4xl font-bold tracking-tighter border-2 top-1/3 left-1/2 sticky lg:mx-4 xl:mx-16 text-center">
                Building{"   "}
                <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                  <span class="relative text-white">Bright</span>
                </span>
                {"   "}Futures: Welcome to Our Village School Website!
              </p>
            </div>
            <div>
              <ImageCorousal />
            </div>
          </div>
          <WhatWeDo />
          <BottomNavBar />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
