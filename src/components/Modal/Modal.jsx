import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export const Modal = ({ url, offModal }) => {
  useEffect(() => {
    const closeByEsc = event => {
      if (event.key === 'Escape') {
        offModal('');
      }
    };

    const handleKeyDown = event => closeByEsc(event);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [offModal]);

  const closeBackdrop = event => {
    if (event.target === event.currentTarget) {
      offModal('');
    }
  };

  return (
    <div className="overlay" onClick={closeBackdrop}>
      <div className="modal-img">
        <img src={url} alt="" width="900" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  url: PropTypes.string,
  offModal: PropTypes.func.isRequired,
};
