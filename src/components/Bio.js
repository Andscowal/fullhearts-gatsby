import React from 'react'
import ReactTooltip from 'react-tooltip'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {

  render() {
    return (
      <div
        style={{
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Texas`}
          id="texas"
          style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '20px',
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written for <strong style={{color: '#000080'}} data-tip data-for='moon'>Mrs. Blue</strong> by a man who is absolutely crazy about her.
        </p>
        <ReactTooltip id='moon' multiline='true' place="bottom" type="light" className="moonText"><span>I love you to the moon <br /> and back</span></ReactTooltip>
      </div>
    )
  }
}

export default Bio
