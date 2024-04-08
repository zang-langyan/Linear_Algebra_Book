# 第二节 消元法
数学上，消元法即通常所说的高斯消元法。该方法以数学家高斯命名，由拉布扎比 $\cdot$ 伊定改进，发表于法国但最早出现于中国的《九章算术》，成书于约公元前150年。高斯消元法是线性代数规划中的一个算法，可以用来求解线性方程组。

## 一、线性方程组的矩阵表示
$n$ 元线性方程组
$$
\begin{cases}
a_{11}x_{1} + a_{12}x_{2} + \dots + a_{1n}x_{n} = b_{1}\\
a_{21}x_{1} + a_{22}x_{2} + \dots + a_{2n}x_{n} = b_{2}\\
\dots \hspace{1cm} \cdots \hspace{1cm} \cdots \hspace{1cm} \cdots\\
a_{m1}x_{1} + a_{m2}x_{2} + \dots + a_{mn}x_{n} = b_{m}
\end{cases}
$$
可以用矩阵式表示为 $Ax = b$，其中 $Ax = \pmb{0}$ 称为 $n$ 元齐次线性方程组，$Ax = b(b \ne \pmb0)$ 称为 $n$ 元非齐次线性方程组。 

可见，线性方程组可以用其增广矩阵来描述，与其增广矩阵式一一对应的。比如，线性方程组
$
\begin{cases}
\begin{aligned}
3x_{1} & &  + 4x_{3} &= 5\\
5x_{1} &- x_{2} &+ 4x_{3} &= 2\\
x_{1} &-3x_{2} &+ 4x_{3} &= 1
\end{aligned}
\end{cases}
$

对应的增广矩阵是 
$
\begin{bmatrix}
3 & 0 & 4 & 1\\
5 & -1 & 4 & 2\\
1 & 3 & 4 & 1\\
\end{bmatrix}
$

## 二、用高斯消元法求解线性方程组
高斯消元法中方程组的消元步骤对应增广矩阵的初等行变换。以下通过举例说明如何用高斯消元法求解线性方程组。
> **例1** 用消元法求解线性方程组
$$
\begin{cases}
\begin{aligned}
-2x_{1} + x_{2} + x_{3} = -2\\
x_{1} - x_{2} + x_{3} = -2\\
x_{1} + 2x_{2} - 2x_{3} = 3
\end{aligned}
\end{cases}
$$
**解：** 将系数矩阵与常数列矩阵排在一起
$$
\begin{bmatrix}
-2 & 1 & 1 & -2\\
1 & -2 & 1 & -2\\
1 & 2 & -2 & 3\\
\end{bmatrix}
$$
称为线性方程组的增广矩阵 $\bar A$，记为 $\bar A = (A|B) = \begin{bmatrix}
-2 & 1 & 1 & -2\\
1 & -2 & 1 & -2\\
1 & 2 & -2 & 3\\
\end{bmatrix}$

$\bar A = \begin{bmatrix}
-2 & 1 & 1 & -2\\
1 & -2 & 1 & -2\\
1 & 2 & -2 & 3\\
\end{bmatrix}
\xrightarrow{r_{1}\leftrightarrow r_{3}}
\begin{bmatrix}
1 & 2 & -2 & 3\\
1 & -2 & 1 & -2\\
-2 & 1 & 1 & -2
\end{bmatrix}
\xrightarrow[r_{+} + 2r_{1}]{r_{2} - r_{1}}
\begin{bmatrix}
1 & 2 & -2 & 3\\
0 & -4 & 3 & -5\\
0 & 5 & -3 & 4
\end{bmatrix}
\xrightarrow{r_{3} + r_{2}}
\begin{bmatrix}
1 & 2 & -2 & 3\\
0 & -4 & 3 & -5\\
0 & 1 & 0 & 1
\end{bmatrix}
\xrightarrow{r_{3}\leftrightarrow r_{2}}
\begin{bmatrix}
1 & 2 & -2 & 3\\
0 & 1 & 0 & -1\\
0 & -4 & 3 & -5
\end{bmatrix}
\xrightarrow{r_{3} + 4r_{2}}
\begin{bmatrix}
1 & 2 & -2 & 3\\
0 & 1 & 0 & -1\\
0 & 0 & 3 & -9
\end{bmatrix}
\xrightarrow{\frac{1}{3}r_{3}}
\begin{bmatrix}
1 & 2 & -2 & 3\\
0 & 1 & 0 & -1\\
0 & 0 & 1 & -3
\end{bmatrix}
\xrightarrow{r_{1} + 2r_{3}}
\begin{bmatrix}
1 & 2 & 0 & -3\\
0 & 1 & 0 & -1\\
0 & 0 & 1 & -3
\end{bmatrix}
\xrightarrow{r_{1} - 2r_{2}}
\begin{bmatrix}
1 & 0 & 0 & -1\\
0 & 1 & 0 & -1\\
0 & 0 & 1 & -3
\end{bmatrix}
$

