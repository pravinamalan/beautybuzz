import React from 'react'
import './virtual.css';
import shades from '../../assets/shade.png';
import Before from '../../assets/before.png'
import After from '../../assets/after.png';
import ReactCompareImage from 'react-compare-image';
const Virtual = () => {
  return (
    <div className='container virtual my-5'>
        <div className="left">
            <span>Virtual Try-on</span>
            <span>Never buy the wrong shange again</span>
            <img src={shades} alt="shade-img"/>
            <span>Try Now!</span>
        </div>
        <div className="right">
            <div className="image-comparision-wrapper">
            <ReactCompareImage leftImage={Before} rightImage={After} className="image-comparision-div"/>
            </div>
        </div>
    </div>
  )
}

export default Virtual