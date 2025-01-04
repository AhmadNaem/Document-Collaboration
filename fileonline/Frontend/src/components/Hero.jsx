import jsCookie from "js-cookie";
import React from "react";
import { Link } from "react-router-dom";
import iconPlus from "../assets/icon-plus.svg";

export default function Hero() {
  return (
    <section className="py-16 px-8 md:px-20 h-[75vh]">
      <div className="flex flex-col gap-10 text-green-800">
        <h1 className="text-2xl md:text-4xl lg:text-5xl">
        Selamat Datang di TrDocx!
        </h1>
        <div className="flex flex-col gap-4 mb-16">
          <h2 className="font-bold text-3xl md:text-5xl lg:text-3xl lg:leading-[3.50rem] text-green-900">
          Waktunya untuk menjadi lebih tegas, lebih kuat, dan lebih efisien!
          </h2>
          <p className="text-gray-800 text-base md:text-xl lg:text-2xl">
          Kami hadir untuk membantu Anda
          menyelesaikan tugas dengan fokus dan determinasi.Jangan biarkan apa pun menghalangi produktivitas Anda. Mari mulai sekarang! 😠💪
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 right-8 md:right-20">
        <Link to={"/create-document"}>
          <img src={iconPlus} alt="icon-plus" className="w-10 md:w-[5.25rem]" />
        </Link>
      </div>
      <div className="absolute -bottom-16">
        <p className="text-gray-600 text-xs">username: {jsCookie.get("user")}</p>
      </div>
    </section>
  );
}
