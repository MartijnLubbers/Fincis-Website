import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './banner.css'

const Banner = (props) => {
  return (
    <div id={props.bannerId} className="banner-header30 thq-section-padding">
      <div className="banner-container">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="banner-image"
        />
      </div>
      <div className="banner-max-width thq-section-max-width">
        <div className="banner-content">
          <h1 className="banner-text1 thq-heading-1">
            {props.heading1 ?? (
              <Fragment>
                <span className="banner-text3">
                  Administratiekantoor Fincis
                </span>
              </Fragment>
            )}
          </h1>
          <p className="banner-text2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="banner-text4">
                  Fincis is een administratiekantoor dat zich richt op startende
                  ondernemingen, ZZP-ers en MKB-bedrijven.
                </span>
              </Fragment>
            )}
          </p>
          <div className="banner-actions"></div>
        </div>
      </div>
    </div>
  )
}

Banner.defaultProps = {
  heading1: undefined,
  imageSrc:
    '/1920-close-up-of-a-business-professional-using-a-calculator-1500w.jpg',
  bannerId: '',
  imageAlt: 'image',
  content1: undefined,
}

Banner.propTypes = {
  heading1: PropTypes.element,
  imageSrc: PropTypes.string,
  bannerId: PropTypes.string,
  imageAlt: PropTypes.string,
  content1: PropTypes.element,
}

export default Banner
