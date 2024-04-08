# 第二节 矩阵
## 一、矩阵的定义

> **定义1.2.1:**  $m \times n$ 个数 $a_{ij}(i = 1, 2,\cdots, m; j = 1,2,\dots, n)$ 排成的 $m$ 行 $n$ 列的数表称为一个 $m \times n$ 矩阵，记为 $(a_{ij})$ ，有时为了强调矩阵的行数和列数，也记为 $(a_{ij})_{m \times n}$。
$$
\begin{bmatrix}
a_{11} &  a_{12} & \cdots  & a_{1n}\\
a_{21} &  a_{22} & \cdots  & a_{2n}\\
\vdots & \vdots &  & \vdots \\
a_{m1} &  a_{m2} & \cdots  & a_{mn}
\end{bmatrix}
$$
数 $a_{ij}$ 位于矩阵 $(a_{ij})$ 的第 $i$ 行第 $j$ 列，称为矩阵的 $(i, j)$ 元素，其中 $i$ 称为元素 $(a_{ij})$ 的行标，$j$ 称为元素 $(a_{ij})$ 的列标。

一般地，矩阵常用英文大写字母 $A, B, \cdots$ 或字母 $\alpha, \beta, \gamma, \cdots$ 表示，比如 $A = (a_{ij})$，$B = (b_{ij})$，$A_{m \times n}$，$B_{m \times n}$ 等。

进一步地，元素是实数的矩阵为实矩阵，元素是复数的矩阵为复矩阵。此外，

* $1 \times 1$ 的矩阵 $A = (a)$ 记为 $A = a$

* $1 \times n$ 的矩阵 $A = (a_{1}, a_{2}, \cdots, a_{n})$ 称为行矩阵，也称为 $n$ 维行向量。
$n \times 1$ 的矩阵 
$$
\begin{bmatrix}
a_{1}\\
a_{2}\\
\vdots\\
a_{n}
\end{bmatrix}
$$
称为列矩阵，也称为 $n$ 维列向量。

所有元素都为零的 $m \times n$ 矩阵称为零矩阵，记为 $[0]_{m \times n}$，或记为 $O$。

$n \times n$ 矩阵
$$
\begin{bmatrix}
a_{11} &  a_{12} & \cdots  & a_{1n}\\
a_{21} &  a_{22} & \cdots  & a_{2n}\\
\vdots & \vdots &  & \vdots \\
a_{n1} &  a_{n2} & \cdots  & a_{nn}
\end{bmatrix}
$$
称为 $n$ 阶方阵。元素 $a_{ii}(i = 1, 2, \dotsb, n)$ 所在的位置称为 $n$ 阶方阵的主对角线。

若一个 $n$ 阶方阵主对角线上方的元素均为零，即
$$
\begin{bmatrix}
a_{11} &  0 & \cdots  & 0\\
a_{21} &  a_{22} & \cdots  & 0\\
\vdots & \vdots &  & \vdots \\
a_{n1} &  a_{n2} & \cdots  & a_{nn}
\end{bmatrix}
$$
则称该 $n$ 阶方阵为下三角矩阵，其元素的特点是：当 $i<j$ 时，$a_{ij} = 0$。

同样地，也有上三角矩阵
$$
\begin{bmatrix}
a_{11} &  a_{12} & \cdots  & a_{1n}\\
0 &  a_{22} & \cdots  & a_{2n}\\
\vdots & \vdots &  & \vdots \\
0 &  0 & \cdots  & a_{nn}
\end{bmatrix}
$$
其元素的特点是：当 $i>j$ 时，$a_{ij} = 0$。

$n$ 阶方阵
$$
\begin{bmatrix}
a_{11} &  0 & \cdots  & 0\\
0 &  a_{22} & \cdots  & 0\\
\vdots & \vdots &  & \vdots \\
0 &  0 & \cdots  & a_{nn}
\end{bmatrix}
$$
称为 $n$ 阶对角矩阵，简称对角阵，记为 $diag(a_{1}, a_{2}, \cdots, a_{n})$。

