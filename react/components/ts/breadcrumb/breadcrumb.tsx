import { ChevronRightIcon, HomeIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const BreadCrumb = ({ pages }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-1">
        <li>
          <div>
            <a
              href="#"
              className="text-tailwindGray-500 hover:text-tailwindGray-600"
            >
              <HomeIcon className="flex-shrink-0 w-5 h-5" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </a>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <ChevronRightIcon
                className="flex-shrink-0 w-5 h-5 text-tailwindGray-500"
                aria-hidden="true"
              />
              <Link
                to={page.href}
                className="text-sm font-medium py-1 px-1 hover:bg-tailwindGray-100 rounded hover:px-1 text-tailwindGray-600 hover:text-tailwindGray-800"
                aria-current={page.current ? "page" : undefined}
              >
                {page.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
