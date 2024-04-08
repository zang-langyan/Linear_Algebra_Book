# 第二节  向量空间的基、维数与坐标

## 一、相关概念
> **定义3.2.1** 设 $V$ 是向量空间，如果 $r$ 个向量 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{s} \in V$，且满足
> - $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{s}$ 线性无关
> - $V$ 中任意向量都可由 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{s}$ 线性表示
>
> 则，向量组  $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{s}$ 称为向量空间 $V$ 的一组基， $s$ 称为向量空间 $V$ 的维数，并称 $V$ 为 $s$ 维向量空间。  

**需要说明的是：**  

（1）只含有零向量的向量空间称为 $0$ 维向量空间，因此它没有基；   
（2）若把向量空间 $V$ 看作向量组，那么 $V$ 的基就是向量组的极大无关组，$V$ 的维数就是向量组的秩；  
（3）向量组 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{s}$ 是向量空间 $V$ 的一个基，则 $V$ 可表示为
$$V = \{x = \lambda_{1}\alpha{1} + \lambda_{2}\alpha{2} + \cdots + \lambda_{s}\alpha{s}|\lambda_{1},\cdots, \lambda_{s} \in \mathbb{R}\}$$
若 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{s}$ 是向量 $V$ 的一组基，则对 $\forall \alpha \in V$，存在唯一一组有序数 $x_{1}, x_{2}, \cdots, x_{s}$ 使得
$$\alpha = x_{1}\alpha_{1} + x_{2}\alpha_{2} + \cdots + x_{s}\alpha_{s}$$
$x_{1}, x_{2}, \cdots, x_{s}$ 称为向量 $\alpha$ 在基  $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{s}$ 下的坐标，记为
$$\alpha = (x_{1}, x_{2}, \cdots, x_{s})$$
特别地，若 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{s}$ 两两正交，则称 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{s}$ 为 $V$ 的一组正交基；若 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{s}$ 两两正交且为单位向量，则称 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{s}$ 为 $V$ 的一组规范基。

$\mathbb{R}^n$ 空间的一组规范基为
$$\epsilon_{1} = (1, 0, \cdots, 0), \epsilon_{2} = (0, 1, \cdots, 0), \cdots, \epsilon_{n} = (0, 0, \cdots, 1)$$
向量 $\alpha = (\alpha_{1}, \alpha_{2}, \cdots, \alpha_{n})$ 在此规范基下的坐标为 $(\alpha_{1}, \alpha_{2}, \cdots, \alpha_{n})$，其原因在于
$$\alpha = \alpha_{1}\epsilon_{1}, \alpha_{2}\epsilon_{2}, \cdots, \alpha_{n}\epsilon_{n}$$

## 二、应用实例
**例4**  
设 $\alpha_{1} = (1,-1,1), \alpha_{2} = (1,2,0), \alpha_{3} = (1,0,3), \alpha_{4} = (2,-3,7)$，证明 $\alpha_{1}, \alpha_{2},\alpha_{3}$ 是 $\mathbb{R}^3$ 的一组基，求 $\alpha_{4}$ 关于基 $B: \alpha_{1},\alpha_{2},\alpha_{3}$ 的坐标。

**解**

$$A = (\alpha_{1}^T, \alpha_{2}^T, \alpha_{3}^T,\alpha_{4}^T) = 
\begin{bmatrix}
1 & 1 & 1 & 2\\
-1 & 2 & 0 & -3\\
1 & 0 & 3 & 7
\end{bmatrix}
\to
\begin{bmatrix}
1 & 1 & 1 & 2\\
0 & 3 & 1 & -1\\
0 & -1 & 2 & 5
\end{bmatrix}
\to
\begin{bmatrix}
1 & 1 & 1 & 2\\
0 & -1 & 2 & 5\\
0 & 0 & 7 & 14
\end{bmatrix}
$$

由行阶梯矩阵知 $r(A) = 3$，且 $\alpha_{1}, \alpha_{2},\alpha_{3}$ 线性无关，知其为  $\mathbb{R}^3$ 的一组基，进一步将 $A$ 变形成行最简形：
$$
A \to \begin{bmatrix}
1 & 1 & 1 & 2\\
0 & -1 & 2 & 5\\
0 & 0 & 1 & 2
\end{bmatrix}
\to 
\begin{bmatrix}
1 & 0 & 0 & 1\\
0 & 1 & 0 & -1\\
0 & 0 & 1 & 2
\end{bmatrix}
$$
所以，$\alpha_{4} = 1 \alpha_{1} + (-1) \alpha_{2} + 2\alpha_{3}$  
因此，$\alpha_{4}$ 在基 $B = \alpha_{1}, \alpha_{2}, \alpha_{3}$ 下的坐标为 $(\alpha_{4})_{B} = (1, -1, 2 )$

