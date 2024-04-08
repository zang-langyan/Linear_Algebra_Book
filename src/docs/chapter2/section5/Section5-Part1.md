# 第五节 $LU$ 分解法
$LU$ 分解是一种将一个大型矩阵或向量分解为两个低秩矩阵或向量的方法，通过 $LU$ 分解可以简化矩阵运算，提高计算效率。该方法在数据处理、机器学习和信息检索等领域得到了广泛应用。

## 一、 $LU$ 分解的定义

>**定义2.5.1** $LU$ 分解是将一个矩阵 $A$ 分解为两个矩阵 $L$ 和 $U$ 的过程，即 $A = LU$ ，其中 $L$ 是一个下三角矩阵，$U$ 是一个上三角矩阵。$L$ 的对角线元素都是 $1$，$U$ 矩阵的对角线元素是 $A$ 矩阵的对角线元素。

**例如** 对于一个 $2 \times 2$ 的矩阵
$$
E_{21} \hspace{0.9cm}A \hspace{0.3cm}= \hspace{0.3cm}U\\
\begin{bmatrix}
1 & 0 \\
-4 & 1
\end{bmatrix}
\begin{bmatrix}
2 & 1 \\
8 & 7
\end{bmatrix} =
\begin{bmatrix}
2 & 1 \\
0 & 3
\end{bmatrix}
$$
上式即 $EA = U$ 左右同乘一个 $E_{21}$ 的你矩阵，得：$E_{21}^{-1}E_{21} = E_{21}^{-1}U$，这里的 $E_{21}^{-1}$ 即 $L$。
$$
A \hspace{0.3cm}  = \hspace{0.5cm} L  \hspace{0.7cm}U\\
\begin{bmatrix}
2 & 1 \\
8 & 7
\end{bmatrix} =
\begin{bmatrix}
1 & 0 \\
4 & 1
\end{bmatrix} 
\begin{bmatrix}
2 & 1 \\
0 & 3
\end{bmatrix}
$$
以上即完成了一次 $LU$ 分解，可以看到 $U$ 是一个上三角矩阵，主对角线是主元，$L$ 是下三角矩阵，主对角线都是 $1$。

>**定理2.5.1**  若 $n$ 阶矩阵 $A$ 的所有顺序主子式不为零，则 $A$ 有唯一的 $LU$ 分解。

设 $A = LU = L_{1}U_{1}$，其中 $L$、$L_{1}$ 为单位下三角矩阵，$U$、$U_{1}$ 为上三角矩阵。

- $A$ 的所有顺序主子式不为零 $\Rightarrow$ $A$ 为非奇异矩阵 $\Rightarrow$ $L^{-1}L_{1} = UU^{-1}$ 
- $L$、$L_{1}$ 为单位下三角矩阵 $\Rightarrow$ $L^{-1}L_{1}$ 为单位下三角矩阵；$U$、$U_{1}$ 为上三角矩阵 $\Rightarrow$ $U$、$U_{1}$ 为上三角矩阵 $\Rightarrow$ $L^{-1}L_{1} = U{U_{1}}^{-1} = E$  $\Rightarrow$ $L = L_{1}$，$U= U_{1}$

## 二、 $LU$ 分解的计算过程
### 1. $LU$ 分解的步骤
$LU$ 分解的主要步骤包括：
- 首先，选取一个合适的主元素，通常选择矩阵的第一列或第一行的元素作为主元素；
- 将选定的主元素除以主元素所在行的第一个元素，得到 $L$ 矩阵的第一行元素；
- 将选定的主元素所在行的第一个元素乘以 $L$ 矩阵的第一行元素，并将结果剪去对应位置的元素，得到 $U$ 矩阵的第一行元素；
- 重复上述步骤，知道得到完整的 $L$ 和 $U$ 矩阵。

>**例1** 以矩阵 $A$ 为例进行 $LU$ 分解
$$
A = 
\begin{bmatrix}
1 & 5 & -3\\
-2 & -7 & 3\\
4 & 9 & 6
\end{bmatrix}
$$ 
>**基本假设：**
- 矩阵为方阵，并且可逆
- 消元时不需要进行行交换

>**消元顺序：**
一般而言，手动消元时，消元顺序不是固定的，但在 $LU$ 分解时，消元顺序是固定的，具体方式为： 以第一行为主元，依次向下消元，最终消元为一个上三角矩阵。若为 $4 \times 4$ 的矩阵，消元顺序为 $r_{2}r_{1} \to r_{3}r_{1} \to r_{4}r_{1} \to r_{3}r_{2} \to r_{4}r_{2} \to r_{4}r_{3}$，需消元6次；若为 $n \times n$ 的矩阵，则总共需要 $1 + 2 + 3 + \cdots + (n - 1) = \dfrac{n(n - 1)}{2}$ 次消元。

