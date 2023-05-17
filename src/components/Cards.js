import React from "react";
import image15 from '../Images/image15.png'
import image16 from '../Images/image16.png'
import image17 from '../Images/image17.png'
import image18 from '../Images/image18.png'
import image19 from '../Images/image19.png'
import image20 from '../Images/image20.png'
import image21 from '../Images/image21.png'
import image22 from '../Images/image22.png'
import image23 from '../Images/image23.png'
import image24 from '../Images/image24.png'


const Cards = () => {
  const cards = [
    {
      img: image15,
      titre: "Peaceful Piano",
      paragraphe: "Peaceful piano to help you slow down, breathe, and...",
    },
    {
      img: image16,
      titre: "Deep Focus",
      paragraphe: "Keep calm and focus with ambient and post-rock music.",
    },
    {
      img: image17,
      titre: "Instrumental study",
      paragraphe: "Focus with soft study music in the background.",
    },
    {
      img: image18,
      titre: "Focus Flow",
      paragraphe: "Uptempo instrumental hip hopbeats.",
    },
    {
      img: image19,
      titre: "Beats to think to",
      paragraphe: "Focus with deep techno and tech house.",
    },
    {
      img: image20,
      titre: "Today's top Hits",
      paragraphe: "Harry Styles is on top of the Hottest 50!",
    },
    {
      img: image21,
      titre: "RapCaviar",
      paragraphe: "New music from Lil Baby, Gucci Mane and DaBaby.",
    },
    {
      img: image22,
      titre: "All Out 2010s",
      paragraphe: "The biggest songs of the 2010s.",
    },
    {
      img: image23,
      titre: "Rock Classics",
      paragraphe: "Rock legends & epic songs that continue to inspire...",
    },
    {
      img: image24,
      titre: "Chill Hits",
      paragraphe: "Kick back to the best new and recent chill hits.",
    },
  ];
  return (
    <div className="container py-3">
        <h3 className="text-white my-4">Focus</h3>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-5">
        {cards.map((card, index) => (
          <div className="col mb-4" key={index}>
            <div className="card bg-dark">
              <img src={card.img} className="card-img-top" alt="Img" />
              <div className="card-body">
                <h5 className="card-title text-white">{card.titre}</h5>
                <p className="card-text text-white mt-5">{card.paragraphe}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
