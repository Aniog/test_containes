import { useEffect, useRef } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";
import MobileMenu from "@/components/layout/MobileMenu";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function Layout({ children }) {
  const rootRef = useRef(null);

  // Re-scan for stock images any time the route or cart state changes,
  // so dynamically mounted elements (cart lines, mobile menu, page content)
  // get their image src resolved by the runtime image helper.
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, rootRef.current);
  });

  return (
    <div ref={rootRef} className="flex flex-col min-h-screen">
      <Header />
      <MobileMenu />
      <CartDrawer />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