对于矩阵 $A$，有：
$$
A = 
\begin{bmatrix}
1 & 5 & -3\\
-2 & -7 & 3\\
4 & 9 & 6
\end{bmatrix}
\xrightarrow[r_{2} + 2r_{1}]{E_{21}}
\begin{bmatrix}
1 & 5 & -3\\
0 & 3 & -3\\
4 & 9 & 6
\end{bmatrix}
\xrightarrow[r_{3} - 4r_{1}]{E_{31}}
\begin{bmatrix}
1 & 5 & -3\\
0 & 3 & -3\\
0 & -11 & 18
\end{bmatrix}
\xrightarrow[r_{3} + \frac{11}{3}r_{2}]{E_{32}}
\begin{bmatrix}
1 & 5 & -3\\
0 & 3 & -3\\
0 & 0 & 7
\end{bmatrix} = 
U
$$
上述消元变换过程可写为：
$$E_{32}E_{31}E_{21}A = U$$
其中，
$$
E_{21} = 
\begin{bmatrix}
1 & 0 & 0\\
2 & 1 & 0\\
0 & 0 & 1
\end{bmatrix},
E_{31} = 
\begin{bmatrix}
1 & 0 & 0\\
0 & 1 & 0\\
-4 & 0 & 1
\end{bmatrix},
E_{32} = 
\begin{bmatrix}
1 & 0 & 0\\
0 & 1 & 0\\
0 & 11/3 & 1
\end{bmatrix},
$$
基于以上，得：
$$
A = (E_{32}E_{31}E_{21})^{-1}U = LU
$$
则，
$$
E_{32}E_{31}E_{21} = 
\begin{bmatrix}
1 & 0 & 0\\
2 & 1 & 0\\
10/3 & 11/3 & 1
\end{bmatrix} 
$$

$$
L= (E_{32}E_{31}E_{21})^{-1} = 
\begin{bmatrix}
1 & 0 & 0\\
2 & 1 & 0\\
4 & -11/3 & 1
\end{bmatrix}
$$
可以看出，$L$ 矩阵(2, 1)、(3, 1)和(3, 2)位置对应的值是初等变换矩阵 $E_{21}$、$E_{31}$、$E_{32}$ 中实际变换位置处元素的相反数。

### 2. $LU$ 分解与配方法
我们从以下的例子出发进行分析：

>**例2** 已知 $f = {x_{1}}^2 + 2{x_{2}}^2 + 6{x_{3}}^2 + 2x_{1}x_{2} - 2x_{1}x_{3} + 2x_{2}x_{3}\\
= (x_{1} + x_{2} - x_{3})^2 +(x_{2} + 2x_{3})^2 + {x_{3}}^2$

对上式中二次型对应的矩阵 $A$ 进行 $LU$ 分解。

**解** 根据给定条件知，矩阵 $A$ 为：
$$
A = 
\begin{bmatrix}
1 & 1 & -1\\
1 & 2 & 1\\
-1 & 1 & 6
\end{bmatrix}
$$
对其进行$LU$ 分解，其过程为
$$
A = 
\begin{bmatrix}
1 & 1 & -1\\
1 & 2 & 1\\
-1 & 1 & 6
\end{bmatrix}
\xrightarrow[r_{2} - r_{1}]{E_{21}}
\begin{bmatrix}
1 & 1 & -1\\
0 & 1 & 2\\
-1 & 1 & 6
\end{bmatrix}
\xrightarrow[r_{3} + r_{1}]{E_{31}}
\begin{bmatrix}
1 & 1 & -1\\
0 & 1 & 2\\
0 & 2 & 5
\end{bmatrix}
\xrightarrow[r_{3} - 2r_{2}]{E_{32}}
\begin{bmatrix}
1 & 1 & -1\\
0 & 1 & 2\\
0 & 0 & 1
\end{bmatrix}
= U
$$
其变换矩阵为
$$
L = (E_{32}E_{31}E_{21})^{-1} = 
\begin{bmatrix}
1 & 0 & 0\\
1 & 1 & 0\\
-1 & 2 & 1
\end{bmatrix}
$$
可以看出：$L$ 和 $U$ 矩阵分别为一个上三角矩阵和一个下三角矩阵。 $L$ 中同样是对应位置为初等变换矩阵系数的相反数。比如 $E_{21}$ 位置的值为 $L$ 矩阵对应位置的相反数。$E_{31}$ 和 $E_{32}$ 同理。此外，有
$$
A = LU = 
\begin{bmatrix}
1 & 0 & 0\\
1 & 1 & 0\\
-1 & 2 & 1
\end{bmatrix}
\begin{bmatrix}
1 & 1 & -1\\
0 & 1 & 2\\
0 & 0 & 1
\end{bmatrix}
$$
$$
f = (x_{1} + x_{2} - x_{3})^2 +(x_{2} + 2x_{3})^2 + {x_{3}}^2
$$
**仔细观察可得：**

