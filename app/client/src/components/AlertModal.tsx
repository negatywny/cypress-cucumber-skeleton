import React from 'react';
import { Button } from './Button';

interface AlertModalProps extends React.PropsWithChildren {
  onDismiss: () => void;
}

export const AlertModal: React.FC<AlertModalProps> = ({
  children,
  onDismiss,
}) => {
  return (
    <div className="flex flex-col gap-4 text-center" data-cy="alert_modal">
      <div className="flex flex-col items-center text-sm text-gray-500">
        <h5 className="mb-1 text-xl font-medium text-gray-500" data-cy="alert_modal_text">{children}</h5>
      </div>

      <div className="flex gap-2 justify-end">
        <Button color="outline" onClick={onDismiss} data-cy="alert_modal_submit_button">
          Ok
        </Button>
      </div>
    </div>
  );
};
