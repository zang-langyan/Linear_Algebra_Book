import Markdown from "components/Markdown/Markdown"

import markdown_part1 from '../../../docs/chapter3/section1/Section1-Part1.md';
import markdown_part2 from '../../../docs/chapter3/section1/Section1-Part2.md';

export default function Chapter3_Section1() {
  return (
    <div className="content-container">
      <Markdown markdown={markdown_part1} />
      <Markdown markdown={markdown_part2} />
    </div>
  )
}