矩阵 $L$ 的每一列对应配方后每一个平方项中各未知数的系数，而矩阵 $U$ 每个对角线上的值对应配方后每个二次项系数，即
$$
f = 1 \times [1x_{1} + 1x_{2} + (-1)x_{3}]^2 + 1 \times (1x_{2} + 2x_{3})^2 + 1 \times (1x_{3})^2\\
= (x_{1} + x_{2} - x_{3})^2 + (x_{2} + 2x_{3})^2 + (x_{3})^2
$$


## 三、 $LU$ 分解求解线性方程组
假设我们要用 $LU$ 分解求解方程组 $Ax = b$。具体而言，当系数矩阵 $A$ 完成了 $LU$ 分解后，方程组 $Ax = b$ 就可以化为 $L(Ux) = b$，等价于求解两个方程组 $Ly = b$ 和 $Ux = y$，具体而言：

$L$ 为下三角矩阵，$U$ 为单位上三角矩阵
$$
\begin{bmatrix}
a_{11} & a_{12} \cdots a_{1n}\\
a_{21} & a_{22} \cdots a_{2n}\\
\vdots & \vdots \ddots \vdots\\
a_{n1} & a_{n2} \cdots a_{nn}
\end{bmatrix}
=
\begin{bmatrix}
1 & \\
l_{21} & 1 \\
\vdots & \vdots  &\ddots &\\
l_{n1} & l_{n2} & \cdots & 1
\end{bmatrix}
\begin{bmatrix}
u_{11} & u_{12} & \cdots & u_{1n}\\
& u_{22} & \cdots & u_{2n}\ \\
& & \ddots & \vdots\\
& & & u_{nn}
\end{bmatrix}
$$
**比较第 1 行：** $a_{1j} = u_{1j} \hspace{0.6cm}j = 1, \cdots, n$ $\Rightarrow u_{1j} = a_{1j}$

**比较第 1 列：** $a_{i1} = l_{i1} \hspace{0.6cm}i = 2, \cdots, n$ $\Rightarrow l_{i1} = \dfrac{a_{i1}}{u_{11}} \hspace{0.6cm} l_{ii} = 1(i = 1, 2, \cdots n)$

**比较第 2 行：** $a_{2j} = l_{21}u_{1j} + u_{2j} \hspace{0.6cm}j = 2, \cdots, n$ $\Rightarrow u_{2j} = a_{1j} - l_{21}u_{1j}$

**比较第 2 列：** $a_{i2} = l_{i1}u_{12} + l_{i2}u_{22} \hspace{0.6cm}i = 3, \cdots, n$ $\Rightarrow l_{i1} = \dfrac{a_{i2} - l_{i1}u_{12}}{u_{22}}$

**比较第 k 行：** $k = 2, 3, \cdots, n$
$$
a_{kj} = 
\displaystyle\sum_{r=1}^{k-1}l_{kr}u_{rj} + u_{kj} \hspace{0.5cm} j = k, \cdots, n
\Rightarrow u_{kj} = a_{kj} - \displaystyle\sum_{r = 1}^{k -1}l_{kr}u_{rj}
$$
**比较第 k 列：** $k = 2, 3, \cdots, n-1$
$$
a_{ik} = 
\displaystyle\sum_{r=1}^{k-1}l_{ir}u_{rk} + l_{ik}u_{kk}\hspace{0.5cm} i = k+1, \cdots, n
\Rightarrow l_{kj} = \dfrac{a_{ik} - \displaystyle\sum_{r = 1}^{k -1}l_{kr}u_{rj}}{u_{kk}}
$$
$$
Ax = b \Rightarrow LUx = b \Rightarrow 
\begin{cases}
Ly = b\\
Ux = y
\end{cases}
$$
两次反代过程

- （1） 
$
y_{i} = b_{i} - \displaystyle\sum_{j=1}^{i-1}l_{ij}y_{j} \hspace{0.5cm}
i = 1, \cdots, n
$

- （2）
$
x_{i} = \dfrac{y_{i} - \displaystyle\sum_{j=i + 1}^{n}u_{ij}x_{j}}{u_{ii}} \hspace{0.5cm}
i = n, \cdots, 1
$

可见，$LU$ 分解将求解方程组 $Ax = b$ 分为两步实现，且每一步都相对比求解  $Ax = b$ 简单直观。

## 四、 $LU$ 分解的相关算法和技巧
- $LU$ 分解的算法有多种，常用的有 $Dootittle$ 算法、$Crout$ 算法和 $Cholesky$ 算法等。不同算法适用于不同类型的矩阵，选择合适的算法可以提高计算效率；
-  在 $LU$ 分解过程中，可能会出现主元素为 $0$ 或接近于 $0$ 的情况导致分解失败。为避免这种情况，可以采用行交换或者列交换的策略，选择合适的主元素；
-  $LU$ 分解还可以与其他算法结合使用，如$LU$ 分解与迭代法的结合，可以提高线性方程组的精度和收敛速度。