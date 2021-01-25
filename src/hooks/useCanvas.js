import React, { useState, useEffect, useRef } from 'react';

// Path2D
// const squareSVG = "M 1 1 L 9 1 L 9 9 L 1 9 L 1 1"
// const SVG_PATH = new Path2D(squareSVG);

// Scaling Constants for Canvas
const SCALE = 2;
const OFFSET = 80;
export const canvasWidth = window.innerWidth * .5;
export const canvasHeight = window.innerHeight * .5;

export function draw(ctx, location){
  console.log("attempting to draw")
  ctx.strokeStyle = "#000000";
  ctx.save();
  ctx.scale(SCALE, SCALE);
  ctx.translate(location.x / SCALE - OFFSET, location.y / SCALE - OFFSET);
  ctx.strokeRect(50, 50, 50, 50);
  ctx.restore();  
};

export function useCanvas(){
    const canvasRef = useRef(null);
    const [coordinates, setCoordinates] = useState([]);

    useEffect(()=>{
        const canvasObj = canvasRef.current;
        const ctx = canvasObj.getContext('2d');
        // clear the canvas area before rendering the coordinates held in state
        ctx.clearRect( 0,0, canvasWidth, canvasHeight );

        // draw all coordinates held in state
        coordinates.forEach((coordinate)=>{draw(ctx, coordinate)});
    });

    return [ coordinates, setCoordinates, canvasRef, canvasWidth, canvasHeight ];
}