如果 $n$ 阶对角矩阵 $diag(a_{1}, a_{2}, \cdots, a_{n})$ 对角线上的元素全相等，即 $a_{1} = a_{2} = \cdots = a_{n}$，则称为数量矩阵。当 $a_{1} = a_{2} = \cdots = a_{n} = 1$ 时，该数量矩阵称为 $n$ 阶单位矩阵，简称为单位阵，记为 $\boldsymbol{E}_{n}$ 或 $\boldsymbol{E}$，即
$$
\begin{bmatrix}
1 &  0 & \cdots  & 0\\
0 &  1 & \cdots  & 0\\
\vdots & \vdots &  & \vdots \\
0 &  0 & \cdots  & 1
\end{bmatrix}
$$

## 二、矩阵的线性运算
为了讨论矩阵的运算，若两个矩阵行、列数均相等，则称这两个矩阵为同型矩阵。若连个同型矩阵中所有对应位置的元素都相等，则称这两个矩阵相等。

### 1. 矩阵的加法
> **定义1.2.2:**  设存在两个 $m \times n$ 矩阵 $A$ 和 $B$，
$$
A = \begin{bmatrix}
a_{11} &  a_{12} & \cdots  & a_{1n}\\
a_{21} &  a_{22} & \cdots  & a_{2n}\\
\vdots & \vdots &  & \vdots \\
a_{m1} &  a_{m2} & \cdots  & a_{mn}
\end{bmatrix},
B = \begin{bmatrix}
b_{11} &  b_{12} & \cdots  & b_{1n}\\
b_{21} &  b_{22} & \cdots  & b_{2n}\\
\vdots & \vdots &  & \vdots \\
b_{m1} &  b_{m2} & \cdots  & b_{mn}
\end{bmatrix}
$$
将他们对应的元素相加，得到一个新的 $m \times n$ 矩阵 $C$，
$$
C = \begin{bmatrix}
a_{11} + b_{11} & a_{12} + b_{12} & \cdots  & a_{1n} + b_{1n}\\
a_{21} + b_{21} &  a_{22} + b_{22} & \cdots  & a_{2n} + b_{2n}\\
\vdots & \vdots &  & \vdots \\
a_{m1} + b_{m1} &  a_{m2} + b_{m2} & \cdots  & a_{mn} + b_{mn}
\end{bmatrix}
$$
则称矩阵 $C$ 是矩阵 $A$ 和 $B$ 的和，记为 $C = A + B$。

例如:
$$
A = \begin{bmatrix}
1 &  8  & 87\\
42 & 5 & 12\\
13 &  46 & 33
\end{bmatrix},
B= \begin{bmatrix}
3 &  10  & 11\\
3 & 5 & 7\\
1 &  0 & 4
\end{bmatrix}
$$
则，$
A + B = \begin{bmatrix}
4 &  18  & 98\\
45 & 10 & 19\\
14 &  46 & 37
\end{bmatrix}
$
> - 需要特别指出的是，只有同型矩阵才能相加，且同型矩阵的和仍为同型矩阵。

### 2. 矩阵的数乘

> **定义1.2.3:**  设 $A = (a_{ij})_{m \times n}$ 是一个 $m \times n$ 矩阵，$k$ 是一个数，则称矩阵
$$
\begin{bmatrix}
ka_{11} &  ka_{12} & \cdots  & ka_{1n}\\
ka_{21} &  ka_{22} & \cdots  & ka_{2n}\\
\vdots & \vdots &  & \vdots \\
ka_{m1} &  ka_{m2} & \cdots  & ka_{mn}
\end{bmatrix}
$$
为矩阵 $A$ 和数 $k$ 的乘积，记为 $kA$。可见，用数 $k$ 乘矩阵 $A$ 就是将 $A$ 中的每一个元素都乘 $k$。

> 矩阵的加法和数乘统称为矩阵的线性运算。以下总结了矩阵线性运算的8条性质。
> > * $A + B$ = $B + A$
> > * $A + B + C$ = $A + (B + C)$
> > * $A + \mathsf{0}$ = $A$
> > * $A + (-A)$ = $\mathsf{0}$
> > * $1A$ = $A$
> > * $k(lA)$ = $kl(A)$
> > * $k(A + B)$ = $kA + kB$
> > * $(k + l)A$ = $kA + lA$

