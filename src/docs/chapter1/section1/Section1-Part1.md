# 第一节 向量及向量组
## 一、向量的概念

在数学中，向量（也称为欧几里得向量、集合向量），指具有大小和方向的量。它可以形象化地表示为带箭头的线段。箭头指向代表向量的方向；线段长度代表向量的大小。与向量相对应的量叫做数量（物理学中称为标量），数量只有大小，没有方向。进一步地，衍生出$n$维向量的概念。

> **定义1.1.1:** 由$n$个数 $a_{1},a_{2},\dots,a_{n}$ 组成的有序数组称为 $n$ 维向量。若 $n$ 维向量写成如下形式：
$$
\begin{bmatrix}
a_{1}\\
a_{2}\\
\vdots\\
a_{n}
\end{bmatrix}
$$
以上称为$n$维列向量，该向量还可以写成 $(a_{1},a_{2},...a_{n})$ 的形式，则称为 $n$ 维行向量。这 $n$ 个数称为 $n$ 个分量，其中 $a_{i}$ 称为第 $i$ 个分量。

可以看出，$n$维列向量即一个 $n\times1$ 的列矩阵，$n$维行向量即一个 $1\times n$ 的列矩阵。列向量可以看作行向量的转置，反之亦然。一般地，我们常用 $\alpha$、$\beta$、$\gamma$ 表示 $n$ 维列向量，而用 $\alpha^T$、$\beta^T$、$\gamma^T$ 表示 $n$ 维行向量。分量都是零的向量为零向量，记为 $\pmb{0}$ ，即 $\pmb{0} = \begin{bmatrix}
0\\
0\\
\vdots\\
0
\end{bmatrix}$
或 $\pmb{0} = (0,0,\cdots,0)$。
进一步地，向量$\begin{bmatrix}
-a_{1}\\-a_{2}\\\vdots\\-a_{n}
\end{bmatrix}$
称为向量$\begin{bmatrix}
a_{1}\\a_{2}\\\vdots\\a_{n}
\end{bmatrix}$ 的负向量，记作$-\alpha$。

## 二、向量的运算

线性代数的核心在于两个运算，这两个运算都与量有关，假设有两个向量 $u$ 和 $v$ 。我们将这两个向量相加得到 $u+v$ 。进一步地，我们将它们乘以数字 $a$ 和 $b$ ，从而可以得到 $au$ 和 $bv$ 。将这两个运算相结合，就可以得到 $au+bv$ 的线性组合如 $au+bv$

> 线性组合   $
au+bv = a \begin{bmatrix}
1\\1\\
\end{bmatrix} + b \begin{bmatrix}
2\\3\\
\end{bmatrix} = \begin{bmatrix}
a + 2b \\ a + 3b\\
\end{bmatrix}
$

> **例**  $u+v = \begin{bmatrix}
1\\1\\
\end{bmatrix} + \begin{bmatrix}
2\\3\\
\end{bmatrix} = \begin{bmatrix}
3 \\ 4\\
\end{bmatrix}
$
就是一个线性组合，其中 $a = b = 1$

从以上可以看出，一般地，向量可以视为行矩阵或列矩阵，因此可以用矩阵的运算定义向量运算。

设 $\alpha = 
\begin{bmatrix}
a_{1}\\
a_{2}\\
\vdots\\
a_{n}
\end{bmatrix}
$
, $\beta = 
\begin{bmatrix}
b_{1}\\
b_{2}\\
\vdots\\
b_{n}
\end{bmatrix}
$
, $k\in \mathbb{R}$，则有：

* $\alpha + \beta = 
\begin{bmatrix}
a_{1} + b_{1} \\
a_{2} + b_{2} \\
\vdots\\
a_{n} + b_{n} 
\end{bmatrix}$

* $k\alpha  = 
\begin{bmatrix}
ka_{1}\\
ka_{2}\\
\vdots\\
ka_{n}  
\end{bmatrix}$

