import React from 'react';

export default function ShareButtons() {
  return (
    <div className="flex item">
      <div className="ml-2 cursor-pointer">
        <a href="https://www.facebook.com/rbleipzig/" target="_blank" rel="noopener noreferrer">
          <img alt="facebook" src={require('../assets/icon_facebook.svg')} className="w-8 opacity-100 hover:opacity-50 transition-all duration-200" />
        </a>
      </div>
      <div className="mx-2 cursor-pointer">
        <a href="https://twitter.com/DieRotenBullen" target="_blank" rel="noopener noreferrer">
          <img alt="twitter" src={require('../assets/icon_twitter.svg')} className="w-8 opacity-100 hover:opacity-50 transition-all duration-200" />
        </a>
      </div>
      <div className="mr-2 cursor-pointer">
        <a href="https://www.instagram.com/dierotenbullen/" target="_blank" rel="noopener noreferrer">
          <img alt="instagram" src={require('../assets/icon_instagram.svg')} className="w-8 opacity-100 hover:opacity-50 transition-all duration-200" />
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
