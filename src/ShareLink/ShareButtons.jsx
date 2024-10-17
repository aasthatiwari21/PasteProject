import React from 'react'
import { TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon } from 'react-share';

const ShareButtons = () => {
    const shareUrl = 'https://yourwebsite.com';
    const title = 'Check out this awesome website!';
  return (
    <div>
      <TwitterShareButton url={shareUrl} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <LinkedinShareButton url={shareUrl} title={title}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </div>
  )
}

export default ShareButtons