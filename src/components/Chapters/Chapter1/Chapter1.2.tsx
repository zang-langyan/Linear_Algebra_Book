import Markdown from 'components/Markdown/Markdown';
// import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
// import {coy, dark} from 'react-syntax-highlighter/dist/esm/styles/prism'

import markdown_part1 from '../../../docs/chapter1/section2/Section2-Part1.md'
import markdown_part2 from '../../../docs/chapter1/section2/Section2-Part2.md'

function Chapter1_Section2() {

  return (
      <div className="content-container">
          <Markdown markdown={markdown_part1} />

          <Markdown markdown={markdown_part2} />
      </div>
  )
}

export default Chapter1_Section2