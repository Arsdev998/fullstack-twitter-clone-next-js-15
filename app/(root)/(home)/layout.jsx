import React from "react";
import RightBar from "../../../components/layout/RightBar";
import Sidebar from "../../../components/layout/Sidebar";

function HomeLayout({ children }) {
  return (
    <section className="flex min-h-screen">
      <aside className="">
        <Sidebar />
      </aside>
      <main>{children}</main>
      <RightBar />
    </section>
  );
}
export default HomeLayout;