* $\alpha^T\beta  = 
\begin{bmatrix}
a_{1},
a_{2},
\cdots,
a_{n}  
\end{bmatrix}
\begin{bmatrix}
b_{1}\\
b_{2}\\
\vdots\\
b_{n} 
\end{bmatrix} = a_{1}b_{1} + a_{2}b_{2} + \cdots + a_{n}b_{n}$

一般地，向量的加法和乘法统称为向量的线性运算。向量的线性运算与行（列）矩阵的运算规律相同，从而也满足如下运算规律：

（1）$\alpha + \beta = \beta + \alpha$

（2）$(\alpha + \beta) + \gamma = \alpha + (\beta + \gamma)$

（3）$\alpha + \pmb{0} = \alpha$

（4）$\alpha + (-\alpha)= \pmb{0}$

（5）$\pmb{1}\alpha  = \alpha$

（6）$kl\alpha  = (kl)\alpha$

（7）$k(\alpha + \beta) = k\alpha + k\beta$

（8）$(k + l)\alpha = k\alpha + l\alpha$

## 三、向量组间的线性表示
### 1.定义与性质
> **定义1.1.2:**  设有两个向量组，若向量组 $B$ 中的每一个向量都能由向量 $A$ 线性表示，则称向量组 $B$ 能由向量组 $A$ 线性表示（或线性表出）。
若向量组 $A$ 与向量组 $B$ 能相互线性表示，则称这两个向量组等价。

向量组等价的性质：

* **反身性**：每一向量组都与自身定价；
* **对称性**：$A$ 与 $B$ 等价，则 $B$ 与 $A$ 等价；
* **传递性**：$A$ 与 $B$ 等价，$B$ 与 $C$ 等价，则 $A$ 与 $C$ 等价。

### 2.向量组线性表出的矩阵形式
设向量组 $B: b_{1}, \cdots, b_{s}$ 可由 $A: a_{1}, \cdots, a_{j}$ 线性表出，则：

$$
b_{1} = k_{11}a_{1} + k_{21}a_{2} + \cdots + k_{j1}a_{j} \\
b_{2} = k_{12}a_{1} + k_{22}a_{2} + \cdots + k_{j2}a_{j} \\
\vdots \\
b_{s} = k_{1s}a_{1} + k_{2s}a_{2} + \cdots + k_{js}a_{j} \\
\Longrightarrow (b_{1}, \cdots, b_{s}) = (a_{1}, \cdots, a_{j})
\begin{bmatrix}
k_{11} &  k_{12} & \cdots  & k_{1s}\\
k_{21} &  k_{22} & \cdots  & k_{2s}\\
\vdots & \vdots &  & \vdots \\
k_{j1} &  k_{j2} & \cdots  & k_{js}
\end{bmatrix}
$$

### 3.矩阵乘积导出的线性表出
设 $A_{m \times j}B_{j \times s} = C_{m \times s}$，写成分块矩阵形式：
$$
(a_{1}, \cdots, a_{j})
\begin{bmatrix}
b_{11} &  kb_{12} & \cdots  & b_{1s}\\
b_{21} &  k_{22} & \cdots  & b_{2s}\\
\vdots & \vdots &  & \vdots \\
b_{j1} &  b_{j2} & \cdots  & b_{js}
\end{bmatrix}
= (c_{1}, \cdots, c_{s})\\\Longrightarrow\\
c_{1} = b_{11}a_{1} + b_{21}a_{2} + b_{j1}a_{j}\\
c_{2} = b_{12}a_{1} + b_{22}a_{2} + b_{j2}a_{j}\\
\cdots \ \ \cdots \ \ \cdots\\
c_{s} = b_{1s}a_{1} + b_{2s}a_{2} + b_{js}a_{j}
$$
可见，乘积 $C$ 的列向量组可由 $A$ 的列向量组线形表出。对应第，乘积 $C$ 的行向量组可由 $B$ 的行向量组线形表出。

## 四、向量组及线性组合

> **定义1.1.3:** 由若干个维数相同的向量构成的集合，称为向量组。

例如，未知量的系数构成的 $m$ 维列向量  $\alpha = 
\begin{bmatrix}
a_{1}\\
a_{2}\\
\vdots\\
a_{n}
\end{bmatrix}
(i = 1,2,\cdots,n)$
的全体构成一个向量组。

