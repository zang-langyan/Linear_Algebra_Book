# 第三节 克莱姆法则
克莱姆法则（Cramer's rule）是一种用于解决线性方程组的方法，由瑞士数学家克拉姆（Gaabriel Cramer）提出。1750年，在其发表的著作《线性代数分析导言》中，提出了被称为卡莱姆法则的定理。该定理在解决特定类型的线性方程组时非常有用，尤其是当方程的系数行列式不为0时。此外，该方法简单直观，适用于小规模的线性方程组求解，但当计算量很大时，可能会出现数值不稳定的情况。该定理不仅在数学领域有重要的应用，在工程、物理和经济学等领域也被广泛使用。
## 第一、行列式

### 1. 行列式的定义
行列式是指一个由若干个数排列成同样的行数与列数后得到的一个式子，它实质上表示把这些数按一定的规则进运算，其结果是一个确定的数。

>**定义2.3.1** $n$ 阶行列式是由 $n^2$ 个元素$a_{ij}(i, j = 1, 2, \cdots, n)$ 排成 $n$ 行 $n$ 列的正方形的数表：
$$
\begin{matrix}
a_{11} & a_{12} & \cdots & a_{1n}\\
a_{21} & a_{22} & \cdots & a_{2n}\\
\vdots & \vdots  & \ddots & \vdots\\
a_{n1} & a_{n2} & \cdots & a_{nn}
\end{matrix}
$$
由这个决定的数
$$
\sum_{p_{1}p_{2} \cdots p_{n}}(-1)\tau (p_{1}p_{2} \cdots p_{n}) a_{1p_{1}}a_{2p_{1}} \cdots a_{np_{n}} 
$$
称为由 $n^2$ 个元素 $a_{ij}(i, j = 1, 2, \cdots, n)$ 构成的 $n$ 阶行列式，记为
$$
D_{n} = 
\begin{vmatrix}
a_{11} & a_{12} & \cdots & a_{1n}\\
a_{21} & a_{22} & \cdots & a_{2n}\\
\vdots & \vdots  & \ddots & \vdots\\
a_{n1} & a_{n2} & \cdots & a_{nn}
\end{vmatrix}
$$
即
$$
D_{n} = 
\begin{vmatrix}
a_{11} & a_{12} & \cdots & a_{1n}\\
a_{21} & a_{22} & \cdots & a_{2n}\\
\vdots & \vdots  & \ddots & \vdots\\
a_{n1} & a_{n2} & \cdots & a_{nn}
\end{vmatrix} = 
\sum_{p_{1}p_{2} \cdots p_{n}}(-1)\tau (p_{1}p_{2} \cdots p_{n}) a_{1p_{1}}a_{2p_{1}} \cdots a_{np_{n}} 
$$
其中，$\sum_{p_{1}p_{2}}$ 表示对所有的 $n$ 阶全排列 $p_{1}p_{2}\cdots p_{n}$ 求和。 数 $a_{ij}(i, j = 1, 2, \cdots, n)$ 为行列式的 $(i, j)$ 元素，第一个下标 $i$ 为元素 $a_{ij}$ 的行标， 第二个下标 $j$ 为元素 $a_{ij}$ 的列标。

记矩阵
$$
\begin{bmatrix}
a_{11} & a_{12} & \cdots & a_{1n}\\
a_{21} & a_{22} & \cdots & a_{2n}\\
\vdots & \vdots  & \ddots & \vdots\\
a_{n1} & a_{n2} & \cdots & a_{nn}
\end{bmatrix} 
$$
则行列式通常也称为方阵 $A$ 的行列式，记为 $|A|$。有时为了表明行列式是由元素 $a_{ij}$ 构成的，也简记为 $|A| = det(a_{ij})$、$|a_{ij}|_{n \times n}$ 或 $|a_{ij}|_{n}$。

> 这里要提到一个概念 **余子式及代数余子式**

