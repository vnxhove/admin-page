import { AngleRightIcon } from "../icons";
const TitleWithNav = ({ title, list, className = "" }) => {
  return (
    <div
      className={`flex flex-wrap items-center justify-between gap-3 mb-6 ${className}`}
    >
      <h2
        className="text-xl font-semibold text-gray-800 dark:text-white/90"
        x-text="pageName"
      >
        {title}
      </h2>
      <nav>
        <ol className="flex items-center gap-1.5">
          <li>
            <a
              className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400"
              href="/"
              data-discover="true"
            >
              Add
              <AngleRightIcon />
            </a>
          </li>
          <li className="text-sm text-gray-800 dark:text-white/90">{list}</li>
        </ol>
      </nav>
    </div>
  );
};

export default TitleWithNav;
