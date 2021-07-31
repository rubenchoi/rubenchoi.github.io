// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"
import speakerIcon from "./images/speaker.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"
import youtubeIcon from "./images/youtube.svg"

import farewellImage from './assets/farewell.jpg'
import bubbleImage from './assets/bubble.png'
import blossomImage from './assets/blossom.png'
import treeImage from './assets/tree.jpg'
import infernoImage from './assets/inferno.png'
import rubenImage from './assets/ruben_portrait.png'
import roadImage from './assets/road.jpg'

export default {
  name: "ruben.choi",
  headerTagline: [
    "Building digital",
    "products, brands,",
    "and experience",
  ],
  headerParagraph:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  contactEmail: "flamencochoi@gmail.com",

  projects: [
    {
      title: "Farewell (Digital EP 2020)",
      // para: "Digital EP album",
      imageSrc: farewellImage,
      url: "https://www.melon.com/album/detail.htm?albumId=10473820",
    },
    {
      title: "SoundCloud",
      // para: "Music on SoundCloud",
      imageSrc: bubbleImage,
      url: "https://soundcloud.com/ruben-choi",
    },
    {
      title: "Guitar Jam",
      imageSrc: blossomImage,
      url: "https://youtube.com/playlist?list=PLiIqnYZp2bDRNXLwMJZe2PEnmwqetq6Fn",
    },
    {
      title: "Art",
      // para: "Photo, cover design, 3D art, and so on.",
      imageSrc: infernoImage,
      url: "https://www.instagram.com/ruben.choi_/",
    },
    {
      title: "Blog",
      // para: "IT Blog",
      imageSrc: roadImage,
      url: "https://rubenchoi.tistory.com/",
    },
    {
      title: "Writings",
      // para: "Pubished writings",
      imageSrc: treeImage,
      url: "http://www.cs.jhu.edu/~seheon/literature.html",
    },
  ],

  aboutParaOne: "I love music, art, writing and programming.",
  aboutParaTwo: "I am interested in songwriting, home recording, playing guitar and 3D art.",
  aboutParaThree: "I am developing robot and AI something...",
  aboutImage: rubenImage,


  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: designIcon,
      para:
        "Blender, Daz Studio, iClone",
    },
    {
      img: reactIcon,
      para:
        "React, Javascript, Java, Android, C++, Python",
    },
    {
      img: speakerIcon,
      para:
        "Ableton Live, Electric Guitars",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    {
      img: githubIcon,
      url: "https://github.com/rubenchoi"
    },
    {
      img: youtubeIcon,
      url: "https://www.youtube.com/channel/UCbFc-vkKC8J9AHYRBMMKSaQ"
    },
    {
      img: dribbbleIcon,
      url: "https://dribbble.com/rubenchoi",
    },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/ruben.choi_",
    },
  ],

}
