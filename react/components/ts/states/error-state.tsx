import { ErrorSvgComponent } from "assets/icons/error";
import React from "react";
import { Link } from "react-router-dom";

const ErrorStateComponent = () => {
  return (
    <React.Fragment>
      <div className="flex justify-center flex-col items-center h-[60vh]">
        <ErrorSvgComponent className="w-48 h-48" />
        <h3 className="mt-2 text-xl font-medium font-lato text-tailwindGray-900">
          Something went wrong
        </h3>
        <p className="mt-1 text-base font-lato text-tailwindGray-500">
          We are having issues loading this page.
        </p>
        <Link to={"/"}>
          <button className="px-3 text-white py-1 rounded-xl mt-3 bg-tailwindGray-900">
            Go Home
          </button>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default ErrorStateComponent;
