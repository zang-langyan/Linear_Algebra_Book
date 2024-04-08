# 第一节 向量的内积与长度
## 一、内积的定义与性质
### 1. 内积的定义
**定义4.1.1** 设有 $n$ 维向量 $x = 
\begin{bmatrix}
x_{1}\\x_{2}\\ \cdots \\ x_{n}
\end{bmatrix},
y = 
\begin{bmatrix}
y_{1}\\y_{2}\\ \cdots \\ y_{n}
\end{bmatrix},
$
令 $[x, y] = x_{1}y_{1} + x_{2}y_{2} + \cdots + x_{n}y_{n}$，则称 $[x, y]$ 为向量 $x$ 与 $y$ 的内积。  

**需要说明的是**
- $n(n \ge 4)$ 维向量的内积是3维向量数量积的推广，但没有3维向量直观的集合意义
- 若向量 $x$ 与 $y$ 均为列向量，内积可用矩阵记法表示为 $[x, y] =  x^Ty$ 
### 2. 内积的运算性质
设 $x, y, z$ 为 $n$ 维向量， $\lambda$ 为实数，则
- $[x, y] = [y,x]$
- $[\lambda x, y] = \lambda[x,y]$
- $[x + y, z] = [x,z] + [y,z]$
- $[x,x] \ge 0$，当且仅当 $x = 0$ 时，$[x, x] = 0$  

利用这些性质，可以证明柯西-施瓦茨不等式，即 $[x,y]^2 \le [x,x][y,y]$。

## 二、向量的长度及性质
> **定义4.1.2** 令 $\parallel x \parallel = \sqrt{[x,x]} = \sqrt{x_{1}^2 + x_{2}^2 + \cdots + x_{n}^2}$，称 $\parallel x \parallel$ 为 $n$ 维向量 $x$ 的长度（或范数）。  

向量的长度具有以下性质：
- 非负数： 当 $x = 0$ 时，$\parallel x \parallel = 0$；当 $x \ne 0$ 时，$\parallel x \parallel \ne 0$
- 齐次性：$\parallel \lambda x \parallel = |\lambda|\cdot \parallel x \parallel$
- 三角不等式：$\parallel x + y \parallel \le \parallel x \parallel + \parallel y \parallel$
- $|[x,y]| \le \parallel x \parallel \cdot \parallel y \parallel$

进一步地，当 $\parallel x \parallel = 1$ 时，称 $x$ 为单位向量。例如 $\alpha = (\dfrac{1}{\sqrt{3}}, \dfrac{1}{\sqrt{3}}, -\dfrac{1}{\sqrt{3}})^T, \beta = (\dfrac{1}{\sqrt{2}}, 0, -\dfrac{1}{\sqrt{2}},0)^T$，

若 $\alpha \ne 0$，则 $\beta = \dfrac{1}{\parallel \alpha \parallel}\alpha$ 为单位向量；

若 $\alpha \ne 0$，$\beta = \dfrac{1}{\parallel \alpha \parallel}\alpha$ 称为把向量 $\alpha$ 单位化。

例如： $\alpha = (1, 2, 3)^T$,单位化得：$\beta = \dfrac{1}{\sqrt{14}}(1,2,3)^T$。

> **定义4.1.3** 当 $\parallel x \parallel \ne 0, \parallel y \parallel \ne 0$ 时，$\theta = across \dfrac{[x,y]}{\parallel x \parallel \parallel y \parallel}$ 称为 $n$ 维向量 $x$ 与 $y$ 的夹脚。

根据施瓦茨不等式，有
$$\dfrac{[x,y]}{\parallel x \parallel \parallel y \parallel} \le 1$$
当 $[x,y] = 0$ 时，称向量 $x$ 与 $y$ 正交。显然，若 $x = 0$，则 $x$ 与任何向量都正交。

**例1**  
求向量 $\alpha = (1,2,2,3)^T$ 与 $\beta = (3,1,5,1)^T$ 的夹角。

**解**  
由于 $cos\theta =  \dfrac{[\alpha,\beta]}{\parallel \alpha \parallel \cdot \parallel \beta \parallel} = \dfrac{8}{3\sqrt{2}\cdot 6} = \dfrac{\sqrt{2}}{2}$, 
 
故 $\theta = \dfrac{\pi}{4}$

