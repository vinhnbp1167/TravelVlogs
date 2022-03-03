import React from 'react'
import BasicInfo from './BasicInfo'
import WriteReview from './WriteReview'
import './UploadPage.css'

const UploadPage = () => {
  return (
    <div className='upload-page'>
        <div className='upload-page_panelList-wrap'>
            <div className='upload-page_panel-wrap'>
                <BasicInfo />
            </div>
            
            <div className='upload-page_list-wrap'>
                <WriteReview />
            </div>
            
        </div>
    </div>
    
  )
}

export default UploadPage
