import { useState } from "react";

function SuperFromIndia(kpWebDev) {
  let age = 1000;
  // normal javascript
  age++;

  const content = (
    <>
      <p>I am the first para in content</p>
      <p>I am the second para in content</p>
      <p>I am the third para in content</p>
      <p>I am the para in content</p>
      <Image />
    </>
  );

  // return jsx
  return (
    <>
      <p>=====================starts=====================</p>
      {/* <p>"I am superman form india imposting as batman from india"</p>
      <p>I am {age} years old</p>
      <p>Children: {kpWebDev.children}</p> */}
      <Article>
        {/* <p>First Para</p>
        <p>Second Para</p>
        <button>Click Me</button> */}
      </Article>
      <p>=====================ends=====================</p>
    </>
  );
}

function Article(sai) {
  const [num, setNum] = useState(0);

  const handleClick = () => {
    setNum(num + 1);
  };

  console.log("I rendering or re-rendering");

  return (
    <>
      {/* <h2>Author: KP</h2>
      {sai.children}
      {sai.content} */}
      <p>currentNum: {num}</p>
      {/* addEventLister (internal)*/}
      <button type="button" onClick={handleClick}>
        Increment
      </button>
      <footer>
        Follow me on instagram: <a href="#instaUrl">Instagram</a>
      </footer>
    </>
  );
}

function Image() {
  return (
    <img
      width={100}
      height={100}
      src="https://qph.cf2.quoracdn.net/main-qimg-c5912cc0d90103f7d72330d0b047c2b2-lq"
      alt="Tanjiro from Deomon Slayer anime"
    />
  );
}

export default SuperFromIndia;