### 3. 矩阵的乘法
> **定义1.2.4:** 设 $m \times s$ 矩阵 $A = (a_{ij})_{m \times s}$，$s \times n$ 矩阵 $A = (b_{ij})_{s \times n}$，则由元素 
$$
c_{ij} = a_{i1}b_{1j} + a_{i2}b_{2j} + a_{is}b_{sj} = \sum_{k = 1}^{s}a_{ik}b_{kj}(i = 1, 2, \cdots, n)
$$
构成的 $m \times s$ 矩阵 称为矩阵 $A$ 和 $B$ 的乘积，记为 $C= AB$。

例如：
$$
A = \begin{bmatrix}
1 &  8  & 4\\
5 & 1 & 2\\
\end{bmatrix},
B = \begin{bmatrix}
1 &  2\\
2 & 3\\
4 &  6
\end{bmatrix}
$$
则：$AB = \begin{bmatrix}
1 \times 1 + 8 \times 2 + 4 \times 4  & 1 \times 2 + 8 \times 3 + 4 \times 6\\
5 \times 1 + 1 \times 2 + 2 \times 4 & 5 \times 2 + 1 \times 3 + 2 \times 6\\
\end{bmatrix} = 
\begin{bmatrix}
33 &  50\\
15 & 25\\
\end{bmatrix}
$

> 由此可知：
> - 只有 $A$ 的列数等于 $B$ 的行数，$A$ 与 $B$ 才能相乘；
> - 乘积 $C$ 的行数等于 $A$ 的行数，$C$ 的列数等于 $B$ 的列数；
> - 乘积 $C$ 中第 $i$ 行第 $j$ 列元素 $c_{ij}$ 等于 $A$ 的第 $i$ 行元素与 $B$ 的第 $j$ 列元素对应乘积之和。

> 矩阵乘法满足下列运算规律：
> - **结合律**：$(AB)C = A(BC)$；
> - **数乘结合律**：$k(AB) = (kA)B = A(kB)$，$k$ 为数；
> - **分配律**：$A(B + C) = AB + AC, (B + C)A = BA + CA$。

进一步来看下面的问题，设 $
A = \begin{bmatrix}
1 & 1\\
-1 & -1\\
\end{bmatrix},
B = \begin{bmatrix}
1 & -1\\
-1 & 1\\
\end{bmatrix}
$
求 $AB$ 和$BA$，得到：

$
AB = \begin{bmatrix}
0 & 0\\
0 & 0\\
\end{bmatrix},
BA = \begin{bmatrix}
2 & 2\\
-2 & -2\
\end{bmatrix}
$
可见，矩阵的乘法一般不满足交换律，即 $AB \ne BA$，由此：
> - 当 $AB \ne BA$ 时，称 $A$ 与 $B$ 不可交换；当 $AB = BA$ 时，称 $A$ 与 $B$ 可交换。

> - $A$ 与 $B$ 都是非零矩阵，但 $AB$ 有可能为零矩阵。可见，矩阵的乘法不满足消除律，即 $A \ne 0$ 时，由$AB = AC$ 不能推出 $B = C$。

矩阵乘法一般不满足交换律，但是容易得出如下常用结果：、
$$
\textit{I}_{m}A_{m \times n} = A{m \times n}, A_{m \times n}\textit{I}_{n} = A_{m \times n}
$$
则称：
$
k\textit{I} = diag(k,k, \cdots, k) = 
\begin{bmatrix}
k &\\ & k \\ & & \ddots\\& & & & k
\end{bmatrix}
(k \ne 0)
$
为数量矩阵。

$n$ 阶数量矩阵 $KI$ 与任意 $n$ 阶矩阵 $A$ 也是可交换的，其原因在于 $(KI)A = k(IA) = kA, A(kI) = k(AI) = kA$。

> **定义1.2.5:** 设 $A$ 是 $n$ 阶方阵，$k$ 为正整数，定义
$$
\begin{cases}
A^1 = A\\
A^k + 1 = A^kA, k = 1, 2, \cdots
\end{cases}
$$
由此可以证明，当 $m, k$ 为正整数时，
$$
A^mA^k = A^{m + k}, (A^m)k = A^{mk}
$$
进一步地，由于矩阵乘法不满足交换律，一般来说，
$$
(AB)^k \ne A^kB^k, (A + B)^2 \ne A ^2 + 2AB + B^2
$$
只有当 $A$ 与 $B$ 可交换（即 $AB = BA$）时，上述等式才成立。 