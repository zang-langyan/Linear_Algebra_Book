## 三、矩阵的转置
我们把一个矩阵 $A$ 的行列互换，所得到的矩阵称为 $A$ 的转置，记为 $A^T$。具体而言：
> **定义1.2.6:** 设有矩阵 $A$，
$$
A = \begin{bmatrix}
a_{11} &  a_{12} & \cdots  & a_{1n}\\
a_{21} &  a_{22} & \cdots  & a_{2n}\\
\vdots & \vdots &  & \vdots \\
a_{m1} &  a_{m2} & \cdots  & a_{mn}
\end{bmatrix}
$$
则称，
$$
A^T = \begin{bmatrix}
a_{11} &  a_{21} & \cdots  & a_{m1}\\
a_{12} &  a_{22} & \cdots  & a_{m2}\\
\cdots & \cdots & \cdots & \cdots \\
a_{1n} &  a_{2n} & \cdots  & a_{mn}
\end{bmatrix}
$$
为 $A$ 的转置。可以看出 $m \times n$ 矩阵的转置是 $n \times m$ 矩阵。一般而言，矩阵的转置满足如下规律：

> * $(A^T)^T = A$
> * $(A + B)^T = A^T + B^T$
> * $(kA)^T = kA^T$
> * $(AB)^T = B^TA^T$

**例子：**
设矩阵 
$
A = \begin{bmatrix}
1 &  2  & -3\\
1 & 1 & 2
\end{bmatrix}
$，
$
B = \begin{bmatrix}
1 & 2\\
2 & 0\\
1 & 3
\end{bmatrix}
$，求$(AB)^T$。

**解：** 
$$
AB = \begin{bmatrix}
1 &  2  & -3\\
1 & 1 & 2
\end{bmatrix}
\begin{bmatrix}
1 & 2\\
2 & 0\\
1 & 3
\end{bmatrix}
=
\begin{bmatrix}
2 & -7\\
5 & 8
\end{bmatrix}
$$
，所以 $(AB)^T = 
\begin{bmatrix}
2 & 5\\
-7 & 8
\end{bmatrix}$

也可以换一种方式求解：
$$
(AB)^T = B^TA^T = 
\begin{bmatrix}
1 &  2  & 1\\
2 & 0 & 3
\end{bmatrix}
\begin{bmatrix}
1 & 1\\
2 & 1\\
-3 & 2
\end{bmatrix}
=
\begin{bmatrix}
2 & 5\\
-7 & 8
\end{bmatrix}
$$

> **定义2.7:** 若 $A^T = A$，则称 $A$ 为对称矩阵；若 $A^T = -A$，则称 $A$ 为反对称矩阵。

可以看出，如果 $A = (a_{ij})$ 是对称矩阵，则 $a_{ij} = a_{ji}(i \ne j; i, j = 1, 2, \cdots, n)$。如果 $n$ 阶方阵 $A = (a_{ij})$ 是反对称矩阵，则  $a_{ij} \ne a_{ji}(i \ne j; i, j = 1, 2, \cdots, n)$，且 $a_{ij} = 0(i = 1, 2, \cdots, n)$。

进一步地，可以证明，若矩阵 $A$ 是 $m \times n$ 矩阵，则 $A^TA$ 和 $AA^T$ 都是对称矩阵。