设有三阶行列式 
$
D_{3} = 
\begin{vmatrix}
a_{11} & a_{12} & a_{13}\\
a_{21} & a_{22} & a_{23}\\
a_{31} & a_{32} & a_{33}
\end{vmatrix}
$

对任何一个元素 $a_{ij}$，划去它所在的第 $i$ 行及第 $j$ 列，剩下的元素按原先次序组成一个二阶行列式，称它为元素 $a_{ij}$ 的余子式，记为 $M_{ij}$，再记 $A_{ij} = (-1)^{i + j}M_{ij}$，称 $A_{ij}$ 为元素 $a_{ij}$ 的代数余子式。

> 此外，实际中还存在一些特殊的行列式：
- 上三角行列式 
$
\begin{vmatrix}
a_{11} & a_{12} & \cdots & a_{1n}\\
0 & a_{22} & \cdots & a_{2n}\\
\cdots & \cdots & \cdots & \cdots\\
0 & 0 & \cdots & a_{nn}
\end{vmatrix}
= a_{11}a_{22}\cdots a_{nn}
$

- 下三角行列式 
$
\begin{vmatrix}
a_{11} & 0 & \cdots & 0\\
a_{21} & a_{22} & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots\\
a_{n1}  & a_{n2} & \cdots & a_{nn}
\end{vmatrix}
= a_{11}a_{22}\cdots a_{nn}
$

- 对角行列式 
$
\begin{vmatrix}
a_{11} & 0 & \cdots & 0\\
0 & a_{22} & \cdots & 0\\
\cdots & \cdots & \cdots & \cdots\\
0  & 0 & \cdots & a_{nn}
\end{vmatrix}
= a_{11}a_{22}\cdots a_{nn}
$

### 2. 行列式的性质
> 行列式具有以下性质
- **性质1** 行列式和它的转置行列式相等，即 $D = D^T$ 
- **性质2** 行列式可以按行和列提取公因数，即用数 $k$ 乘行列式 $D$ 中某一行（列）的所有元素得到的行列式等于 $kD$
- **性质3** 互换行列式的任意两行（列），行列式的值改版符号
- - **推论1** 如果行列式中有某两行（列）相同，则此行列式的值等于零
- - **推论2** 如果行列式中有某两行（列）对应元素成比例，则此行列式的值等于零
- **性质4** 行列式可以按行（列）拆开
- **性质5** 把行列式 $D$ 的某一行（列）的所有元素都乘以同一个数以后加到另一行（列）的对应元素上去，所得行列式仍为 $D$
  
### 3. 行列式展开
基于以上，进一步得到行列式的展开定理
**定理2.3.1** $n$ 阶行列式 $D = a_{ij}|_{n}$ 等于它的任意一行（列）的各元素与其对应的代数余子式的乘积的和，即 $D = a_{i1}A_{i1} + a_{i2}A_{i2} + \cdots + a_{in}A_{in}(i = 1, 2, \cdots, n)$ 或 $D = a_{i1}A_{i1} + a_{i2}A_{i2} + \cdots + a_{in}A_{in}(i = 1, 2, \cdots, n)$ 或 $D = a_{1j}A_{1j} + a_{2j}A_{2j} + \cdots + a_{nj}A_{nj}(j = 1, 2, \cdots, n)$

前一行称为 $D$ 按第 $i$ 行的展开式，后一式称为 $D$ 按第 $j$ 列的展开式。

**定理2.3.2** $n$ 阶行列式 $D = a_{ij}|_{n}$ 的任意一行（列）各元素与另一行（列）对应元素的代数余子式的乘积之和等于零。即 $a_{i1}A_{k1} + a_{i2}A_{k2} + \cdots + a_{in}A_{kn} = 0 (i = k)$ 或 $a_{1j}A_{1s} + a_{2j}A_{2s} + \cdots + a_{nj}A_{ns}(j = s)$