一般地，设有 $n$ 维向量 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{s}$，则它们的一切线性组合所构成的集合
$$V = \{x = \lambda_{1}\alpha_{1} + \lambda_{2}\alpha_{2} + \cdots + \lambda_{s}\alpha_{s}| \lambda_{1}, \lambda_{2}, \cdots,  \lambda_{s} \in \mathbb{R}\}$$
称为由向量 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{s}$ 所生成的向量空间，记为 $\mathcal{L}(\alpha_{1}, \alpha_{2}, \cdots, \alpha_{s})$，即
$$
\mathcal{L}(\alpha_{1}, \alpha_{2}, \cdots, \alpha_{s}) = \{x|x = \lambda_{1}\alpha_{1} + \lambda_{2}\alpha_{2} + \cdots + \lambda_{s}\alpha_{s}| \lambda_{1}, \lambda_{2}, \cdots,  \lambda_{s} \in \mathbb{R}\}
$$
向量组 $\alpha_{1}, \alpha_{2}, \cdots, \alpha_{s}$ 的极大无关组即为 $\mathcal{L}$ 的基；$\alpha_{1}, \alpha_{2}, \cdots, \alpha_{s}$ 的秩即为 $\mathcal{L}$ 的维数。

---

**例5**  
验证$\alpha_{1} = \begin{bmatrix}
1\\
0\\
1
\end{bmatrix}$，
$\alpha_{2} = \begin{bmatrix}
2\\
1\\
-1
\end{bmatrix}$，
$\alpha_{3} = \begin{bmatrix}
-1\\
1\\
-3
\end{bmatrix}$
是 $\mathbb{R}^3$ 的一个基，并求向量 $\beta = \begin{bmatrix}
2\\
-1\\
6
\end{bmatrix}$ 在这组基下的坐标。

**解**  
要验证 $\alpha_{1}, \alpha_{2}, \alpha_{3}$ 是 $\mathbb{R}^3$ 的一组基，只要验证 $\alpha_{1}, \alpha_{2}, \alpha_{3}$ 线性无关，也就是只要验证 $(\alpha_{1}, \alpha_{2}, \alpha_{3}) \overset{r}{\thicksim}E$ 即可。设 $\beta$ 在这组基下的坐标为 $x_{1}, x_{2}, x_{3}$，即 $(\alpha_{1}, \alpha_{2}, \alpha_{3})\begin{bmatrix}
x_{1}\\
x_{2}\\
x_{3}
\end{bmatrix} = \beta$，记作 $Ax = \beta$。对矩阵 $A|B$ 作初等变换，若 $A$ 能变成 $E$，则 $\alpha_{1}, \alpha_{2}, \alpha_{3}$ 是 $\mathbb{R}^3$ 的一组基，且当 $A$ 能变成 $E$时，$\beta$ 变成了 $x = A^{-1}\beta$。
$$
(A|B) = \begin{bmatrix}
1 & 2 & -1 & 2\\
0 & 1 & 1 & -1\\
1 & -1 & -3 & 6
\end{bmatrix}
\to
\begin{bmatrix}
1 & 2 & -1 & 2\\
0 & 1 & 1 & -1\\
1 & -3 & -2 & 4
\end{bmatrix}
\to
\begin{bmatrix}
1 & 2 & -1 & 2\\
0 & 1 & 1 & -1\\
0 & 0 & 1 & 1
\end{bmatrix}
\to
\begin{bmatrix}
1 & 0 & 0 & 7\\
0 & 1 & 0 & -2\\
0 & 0 & 1 & 1
\end{bmatrix}
$$
因为，$(\alpha_{1}, \alpha_{2}, \alpha_{3}) \overset{r}{\thicksim}E$，所以 $\alpha_{1}, \alpha_{2}, \alpha_{3}$ 是 $\mathbb{R}^3$ 的一个基，且向量 $\beta = \begin{bmatrix}
2\\
-1\\
6
\end{bmatrix}$ 在这组基下的坐标为 $\beta = \begin{bmatrix}
7\\
-2\\
1
\end{bmatrix}$。