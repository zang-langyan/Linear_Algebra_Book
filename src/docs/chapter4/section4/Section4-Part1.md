# 第四节 QR分解

## 一、标准正交矩阵

设 $q$ 为单位向量，则有 $q_{1},q_{2},q_{3},\cdots,q_{n}$，若所有向量 $q$ 满足
$$
q_{i}^Tq_{j} = \begin{cases}
0 & i\ne j\\ 1 & i = j
\end{cases}
$$
这里，$q$ 为标准正交向量，当 $i = j$ 时，$q_{i}^Tq_{j} = 1$ 表示向量长度为单位向量。当 $i \ne j$ 时，$q_{i}^Tq_{j} = 0$ 表示不同向量之间是正交的。
> **定义4.4.1** 将标准正交向量 $q$ 放入矩阵 $Q$ 中，得到 $Q = [q_{1} \hspace{0.2cm} q_{2} \hspace{0.2cm} \cdots \hspace{0.2cm} q_{n}]$，则 $Q$ 为标准正交矩阵。

标准正交矩阵具有如下性质：
$$
Q^TQ = \begin{bmatrix}
q_{1}^T\\ q_{2}^T \\\cdots \\ q_{n}^T
\end{bmatrix}
[q_{1} \hspace{0.2cm} q_{2} \hspace{0.2cm} \cdots \hspace{0.2cm} q_{n}] = \begin{bmatrix}
1 & 0 & \cdots & 0\\
0 & 1 & \cdots & \cdots\\
\vdots & \vdots & \ddots & \vdots\\
0 & 0 & \cdots & 1
\end{bmatrix} = E
$$
当矩阵 $Q$ 为方阵时，由于其正交性，可知 $Q$ 可逆。由于 $Q^TQ = E$，所以 $Q^T = Q^{-1}$，此时称 $Q$ 为正交矩阵。

**例**  
设有线性无关的非正交向量 $a,b$，其中 $a = \begin{bmatrix} 1\\1\\1 \end{bmatrix}, b = \begin{bmatrix} 1\\0\\2 \end{bmatrix}$，求向量的标准正交矩阵 $Q$。

**解**  
- 正交化：设有连个矩阵 $A,B$，其中
$$
A = a = 
\begin{bmatrix}
1\\1\\1 
\end{bmatrix}
$$
$$
B = b-\dfrac{A^Tb}{A^TA}A = \begin{bmatrix}
1\\0\\2 \end{bmatrix} - \dfrac{[1 \hspace{0.2cm} 1 \hspace{0.2cm} 1 ]\begin{bmatrix}
1\\1\\2 \end{bmatrix}}{{[1 \hspace{0.2cm}1\hspace{0.2cm} 1]
\begin{bmatrix}
1\\1\\1 
\end{bmatrix}}} \begin{bmatrix}
1\\1\\1 \end{bmatrix} = \begin{bmatrix}
1\\0\\2 \end{bmatrix} - \begin{bmatrix}
1\\1\\1 \end{bmatrix} = \begin{bmatrix}
0\\-1\\1 \end{bmatrix}
$$

- 单位化：设两个单位正交向量 $q_{1},q_{2}$，则
$$
q_{1} = \frac{1}{\sqrt{3}}
\begin{bmatrix}
1\\1\\1 
\end{bmatrix} 
$$
$$
q_{2} = \frac{1}{\sqrt{2}}\begin{bmatrix}
0\\-1\\1 \end{bmatrix}
$$
进而得到矩阵 $Q$
$$
Q = \begin{bmatrix}
\dfrac{1}{\sqrt{3}} & 0\\\\\dfrac{1}{\sqrt{3}} & -\dfrac{1}{\sqrt{2}} \\\\ \dfrac{1}{\sqrt{3}} & \dfrac{1}{\sqrt{2}} 
\end{bmatrix}
$$

## 二、QR分解

### 1. QR分解概述
矩阵的 $QR$ （正交三角）分解是求一般矩阵全部特征值的最有效并广泛应用的方法，一般矩阵先经过正交相似变化为海森堡（Hessenberg）矩阵，然后再求特征值和特征向量。和 $LU$ 分解的目的一样，$QR$ 也是为了便于矩阵计算，使用 $QR$ 分解有助于加快解方程或求解速度即收敛速度。

$A = QR$ 这一过程将矩阵分为 $Q$ 和 $R$ 两部分。其中，$Q$ 是标准正交矩阵，$R$是一个上三角矩阵。以线性系统的计算为例，
$$Ax = b \Longrightarrow (QR)x = b$$
$$Q^{-1}QRx = Q^{-1}b \Longrightarrow Rx = Q^{T}b$$
上式中，$Q^T$ 易于计算，$R$ 是一个上三角矩阵，从下往上推导则很容易计算出线性系统的结果。

由于涉及到求标准正交矩阵 $Q$ 的过程，因此矩阵 $A$ 可以进行 $QR$ 分解的条件是 $A$ 的各个列向量线性无关。因为只有满足这一条件才能进行施密特过程。

### 2. QR分解实例
进一步基于第一部分中的分析，设矩阵 $A = [a \hspace{0.3cm} b] = \begin{bmatrix} 1 & 1\\ 1 & 0\\ 1 & 2 \end{bmatrix}$，对比 $A$ 和 $Q$ 可得：
$$ A =  \begin{bmatrix} 1 & 1\\ 1 & 0\\ 1 & 2 \end{bmatrix} \hspace{0.6cm} Q = \begin{bmatrix} \dfrac{1}{\sqrt{3}} & 0\\\\ \dfrac{1}{\sqrt{3}}  & -\dfrac{1}{\sqrt{2}}\\\\ \dfrac{1}{\sqrt{3}}  & \dfrac{1}{\sqrt{2}}\end{bmatrix}$$
可以看出，$A$ 和 $Q$ 的列空间相同。进一步地，和 $LU$ 分解表达了高斯法类似，以上分析中使用施密特正交化的过程亦可以用矩阵形式表达，即 
$$A = QR$$
其中，$Q$ 为标准正交矩阵，$R$ 为非奇异上三角矩阵。具体地，矩阵 $A$ 可用矩阵 $Q$ 和矩阵 $R$表示，即
$$
A = [a \hspace{0.3cm} b] = QR = [q_{1} \hspace{0.3cm} q_{2}]\begin{bmatrix} 
a^Tq_{1} & b^Tq_{1} \\ a^Tq_{2} & b^Tq_{2}
\end{bmatrix}
$$

由于令 $a$ 为两正交向量中的一个，故 $a \perp b$，所以 $a^Tq_{2} = 0$。因此矩阵 $R$ 是一个上三角矩阵，则有
$$
A = [a \hspace{0.3cm} b] = QR = [q_{1} \hspace{0.3cm} q_{2}]\begin{bmatrix} 
a^Tq_{1} & b^Tq_{1} \\ 0 & b^Tq_{2}
\end{bmatrix}
$$