### 4. 行列式的计算
> 行列式的计算主要采用以下两种基本方法：
- 利用行列式性质，把原行列式化为上三角（或狭三角）行列式再求值，要注意的是，在互换两行或两列时，必须在新的行列式前面乘上 $(-1)$，在按行或按列提取公因子 $k$ 时，必须在新的行列式前面乘上 $k$。
- 把原行列式按选定的某一行或某一列展开，把行列式的阶数降低，再求出它的值，通常是利用性质在某一行或某一列中产生很多个“0”元素，再按着一行或这一列展开。
> **例1** 计算行列式 
$
\begin{vmatrix}
0 & 2 & -2 & 2\\
1 & 3 & 0 & 4\\
-2 & -11 & 3 & -16\\
0 & -7 & 3 & 1
\end{vmatrix}
$

**解：**  
$$
\begin{vmatrix}
0 & 2 & -2 & 2\\
1 & 3 & 0 & 4\\
-2 & -11 & 3 & -16\\
0 & -7 & 3 & 1
\end{vmatrix}
\xlongequal{r_{1}\leftrightarrow r_{2}}
-
\begin{vmatrix}
1 & 3 & 0 & 4\\
0 & 2 & -2 & 2\\
-2 & -11 & 3 & -16\\
0 & -7 & 3 & 1
\end{vmatrix}
\xlongequal{r_{3} + 2r_{2}}
\begin{vmatrix}
1 & 3 & 0 & 4\\
0 & 2 & -2 & 2\\
0 & -5 & 3 & -8\\
0 & -7 & 3 & 1
\end{vmatrix}
\xlongequal{\frac{1}{2}r_{2}}
-2
\begin{vmatrix}
1 & 3 & 0 & 4\\
0 & 1 & -1 & 1\\
0 & -5 & 3 & -8\\
0 & -7 & 3 & 1
\end{vmatrix}
\xlongequal[r_{4} + 7r_{2}]{r_{3} + 5r_{2}}
-2
\begin{vmatrix}
1 & 3 & 0 & 4\\
0 & 1 & -1 & 1\\
0 & 0 & -2 & -3\\
0 & 0 & -4 & 8
\end{vmatrix}
\xlongequal{r_{4} + (-2)r_{3}}
-2
\begin{vmatrix}
1 & 3 & 0 & 4\\
0 & 1 & -1 & 1\\
0 & 0 & -2 & -3\\
0 & 0 & 0 & 14
\end{vmatrix}
=56
$$
可以看出，在计算这个行列式时，做变换 $r_{1}\leftrightarrow r_{2}$，$\frac{1}{2}r_{2}$ 的目的是为了使 $a_{11}$、$a_{22}$ 位置的元素变为1，从而在后续的计算中避免分数的出现。

由此可见，在计算行列式时，需要明确行泪湿的特点。虽然行列式的值时唯一的，但计算过程并不唯一，要根据行列式的特点，综合利用行列式的性质，尽量简化计算。





