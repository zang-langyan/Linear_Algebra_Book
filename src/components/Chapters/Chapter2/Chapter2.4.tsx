import Markdown from 'components/Markdown/Markdown';

import markdown_part1 from '../../../docs/chapter2/section4/Section4-Part1.md';

export default function Chapter2_Section4() {
  return (
      <div className="content-container">
        <Markdown markdown={markdown_part1} />
      </div>
  )
}