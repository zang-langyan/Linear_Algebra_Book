# 第二节 正交向量组及求法
## 一、正交向量组的概念
当 $[x,y] = 0$ 时，称向量 $x$ 与 $y$ 正交。例如 $x = (0,1,1,1)^T$ 与 $y = (8,1,-1,1)^T$，有$[x,y] = 0$，因此向量 $x$ 与 $y$ 正交。  
由定义可知：若 $x = 0$ 时，则 $x$ 与任何向量都正交。
> **定义4.2.1** 若一非零向量组中的向量两两正交，则称该向量组为正交向量组。

例如，向量组
$$
\begin{bmatrix}
1\\
0\\
0
\end{bmatrix},
\begin{bmatrix}
0\\
2\\
0
\end{bmatrix},
\begin{bmatrix}
0\\0\\3
\end{bmatrix}
$$
与向量组
$$
\begin{bmatrix}
1\\0\\0\\0
\end{bmatrix},
\begin{bmatrix}
0\\1\\0\\0
\end{bmatrix},
\begin{bmatrix}
0\\0\\ \dfrac{\sqrt{2}}{2}\\
-\dfrac{\sqrt{2}}{2}
\end{bmatrix},
\begin{bmatrix}
0\\0\\ \dfrac{\sqrt{2}}{2}\\
\dfrac{\sqrt{2}}{2}
\end{bmatrix}
$$
都是正交向量组。

以下进一步讨论正交向量组的性质。
> **定理4.2.1** 若 $n$ 维向量组 $\alpha_{1},\alpha_{2},\cdots,\alpha_{m}$ 是一个正交向量组，则 $\alpha_{1},\alpha_{2},\cdots,\alpha_{m}$ 线性无关。

**证明** 设有常数 $\omega_{1},\omega_{2},\cdots, \omega_{m}$，使得
$$
\omega_{1}\alpha_{1} + \omega_{2}\alpha_{2} + \cdots + \omega_{m}\alpha_{m} = 0，
$$
用 $\alpha_{i}^T(i = 1,2,\cdots,m)$ 左乘上式两端，当 $j \ne i$ 时，$\alpha_{i}\alpha_{j} = 0$，得
$$
\omega_{i}\alpha_{i}^T\alpha_{i} = 0 (i=1,2,\cdots,m)
$$
由于 $\alpha_{i} \ne 0(i=1,2,\cdots,m)$，则 $\alpha_{i}^T\alpha_{i} \ne 0$，从而有 $\omega_{i} = 0(i=1,2,\cdots,m)$，从而可得向量组 $\alpha_{1},\alpha_{2},\cdots,\alpha_{m}$ 线性无关。
> **定义4.2.2** 设 $n$ 维向量组 $\xi_{1},\xi_{2},\cdots,\xi_{s}$ 是一个向量空间 $V(V \in \mathbb{R}^n)$ 的一个基，如果 $\xi_{1},\xi_{2},\cdots,\xi_{s}$ 两两正交，且都是单位向量，则称 $\xi_{1},\xi_{2},\cdots,\xi_{s}$ 是 $V$ 的一个规范正交基。

例如，$n$ 维单位坐标向量 $e_{1},e_{2},\cdots,e_{s}$ 是$\mathbb{R}^n$ 的一个规范正交基。向量组
$$\xi_{1} = 
\begin{bmatrix}
\dfrac{2}{3}\\\\ \dfrac{1}{3}\\\\ \dfrac{2}{3}
\end{bmatrix},
\xi_{2} = 
\begin{bmatrix}
\dfrac{1}{3}\\\\ \dfrac{2}{3}\\\\ -\dfrac{2}{3}
\end{bmatrix},
\xi_{3} = 
\begin{bmatrix}
\dfrac{1}{3}\\\\ \dfrac{2}{3}\\\\ -\dfrac{2}{3}
\end{bmatrix}
$$
也是 $\mathbb{R}^n$ 的一个规范正交基。

