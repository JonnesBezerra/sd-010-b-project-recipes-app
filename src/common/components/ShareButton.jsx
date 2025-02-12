import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shareBtn from '../../images/shareIcon.svg';

const copy = require('clipboard-copy');

export default function ShareButton({ id, type, index, path, className }) { // desestruturação de props
  const [linkShare, setLinkShare] = useState(false);

  const whatToCopy = () => {
    if (path) {
      copy(`http://localhost:3000/${type}s/${id}`);
      setLinkShare(!linkShare);
    } else {
      copy(window.location.href.replace('/in-progress', ''));
      setLinkShare(!linkShare);
    }
  };

  const renderButtons = () => (
    <button
      type="button"
      onClick={ whatToCopy }
    >
      <img
        src={ shareBtn }
        alt="share-icon"
        data-testid={ path ? `${index}-horizontal-share-btn` : 'share-btn' }
        width="30px"
        style={ { cursor: 'pointer' } }
      />
    </button>
  );

  return (
    <div className={ className }>
      {renderButtons()}
      <div className={ !linkShare ? 'hideMsg' : 'showMsg' }>Link copiado!</div>
    </div>
  );
}

ShareButton.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  path: PropTypes.bool,
  index: PropTypes.number,
  className: PropTypes.string,
};

ShareButton.defaultProps = {
  id: 0,
  type: '',
  path: false,
  index: 0,
  className: '',
};
