import "./sample.css";
import { useState } from "react";

import pic1 from "../../assets/img/445066767_122148717602045650_3095810643822931292_n.jpg";
import pic2 from "../../assets/img/449836800_885949813549508_257474709254580713_n.jpg";
import pic3 from "../../assets/img/453883125_475607618561539_5196082344181207652_n.jpg";
import iphone from '../../assets/img/pexels-doouglasma-14666028-removebg-preview.png'

const Sample = () => {
  const [search, setSearch] = useState("");

  const blogPageData = [
    {
      id: 1,
      img: pic1,
      tags: "Fitness",
      title: " dolor ",
      date: "30 Jan 24",
    },
    {
      id: 2,
      img: pic2,
      tags: "Martial Arts",
      title: "q ",
      date: "4 Aug 24",
    },
    {
      id: 3,
      img: pic3,
      tags: "Boxing",
      title: " dolor Sit ",
      date: "4 Sep 24",
    },
    {
      id: 4,
      img: pic1,
      tags: "Martial Arts",
      title: "Sit ",
      date: "24 Aug 24",
    },
    {
      id: 5,
      img: pic2,
      tags: "Martial Arts",
      title: "Lorem Ipsum dolor Sit ",
      date: "24 Aug 24",
    },
    {
      id: 6,
      img: pic3,
      tags: "Martial Arts",
      title: "xxxit ",
      date: "24 Aug 24",
    },
    {
      id: 7,
      img: pic3,
      tags: "Martial Arts",
      title: "Lwwwt ",
      date: "24 Aug 24",
    },
    {
      id: 8,
      img: pic3,
      tags: "Martial Arts",
      title: "Lorem Ipsum dolor Sit ",
      date: "24 Aug 24",
    },
    {
      id: 9,
      img: pic3,
      tags: "Martial Arts",
      title: "Lorem Ipsum dolor Sit ",
      date: "24 Aug 24",
    },
    {
      id: 10,
      img: pic3,
      tags: "Martial Arts",
      title: "Lorem Ipsum dolor Sit ",
      date: "24 Aug 24",
    },
  ];

  let iphone11 = document.getElementById('iphone');

  window.addEventListener('scroll', ()=> {
    let value = window.scrollY;

    iphone11.style.marginTop = value * -.2 + 'rem';
  })

  return (
    <>
      <div className="sample__container">
        {/* <input onChange={(e) => setSearch(e.target.value)} type="text" />
        {blogPageData
          .filter((data) => data.title.toLowerCase().includes(search))
          .map((data) => (
            <div className="sample__content" key={data.id}>
              <img src={data.img} alt="" />
              <p> {data.title} </p>
            </div>
          ))} */}
          <div className="sample__content">
            <section id="text" className="parallax">
              <h2>PARALLAX WEBSITE</h2>
              <img id="iphone" src={iphone} alt="" />
            </section>
            <section className="text">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae cum perferendis unde consequatur, voluptas aut!
              </p>
            </section>
          </div>
      </div>
    </>
  );
};

export default Sample;
