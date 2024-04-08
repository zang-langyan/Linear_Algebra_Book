import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import Markdown from 'components/Markdown/Markdown';

import markdown_part1 from '../../../docs/chapter2/section1/Section1-Part1.md';
import markdown_part2 from '../../../docs/chapter2/section1/Section1-Part2.md';

import { MatrixStepper } from 'components/Stepper/Stepper';


const steps = [
  {
    description: '矩阵初等变换',
    content: String.raw`已知矩阵 
      $A = 
      \begin{bmatrix}
      2 & -3 & 1 & -1 & 2\\
      2 & -1 & -1 & 1 & 2\\
      1 & 1 & -2 & 1 & 4\\
      -1 & -4 & -3 & 2 & 2
      \end{bmatrix}
      $`,
  },
  {
    description: '对其作初等行变换,先化为行最简形矩阵',
    content: String.raw`$
    A = 
    \begin{bmatrix}
    2 & -3 & 1 & -1 & 2\\
    2 & -1 & -1 & 1 & 2\\
    1 & 1 & -2 & 1 & 4\\
    -1 & -4 & -3 & 2 & 2
    \end{bmatrix}
    \xrightarrow{r_{1}\leftrightarrow r_{3}}
    \begin{bmatrix}
    1 & 1 & -2 & 1 & 4\\
    2 & -1 & -1 & 1 & 2\\
    2 & -3 & 1 & -1 & 2\\
    0 & 5 & -5 & 3 & 6
    \end{bmatrix}
    \xrightarrow[r_{4} + r_{3}]{\frac{1}{2}r_{1}}
    \begin{bmatrix}
    1 & 1 & -2 & 1 & 4\\
    0 & 1 & -1 & 1 & 0\\
    0 & -5 & 5 & -3 & 6\\
    0 & 0 & 0 & 0 & 0
    \end{bmatrix}
    \xrightarrow{r_{3} + 5r_{2}}
    \begin{bmatrix}
    1 & 1 & -2 & 1 & 4\\
    0 & 1 & -1 & 1 & 0\\
    0 & 0 & 0 & 2 & -6\\
    0 & 0 & 0 & 0 & 0
    \end{bmatrix}
    \xrightarrow{\frac{1}{2}r_{3}}
    \begin{bmatrix}
    1 & 1 & -2 & 1 & 4\\
    0 & 1 & -1 & 1 & 0\\
    0 & 0 & 0 & 1 & -3\\
    0 & 0 & 0 & 0 & 0
    \end{bmatrix}
    \xrightarrow[r_{1} - r_{3}]{r_{2} - r_{3}}
    \begin{bmatrix}
    1 & 0 & -1 & 0 & 4\\
    0 & 1 & -1 & 0 & 3\\
    0 & 0 & 0 & 1 & -3\\
    0 & 0 & 0 & 0 & 0
    \end{bmatrix}
    $`,
  },
  {
    description: '对其作初等列变换,化为标准形',
    content: String.raw`$
    \begin{bmatrix}
    1 & 0 & -1 & 0 & 4\\
    0 & 1 & -1 & 0 & 3\\
    0 & 0 & 0 & 1 & -3\\
    0 & 0 & 0 & 0 & 0
    \end{bmatrix}
    \xrightarrow[c_{1} + c_{2}]{c_{3} + c_{1}}
    \begin{bmatrix}
    1 & 0 & 0 & 0 & 4\\
    0 & 1 & 0 & 0 & 3\\
    0 & 0 & 0 & 1 & -3\\
    0 & 0 & 0 & 0 & 0
    \end{bmatrix}
    \xrightarrow[c_{5} + 3c_{4}]{\substack{c_{5} - 4c_{1}\\ \\c_{5} - 3c_{2}}}
    \begin{bmatrix}
    1 & 0 & 0 & 0 & 0\\
    0 & 1 & 0 & 0 & 0\\
    0 & 0 & 0 & 1 & 0\\
    0 & 0 & 0 & 0 & 0
    \end{bmatrix}
    \xrightarrow{c_{3}\leftrightarrow c_{4}}
    \begin{bmatrix}
    1 & 0 & 0 & 0 & 0\\
    0 & 1 & 0 & 0 & 0\\
    0 & 0 & 1 & 0 & 0\\
    0 & 0 & 0 & 0 & 0
    \end{bmatrix} = B
    $`,
  },
  {
    description: '矩阵 B 则为矩阵 A 的标准形，可表示为分块矩阵的形式',
    content: String.raw`$
      B = 
      \begin{bmatrix}
      E_{3} & O\\
      O & O
      \end{bmatrix} 
    $`,
  },
];

export default function Chapter2_Section1() {
  return (
    <div className="content-container">
      <Markdown
        markdown={markdown_part1}
      />

      <Markdown
        markdown={markdown_part2}
      />  

      <MatrixStepper props={steps} />

      <ReactMarkdown
        children={String.raw`以上介绍了线性方程组和矩阵的初等变换，本章第二至第五节将分别介绍主要的求解线性方程组的方法。`}
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeKatex]}
      />
    </div>
  )
}