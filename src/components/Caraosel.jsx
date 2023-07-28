import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';
import banner1 from "@/assets/banner1.jpg";
import banner2 from "@/assets/banner2.jpg";
import banner3 from "@/assets/banner3.jpg";

const aspectRatio = 16 / 9; 

const imageStyle = {
  width: '100%',
  paddingTop: `${(1 / aspectRatio) * 100}%`, 
  position: 'relative',
};

const imageWrapperStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
};

const CarouselComponent = () => (
  <Carousel autoplay>
    <div>
      <div style={imageStyle}>
        <div style={imageWrapperStyle}>
          <Image src={banner3} layout="fill" objectFit="cover" alt="drawing_image" />
        </div>
      </div>
    </div>
    <div>
      <div style={imageStyle}>
        <div style={imageWrapperStyle}>
          <Image src={banner1} layout="fill" objectFit="cover" alt="drawing_image" />
        </div>
      </div>
    </div>
    <div>
      <div style={imageStyle}>
        <div style={imageWrapperStyle}>
          <Image src={banner2} layout="fill" objectFit="cover" alt="drawing_image" />
        </div>
      </div>
    </div>
  </Carousel>
);

export default CarouselComponent;
