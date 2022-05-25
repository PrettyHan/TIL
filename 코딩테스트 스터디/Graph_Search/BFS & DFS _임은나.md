# BFS & DFS (너비 우선 탐색, 깊이 우선 탐색)

- BFS와 DFS는 모두 그래프 탐색 시 사용하는 기법. (우선 순위의 차이)
- **BFS(Breadth First Search, 너비 우선 탐색)**
    
    ![Breadth-First-Search-Algorithm.gif](BFS%20&%20DFS%20%203fb61/Breadth-First-Search-Algorithm.gif)
    
    - 너비를 우선으로 탐색. 시작점인 루트 노드와 같은 거리에 있는 노드를 우선으로 방문. (옆 먼저)
    - 알고리즘의 핵심은 Queue를 사용하는 것! 
    노드 방문하면서 인접한 노드 중 방문하지 않았던 노드의 정보만 큐에 넣음. → 먼저 큐에 있는 노드부터 방문
    - Python 에서 list 타입 활용 시 : list.append(), list.pop() ⇒ 시간 복잡도가 O(N)으로 비효율적!!
    따라서 collections 라이브러리의 “deque”를 사용할 것 / 인접 노드 중 방문하지 않았던 노드 큐에 넣ㅇ르 시, 데이터 타입 중 set(집합) 활용
    - 방향이 있는 그래프 탐색 예시,
        
        ```python
        graph_list = {1: set([3, 4]),
                      2: set([3, 4, 5]),
                      3: set([1, 5]),
                      4: set([1]),
                      5: set([2, 6]),
                      6: set([3, 5])}
        root_node = 1
        ```
        
        ```python
        from collections import deque
        
        def BFS_with_adj_list(graph, root):
            visited = [] # 이미 순회한 노드
            queue = deque([root]) # root 노드부터 시작
        
            while queue:
                n = queue.popleft()
                if n not in visited:
                    visited.append(n)
                    queue += graph[n] - set(visited)
            return visited
          
        print(BFS_with_adj_list(graph_list, root_node))
        ```
        
- DFS(Depth First Search, 깊이 우선 탐색)
    
    ![Depth-First-Search.gif](BFS%20&%20DFS%20%203fb61/Depth-First-Search.gif)
    
    - 깊이를 우선으로 탐색. 한 방향으로 갈 수 있을 때까지 깊게 탐색함. (아래 먼저)
    갈 수 있는 한 끝까지 탐색해 리프 노드(자식 노드) 방문, 최대한 깊게 방문한 뒤 이전에 방문하지 않았던 노드를 방문하는 식으로 탐색.
    - BFS에서는 Queue를 사용했다면, DFS에서는 Stack을 사용! (위 알고리즘에서 queue를 stack으로만 대체하면 쉽게 구현 가능.)
    ** 먼저 방문한 노드와 연결된 것보다 현재 방문한 노드와 연결된 것을 방문해야 함.
    - 위와 같은 방향이 있는 그래프 탐색 예시
        
        ```python
        def DFS_with_adj_list(graph, root):
            visited = []
            stack = [root]
        
            while stack:
                n = stack.pop()
                if n not in visited:
                    visited.append(n)
                    stack += graph[n] - set(visited)
            return visited
        
        print(BFS_with_adj_list(graph_list, root_node))
        ```
        

- 그래프 탐색 방법인 만큼, 그래프 관련된 문제나 좌표 나오는 문제(10X10 표 등등..), 그림이 있는 문제(예를 들면 테트리스, 블록이 등장하는 문제..) 등에 자주 사용되는 것 같습니다.
- 코드를 외워두고 있으면 편할 것 같아요!
    
    

출처 ) [https://cyc1am3n.github.io/2019/04/26/bfs_dfs_with_python.html](https://cyc1am3n.github.io/2019/04/26/bfs_dfs_with_python.html)