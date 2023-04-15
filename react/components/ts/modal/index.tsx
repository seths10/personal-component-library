import { Dialog, Transition } from "@headlessui/react";
import * as React from "react";

import { useOutsideListener } from "hooks/useOutsideListener";

interface IModalProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  size?: number;
  height?: number;
  canClose?: boolean;
  ChildItem?: any;
}

const Modal: React.FC<IModalProps> = ({
  children,
  setShow,
  show,
  size,
  canClose,
  height,
  ChildItem,
}) => {
  const ref = React.useRef(null);
  useOutsideListener(ref, () => {
    if (canClose) setShow?.(false);
  });

  return (
    <React.Fragment>
      <Transition.Root show={show} as={React.Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 z-30 overflow-y-auto hideScrollbar w-[100%] mx-auto"
          initialFocus={ref}
          open={show}
          onClose={() => setShow?.(false)}
        >
          <div className="flex flex-col items-center justify-center min-h-screen ">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 backdrop-blur-[1px] bg-[#000000] bg-opacity-25 transition-opacity" />
            </Transition.Child>
            {ChildItem ? <ChildItem /> : null}
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div
                ref={ref}
                style={{ width: `${size}vw`, height: `${height}vh` }}
                className={`inline-block bg-white  rounded-xl px-6 py-6 text-left overflow-hidden shadow-lg transform transition-all`}
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                {children}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </React.Fragment>
  );
};

Modal.defaultProps = {
  size: 30,
  canClose: false,
};

export default Modal;
