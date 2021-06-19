import React from 'react';
import './Layer.css'

function Layer() {

    const staticQuotes = [
        {
            "quote": "Life isn’t about getting and having, it’s about giving and being.",
            "author": "Kevin Kruse",
            "background": "#8797AF",
            "top": "-50px",
            "left": "-1.5%"
        },
        {
            "quote": "Whatever the mind of man can conceive and believe, it can achieve.",
            "author": "Napoleon Hill",
            "background": "#E7E247",
            "top": "-50px",
            "left": "24.5%"
        },
        {
            "quote": "Strive not to be a success, but rather to be of value.",
            "author": "Albert Einstein",
            "background": "#5C80BC",
            "top": "-50px",
            "left": "50.5%"
        },
        {
            "quote": "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
            "author": "Robert Frost",
            "background": "#ee9ca7",
            "top": "-50px",
            "right": "-1.5%"
        },
        {
            "quote": "I attribute my success to this: I never gave or took any excuse.",
            "author": "Florence Nightingale",
            "background": "#7D8491",
            "top": "30%",
            "left": "-1.5%"
        },
        {
            "quote": "You miss 100% of the shots you don’t take.",
            "author": "Wayne Gretzky",
            "background": "#BBBE64",
            "top": "30%",
            "right": "-1.5%"
        },
        {
            "quote": "We must balance conspicuous consumption with conscious capitalism.",
            "author": "Michael Jordan",
            "background": "#D6D4A0",
            "top": "30%",
            "left": "24.5%"
        },
        {
            "quote": "The most difficult thing is the decision to act, the rest is merely tenacity.",
            "author": "Amelia Earhart",
            "background": "#E24E1B",
            "top": "30%",
            "left": "50.5%"
        },
        {
            "quote": "Every strike brings me closer to the next home run.",
            "author": "Babe Ruth",
            "background": "#DB995A",
            "top": "68%",
            "left": "50.5%"
        },{
            "quote": "Definiteness of purpose is the starting point of all achievement.",
            "author": "W. Clement Stone",
            "background": "#86A8E7",
            "top": "68%",
            "left": "24.5%"
        },
        {
            "quote": "We must balance conspicuous consumption with conscious capitalism.",
            "author": "Kevin Kruse",
            "background": "#035E7B",
            "top": "68%",
            "left": "-1.5%"
        },
        {
            "quote": "Life is what happens to you while you’re busy making other plans.",
            "author": "John Lennon",
            "background": "#1f4037",
            "top": "68%",
            "right": "-1.5%"
        },{
            "quote": "The most difficult thing is the decision to act, the rest is merely tenacity.",
            "author": "Amelia Earhart",
            "background": "#E24E1B",
            "top": "30%",
            "left": "50.5%"
        },
        {
            "quote": "Every strike brings me closer to the next home run.",
            "author": "Babe Ruth",
            "background": "#DB995A",
            "top": "68%",
            "left": "50.5%"
        },{
            "quote": "Definiteness of purpose is the starting point of all achievement.",
            "author": "W. Clement Stone",
            "background": "#86A8E7",
            "top": "68%",
            "left": "24.5%"
        },
        {
            "quote": "We must balance conspicuous consumption with conscious capitalism.",
            "author": "Kevin Kruse",
            "background": "#035E7B",
            "top": "68%",
            "left": "-1.5%"
        },
        {
            "quote": "Life is what happens to you while you’re busy making other plans.",
            "author": "John Lennon",
            "background": "#1f4037",
            "top": "68%",
            "right": "-1.5%"
        }
    ]

    return (
        <div className="layerContainer">

            {
                staticQuotes.map(item => {
                    let bg = {
                        background: item.background,
                        // top: item.top,
                        // left: item.left,
                        // right: item.right
                    }
                    return(
                        <div className="tile" style={bg}>{item.quote}</div>
                    )
                })
            }
        </div>
    )
}

export default Layer
