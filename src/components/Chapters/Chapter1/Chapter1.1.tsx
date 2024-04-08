import { useState, useEffect } from "react";
import Markdown from 'components/Markdown/Markdown';

import markdown from '../../../docs/chapter1/section1/Section1-Part1.md'
import CoordinateSystem from "components/Canvas/Cartesian";
import { Leva } from "leva";

export default function Chapter1_Section1() {
  
  return (
    <div className="content-container">

      <Markdown markdown={markdown} />
      <CoordinateSystem />
      
    </div>
  )
}