import { XIcon } from "@heroicons/react/solid";
import CustomModal from "components/modal";
import { ReactNode, useCallback, useState } from "react";

interface IUseModalComponentProps {
  children: ReactNode;
  title?: string;
  size?: number;
}

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  const Modal = ({ children, title, size }: IUseModalComponentProps) => {
    return (
      <CustomModal show={isModalOpen} setShow={closeModal} size={size}>
        {title && <ModalHeader title={title} />}
        {children}
      </CustomModal>
    );
  };

  const ModalHeader = ({ title }) => {
    return (
      <header className="flex items-center justify-between mb-4">
        <h5 className="text-lg font-semibold">{title}</h5>
        <XIcon className="w-6 h-6 cursor-pointer" onClick={closeModal} />
      </header>
    );
  };

  return {
    isModalOpen,
    openModal,
    closeModal,
    Modal,
  };
};

export default useModal;