## 第二、理论基础
设有一个含有 $n$ 个未知数 $x_{1}$，$x_{2}$，$\cdots$，$x_{n}$，$n$ 个线性方程的方程组
$$
\begin{cases}
a_{11}x_{1} + a_{12}x_{2} + \cdots + a_{1n}x_{n} = b_{1}\\
a_{21}x_{1} + a_{22}x_{2} + \cdots + a_{2n}x_{n} = b_{2}\\
\cdots \hspace{1cm} \cdots \hspace{1cm} \cdots \hspace{1cm} \cdots\\
a_{n1}x_{1} + a_{n2}x_{2} + \cdots + a_{nn}x_{n} = b_{n}
\end{cases}
$$
借助于矩阵乘法，该线性方程组可写为 $Ax = \beta$，其中
$$
A = 
\begin{bmatrix}
a_{11} & a_{12} & \cdots & a_{1n}\\
a_{21} & a_{22} & \cdots & a_{2n}\\
\vdots & \vdots & \ddots & \vdots\\
a_{n1} & a_{n2} & \cdots & a_{nn}
\end{bmatrix},
x = 
\begin{bmatrix}
x_{1}\\
x_{2} \\
\vdots \\
x_{n}
\end{bmatrix},
\beta = 
\begin{bmatrix}
b{1}\\
b_{2} \\
\vdots \\
b_{n}
\end{bmatrix}
$$
>**定理2.3.1** 克莱姆法则：如果线性方程组 $Ax = \beta$ 的系数行列式不等于零，即$|A| \ne 0$，则方程组有唯一解
$$
x_{1} = \frac{D_{1}}{|A|}, x_{2} = \frac{D_{2}}{|A|}, \cdots, x_{n} = \frac{D_{n}}{|A|}, 
$$
其中，$D_{j}(j \ne1, 2, \cdots, n)$ 是把系数行列式的第 $j$列元素用 $\beta$ 的元素代替后得到的行列式。
> 证明 由于 $|A| \ne 0$，所以 $A^{-1}$ 存在。令 $x = A^{-1}\beta$，则有 $Ax = A(A^{-1}\beta) = \beta$，即 $x = A^{-1}\beta$ 是线性方程组的解，且由 $A^{-1}$ 的唯一性可知，线性方程组的解是唯一的。由求逆公式 $A^{-1} = \frac{1}{|A|}A^*$ 可得
$$
x = A^{-1}\beta = \frac{1}{|A|}A^*\beta,
$$
即
$$
x = 
\begin{bmatrix}
x_{1}\\
x_{2} \\
\vdots \\
x_{n}
\end{bmatrix}
= \frac{1}{|A|}
\begin{bmatrix}
A_{11} & A_{21} & \cdots & A_{n1}\\
A_{12} & A_{22} & \cdots & A_{n2}\\
\vdots & \vdots & \ddots & \vdots\\
A_{1n} & A_{2n} & \cdots & A_{nn}
\end{bmatrix}
\begin{bmatrix}
b_{1}\\
b_{2} \\
\vdots \\
b_{n}
\end{bmatrix}
= \frac{1}{|A|}
\begin{bmatrix}
\sum_{k=1}^nb_{k}A_{k1}\\
\sum_{k=1}^nb_{k}A_{k2}\\
\vdots \\
\sum_{k=1}^nb_{k}A_{kn}
\end{bmatrix}
$$
则，$x_{j} = \frac{1}{|A|}\sum_{k=1}^nb_{k}A_{kj} = \frac{1}{|A|}(b_{1}A_{1j} + b_{2}A_{2j} + \cdots + b_{n}A_{nj})(j = 1, 2, \cdots, n)$。而将 $D_{j}$ 按第 $j$ 列展开，有
$$
D_{j} = 
\begin{vmatrix}
a_{11} & \cdots &  a_{1, j-1} & b_{1} & a_{1, j+1} & \cdots & a_{1n}\\
a_{21} & \cdots &  a_{2, j-1} & b_{2} & a_{2, j+1} &  \cdots & a_{2n}\\
\vdots & \ddots &  \vdots & \vdots & \vdots  & \cdots & \vdots\\
a_{n1} & \cdots &  a_{n, j-1} & b_{n} & a_{n, j+1} &  \cdots & a_{nn}\\
\end{vmatrix}
= b_{1}A_{1j} + b_{2}A_{2j} + \cdots + b_{n}A_{nj}(j = 1, 2, \cdots, n), 
$$

所以有，$x_{j} = \frac{D_{j}}{|A|}(j= 1, 2, \cdots, n)
$ 。

## 第三、应用实例
**例1：** 用克莱姆法则求解线性方程组 
$
\begin{cases}
x_{1} - x_{2} - x_{3} = -1\\
-2x_{1} + 2x_{2} + x_{3} = 1\\
2x_{1} - x_{2} + 3x_{n} = 1
\end{cases}
$

