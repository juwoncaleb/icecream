import React from "react";
import Header from "./component/header";
import Footer from "./component/footer";

const Checkout = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-white check text-gray-800 py-10 px-6 md:px-20">
        <h1 className="text-3xl font-semibold mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT SIDE - FORM */}
          <div className="lg:col-span-2 space-y-8">
            {/* Email */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Information</h2>
              <label className="block text-sm mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full border border-red-300 px-4 py-2 rounded"
              />
              <p className="text-sm mt-1">
                Already have an account?{" "}
                <a className="underline" href="#">
                  Log in
                </a>
              </p>
            </div>

            {/* Shipping Address */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Shipping address</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-sm">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-red-300 px-4 py-2 rounded"
                  />
                </div>
                <div>
                  <label className="text-sm">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-red-300 px-4 py-2 rounded"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="text-sm">Company Name (optional)</label>
                <input
                  type="text"
                  className="w-full border border-red-300 px-4 py-2 rounded"
                />
              </div>

              <div className="mb-4">
                <label className="text-sm">
                  Street Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="House number and street name"
                  className="w-full border border-red-300 px-4 py-2 rounded mb-2"
                />
                <input
                  type="text"
                  placeholder="Apartment, suite, unit, etc. (optional)"
                  className="w-full border border-red-300 px-4 py-2 rounded"
                />
              </div>

              <div className="mb-4">
                <label className="text-sm">
                  Country / Region <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  defaultValue="Nigeria"
                  className="w-full border border-red-300 px-4 py-2 rounded"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-sm">
                    Town / City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-red-300 px-4 py-2 rounded"
                  />
                </div>
                <div>
                  <label className="text-sm">
                    State <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full border border-red-300 px-4 py-2 rounded">
                    <option>Select an option...</option>
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label className="text-sm">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  className="w-full border border-red-300 px-4 py-2 rounded"
                />
              </div>

              <button className="paymnet_btn">Proceed to Payment</button>
            </div>
          </div>

          {/* RIGHT SIDE - SUMMARY */}
          <div className="border border-red-200 p-6 rounded space-y-4">
            <h2 className="text-lg font-bold uppercase">Your Order</h2>

            <p className="text-sm">
              Terminal Pickup Timeline is 5–10 Working Days. Orders above 5kg
              attract extra charges.
            </p>
            <p className="text-sm">
              Other Shipping Rates Are For 1kg and below, anything higher than
              1kg attracts an extra fee.
            </p>

            <div className="flex items-center gap-4 mt-4">
              <div className="w-4 h-4 bg-black rounded"></div>
              <img
                src="/icecream.jpg"
                alt="Ice Cream"
                className="w-12 h-12 object-cover rounded"
              />
              <p className="text-sm flex-1">Choco Vanilla Ice Cream (500ml)</p>
              <span className="text-sm font-medium">₦3,500</span>
            </div>

            <div className="border-t pt-4 space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Coupon code"
                  className="flex-1 border border-red-300 px-4 py-2 rounded"
                />
                <button className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded">
                  Apply
                </button>
              </div>

              <div className="flex justify-between text-sm pt-4">
                <span>Subtotal</span>
                <span>₦3,500</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Transaction Fees</span>
                <span>₦316</span>
              </div>
              <div className="flex justify-between text-base font-semibold border-t pt-4">
                <span>Total</span>
                <span>₦3,816</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
