import React from "react";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

function Testimonials() {
  return (
    <div className="maindiv maindiv1">
      <p className=" naslov1 naslov2">Testimoinals</p>
      <div className="boxTestiominal">
        <div className="boxTestiominal1">
          <ArrowCircleDownIcon sx={{ fontSize: 60 }}>Arrow</ArrowCircleDownIcon>
          <p className="paragraf">
            “I'm a testimonial. Click to edit me and add text that says
            something nice about you and your services. Let your customers
            review you and tell their friends how great you are.”
          </p>
          <p className="paragraf1"> - Robert King -</p>
        </div>
        <div className="boxTestiominal1">
          <ArrowCircleDownIcon sx={{ fontSize: 60 }}>Arrow</ArrowCircleDownIcon>
          <p className="paragraf">
            “I'm a testimonial. Click to edit me and add text that says
            something nice about you and your services. Let your customers
            review you and tell their friends how great you are.”
          </p>
          <p className="paragraf1"> - VISION electronics -</p>
        </div>
        <div className="boxTestiominal1">
          <ArrowCircleDownIcon sx={{ fontSize: 60 }}>Arrow</ArrowCircleDownIcon>
          <p className="paragraf">
            “I'm a testimonial. Click to edit me and add text that says
            something nice about you and your services. Let your customers
            review you and tell their friends how great you are.”
          </p>
          <p className="paragraf1"> - Gary Lewis - </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
