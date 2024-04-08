# 第三节 施密特正交化过程与正交矩阵

## 一、施密特正交化
施密特正交化法是一种常用的线性代数方法，用于将一组线性无关的向量转化为一组正交的向量。该方法应用非常广泛，常用于信号处理、图像处理、机器学习等领域。

具体来说，设 $\alpha_{1},\alpha{2},\cdots,\alpha{s}$ 是向量空间 $V$ 的一个基，从基 $\alpha_{1},\alpha{2},\cdots,\alpha{s}$ 出发，找到一组两两正交的向量 $\xi_{1},\xi_{2},\cdots,\xi_{s}$，使 $\xi_{1},\xi_{2},\cdots,\xi_{s}$ 与 $\alpha_{1},\alpha{2},\cdots,\alpha{s}$ 等价，这个过程称为把基 $\alpha_{1},\alpha{2},\cdots,\alpha{s}$ 规范正交化。具体步骤为：
- 第一步，将基 $\alpha_{1},\alpha{2},\cdots,\alpha{s}$ 正交化。取
$$\beta_{1} = \alpha_{1}$$
$$\beta_{2} = \alpha_{2}-\dfrac{[\beta_{1},\alpha_{2}]}{[\beta_{1},\beta_{1}]}\beta_{1}$$
$$\beta_{3} = \alpha_{3}-\dfrac{[\beta_{1},\alpha_{3}]}{[\beta_{1},\beta_{1}]}\beta_{1}-\dfrac{[\beta_{2},\alpha_{3}]}{[\beta_{2},\beta_{2}]}\beta_{2}$$
$$\cdots \hspace{0.05cm}\cdots$$
$$\beta_{s} = \alpha_{s}-\dfrac{[\beta_{1},\alpha_{s}]}{[\beta_{1},\beta_{1}]}\beta_{1}-\dfrac{[\beta_{2},\alpha_{s}]}{[\beta_{2},\beta_{2}]}\beta_{2}- \cdots -\dfrac{[\beta_{s-1},\alpha_{s}]}{[\beta_{s-1},\beta_{s-1}]}\beta_{s-1}$$
可以验证，$\beta_{1},\beta_{1},\cdots,\beta_{s}$ 两两正交，且 $\beta_{1},\beta_{1},\cdots,\beta_{s}$ 与 $\alpha_{1},\alpha{2},\cdots,\alpha{s}$ 等价。

从线性无关向量组 $\alpha_{1},\alpha{2},\cdots,\alpha{s}$ 导出正交向量组 $\beta_{1},\beta_{1},\cdots,\beta_{s}$ 的过程，称为 **施密特正交化过程**。可以证明，$\beta_{1},\beta_{1},\cdots,\beta_{s}$ 等价，并且可以证明对于任意的 $k(1\le k \le s)$，向量组 $\beta_{1},\beta_{1},\cdots,\beta_{k}$ 与 $\alpha_{1},\alpha{2},\cdots,\alpha{k}$ 等价。
- 第二步，将 $\beta_{1},\beta_{1},\cdots,\beta_{s}$ 单位化，得
$$\xi_{1} = \dfrac{1}{\parallel \beta_{1} \parallel}\beta_{1},\xi_{2} = \dfrac{1}{\parallel \beta_{2} \parallel}\beta_{2},\cdots,\xi_{s} = \dfrac{1}{\parallel \beta_{s} \parallel}\beta_{s},$$
则，$xi_{1},xi_{2},\cdots,xi_{s}$ 就是 $V$ 的一个规范正交基。

**例4**  
设 $\alpha_{1} = \begin{bmatrix}
1\\2\\-1   
\end{bmatrix},\alpha_{2} = \begin{bmatrix}
-1\\3\\1   
\end{bmatrix},\alpha_{3} = \begin{bmatrix}
4\\-1\\0  
\end{bmatrix}$，试用施密特正交化过程把这组向量规范正交化。

**解**  
- 第一步，正交化

取 $b_{1} = a_{1}$

$$
b_{2} = a_{2} - \frac{[a_{2},b_{1}]}{\parallel b_{1} \parallel^2}b_{1} = 
\begin{bmatrix}
-1\\3\\1 
\end{bmatrix} - \frac{4}{6} \begin{bmatrix}
1\\2\\-1  
\end{bmatrix} = \frac{5}{3}\begin{bmatrix}
-1\\1\\1  
\end{bmatrix}
$$

$$
b_{3} = a_{3} - \frac{[a_{3},b_{1}]}{\parallel b_{1} \parallel^2}b_{1} - \frac{[a_{3},b_{2}]}{\parallel b_{2} \parallel^2}b_{2} = 
\begin{bmatrix}
4\\-1\\0  
\end{bmatrix} - \frac{1}{3}\begin{bmatrix}
1\\2\\-1  
\end{bmatrix} + \frac{5}{3}\begin{bmatrix}
-1\\1\\1  
\end{bmatrix} = 2\begin{bmatrix}
1\\0\\1  
\end{bmatrix}
$$

