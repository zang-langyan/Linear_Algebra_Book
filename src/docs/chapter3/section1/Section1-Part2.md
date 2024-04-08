## 三、向量空间的子空间

>- **定义3.1.3** 设 $V$ 与 $W$ 都是向量空间，并且 $W$ 是 $V$ 的子集，则称 $W$ 是 $V$ 的子空间。

**例2**   
设 $n$ 维向量 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{s}$ 生成的向量空间 $\mathcal{L}(\alpha_{1}, \alpha_{2}, \cdots, \alpha_{s})$ 是 $\mathbb{R}^n$ 的子空间。

又设 $A$ 是 $m \times n$ 矩阵，则：

$N(A) = \{x|Ax = 0, x \in \mathbb{R}^n\}$是 $\mathbb{R}^n$ 的子空间。
$R(A) = \{Ax| \forall x \in \mathbb{R}^m\}$ 是 $\mathbb{R}^m$ 的子空间。

给出 $n$ 维向量的非空集合 $W$，显然 $W$ 是$\mathbb{R}^n$ 的子空间，只需判断 $W$ 是否为向量空间即可，即验证 $W$ 是否对加法和数乘运算封闭。


**例3**  
判断下列集合是否为 $\mathbb{R}^n$ 的子空间

(1) $W_{1} = \{\alpha = (x_{1}, x_{2}, \cdots, x_{n})^T|x_{1} + x_{2} + \cdots + x_{n} = 0, x_{i} \in \mathbb{R}\}$；

(2) $W_{2} = \{\alpha = (x_{1}, x_{2}, \cdots, x_{n})^T|x_{1} + 2x_{2} + \cdots + nx_{n} = 1, x_{i} \in \mathbb{R}\}$。

**解** 
（1）$W_{1}$ 可理解为齐次线性方程组 $x_{1} + x_{2} + \cdots + x_{n} = 0$ 的解集合，因而 $W_{1}$ 是 $\mathbb{R}^n$ 的子空间。

（2）$W_{1}$ 可理解为非齐次线性方程组 $x_{1} +2x_{2} + \cdots + nx_{n} = 1$ 的解集合，因而 $W_{1}$ 是 $\mathbb{R}^n$ 的子空间。

