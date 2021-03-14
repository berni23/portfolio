import React from "react";


import Uab from "./assets/images/uab.png"

import Mnet from "./assets/images/mnet.png"

import LMU from "./assets/images/LMU.png"

import assembler from "./assets/images/assembler.png"




const data = [
  {
    title: " Software development master at Assembler",
    date: "June 2020 - Feb 2021",
    text: " Intensive software development master focused in web applications. The programm was project-based" +
      "several projects were developed under an agile environment and carefully following clean code patterns. During"+
      " that period  i could learn full-stack technologies,  focusing more on the back-end side of web development.",
    

    img:assembler,
    category: {
      tag: "studies",
      color: "#2fbded",

    },

      category2: {
      tag: "work",
      color: "#FF8C00",
    },

    link: {
      url: "https://picsum.photos/200",
      text: "lorem picsum",
    },
  },
  {
    title: "Data analist at M-net, Munich",
    date: "Sept 2018 - Oct 2019",
    text: "My job at M-net constisted in analyzing the revenue data from internet contracts in"+
      "order to maximize income and reduce possible losses. Moreover, I also analyzed the data regarding"+ 
      "international calls and its relative prices, in order to ensure a positive benefit for the company"+
     "and also minimizing the risk to suffer possible Hacker frauds.",
    img:Mnet,

    category: {
      tag: "work",
      color: "#FF8C00",
    },

    link: {
      url: "https://www.m-net.de/hilfe-service/anleitungen/kundenportal/",
      text: "Mnet",
    },
  },
  {
    title: "Astrophysics master at LMU",

    text: "I coursed the master In astrophysics at the Ludwig-Maximilian-Universität, in Munich . My master thesis involved the execution of various simulations of a planet system in formation . "+
     'Due to of the fact that I did not recieve many constraints from my professor, I was able to develop my programming skills, by designing and developing an interface for the evaluation and comparison of scientific data as a product of the simulations performed.',
    date: "Sept 2017 - Feb 2020",

    category: {
      tag: "studies",
      color: "#2fbded",
    },

    img:LMU,


    link: {
      url: "https://www.lmu.de/en/",
      text: "LMU",
    },

  },


  {
    title: "Physics degree at UAB",
    text: " I graduated in Physics by the Universitat autònoma, in Barcelona. Coursing the last year in Munich. It gave me insightful kowledge in Maths and Physics, but at the same time I learned how to approach problems of any other field that may require analytical skills, abstract thinking, strategic planning ,evaluation and programming.",
    date: "Sept 2012 - June 2017",
     img : Uab,

    category: {
      tag: "studies",
      color: "#2fbded",
    },

    // link: {
    //   url: "https://picsum.photos/200",
    //   text:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, autem reiciendis? Minus accusantium esse, quisquam ex perspiciatis veniam inventore similique exercitationem iste cupiditate voluptas voluptates magni quas, consectetur vitae odio quae hic possimus sed debitis molestiae tenetur? Saepe, labore id autem earum consequatur quos culpa quaerat quae necessitatibus! Quibusdam, nostrum?",
    // },
  },
];

export default data;