- 第二步，单位化，取
$$
e_{1} = \dfrac{b_{1}}{\parallel b_{1} \parallel} = \frac{1}{\sqrt{6}}\begin{bmatrix}
1\\2\\-1  
\end{bmatrix}
$$
$$
e_{2} = \dfrac{b_{2}}{\parallel b_{2} \parallel} = \frac{1}{\sqrt{3}}\begin{bmatrix}
-1\\1\\1  
\end{bmatrix}
$$
$$
e_{3} = \dfrac{b_{3}}{\parallel b_{3} \parallel} = \frac{1}{\sqrt{2}}\begin{bmatrix}
1\\0\\1  
\end{bmatrix}
$$
则，$(e_{1},e_{2},e_{3})^T$ 为所求。

## 二、正交矩阵

### 1. 正交矩阵的定义与性质
> **定义4.3.1** 如果 $n$ 阶矩阵 $A$ 满足
> $$A^TA = E$$
> 即 $A^{-1} = A^T$，则称 $A$ 为正交矩阵，简称正交阵。

进一步地，对于正交矩阵，还有如下结论：
> **定理4.3.1**  设矩阵 $A$ 是 $n$ 阶方阵，则下列结论等价
- （1）$A$ 是 $n$ 阶正交阵
- （2）$A$ 的列向量组是 $\mathbb{R}^n$ 的一个规范正交基
- （3）$A$ 的行向量组是 $\mathbb{R}^n$ 的一个规范正交基

**证明** $(1) \iff (2)$  
将矩阵矩阵 $A$ 按列分块 $A = (\alpha_{1},\alpha_{2},\cdots,\alpha_{n})$，如果 $A$ 是 $n$ 阶正交阵，则公式 $A^TA = E$ 可表示为
$$
\begin{bmatrix}
\alpha_{1}^T\\\alpha_{2}^T\\ \vdots \\ \alpha_{n}^T
\end{bmatrix}
(\alpha_{1},\alpha_{2},\cdots,\alpha_{n})=
\begin{bmatrix}
1 & 0 & \cdots & 0\\
0 & 1 & \cdots & 0\\
\vdots & \vdots & \ddots & \vdots\\
0 & 0 & \cdots & 1
\end{bmatrix},
$$
即
$$ 
\alpha{i}^T\alpha{j} = \delta_{ij}
\begin{cases}
1,& i =j\\
0,& i \ne j
\end{cases}
(i,j = 1,2,\cdots,n)
$$
这说明 $A$ 的列向量都是 $n$ 维单位向量，且两两正交，从而是 $\mathbb{R^n}$ 的一个规范正交基。

$(1) \iff (3)$，由于 $A^TA = E$ 与 $AA^T = E$ 等价，所以将矩阵 $A$ 按行分块
$$
A = \begin{bmatrix}
\beta_{1}^T\\\beta_{2}^T\\ \vdots \\ \beta_{n}^T
\end{bmatrix},
$$
则 $AA^T = E$ 可表示为
$$ AA^T = 
\begin{bmatrix}
\beta_{1}^T\\\beta_{2}^T\\ \vdots \\ \beta_{n}^T
\end{bmatrix}
(\beta_{1},\beta_{2},\cdots,\beta_{n}) = 
\begin{bmatrix}
1 & 0 & \cdots & 0\\
0 & 1 & \cdots & 0\\
\vdots & \vdots & \ddots & \vdots\\
0 & 0 & \cdots & 1
\end{bmatrix},
$$
得
$$
\beta{i}^T\beta{j} = \beta_{ij}
\begin{cases}
1,& i =j\\
0,& i \ne j
\end{cases}
(i,j = 1,2,\cdots,n)
$$
这说明 $A$ 的行向量都是 $n$ 维单位向量，且两两正交，从而是 $\mathbb{R^n}$ 的一个规范正交基。

**例5**  
验证矩阵 
$A = \dfrac{1}{7}
\begin{bmatrix}
6 & 2 & 3\\ 3 & -6 & -2\\2 & 3 & -6
\end{bmatrix}$ 是正交矩阵。

**解**  
令 $\alpha_{1} = \begin{bmatrix}
6\\ 3 \\2
\end{bmatrix}, \alpha_{2} = \begin{bmatrix}
2\\ -6 \\3
\end{bmatrix},\alpha_{3} = \begin{bmatrix}
3\\ -2 \\-6
\end{bmatrix}$，则 $A = \dfrac{1}{7}[\alpha_{1}\hspace{0.2cm}\alpha_{2}\hspace{0.2cm} \alpha_{3}]$

可得：
$[\alpha_{1},\alpha_{2}]=0, [\alpha_{1},\alpha_{3}]=0, [\alpha_{2},\alpha_{3}]=0$

$\dfrac{\parallel \alpha_{1} \parallel}{7} = \dfrac{\parallel \alpha_{2} \parallel}{7} = \dfrac{\parallel \alpha_{3} \parallel}{7} = 1$

可以看出，$A$ 的列向量构成标准正交组，故 $A$ 为正交矩阵。
