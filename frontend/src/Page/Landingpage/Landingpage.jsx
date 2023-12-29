import React from "react";
import "../styles/header.scss";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
import Logo from "./Logo";
import Korpa from "./korpa";
import "../styles/mainLandingpage.scss";
import "../styles/footer.scss";

import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
function Landingpage() {
  return (
    <div className="glavniDiv">
      <main className="main">
        <div className="maindiv">
          <div className="Glavninaslov">
            <h2 className="h2">Profesional</h2>
            <h2 className="h2">Drone</h2>
            <h2 className="h2">Solutions</h2>
            <button className="shopNow">Shop now</button>
          </div>
          <img
            className="slikaDrona"
            src="https://static.wixstatic.com/media/ea26fd_0896b1697c1647f0832db31f200aa5aa~mv2_d_3516_1665_s_2.jpg/v1/fill/w_653,h_555,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_0896b1697c1647f0832db31f200aa5aa~mv2_d_3516_1665_s_2.jpg"
            alt="Dron"
          />
        </div>
        <div className="maindiv">
          <div className="dronovi">
            <img
              className="slikedronova"
              src="https://static.wixstatic.com/media/ea26fd_9c22735f30f6459295457a5bc33c8070~mv2_d_2640_1200_s_2.jpg/v1/fill/w_525,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea26fd_9c22735f30f6459295457a5bc33c8070~mv2_d_2640_1200_s_2.jpg"
              alt=""
            />
            <div className="divnaslici">
              <p className="camerap">Thermal camera collection</p>
              <button className="shopNow">Shop now</button>
            </div>
          </div>
          <div className="dronovi">
            <img
              className="slikedronova"
              src="https://static.wixstatic.com/media/ea26fd_4cff245e1a194ab4b234f411f0e2d571~mv2_d_2640_1200_s_2.jpg/v1/fill/w_525,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea26fd_4cff245e1a194ab4b234f411f0e2d571~mv2_d_2640_1200_s_2.jpg"
              alt=""
            />
            <div className="divnaslici">
              <p className="camerap">Thermal camera collection</p>
              <button className="shopNow">Shop now</button>
            </div>
          </div>
        </div>
        <div className="maindiv">
          <div className="naslovi">
            <p className="linija1"></p>
            <p className="naslov">Top brands</p>
            <p className="linija1"></p>
          </div>
        </div>
        <div className="maindiv">
          <div className="divzaslike">
            <img
              src="https://static.wixstatic.com/media/ea26fd_b7edd789c1c34fe08446d677c5af509f~mv2.png/v1/fill/w_130,h_26,al_c,lg_1,q_85,enc_auto/ea26fd_b7edd789c1c34fe08446d677c5af509f~mv2.png"
              alt=""
            />
          </div>
          <div className="divzaslike">
            <img
              src="https://static.wixstatic.com/media/ea26fd_4657a584e76e4d2b8b9b58e26362ef32~mv2.png/v1/fill/w_141,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_4657a584e76e4d2b8b9b58e26362ef32~mv2.png"
              alt=""
            />
          </div>
          <div className="divzaslike">
            <img
              src="https://static.wixstatic.com/media/ea26fd_5566dbcc66da4e9aa9d15db4f2474667~mv2.png/v1/fill/w_150,h_27,al_c,lg_1,q_85,enc_auto/ea26fd_5566dbcc66da4e9aa9d15db4f2474667~mv2.png"
              alt=""
            />
          </div>
          <div className="divzaslike">
            <img
              src="https://static.wixstatic.com/media/ea26fd_bf37d12b4d2a4dda94687829d7db5ab1~mv2.png/v1/fill/w_50,h_69,al_c,lg_1,q_85,enc_auto/ea26fd_bf37d12b4d2a4dda94687829d7db5ab1~mv2.png"
              alt=""
            />
          </div>
          <div className="divzaslike">
            <img
              src="https://static.wixstatic.com/media/ea26fd_9b3d17c9386742e8974a53f4a6fca9ba~mv2.png/v1/fill/w_130,h_30,al_c,lg_1,q_85,enc_auto/ea26fd_9b3d17c9386742e8974a53f4a6fca9ba~mv2.png"
              alt=""
            />
          </div>
        </div>
        <div className="glavniDiv1">
          <img
            className="planina"
            src="https://static.wixstatic.com/media/ea26fd_b068bc852e404ce7ad4a93e0792ec4a0~mv2_d_2134_1300_s_2.jpg/v1/fill/w_980,h_903,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_b068bc852e404ce7ad4a93e0792ec4a0~mv2_d_2134_1300_s_2.jpg"
            alt=""
          />
          <div className="naslovi naslovi1">
            <p className="naslov naslov1">Our Bestsellers</p>
          </div>
          <div className="box">
            <div className="boxproizvoda">
              <img
                className="slikaproizvoda"
                src="https://static.wixstatic.com/media/ea26fd_52b0032d7b754a47ac9659248097c920~mv2_d_2000_1499_s_2.png/v1/fill/w_580,h_420,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_52b0032d7b754a47ac9659248097c920~mv2_d_2000_1499_s_2.png"
                alt=""
              />
              <p>Im a product</p>
              <p className="cena">$2250.00</p>
              <button className="shopNow customButton">Add to card</button>
            </div>
            <div className="boxproizvoda">
              <img
                className="slikaproizvoda"
                src="https://static.wixstatic.com/media/ea26fd_8686279e8de04ad190969938bb87f3f4~mv2_d_2000_1499_s_2.png/v1/fill/w_189,h_142,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_8686279e8de04ad190969938bb87f3f4~mv2_d_2000_1499_s_2.png"
                alt=""
              />
              <p>Im a product</p>
              <p className="cena">$2250.00</p>
              <button className="shopNow customButton">Add to card</button>
            </div>
            <div className="boxproizvoda">
              <img
                className="slikaproizvoda"
                src="https://static.wixstatic.com/media/ea26fd_eb5d90f6f8ef47c9b51d15987d81eb3c~mv2_d_2000_1499_s_2.png/v1/fill/w_189,h_142,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_eb5d90f6f8ef47c9b51d15987d81eb3c~mv2_d_2000_1499_s_2.png"
                alt=""
              />
              <p>Im a product</p>
              <p className="cena">$2250.00</p>
              <button className="shopNow customButton">Add to card</button>
            </div>
            <div className="boxproizvoda">
              <img
                className="slikaproizvoda"
                src="https://static.wixstatic.com/media/ea26fd_4b124fec09d44c87adf41419baeb1192~mv2_d_2000_1499_s_2.png/v1/fill/w_189,h_142,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_4b124fec09d44c87adf41419baeb1192~mv2_d_2000_1499_s_2.png"
                alt=""
              />
              <p>Im a product</p>
              <p className="cena">$2250.00</p>
              <button className="shopNow customButton">Add to card</button>
            </div>
            <div className="boxproizvoda">
              <img
                className="slikaproizvoda"
                src="https://static.wixstatic.com/media/ea26fd_3158dc67cf024c5cb604cffe6c5c62e5~mv2_d_2000_1499_s_2.png/v1/fill/w_189,h_142,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_3158dc67cf024c5cb604cffe6c5c62e5~mv2_d_2000_1499_s_2.png"
                alt=""
              />
              <p>Im a product</p>
              <p className="cena">$2250.00</p>
              <button className="shopNow customButton">Add to card</button>
            </div>
          </div>
          <div className="naslovi naslovi1 naslovi2">
            <p className="naslov naslov1">New products</p>
          </div>
          <div className="box box1">
            <div className="boxproizvoda">
              <img
                className="slikaproizvoda"
                src="https://static.wixstatic.com/media/ea26fd_dc8589873fd64889ac34983f8b7e3db4~mv2_d_2000_1499_s_2.png/v1/fill/w_189,h_142,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_dc8589873fd64889ac34983f8b7e3db4~mv2_d_2000_1499_s_2.png"
                alt=""
              />
              <p>Im a product</p>
              <p className="cena">$2250.00</p>
              <button className="shopNow customButton">Add to card</button>
            </div>
            <div className="boxproizvoda">
              <img
                className="slikaproizvoda"
                src="https://static.wixstatic.com/media/ea26fd_b4d760ab6daf41e8944b8a12d67ab540~mv2_d_2000_1499_s_2.png/v1/fill/w_189,h_142,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_b4d760ab6daf41e8944b8a12d67ab540~mv2_d_2000_1499_s_2.png"
                alt=""
              />
              <p>Im a product</p>
              <p className="cena">$2250.00</p>
              <button className="shopNow customButton">Add to card</button>
            </div>
            <div className="boxproizvoda">
              <img
                className="slikaproizvoda"
                src="https://static.wixstatic.com/media/ea26fd_6b25d1d4530043da9a5544df0a4b440d~mv2_d_2000_1499_s_2.png/v1/fill/w_189,h_142,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_6b25d1d4530043da9a5544df0a4b440d~mv2_d_2000_1499_s_2.png"
                alt=""
              />
              <p>Im a product</p>
              <p className="cena">$2250.00</p>
              <button className="shopNow customButton">Add to card</button>
            </div>
            <div className="boxproizvoda">
              <img
                className="slikaproizvoda"
                src="https://static.wixstatic.com/media/ea26fd_092344c1e10d4dc1bcf878fee9b5d7b2~mv2_d_2000_1499_s_2.png/v1/fill/w_189,h_142,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_092344c1e10d4dc1bcf878fee9b5d7b2~mv2_d_2000_1499_s_2.png"
                alt=""
              />
              <p>Im a product</p>
              <p className="cena">$2250.00</p>
              <button className="shopNow customButton">Add to card</button>
            </div>
            <div className="boxproizvoda">
              <img
                className="slikaproizvoda"
                src="https://static.wixstatic.com/media/ea26fd_d86c9dd8dc8e4b71b5e99c433a242726~mv2_d_2000_1499_s_2.png/v1/fill/w_189,h_142,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_d86c9dd8dc8e4b71b5e99c433a242726~mv2_d_2000_1499_s_2.png"
                alt=""
              />
              <p>Im a product</p>
              <p className="cena">$2250.00</p>
              <button className="shopNow customButton">Add to card</button>
            </div>
          </div>
        </div>
        <div className="maindiv maindiv1">
          <p className=" naslov1 naslov2">Testimoinals</p>
          <div className="boxTestiominal">
            <div className="boxTestiominal1">
              <ArrowCircleDownIcon sx={{ fontSize: 60 }}>
                Arrow
              </ArrowCircleDownIcon>
              <p className="paragraf">
                “I'm a testimonial. Click to edit me and add text that says
                something nice about you and your services. Let your customers
                review you and tell their friends how great you are.”
              </p>
              <p className="paragraf1"> - Robert King -</p>
            </div>
            <div className="boxTestiominal1">
              <ArrowCircleDownIcon sx={{ fontSize: 60 }}>
                Arrow
              </ArrowCircleDownIcon>
              <p className="paragraf">
                “I'm a testimonial. Click to edit me and add text that says
                something nice about you and your services. Let your customers
                review you and tell their friends how great you are.”
              </p>
              <p className="paragraf1"> - VISION electronics -</p>
            </div>
            <div className="boxTestiominal1">
              <ArrowCircleDownIcon sx={{ fontSize: 60 }}>
                Arrow
              </ArrowCircleDownIcon>
              <p className="paragraf">
                “I'm a testimonial. Click to edit me and add text that says
                something nice about you and your services. Let your customers
                review you and tell their friends how great you are.”
              </p>
              <p className="paragraf1"> - Gary Lewis - </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Landingpage;
