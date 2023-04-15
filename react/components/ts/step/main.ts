import { CheckIcon } from "@heroicons/react/solid";
import { classNames } from "components/className";
import { StepComponentProp } from "./types";

function StepsComponent({ steps }: StepComponentProp) {
  return (
    <nav aria-label="Progress">
      <ol className="overflow-hidden">
        {steps.map((step, stepIdx) => (
          <li
            key={step.name}
            className={classNames(
              stepIdx !== steps.length - 1 ? "pb-7" : "",
              "relative"
            )}
          >
            {step.status === "complete" ? (
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div
                    className="absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-secondary"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="group relative flex items-center">
                  <span className="flex h-9 items-center">
                    <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-secondary group-hover:bg-secondary">
                      <CheckIcon
                        className="h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </span>
                  <span className="ml-2 flex min-w-0 flex-col">
                    <span className="text-sm 2xl:text-base font-medium font-lato text-secondary">
                      {step.name}
                    </span>
                    <span className="text-sm 2xl:text-base text-tailwindGray-900">
                      {step.description}
                    </span>
                  </span>
                </div>
              </>
            ) : step.status === "current" ? (
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div
                    className="absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-tailwindGray-300"
                    aria-hidden="true"
                  />
                ) : null}
                <div
                  className="group relative flex items-center"
                  aria-current="step"
                >
                  <span className="flex h-9 items-center" aria-hidden="true">
                    <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-secondary bg-white">
                      <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
                    </span>
                  </span>
                  <span className="ml-2 flex min-w-0 flex-col">
                    <span className="text-sm 2xl:text-base font-lato font-medium text-secondary">
                      {step.name}
                    </span>
                    <span className="text-sm 2xl:text-base text-primary">
                      {step.description}
                    </span>
                  </span>
                </div>
              </>
            ) : (
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div
                    className="absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-tailwindGray-300"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="group relative flex items-center">
                  <span className="flex h-9 items-center" aria-hidden="true">
                    <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-tailwindGray-300 bg-white group-hover:border-tailwindGray-400">
                      <span className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-tailwindGray-300" />
                    </span>
                  </span>
                  <span className="ml-2 flex min-w-0 flex-col">
                    <span className="text-sm 2xl:text-base font-lato font-medium text-tailwindGray-900">
                      {step.name}
                    </span>
                    <span className="text-sm 2xl:text-base text-tailwindGray-500">
                      {step.description}
                    </span>
                  </span>
                </div>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export { StepsComponent };
