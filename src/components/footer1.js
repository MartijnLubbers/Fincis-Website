import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './footer1.css'

const Footer1 = (props) => {
  return (
    <footer className="footer1-footer1 thq-section-padding">
      <div className="footer1-max-width thq-section-max-width">
        <div className="footer1-row1">
          <span className="thq-body-small">
            {props.content31 ?? (
              <Fragment>
                <span className="footer1-text3">
                  <span>KvK nummer: 51872366</span>
                  <br></br>
                  <span>BTW nummer: NL 107643285B01</span>
                </span>
              </Fragment>
            )}
          </span>
          <div className="footer1-footer-links1">
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="footer1-image"
            />
          </div>
        </div>
        <div className="footer1-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer1-row2">
            <span className="thq-body-small">
              {props.content3 ?? (
                <Fragment>
                  <span className="footer1-text2">
                    © 2024 Fincis. All rights reserved.
                  </span>
                </Fragment>
              )}
            </span>
            <div className="footer1-footer-links2">
              <span className="thq-body-small">
                {props.cookiesLink ?? (
                  <Fragment>
                    <span className="footer1-text1">Algemene Voorwaarden</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer1.defaultProps = {
  imageSrc: '/87e42a55e0-1400w.jpeg',
  cookiesLink: undefined,
  imageAlt: 'image',
  content3: undefined,
  content31: undefined,
}

Footer1.propTypes = {
  imageSrc: PropTypes.string,
  cookiesLink: PropTypes.element,
  imageAlt: PropTypes.string,
  content3: PropTypes.element,
  content31: PropTypes.element,
}

export default Footer1
