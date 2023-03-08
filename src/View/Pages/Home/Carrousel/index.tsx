import React, { useState } from "react";
import { SpinConainer } from "./styles";
import "./styles.tsx";
import { Image } from '@chakra-ui/react'


const spin = ['https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg', 'https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg', 'https://cdn.britannica.com/91/181391-050-1DA18304/cat-toes-paw-number-paws-tiger-tabby.jpg', 'https://www.humanesociety.org/sites/default/files/styles/768x326/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ISdG3bxz', 'https://cdn.arstechnica.net/wp-content/uploads/2023/01/catplay.jpg', 'https://www.scottishspca.org/sites/default/files/styles/full_content/public/2019-09/Intro%20cats%201000x600.jpeg?itok=FMIoP9pM', 'https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761.jpg', 'https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=650%2Cq=70%2Csharpen=1%2Cwidth=956/wp-content/uploads/black-cat-day-1-scaled.jpg', 'https://www.hallvet.com.au/wp-content/uploads/2018/10/27fe86f3a871f8d77f76fab7bc1f5f89-400x200.jpg', 'https://images.hindustantimes.com/img/2022/08/07/550x309/cat_1659882617172_1659882628989_1659882628989.jpg', 'https://i.ytimg.com/vi/VFAjnCLeygI/maxresdefault.jpg']

const Carousel = () => {

  const [showNumber, setShowNumber] = useState([0, 1, 2]);

  const handleNext = () => {
    const newShowNumber = showNumber.map((item) => item + 1);
    setShowNumber(newShowNumber);
  }

  const handlePrev = () => {
    const newShowNumber = showNumber.map((item) => item - 1);
    setShowNumber(newShowNumber);
  }

  const randomize = () => {
    const newShowNumber = (Math.floor(Math.random() * spin.length))
    let newSet    
    if(newShowNumber === 0) {
      console.log(newShowNumber)
      newSet = [newShowNumber, newShowNumber+1, newShowNumber+2]
    }
    else {
      if(newShowNumber === spin.length-1) {
        console.log(newShowNumber)
        newSet = [newShowNumber-2, newShowNumber-1, newShowNumber]
      }
      else{
        console.log(newShowNumber)
      newSet = [newShowNumber-1, newShowNumber, newShowNumber+1]
      }
    }
    console.log('set novo ->  ' + newSet)
    setShowNumber(newSet);
  }

  const randomTest = () => {
   const uwu =  Math.floor(Math.random() * spin.length)
    console.log(showNumber)
  }


  return (
    <>
    <SpinConainer>
      {spin.map((item, index) => (
        <div className="carousel" key={index} onClick={() => (randomTest())}>
          {
            showNumber.includes(index) && (
              <Image boxSize='200px' src={item} alt='Dan Abramov' />
            )
          }
        </div>
      ))}
    </SpinConainer>
      
      <button onClick={() => handlePrev()}>Anterior</button>
      <button onClick={() => handleNext()}>Proximo</button>
      <button onClick={() => {
        randomize()
        }}>Randomizar</button>
    </>
  );
};

export default Carousel;