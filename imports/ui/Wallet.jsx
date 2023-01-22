import React from "react";

function Wallet() {
    const wallet = {
        _id: "123123123",
        balance: 5,
        currency: "USD",
    };

    return (
        <>
            <div class="flex  mt-5 mx-auto w-[50%] shadow-md">
                <form class="flex-auto p-6">
                    <div class="w-full flex-none text-sm font-medium text-gray-500 mt-2">
                        Main Account
                    </div>

                    <div class="w-full flex-none text-sm font-medium text-gray-500 mt-2">
                        Wallet ID:
                    </div>

                    <div class="flex flex-wrap">
                        <h1 class="flex-auto text-lg font-bold text-slate-900">
                            {wallet._id}
                        </h1>
                        <div class="text-lg font-bold text-black-500">
                            {wallet.balance} {wallet.currency}
                        </div>
                    </div>

                    <div className="flex flex-row mt-2">
                        <div className="px-2 py-3 text-right">
                            <button
                                type="button"
                                className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                            >
                                Add Money
                            </button>
                        </div>

                        <div className="px-2 py-3 text-right">
                            <button
                                type="button"
                                className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                            >
                                Transfer Money
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Wallet;
