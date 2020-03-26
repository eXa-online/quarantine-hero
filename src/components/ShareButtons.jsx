import React from 'react';

export default function ShareButtons(props) {
  const { type } = props;
  const facebookIconPath = type === 'dark' ? require('../assets/icon_facebook_black.svg') : require('../assets/icon_facebook.svg');
  const twitterIconPath = type === 'dark' ? require('../assets/icon_twitter_black.svg') : require('../assets/icon_twitter.svg');
  return (
    <div className="flex item">
      <div className="ml-2 cursor-pointer">
        <a
          href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.wiralle-rbl.com"
          target="_blank"
          rel="noreferrer noopener"
          title="Facebook"
        >
          <img alt="facebook" src={facebookIconPath} className="w-8 opacity-100 hover:opacity-50 transition-all duration-200" />
        </a>
      </div>
      <div className="mx-2 cursor-pointer">
        <a
          href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.wiralle-rbl.com%2F&text=Was%20ist%20in%20diesen%20Zeiten%20wichtiger%20als%20Fu&szlig;ball%3F%20WIR%20ALLE.%20Und%20deshalb%20m&ouml;chten%20wir%20mit%20dieser%20Plattform%20eine%20einfache%20und%20schnelle%20M&ouml;glichkeit%20schaffen%2C%20wie%20wir%20uns%20gegenseitig%20helfen%20k&ouml;nnen.%20Eine%20Stadt.%20Ein%20Team.&hashtags=rbl%2Cwiralle%2Ccoronahilfe"
          target="_blank"
          rel="noreferrer noopener"
          title="Twitter"
        >
          <img alt="twitter" src={twitterIconPath} className="w-8 opacity-100 hover:opacity-50 transition-all duration-200" />
        </a>
      </div>
      {/*<div className="mx-2 cursor-pointer">*/}
      {/*  <a href="https://www.youtube.com/channel/UCkZwB4IGoNBvRmVT2gaO4XA" target="_blank" rel="noopener noreferrer">*/}
      {/*    <svg alt="youtube" src={require('../assets/icon_youtube.svg')} className="w-8 transition-all duration-200" />*/}
      {/*  </a>*/}
      {/*</div>*/}
    </div>
  );
}
