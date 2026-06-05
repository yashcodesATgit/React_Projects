import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between gap-4 px-8 py-3 w-full  bg-slate-900/95 shadow-[0_20px_80px_rgba(15,23,42,0.28)]">
      <button className="bg-white/10 text-white uppercase px-6 py-3 rounded-full font-semibold tracking-widest text-lg border border-white/10 hover:bg-white/20 transition">
        Target Audience
      </button>

      <div className="flex items-center mt-2 gap-12">
        <div className="rounded-3xl bg-slate-900/90 px-20 py-3 shadow-[0_16px_40px_rgba(15,23,42,0.18)]">
          <p className="text-lg uppercase tracking-widest text-slate-200 mb-1">
            Digital Banking
          </p>
          <h4 className="text-white text-lg  uppercase font-semibold">
            Platform
          </h4>
        </div>

        <div className="inline-flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-green-500 ring-1 ring-green-500"></span>
          <span className="text-lg text-slate-300">Live insights</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