若 $\xi_{1},\xi_{2},\cdots,\xi_{s}$ 是 $V$ 的一个规范正交基，那么 $V$ 中任一向量 $\beta$ 都由 $\xi_{1},\xi_{2},\cdots,\xi_{s}$ 线性表示，
$$\beta = \omega_{1}\xi_{1} + \omega_{2}\xi_{2} + \cdots + \omega_{s}\xi_{s},$$
用 $\xi_{i}^T(i = 1,2,\cdots,s)$ 左乘上式，有
$$ \xi_{i}^T\beta = \omega_{i}\xi_{i}^T\xi_{i} = \omega_{i}(i = 1,2,\cdots,s)$$
即
$$\omega_{i} = \xi_{i}^T\beta = [\xi_{i},\beta](i = 1,2,\cdots,s)$$
可以看出，利用该公式能方面地求出 $\omega_{i}(i = 1,2,\cdots,s)$，也就是向量在规范正交基中的坐标。因此，在给向量空间取基时，往往取规范正交基。进一步地，如何从向量空间 $V$ 出发，找到其的一个规范正交基？这就涉及到了第三节当中要讨论的施密特正交化过程。

## 二、正交向量组求解实例

**例2**  
已知三维空间 $\mathbb{R}^3$ 中的两个向量
$$
\alpha_{1} = 
\begin{bmatrix}
1\\-1\\-1
\end{bmatrix},
\alpha_{2} = 
\begin{bmatrix}
1\\2\\-1
\end{bmatrix}
$$
正交，试求一个非零向量 $\alpha_{3}$，使 $\alpha_{1},\alpha_{2},\alpha_{3}$ 两两正交。

**解**    
记 $A = \begin{bmatrix}
\alpha_{1}^T\\\\\alpha_{1}^T
\end{bmatrix} = 
\begin{bmatrix}
1 & -1 & -1\\
1 & 2 & -1
\end{bmatrix}$，
$\alpha_{3}$ 应满足齐次线性方程组 $Ax = 0$，即
$$
\begin{bmatrix}
1 & -1 & -1\\
1 & 2 & -1
\end{bmatrix}
\begin{bmatrix}
x_{1}\\ x_{2} \\ x_{3}
\end{bmatrix} = 
\begin{bmatrix}
0\\0
\end{bmatrix},
$$
对系数矩阵 $A$ 实施初等行变换，有
$$
A = \begin{bmatrix}
1 & -1 & -1\\1 & 2 & -1
\end{bmatrix}
\to
A = \begin{bmatrix}
1 & -1 & -1\\0 & 3 & 0
\end{bmatrix}
\to
\begin{bmatrix}
1 & -1 & -1\\0 & 1 & 0
\end{bmatrix},
$$
得 $\begin{cases}
x_{1} = x_{3}\\x_{2} = 0
\end{cases}$，从而有基础解系 $\begin{bmatrix}
1\\0\\1
\end{bmatrix}$。设定 $\alpha_{3} = \begin{bmatrix}
1\\0\\1 
\end{bmatrix}$，则 $\alpha_{3}$ 为所求向量。

对于类似的问题，我们也可以换一种解题思路，比如下面的例子。

**例3**  
已知 $\mathbb{R}^3$ 空间中两个向量 $\alpha_{1} = \begin{bmatrix}
1\\1\\1 
\end{bmatrix}, \alpha_{2} = \begin{bmatrix}
1\\-2\\1 
\end{bmatrix}$ 正交，试求 $\alpha_{3}$，使 $\alpha_{1},\alpha_{2},\alpha_{3}$ 构成 $\mathbb{R}^3$ 的一个正交基。

**解**  
本题的目的即求 $\alpha_{3}$，使得 $\alpha_{1},\alpha_{2},\alpha_{3}$ 为正交向量组。  
设 $\alpha_{3} = (x_{1},x_{2},x_{3})^T \ne 0$，且 $\alpha_{1},\alpha_{2}$ 正交，则有
$\begin{cases}
[\alpha_{1},\alpha_{3}] = 0\\ [\alpha_{2},\alpha_{3}]  = 0
\end{cases}$，即 $\begin{cases}
x_{1} + x_{2} + x_{3} = 0\\ x_{1} - 2x_{2} + x_{3}  = 0
\end{cases}$，

解得：$\begin{cases}
x_{1} = - x_{3}\\ x_{2} = 0
\end{cases}$，令 $x_{3} = 1$，得 $\begin{bmatrix}
-1\\0 \\ 1
\end{bmatrix}$，则 $\alpha_{1},\alpha_{2}$ 构成 $\mathbb{R}^3$ 的一个正交基。

