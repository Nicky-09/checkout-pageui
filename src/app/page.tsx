import DetailForm from "@/pages/DetailForm";
import Navbar from "@/pages/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
        <DetailForm />
      </div>
    </main>
  );
}
