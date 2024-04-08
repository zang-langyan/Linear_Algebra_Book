# 第一节 向量空间及其子空间

## 一、向量空间的定义
>- **定义3.1.1** 设 $V$ 为 $n$ 维向量的集合，如何集合 $V$ 非空，且集合 $V$ 对于向量的加法及数乘两种运算封闭，那么就称集合 $V$ 为向量空间。

这里涉及到了封闭的概念，具体而言：
>- **定义3.1.2** 设 $V$ 为 $n$ 维向量的集合，如果对于任意 $\alpha \in V$，$\beta \in V$，都有 $\alpha + \beta \in V$，则称 $V$ 对向量的加法封闭；对于任意 $\alpha \in V$ 以及任意 $k \in \mathbb{R}$，有 $k\alpha \in V$，则称 $V$ 对向量的数乘封闭。

**例1** 

集合 $v_{1} = 
\begin{Bmatrix}
\left.
\begin{bmatrix} 
0 \\
\alpha_{2}\\
\vdots\\
\alpha_{n}
\end{bmatrix}
\right \vert a_{2}, \cdots, a_{n} \in \mathbb{R} \\
\end{Bmatrix}
$
，对任意 
$
\alpha = \begin{bmatrix}
0 \\
a_{2}\\
\vdots\\
a_{n}
\end{bmatrix}
\in V
$，
$
\beta = \begin{bmatrix}
0 \\
b_{2}\\
\vdots\\
b_{n}
\end{bmatrix}
\in V
$，
任意 $k \in \mathbb{R}$，有
$$
\alpha + \beta = 
\begin{bmatrix}
0 \\
a_{2}\\
\vdots\\
a_{n}
\end{bmatrix} +
\begin{bmatrix}
0 \\
b_{2}\\
\vdots\\
b_{n}
\end{bmatrix} =
\begin{bmatrix}
0 \\
a_{2} + b_{2}\\
\vdots\\
a_{n} + b_{n}
\end{bmatrix}
\in V,
k \alpha = k
\begin{bmatrix}
0 \\
a_{2}\\
\vdots\\
a_{n}
\end{bmatrix} =
\begin{bmatrix}
0 \\
ka_{2}\\
\vdots\\
ka_{n}
\end{bmatrix}
\in V
$$
故 $V_{1}$ 对向量的加法和数乘封闭。

由于向量空间的加法和数乘运算封闭，故向量的加法和数乘运算的性质在集合 $V$ 中被满足，即：
- $\alpha + \beta = \beta + \alpha$
- $(\alpha + \beta) + \gamma = \alpha + (\beta + \gamma)$
- $\alpha + 0 = \alpha$
- $\alpha + (-\alpha) = 0$
- $1\alpha = \alpha$
- $k(l\alpha) = (kl)\alpha$
  
综上，构成向量空间的三要素：一个集合 $V$、两种 $V$ 中的运算、八条运算性质。

## 二、向量空间的实例

- 由定义3.1.2的第二个条件可知，任何向量空间都必须含有零向量。可以验证，仅含一个零向量的集合也构成向量空间，称为零向量空间。除零向量空间外，每一个向量空间都含有无限多个向量
- $n$ 维向量的全体组合的集合
$$
\mathbb{R}^n = 
\begin{Bmatrix}
\left.
\begin{bmatrix} 
x_{1}\\
x_{2}\\
\vdots\\
x_{n}\\
\end{bmatrix}
\right \vert x_{1}, x_{2}, \cdots, x_{n} \in \mathbb{R} \\
\end{Bmatrix}
$$
对向量的加法和数乘运算均封闭，故而是一个向量空间

- $n$ 元齐次线性方程组的解集 $S = \{x|Ax = 0\}$ 对向量的加法和数乘运算封闭，是一个向量空间。这个向量空间称为齐次线性方程组的解空间
- $n$ 元齐次线性方程组的解集 $S = \{x|Ax = \beta\}$ 不是一个向量空间。其原因在于：（1）若非齐次线性方程组无解，则解集 $S$ 是一个空集，从而不是向量空间；（2）若解集 $S$ 是非空的，则对于任意的 $\gamma \in S$ 以及任意常数 $k \ne 1$，有 $A(k\gamma) = k (A\gamma) = k\beta \ne \beta$
- 设 $\alpha_{1}, \alpha_{1}, \cdots, \alpha_{s} \in \mathbb{R}^n$，将向量  $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{s}$ 所有可能的线性组合 $k_{1}\alpha_{1} + k_{2} \alpha_{2} + \cdots + k_{s}\alpha_{s}$ 构成的集合记为
$
\mathcal{L}(\alpha_{1}, \alpha_{2}, \cdots, \alpha_{s}) = \{\alpha = k_{1}\alpha_{1} + k_{2} \alpha_{2} + \cdots + k_{s}\alpha_{s}|k_{1}, k_{1}, \cdots, k_{s} \in \mathbb{R}\}
$，可以验证，$\mathcal{L}(\alpha_{1}, \alpha_{2}, \cdots, \alpha_{s})$ 是一个向量空间，该向量空间称为由向量组 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{s}$ 所张成的向量空间。




