import Markdown from "components/Markdown/Markdown"

import markdown_part1 from '../../../docs/chapter3/section3/Section3-Part1.md';

export default function Chapter3_Section3(){
  return (
    <div className="content-container">
      <Markdown markdown={markdown_part1} />
    </div>
  )
}