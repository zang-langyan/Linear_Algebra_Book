import Markdown from 'components/Markdown/Markdown';

import markdown_part1 from '../../../docs/chapter2/section5/Section5-Part1.md';

export default function Chapter2_Section5() {
  return (
      <div className="content-container">
        <Markdown markdown={markdown_part1} />
      </div>
  )
}