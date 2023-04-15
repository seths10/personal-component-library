import { EmptyLogo } from "assets";

interface IEmptyStateProps {
  title: string;
  content: string;
}

const EmptyStateComponent = ({ title, content }: IEmptyStateProps) => {
  return (
    <div className="flex flex-col items-center">
      <img src={EmptyLogo} alt="empty" />
      <h3 className="mt-2 text-lg font-medium font-lato text-tailwindGray-900">
        {title}
      </h3>
      <p className="mt-1 text-base font-lato text-tailwindGray-500">
        {content}
      </p>
    </div>
  );
};

export default EmptyStateComponent;