所以原方程有唯一解 
$
\begin{cases}
x_{1} = -1\\
x_{2} = -1\\
x_{3} = -3
\end{cases}
$
> **例2** 
$$
\begin{cases}
\begin{aligned}
x_{1} + 2x_{2} + 3x_{3} = -7\\
2x_{1} - x_{2} + 2x_{3} = -8\\
3x_{1} + x_{2} + 5x_{3} = -15
\end{aligned}
\end{cases}
$$
**解：** 
$
(A|B)= \begin{bmatrix}
1 & 2 & 3 & -7\\
2 & -1 & 2 & -8\\
3 & 1 & 5 & -15\\
\end{bmatrix}
\xrightarrow{\substack {r_{3} - 3r_{1} \\ r_{2} - 2r_{1} }}
\begin{bmatrix}
1 & 2 & 3 & -7\\
0 & -5 & -4 & 6\\
0 & -5 & -4 & -6\\
\end{bmatrix}
\xrightarrow{r_{3} - r_{2}}
\begin{bmatrix}
1 & 2 & 3 & -7\\
0 & -5 & -4 & 6\\
0 & 0 & 0 & 0\\
\end{bmatrix}
$

为避开分数的加减法，进一步作出下运算：
$$
\xrightarrow{\substack {2r_{2} \\ 5r_{1}  }}
\begin{bmatrix}
5 & 10 & 15 & -35\\
0 & -10 & -8 & 12\\
0 & 0 & 0 & 0\\
\end{bmatrix}
\xrightarrow{r_{2} + r_{1}}
\begin{bmatrix}
5 & 0 & 7 & -23\\
0 & -10 & -8 & 12\\
0 & 0 & 0 & 0\\
\end{bmatrix}
\xrightarrow{r_{2} \div(-2)}
\begin{bmatrix}
5 & 0 & 7 & -23\\
0 & -5 & 4 & -6\\
0 & 0 & 0 & 0\\
\end{bmatrix}
\xrightarrow{\substack {r_{2}\div 5\\ \\ r_{1} \div 5}}
\begin{bmatrix}
1 & 0 & \frac{5}{7} & -frac{23}{5}\\
0 & 1 & \frac{4}{5} & -\frac{6}{5}\\
0 & 0 & 0 & 0\\
\end{bmatrix}
$$
进一步地，把得到的最后的矩阵写成方程组的形成，得到：
$
\begin{cases}
x_{1} + \frac{5}{7}x_{3} = -\frac{23}{5}\\
x_{2} + \frac{4}{5}x_{3} = -\frac{6}{5}\\
\end{cases}
\Longrightarrow
\begin{cases}
x_{1} = -\frac{5}{7}x_{3} - \frac{23}{5}\\
x_{2} = \frac{4}{5}x_{3} - \frac{6}{5}
\end{cases}
$

此时，未知量 $x_{3}$ 是可以任意取值的，称为**自由未知量**。

所以得到方程组的解为：
$
\begin{cases}
x_{1} = -\frac{5}{7}x_{3} - \frac{23}{5}\\
x_{2} = \frac{4}{5}x_{3} - \frac{6}{5}
\end{cases}
$

可以看出，该方程组有无穷多个解。
>- 在求出方程组的解后，要注明**自由未知量**。自由未知量的取法是不唯一的，但它的个数是确定的。

> **例3** 
$$
\begin{cases}
\begin{aligned}
2x_{1} - x_{2} + 3x_{3} = 1\\
4x_{1} - 2x_{2} + 5x_{3} = 4\\
2x_{1} - x_{2} + 4x_{3} = -3
\end{aligned}
\end{cases}
$$
**解：**
$
(A|B = 
\begin{bmatrix}
2 & -1 & 3 & 1\\
4 & -2 & 5 & 4\\
2 & -1 & 4 & 0
\end{bmatrix})
\xrightarrow[r_{2} - 2r_{1}]{r_{3} - r_{1}}
\begin{bmatrix}
2 & -1 & 3 & 1\\
0 & 0 & -1 & 2\\
0 & 0 & 1 & -1
\end{bmatrix}
\xrightarrow{r_{3} + r_{2}}
\begin{bmatrix}
2 & -1 & 3 & 1\\
0 & 0 & -1 & 2\\
0 & 0 & 0 & 1
\end{bmatrix}
\xrightarrow{r_{2} \times (-1)}
\begin{bmatrix}
2 & -1 & 3 & 1\\
0 & 0 & 1 & -2\\
0 & 0 & 0 & 1
\end{bmatrix}
$

进一步地，把得到的最后的矩阵写成方程组的形成，得到：
$$
\begin{cases}
\begin{aligned}
2x_{1} - x_{2} + 3x_{2} = 1\\
x_{3} = -2
\end{aligned}
\end{cases}
$$
可见，方程组无解。

总体而言，对于一个线性方程组而言，存在如下情况：
- 当未知量个数 > 方程个数时：有无数解或无解；
- 当未知量个数 = 方程个数时：有唯一解、有无数组解或无解；
- 当未知量个数 < 方程个数时：有唯一解、有无数组解或无解。

> 通过以上举例，进一步归纳出求解线性方程组高斯消元法的一般步骤
> - 将线性方程组的增广矩阵，通过初等行变换化为最简阶梯矩阵；
> - 将最简阶梯矩阵还原成线性方程组，求出方程组的解（唯一解、无穷解、无解）。
