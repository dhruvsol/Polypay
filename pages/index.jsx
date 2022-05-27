import { useState } from "react";

export default function Home() {
  const [warn, setWarn] = useState(false);
  return (
    <>
      <div className="min-h-screen w-full bg-purple-700 flex justify-center items-center flex-col  ">
        <h1 className="text-2xl text-white font-bold  ">Welcome to Polypay</h1>

        <button
          onClick={() => setWarn(true)}
          className="my-4 bg-white w-5/12 h-10 lg:w-40 rounded-2xl font-bold hover:scale-105  "
        >
          Get Early Access
        </button>
        {warn && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                {/* <ExclamationIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" /> */}
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  PolyPay is only avalible to vada pao members
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