考察线性方程组
$$
\begin{cases}
a_{11}x_{1} + a_{12}x_{21} + \cdots + a_{1n}x_{n}\\
a_{21}x_{1} + a_{22}x_{21} + \cdots + a_{2n}x_{n} \\
\cdots \cdots\\
a_{m1}x_{1} + a_{m2}x_{21} + \cdots + a_{mn}x_{n} 
\end{cases}
$$
中第 $i$ 个未知量 $x_{i}$ 的系数写成一个 $m$ 维列向量
$$
\pmb{\alpha}_{i} = 
\begin{bmatrix}
a_{1i}\\
a_{2i}\\
\vdots\\
a_{mi}
\end{bmatrix}
(i=1,2,\cdots,n),
$$
此外，该方程组的常数亦可以写成一个 $m$ 维列向量
$$
\pmb{\beta}_{i} = 
\begin{bmatrix}
b_{1}\\
b_{2}\\
\vdots\\
b_{m}
\end{bmatrix},
$$
则该方程组可用以下向量形式表示
$$\alpha_{1}x_{1} + \alpha_{2}x_{2} + \cdots + x_{n} = \pmb{\beta}$$
这种线性方程组的表达方法会对讨论线性方程组的解带来极大便利。

该线性方程组是否有解，相当于是否存在一组数 $k_{1},k_{2},\cdots,k_{n}$使得下列看行关系式成立：

> **定义1.1.4:**  给定向量组 $A:\alpha_{1},\alpha_{2},\cdots,\alpha_{s}$，对于任意一组实数 $k_{1},k_{2},\cdots,k_{s}$ ，表达式 $k_{i}A(i = 1, 2,  \cdots, s)$ 称为向量组 $A$ 的一个线性组合，$k_{1},k_{2}, \cdots, k_{s}$ 称为这个线性组合的系数。

> **定义1.1.5:** 给定限量组 $A:\alpha_{1}, \alpha_{2}, \cdots, \alpha_{s}$ 和向量 $\beta$ ，若存在一组数 $A$ 的一个线性组合，$k_{1}, k_{2}, \cdots, k_{s}$ 使得 $\beta = k_{i}A$，则称向量 $\beta$ 是向量组 $A$ 的线性组合，又称向量 $\pmb{\beta}$ 能由向量组 $A$ 线性表示。

注：（1）$\pmb{\beta}$ 能由向量组 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{s}$ 唯一线性表示的充分必要条件是线性方程组 $\alpha_{1}x_{1} + \alpha_{2}x_{2} + \cdots + x_{n} = \pmb{\beta}$ 有唯一解；

（2）$\pmb{\beta}$ 能由向量组 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{s}$ 线性表示且表示不唯一的充分比较条件是 $\alpha_{1}x_{1} + \alpha_{2}x_{2} + \cdots + x_{n} = \pmb{\beta}$ 有去穷多个解；

(3) $\pmb{\beta}$ 不能由向量组 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{s}$ 线性表示的充分必要条件是线性方程组 $\alpha_{1}x_{1} + \alpha_{2}x_{2} + \cdots + x_{n} = \pmb{\beta}$ 无解。

> **定理1.1.1** 设向量
$$
\pmb{\beta}_{i} = 
\begin{bmatrix}
b_{1}\\
b_{2}\\
\vdots\\
b_{m}
\end{bmatrix},
\pmb{\alpha}_{j} = 
\begin{bmatrix}
a_{1j}\\
a_{2j}\\
\vdots\\
a_{mj}
\end{bmatrix}
(j=1, 2, \cdots, n),
$$
则向量 $\pmb{\beta}$ 能由向量组 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{s}$ 线性表示的充分必要条件是矩阵 $A = (\alpha_{1}, \alpha_{2},\cdots, \alpha_{s})$ 与矩阵 $\tilde{A} = (\alpha_{1}, \alpha_{2},\cdots, \alpha_{s}, \beta)$ 的秩相等。