**解：**
$
|A| = 
\begin{vmatrix}
1 & -1 & -1\\
-2 & 2 & 1\\
2 & -1 & 3
\end{vmatrix} = 
\begin{vmatrix}
1 & -1 & -1\\
0 & 0 & -1\\
0 & 1 & 5
\end{vmatrix} = 
\begin{vmatrix}
1 & -1 & -1\\
0 & 1 & 5\\
0 & 0 & -1
\end{vmatrix} =1 \ne 0
$，

$
D_{1} = 
\begin{vmatrix}
-1 & -1 & -1\\
1 & 2 & 1\\
1 & -1 & 3
\end{vmatrix} = 
\begin{vmatrix}
-1 & -1 & -1\\
0 & 1 & 0\\
0 & 0 & 2
\end{vmatrix} = -2
$，

$
D_{2} = 
\begin{vmatrix}
1 & -1 & -1\\
-2 & 1 & 1\\
2 & 1 & 3
\end{vmatrix} = 
\begin{vmatrix}
1 & -1 & -1\\
0 & -1 & -1\\
0 & 0 & 2
\end{vmatrix} = -2
$

$
D_{3} = 
\begin{vmatrix}
1 & -1 & -1\\
-2 & 2 & 1\\
2 & -1 & 1
\end{vmatrix} = 
\begin{vmatrix}
1 & -1 & -1\\
0 & 0 & -1\\
0 & 1 & 3
\end{vmatrix} = 1
$,

可得： 
$$
x_{1} = \frac{D_{1}}{|A|} = -2, x_{2} = \frac{D_{2}}{|A|} = -2, x_{3} = \frac{D_{3}}{|A|} = 1
$$ 

进一步地，可以得到与线性方程组的解有关的一些重要结论： 
> **定理2.3.2** 如果线性方程组 $Ax= \beta$ 的系数行列式不等于零，即 $|A| \ne 0$，则方程组一定有解，且是唯一解。

> **定理2.3.3** 如果线性方程组 $Ax= \beta$ 无解或有无穷多个解，则它的系数行列式必等于零，即 $|A| = 0$。

> **定理2.3.4** 如果齐次线性方程组 $Ax= \beta$ 的系数行列式不等于零，即 $|A| \ne 0$，则它只有零解
$$
x_{1} = x_{2} = \cdots = x_{n} = 0
$$
> **定理2.3.5** 如果齐次线性方程组 $Ax= \beta$ 有非零解，则它的系数行列式必等于零，即  $|A| = 0$

**例2：** $\lambda$ 取何值时，齐次方程组
$
\begin{cases}
(1- \lambda)x_{1} - 2x_{2} + 4x_{3}= 0\\
2x_{1} + (3- \lambda) x_{2} + x_{3} = 0\\
x_{1} + x_{2} + (1- \lambda)x_{3} = 0
\end{cases}
$
有非零解？

**解：**
$$
D = 
\begin{vmatrix}
1-\lambda & -2 & 4\\
2 & 3-\lambda & 1\\
1 & 1 & 1-\lambda
\end{vmatrix} =
\begin{vmatrix}
1-\lambda & -3+\lambda & 4\\
2 & 1-\lambda & 1\\
1 & 0 & 1-\lambda
\end{vmatrix} = 
\lambda(\lambda-2)(3-)\lambda
$$
根据 **定理2.3.5** 其次方程组有非零解，则 $|A| = 0$，所以得出 $\lambda = 0$，$\lambda = 2$ 或 $\lambda = 3$ 时，该方程组有非零解。
> **小结：**
1. 用克莱姆法则解方程组的两个条件：
   - 方程个等于未知量个数
   - 系数行列式不等于零
2. 克莱姆法则建立了线性组的解和已知的系数与常数项之间的关系，主要适用于理论推导。


