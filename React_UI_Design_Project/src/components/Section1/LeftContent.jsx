import React from "react";
import "remixicon/fonts/remixicon.css";

const LeftContent = () => {
  return (
    <div className="h-full w-1/3 flex flex-col justify-between py-5 pr-10">
      <div className="space-y-10">
        <div className="max-w-md">
          <h3 className="text-7xl leading-tight mb-7 font-bold">
            Prospective <br />
            <span className="text-gray-500">Customer</span> <br />
            Segmentation
          </h3>
          <p className="text-xl text-slate-700">
            Identify customer segments, customize digital banking journeys, and
            turn insights into smarter financial products that build loyalty and
            grow revenue.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-4xl border border-slate-200/30 bg-slate-100/80 p-6">
            <p className="text-sm uppercase tracking-widest text-slate-500">
              Trusted by
            </p>
            <p className="mt-3 text-2xl font-semibold text-slate-950">
              30+ banks
            </p>
          </div>
          <div className="rounded-4xl border border-slate-200/30 bg-slate-100/80 p-6">
            <p className="text-sm uppercase tracking-widest text-slate-500">
              Faster
            </p>
            <p className="mt-3 text-2xl font-semibold text-slate-950">
              72% launch time
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-5 mb-10">
        <button className="bg-gray-800 text-white rounded-full px-20 py-5 text-lg font-semibold hover:bg-slate-800 transition">
          EXPLORE SEGMENTS
        </button>
        <div className="flex items-center gap-3 text-slate-600">
          <span className="flex h-20 w-25 items-center justify-center rounded-full border border-slate-300/40 bg-slate-100/10 text-slate-900">
            <i className="ri-send-ins-fill text-2xl"></i>
          </span>
          <span className="text-xl">Live demo available</span>
        </div>
      </div>
    </div>
  );
};

export default LeftContent;
