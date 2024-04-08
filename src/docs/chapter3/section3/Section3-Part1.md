# 第三节 基变换与坐标变换
## 一、过渡矩阵
> **定义3.3.1** 设 $\alpha_{1},\alpha_{2}, \cdots, \alpha_{n}$ 与 $\beta_{1}, \beta_{2}, \cdots, \beta_{n}$ 是 $n$ 维向量空间 $V$ 的两个基，存在系数矩阵 $P_{n \times n}$，使得
> $$(\beta_{1}, \beta_{2}, \cdots, \beta_{n}) = (\alpha_{1},\alpha_{2}, \cdots, \alpha_{n})P$$
> 则称矩阵 $P_{n \times n}$ 为从基 $\alpha_{1},\alpha_{2}, \cdots, \alpha_{n}$ 到基 $\beta_{1}, \beta_{2}, \cdots, \beta_{n}$ 的过渡矩阵。

可以看出，从基 $\alpha_{1},\alpha_{2}, \cdots, \alpha_{n}$ 到基 $\beta_{1}, \beta_{2}, \cdots, \beta_{n}$ 的过渡矩阵 $P_{n \times n}$ 是可逆矩阵。

## 二、基变换与坐标变换的定义
> **定义3.3.2** 基变换是将一组向量从一组坐标系变成另一种坐标系表示的过程。

基变换能够方便地从旧坐标系转换到新坐标系，从而对对象进行更加精确的分析，而且能节省计算时间，更有效地实现数学目标。因而广泛应用于几何、微分几何和物理等多个领域。
> **定义3.3.3**  坐标变换是指将一个点的坐标空间从一种（源）坐标系表示到另一种（目标）坐标系的过程。

坐标变换减少了坐标转换的复杂性，有助于人们理解空间坐标系统，从而有利于分析以及各种空间系统建模。坐标变换广泛应用于航海、航空、地理信息系统、图形学等多种领域。

一般地，设向量 $V$ 在两组基下的坐标分别为 $(x_{1}, x_{2}, \cdots, x_{n})^T$ 和 $(y_{1}, y_{2}, \cdots, y_{n})^T$
$$
v = \begin{bmatrix} \alpha_{1},\alpha_{2}, \cdots, \alpha_{n} \end{bmatrix}
\begin{bmatrix}
x_{1}\\
x_{2}\\
\vdots\\
x_{n}
\end{bmatrix}
$$
$$
v = \begin{bmatrix} \beta_{1},\beta_{2}, \cdots, \beta_{n} \end{bmatrix}
\begin{bmatrix}
y_{1}\\ y_{2}\\ \vdots\\ y_{n}
\end{bmatrix}
$$
$$
v = \begin{bmatrix} \alpha_{1},\alpha_{2}, \cdots, \alpha_{n} \end{bmatrix} P_{n \times n}
\begin{bmatrix}
x_{1}\\
x_{2}\\
\vdots\\
x_{n}
\end{bmatrix}
$$
由于 $r(\alpha_{1},\alpha_{2}, \cdots, \alpha_{n}) = n$，因此有
$$
\begin{bmatrix}
x_{1}\\ x_{2}\\ \vdots\\ x_{n}
\end{bmatrix} = P_{n \times n}
\begin{bmatrix}
y_{1}\\ y_{2}\\ \vdots\\ y_{n}
\end{bmatrix}
$$
坐标变换公式
$$
\begin{bmatrix}
y_{1}\\ y_{2}\\ \vdots\\ y_{n}
\end{bmatrix} = P_{n \times n}^{-1}
\begin{bmatrix}
x_{1}\\ x_{2}\\ \vdots\\ x_{n}
\end{bmatrix}
$$
**例6**  
已知向量 $\alpha \in \mathbb{R}^3$ 在基 $\alpha_{1} = \begin{bmatrix}
1 \\ 1\\ 0
\end{bmatrix}, 
\alpha_{2} = \begin{bmatrix}
1 \\ 0\\ 0
\end{bmatrix}, 
\alpha_{3} = \begin{bmatrix}
0 \\ 1\\ 1
\end{bmatrix}
$
下的坐标是 $\begin{bmatrix}
8 \\ -2\\ 4
\end{bmatrix}$，求$\alpha$ 在基 $\beta_{1} = \begin{bmatrix}
1 \\ 1\\ -2
\end{bmatrix},\beta_{2} = \begin{bmatrix}
1 \\ 2\\ 3
\end{bmatrix}, \beta_{3} = \begin{bmatrix}
-1 \\ 2\\ 1
\end{bmatrix}$ 下的坐标。

**例6**  
设 $\alpha$ 在基 $\beta_{1}, \beta_{2}, \beta_{3}$ 下的坐标为 $(\gamma_{1}, \gamma_{2}, \gamma_{3})^T$。可以知道，从基 $\alpha_{1}, \alpha_{2}, \alpha_{3}$ 到基 $\beta_{1}, \beta_{2}, \beta_{3}$ 的过渡矩阵 $P = \begin{bmatrix}
2 & 0 & 0 \\
-1 & 1 & -1\\ 
-1 & 2 & 2
\end{bmatrix}$，则可求得 $P^{-1} = \begin{bmatrix}
1/2 & 0 & 0 \\
3/8 & 1/2 & 1/4\\ 
-1/8 & -1/2 & 1/4
\end{bmatrix}$，于是有
$$
\begin{bmatrix}
\gamma_{1}\\\gamma_{2}\\\gamma_{3}
\end{bmatrix} = P^{-1}
\begin{bmatrix}
x_{1}\\x_{2}\\x_{3}
\end{bmatrix} =
\begin{bmatrix}
1/2 & 0 & 0 \\
3/8 & 1/2 & 1/4\\ 
-1/8 & -1/2 & 1/4
\end{bmatrix}
\begin{bmatrix}
8\\-2\\4
\end{bmatrix} = \begin{bmatrix}
4\\3\\1
\end{bmatrix}
$$
