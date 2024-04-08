import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'

export default function Markdown(props: { markdown: string }) {
  const components = {
    h1: ({node, ...props}:any) => <h1 {...props} className='header1' />,
    h2: ({node, ...props}:any) => <h2 {...props} className='header2' />,
    h3: ({node, ...props}:any) => <h3 {...props} className='header3' />,
  }

  return (
    <ReactMarkdown
      remarkPlugins={[remarkMath, remarkGfm]}
      rehypePlugins={[rehypeKatex]}
      components={components}
    >
      {props.markdown}
    </ReactMarkdown>
  )
}