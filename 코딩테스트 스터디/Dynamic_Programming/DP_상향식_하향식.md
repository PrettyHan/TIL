# DP (다이나믹 프로그래밍)

[우성님 정리](https://www.notion.so/9afb08ed32ed4e6891a2d3f3d7aec404)

[은나 님 정리](https://www.notion.so/08063f1857a845c68bcae24a01b9f856)

## 1. DP

**“문제를 각각의 작은 문제로 나누어 해결한 결과를 저장해뒀다가** 

**나중에 큰 문제의 결과와 합하여 풀이하는 알고리즘”**

⇒ ‘***재귀’ ⇒ “DP” = “재귀에 대한 최적화”***

1. 큰 문제를 작은 문제로 나눌 수 있다.
2. 작은 문제에서 구한 정답은 그것을 포함하는 큰 문제와 동일 하다.

⇒ **중복된 하위 문제들을 갖는다**

⇒ **최적 부분 구조(Optimal Substructure)를 가졌다**

## 2. 상향식 (타뷸레이션)

• **더 작은 하위 문제부터 살펴본 다음, 작은 문제의 정답을 이용**해 큰 문제의 정답을 풀어나간다. 

타뷸레이션이라 부르며, 일반적으로 이 방식만을 다이나믹 프로그래밍으로 지칭하기도 한다.

```python
def fib(n):
    dp[0] = 0
    dp[1] = 1

    for i in range(2, n+1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]
```

```python
# Dp : 계산 결과들을 저장하기 위한 리스트.
# 시작 인덱스를 1로 맞추기위해서 Dp[0]에 그냥 0 넣어줌
def fibo(n)
    Dp = [0, 1, 1]
    
    for i in range(3, n + 1):
    	Dp.append(Dp[i-1] + Dp(i-2))
        
    return Dp[n]
```

• **더 작은 하위 문제부터 살펴본 다음, 작은 문제의 정답을 이용**

```python
dp[0] = 0
dp[1] = 1
#-----------
Dp = [0, 1, 1]
```

n = 1 or 2 일때 1을 반환하고

n > 2 이면 3번째 피보나치수 부터 n번째 피보나치수를 모두 구하므로.

아래부터 위로 해를 구해나가는 상향식 방법이라고 할 수 있다.

## 3.하향식 (메모이제이션)

• **하위 문제에 대한 정답을 계산했는지 확인**해가며 문제를 자연스러운 방식으로 풀어나간다. 

이 방식을 특별히 메모이제이션이라 지칭한다.

```python
def fib(n):
    if n <= 1:
        return n

    if dp[n]:
        return dp[n]
    dp[n] = fib(n - 1) + fib(n - 2)
    return dp[n]
```

```python
def fibo(Dp, n):
    if Dp[n] != 0:
    	return Dp[n]
    else:
    	if n == 1 or n == 2:
        	Dp[n] = 1
        else:
        	Dp[n] = fibo(n-1) + fibo(n-2)
        return Dp[n]
```

• **하위 문제에 대한 정답을 계산했는지 확인 (Memoization)**

여기서 Memoization이라는 동적프로그래밍 에서 중요한 개념이 등장한다.

Dp를 초기에 모두 0으로 초기화 시키고 n에 대한 답만 Dp[n]에 저장한다면,

Dp[n] 값이

0일 때 -> 답을 구해야 하고 

0이 아닐 때 -> 이미 답이 구해진 것으로 간주 할 수 있으므로

Dp[n] 의 값에 따라 답을 구한 적이 있는지 없는지 메모(Memo) 할 수 있게 되는 것이다.

-참고자료

[[Algorithm]그리디(Greedy) 알고리즘, 분할 정복, 다이나믹 프로그래밍 이란? 비교 및 분석하기 - 알고리즘 문제를 풀기전에 알아야 하는 개념(배낭 문제, 동전 바꾸기, 피보나치 수열 등)](https://ihp001.tistory.com/134)

[안경잡이개발자 : 네이버 블로그](https://blog.naver.com/ndb796/221233570962)

[동적 프로그래밍 (Dynamic Programming)](https://devsub.tistory.com/2)